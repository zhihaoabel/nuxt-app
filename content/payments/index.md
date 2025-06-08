---
title: 支付处理
description: 欢迎使用我们的支付处理平台！本文档将帮助您快速集成和使用我们的支付解决方案。
date: 2025-06-05
updated: 2025-06-05
---

# 支付处理

欢迎使用我们的支付处理平台！本文档将帮助您快速集成和使用我们的支付解决方案。

## 概述

我们的支付平台提供：

- **多种支付方式**：支持信用卡、借记卡、数字钱包等
- **全球覆盖**：支持 100+ 个国家和地区
- **安全可靠**：PCI DSS Level 1 认证
- **实时处理**：毫秒级支付响应
- **灵活集成**：REST API、SDK、插件等多种集成方式

## 快速开始

### 1. 创建账户

首先，您需要在我们的平台上创建一个商户账户：

```bash
# 注册账户
curl -X POST https://api.example.com/merchants \
  -H "Content-Type: application/json" \
  -d '{
    "business_name": "Your Business",
    "email": "your@email.com",
    "country": "US"
  }'
```

### 2. 获取 API 密钥

注册成功后，您将获得：

- **公钥 (Publishable Key)**：用于客户端集成
- **私钥 (Secret Key)**：用于服务端 API 调用

```javascript
// 示例密钥格式
const publishableKey = 'pk_test_1234567890abcdef'
const secretKey = 'sk_test_abcdef1234567890'
```

### 3. 安装 SDK

选择您的开发语言：

#### JavaScript/Node.js

```bash
npm install @onerway/payments
```

```javascript
import { Onerway } from '@onerway/payments'

const onerway = new Onerway({
  publishableKey: 'pk_test_1234567890abcdef'
})
```

#### Python

```bash
pip install onerway-payments
```

```python
import onerway

onerway.api_key = "sk_test_abcdef1234567890"
```

#### PHP

```bash
composer require onerway/payments
```

```php
<?php
require_once('vendor/autoload.php');

\Onerway\Onerway::setApiKey("sk_test_abcdef1234567890");
```

## 基础集成

### 创建支付意图

支付意图是支付流程的核心概念：

```javascript
// 客户端：创建支付意图
const paymentIntent = await onerway.paymentIntents.create({
  amount: 2000, // 金额（分）
  currency: 'usd',
  payment_method_types: ['card'],
  metadata: {
    order_id: 'order_123'
  }
})
```

### 确认支付

```javascript
// 客户端：确认支付
const result = await onerway.confirmCardPayment(
  paymentIntent.client_secret,
  {
    payment_method: {
      card: cardElement,
      billing_details: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    }
  }
)

if (result.error) {
  // 处理错误
  console.error(result.error.message)
} else {
  // 支付成功
  console.log('Payment succeeded:', result.paymentIntent)
}
```

## 支付方式

### 信用卡支付

最常用的支付方式，支持主流卡组织：

- **Visa**
- **Mastercard** 
- **American Express**
- **Discover**
- **JCB**
- **Diners Club**

```javascript
// 创建卡片支付方法
const paymentMethod = await onerway.paymentMethods.create({
  type: 'card',
  card: {
    number: '4242424242424242',
    exp_month: 12,
    exp_year: 2025,
    cvc: '123'
  }
})
```

### 数字钱包

支持主流数字钱包：

- **Apple Pay**
- **Google Pay**
- **PayPal**
- **Alipay**
- **WeChat Pay**

```javascript
// Apple Pay 集成
const paymentRequest = onerway.paymentRequest({
  country: 'US',
  currency: 'usd',
  total: {
    label: 'Demo total',
    amount: 2000
  },
  requestPayerName: true,
  requestPayerEmail: true
})

const elements = onerway.elements()
const prButton = elements.create('paymentRequestButton', {
  paymentRequest: paymentRequest
})
```

### 银行转账

支持 ACH、SEPA 等银行转账方式：

```javascript
// ACH 银行转账
const paymentMethod = await onerway.paymentMethods.create({
  type: 'us_bank_account',
  us_bank_account: {
    routing_number: '110000000',
    account_number: '000123456789',
    account_holder_type: 'individual',
    account_type: 'checking'
  }
})
```

## 安全性

### PCI 合规

我们的平台符合 PCI DSS Level 1 标准：

- **数据加密**：所有敏感数据都经过加密存储
- **网络安全**：使用 TLS 1.2+ 加密传输
- **访问控制**：严格的权限管理和审计
- **定期审核**：第三方安全审计

### 3D Secure

支持 3D Secure 2.0 强认证：

```javascript
// 启用 3D Secure
const paymentIntent = await onerway.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  payment_method_types: ['card'],
  confirmation_method: 'manual',
  confirm: true,
  payment_method: paymentMethodId,
  use_stripe_sdk: true
})
```

### 风险管理

内置风险管理系统：

- **机器学习**：实时风险评估
- **规则引擎**：自定义风险规则
- **黑名单**：IP、邮箱、卡号黑名单
- **地理限制**：基于地理位置的风险控制

## 费率和定价

### 标准费率

| 支付方式 | 费率 | 备注 |
|---------|------|------|
| 信用卡 | 2.9% + $0.30 | 标准费率 |
| 借记卡 | 2.4% + $0.30 | 较低费率 |
| ACH | 0.8% (最低 $5) | 银行转账 |
| 国际卡 | 3.4% + $0.30 | 额外费用 |

### 企业定价

大额交易享受优惠费率：

- **月交易额 > $10,000**：费率优惠 0.1%
- **月交易额 > $100,000**：费率优惠 0.2%
- **月交易额 > $1,000,000**：定制费率

## 下一步

- [API 参考](./) - 完整的 API 文档
- [集成指南](./) - 详细的集成步骤
- [测试指南](./) - 测试环境和测试卡
- [Webhooks](./) - 事件通知配置
- [最佳实践](./) - 开发建议和优化技巧
