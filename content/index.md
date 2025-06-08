# 欢迎使用 Nuxt Content

这是一个使用 Nuxt Content 模块的示例页面。

## 功能特性

- ✅ **Markdown 支持** - 完整的 Markdown 语法支持
- ✅ **代码高亮** - 语法高亮显示
- ✅ **图片优化** - 自动图片优化
- ✅ **UI 组件** - 丰富的 UI 组件库
- ✅ **图标库** - 大量图标可用

# 欺诈查询

本文档介绍如何查询欺诈通知信息。通过该接口，您可以查询特定时间范围内的欺诈通知详情，包括欺诈类型、源交易信息、拒付状态和退款状态等信息。

## 功能说明

欺诈查询接口允许商户：

- 分页查询欺诈通知信息
- 按多个维度筛选欺诈记录
- 查看欺诈通知的详细信息和处理状态
- 跟踪欺诈通知从产生到处理的全流程

### 欺诈类型

API接口中的欺诈类型(`fraudType`)主要包括：

- `Lost` - 卡片丢失
- `Stolen` - 卡片被盗
- `NRI` - 未收到卡片
- `Fraud Application` - 欺诈申请 
- `Counterfeit` - 伪卡
- `Miscellaneous` - 其他类型
- `Fraudulent Use of Account Number` - 账号欺诈使用
- `Card Not Present Fraud` - 无卡欺诈
- `Account Takeover Fraud` - 账户盗用欺诈
- `First-Party Fraud` - 第一方欺诈
- `Bust-out Collusive Merchant` - 商户合谋欺诈
- `Incorrect Processing` - 错误处理
- `Merchant Misrepresentation` - 商户虚假陈述
- `Manipulation of Account Holder` - 账户持有人操纵
- `Manipulation of Cardholder` - 持卡人操纵
- `Modification of Payment Order` - 支付指令篡改

## 代码示例

```vue
<template>
  <div>
    <UButton>点击我</UButton>
    <Icon name="heroicons:heart" />
  </div>
</template>
```

## 图片示例

你可以使用 NuxtImg 组件来优化图片：

```vue
<NuxtImg src="/example.jpg" alt="示例图片" />
``` 


<ExampleComponent />