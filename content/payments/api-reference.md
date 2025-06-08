---
title: API 参考
description: 完整的支付 API 接口文档和参数说明
date: 2025-06-05
updated: 2025-06-05
---

# API 参考

本文档提供了支付 API 的完整参考，包括所有端点、参数和响应格式。

## 基础信息

### 基础 URL

```
https://api.onerway.com/v1
```

### 认证

所有 API 请求都需要在 HTTP 头中包含 API 密钥：

```bash
Authorization: Bearer sk_test_your_secret_key
```

### 请求格式

- **Content-Type**: `application/json`
- **字符编码**: UTF-8
- **HTTP 方法**: GET, POST, PUT, DELETE

### 响应格式

所有响应都是 JSON 格式：

```json
{
  "id": "pi_1234567890",
  "object": "payment_intent",
  "amount": 2000,
  "currency": "usd",
  "status": "succeeded"
}
```

## 支付意图 (Payment Intents)

### 创建支付意图

创建一个新的支付意图。

```http
POST /payment_intents
```

#### 参数

| 参数 | 类型 | 必需 | 描述 |
|------|------|------|------|
| `amount` | integer | 是 | 支付金额（最小货币单位） |
| `currency` | string | 是 | 三位货币代码（如 usd, eur） |
| `payment_method_types` | array | 否 | 支持的支付方式 |
| `metadata` | object | 否 | 自定义元数据 |
| `description` | string | 否 | 支付描述 |
| `receipt_email` | string | 否 | 收据邮箱 |

#### 示例请求

```bash
curl -X POST https://api.onerway.com/v1/payment_intents \
  -H "Authorization: Bearer sk_test_your_secret_key" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 2000,
    "currency": "usd",
    "payment_method_types": ["card"],
    "metadata": {
      "order_id": "order_123"
    }
  }'
```

#### 示例响应

```json
{
  "id": "pi_1234567890",
  "object": "payment_intent",
  "amount": 2000,
  "currency": "usd",
  "status": "requires_payment_method",
  "client_secret": "pi_1234567890_secret_abc123",
  "created": 1640995200,
  "metadata": {
    "order_id": "order_123"
  },
  "payment_method_types": ["card"]
}
```

### 确认支付意图

确认支付意图并处理支付。

```http
POST /payment_intents/{id}/confirm
```

#### 参数

| 参数 | 类型 | 必需 | 描述 |
|------|------|------|------|
| `payment_method` | string | 是 | 支付方式 ID |
| `return_url` | string | 否 | 支付完成后的返回 URL |

#### 示例请求

```bash
curl -X POST https://api.onerway.com/v1/payment_intents/pi_1234567890/confirm \
  -H "Authorization: Bearer sk_test_your_secret_key" \
  -H "Content-Type: application/json" \
  -d '{
    "payment_method": "pm_1234567890"
  }'
```

### 获取支付意图

检索支付意图的详细信息。

```http
GET /payment_intents/{id}
```

#### 示例请求

```bash
curl https://api.onerway.com/v1/payment_intents/pi_1234567890 \
  -H "Authorization: Bearer sk_test_your_secret_key"
```

### 更新支付意图

更新支付意图的信息。

```http
POST /payment_intents/{id}
```

#### 示例请求

```bash
curl -X POST https://api.onerway.com/v1/payment_intents/pi_1234567890 \
  -H "Authorization: Bearer sk_test_your_secret_key" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "order_id": "order_456"
    }
  }'
```

### 取消支付意图

取消支付意图。

```http
POST /payment_intents/{id}/cancel
```

#### 示例请求

```bash
curl -X POST https://api.onerway.com/v1/payment_intents/pi_1234567890/cancel \
  -H "Authorization: Bearer sk_test_your_secret_key"
```

## 支付方式 (Payment Methods)

### 创建支付方式

创建一个新的支付方式。

```http
POST /payment_methods
```

#### 参数

| 参数 | 类型 | 必需 | 描述 |
|------|------|------|------|
| `type` | string | 是 | 支付方式类型（card, us_bank_account 等） |
| `card` | object | 否 | 卡片信息（当 type 为 card 时） |
| `billing_details` | object | 否 | 账单详情 |

#### 示例请求

```bash
curl -X POST https://api.onerway.com/v1/payment_methods \
  -H "Authorization: Bearer sk_test_your_secret_key" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "card",
    "card": {
      "number": "4242424242424242",
      "exp_month": 12,
      "exp_year": 2025,
      "cvc": "123"
    },
    "billing_details": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }'
```

#### 示例响应

```json
{
  "id": "pm_1234567890",
  "object": "payment_method",
  "type": "card",
  "card": {
    "brand": "visa",
    "last4": "4242",
    "exp_month": 12,
    "exp_year": 2025
  },
  "billing_details": {
    "name": "John Doe",
    "email": "john@example.com"
  },
  "created": 1640995200
}
```

### 获取支付方式

检索支付方式的详细信息。

```http
GET /payment_methods/{id}
```

### 更新支付方式

更新支付方式的信息。

```http
POST /payment_methods/{id}
```

### 绑定支付方式

将支付方式绑定到客户。

```http
POST /payment_methods/{id}/attach
```

#### 参数

| 参数 | 类型 | 必需 | 描述 |
|------|------|------|------|
| `customer` | string | 是 | 客户 ID |

### 解绑支付方式

从客户解绑支付方式。

```http
POST /payment_methods/{id}/detach
```

## 客户 (Customers)

### 创建客户

创建一个新客户。

```http
POST /customers
```

#### 参数

| 参数 | 类型 | 必需 | 描述 |
|------|------|------|------|
| `email` | string | 否 | 客户邮箱 |
| `name` | string | 否 | 客户姓名 |
| `phone` | string | 否 | 客户电话 |
| `metadata` | object | 否 | 自定义元数据 |

#### 示例请求

```bash
curl -X POST https://api.onerway.com/v1/customers \
  -H "Authorization: Bearer sk_test_your_secret_key" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "name": "John Doe",
    "metadata": {
      "user_id": "123"
    }
  }'
```

#### 示例响应

```json
{
  "id": "cus_1234567890",
  "object": "customer",
  "email": "john@example.com",
  "name": "John Doe",
  "created": 1640995200,
  "metadata": {
    "user_id": "123"
  }
}
```

### 获取客户

检索客户的详细信息。

```http
GET /customers/{id}
```

### 更新客户

更新客户信息。

```http
POST /customers/{id}
```

### 删除客户

删除客户。

```http
DELETE /customers/{id}
```

### 列出客户

获取客户列表。

```http
GET /customers
```

#### 查询参数

| 参数 | 类型 | 描述 |
|------|------|------|
| `limit` | integer | 返回结果数量限制（1-100） |
| `starting_after` | string | 分页游标 |
| `ending_before` | string | 分页游标 |
| `email` | string | 按邮箱筛选 |

## 退款 (Refunds)

### 创建退款

创建一个退款。

```http
POST /refunds
```

#### 参数

| 参数 | 类型 | 必需 | 描述 |
|------|------|------|------|
| `payment_intent` | string | 是 | 支付意图 ID |
| `amount` | integer | 否 | 退款金额（默认全额退款） |
| `reason` | string | 否 | 退款原因 |
| `metadata` | object | 否 | 自定义元数据 |

#### 示例请求

```bash
curl -X POST https://api.onerway.com/v1/refunds \
  -H "Authorization: Bearer sk_test_your_secret_key" \
  -H "Content-Type: application/json" \
  -d '{
    "payment_intent": "pi_1234567890",
    "amount": 1000,
    "reason": "requested_by_customer"
  }'
```

#### 示例响应

```json
{
  "id": "re_1234567890",
  "object": "refund",
  "amount": 1000,
  "payment_intent": "pi_1234567890",
  "reason": "requested_by_customer",
  "status": "succeeded",
  "created": 1640995200
}
```

### 获取退款

检索退款的详细信息。

```http
GET /refunds/{id}
```

### 更新退款

更新退款信息。

```http
POST /refunds/{id}
```

### 列出退款

获取退款列表。

```http
GET /refunds
```

## 事件 (Events)

### 获取事件

检索事件的详细信息。

```http
GET /events/{id}
```

### 列出事件

获取事件列表。

```http
GET /events
```

#### 查询参数

| 参数 | 类型 | 描述 |
|------|------|------|
| `type` | string | 事件类型筛选 |
| `created` | object | 创建时间筛选 |
| `limit` | integer | 返回结果数量限制 |

## 错误处理

### 错误响应格式

```json
{
  "error": {
    "type": "card_error",
    "code": "card_declined",
    "message": "Your card was declined.",
    "param": "payment_method"
  }
}
```

### 错误类型

| 类型 | 描述 |
|------|------|
| `api_error` | API 内部错误 |
| `card_error` | 卡片相关错误 |
| `idempotency_error` | 幂等性错误 |
| `invalid_request_error` | 请求参数错误 |
| `rate_limit_error` | 请求频率限制 |

### 常见错误代码

| 代码 | 描述 |
|------|------|
| `card_declined` | 卡片被拒绝 |
| `expired_card` | 卡片已过期 |
| `incorrect_cvc` | CVC 错误 |
| `insufficient_funds` | 余额不足 |
| `invalid_number` | 卡号无效 |

## 测试

### 测试卡号

| 卡号 | 品牌 | 结果 |
|------|------|------|
| 4242424242424242 | Visa | 成功 |
| 4000000000000002 | Visa | 卡片被拒绝 |
| 4000000000009995 | Visa | 余额不足 |
| 4000000000000069 | Visa | 过期卡片 |
| 4000000000000127 | Visa | CVC 错误 |

### 测试环境

- **基础 URL**: `https://api.onerway.com/v1`
- **密钥前缀**: `sk_test_` 和 `pk_test_`
- **Webhook 端点**: 使用测试端点进行调试

## 限制

### 请求频率限制

- **标准账户**: 100 请求/分钟
- **企业账户**: 1000 请求/分钟
- **超出限制**: 返回 429 状态码

### 数据限制

- **元数据**: 最多 50 个键值对
- **描述**: 最多 350 个字符
- **金额**: 最小 $0.50，最大 $999,999.99

## SDK 和库

### 官方 SDK

- **JavaScript**: `@onerway/payments`
- **Python**: `onerway-payments`
- **PHP**: `onerway/payments`
- **Ruby**: `onerway-payments`
- **Go**: `github.com/onerway/onerway-go`

### 社区库

- **Java**: `com.onerway.payments`
- **C#**: `Onerway.Payments`
- **Swift**: `OnerwayPayments` 