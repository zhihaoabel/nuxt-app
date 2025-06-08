---
title: 项目结构
description: 详细介绍项目的目录结构和文件组织方式
date: 2025-06-05
updated: 2025-06-05
---

# 项目结构

本文档详细介绍了项目的目录结构和各个文件夹的作用。

## 目录概览

```
nuxt-app/
├── .nuxt/              # Nuxt 构建输出目录（自动生成）
├── .output/            # 生产构建输出目录
├── assets/             # 需要处理的静态资源
├── components/         # Vue 组件
├── composables/        # 组合式函数
├── content/            # 内容文件（Markdown）
├── layouts/            # 布局组件
├── middleware/         # 路由中间件
├── pages/              # 页面路由
├── plugins/            # 插件
├── public/             # 静态文件
├── server/             # 服务端代码
├── utils/              # 工具函数
├── app.config.ts       # 应用配置
├── app.vue             # 根组件
├── content.config.ts   # 内容配置
├── nuxt.config.ts      # Nuxt 配置
├── package.json        # 项目依赖
└── tsconfig.json       # TypeScript 配置
```

## 核心目录详解

### `assets/` - 静态资源

存放需要构建工具处理的静态资源：

```
assets/
├── css/
│   ├── main.css        # 主样式文件
│   └── components.css  # 组件样式
├── images/
│   ├── logo.svg        # Logo 图片
│   └── icons/          # 图标文件
└── fonts/              # 字体文件
```

### `components/` - Vue 组件

存放可复用的 Vue 组件：

```
components/
├── global/             # 全局组件
│   ├── AppHeader.vue
│   └── AppFooter.vue
├── layout/             # 布局相关组件
│   ├── SiteHeader.vue
│   ├── SiteFooter.vue
│   └── SiteNavigation.vue
├── ui/                 # UI 组件
│   ├── Button.vue
│   ├── Card.vue
│   └── Modal.vue
└── AdvancedThemeConfigurator.vue
```

**组件命名规则：**
- 使用 PascalCase 命名
- 组件自动导入，无需手动 import
- 可以使用文件夹嵌套组织

### `composables/` - 组合式函数

存放可复用的组合式函数：

```
composables/
├── useThemeConfig.ts   # 主题配置
├── useAuth.ts          # 认证相关
├── useApi.ts           # API 调用
└── useLocalStorage.ts  # 本地存储
```

**使用示例：**
```typescript
// composables/useCounter.ts
export const useCounter = () => {
  const count = ref(0)
  const increment = () => count.value++
  const decrement = () => count.value--
  
  return { count, increment, decrement }
}
```

### `content/` - 内容文件

存放 Markdown 内容文件：

```
content/
├── get-started/        # 快速开始文档
│   ├── index.md
│   ├── installation.md
│   └── project-structure.md
├── guides/             # 指南文档
│   ├── authentication.md
│   └── deployment.md
└── api/                # API 文档
    ├── overview.md
    └── endpoints.md
```

**Front Matter 示例：**
```yaml
---
title: 页面标题
description: 页面描述
date: 2025-06-05
updated: 2025-06-05
tags: [nuxt, vue, typescript]
---
```

### `layouts/` - 布局组件

定义页面布局：

```
layouts/
├── default.vue         # 默认布局
├── docs.vue           # 文档布局
├── auth.vue           # 认证页面布局
└── error.vue          # 错误页面布局
```

**布局使用：**
```vue
<script setup>
// 在页面中指定布局
definePageMeta({
  layout: 'docs'
})
</script>
```

### `pages/` - 页面路由

基于文件的路由系统：

```
pages/
├── index.vue           # / 首页
├── about.vue           # /about
├── get-started/
│   └── index.vue       # /get-started
├── blog/
│   ├── index.vue       # /blog
│   └── [slug].vue      # /blog/[slug] 动态路由
└── [...slug].vue       # 捕获所有路由
```

### `plugins/` - 插件

扩展 Nuxt 功能的插件：

```
plugins/
├── vue-toastification.client.ts  # 客户端插件
├── api.server.ts                 # 服务端插件
└── global-components.ts          # 全局组件注册
```

### `public/` - 静态文件

直接提供的静态文件：

```
public/
├── favicon.ico         # 网站图标
├── robots.txt          # 搜索引擎爬虫规则
├── sitemap.xml         # 站点地图
└── images/             # 静态图片
    ├── og-image.jpg    # Open Graph 图片
    └── screenshots/    # 截图文件
```

### `server/` - 服务端代码

服务端 API 和中间件：

```
server/
├── api/                # API 路由
│   ├── auth/
│   │   ├── login.post.ts
│   │   └── logout.post.ts
│   └── users/
│       ├── index.get.ts
│       └── [id].get.ts
├── middleware/         # 服务端中间件
│   └── cors.ts
└── utils/              # 服务端工具函数
    └── database.ts
```

### `utils/` - 工具函数

通用工具函数：

```
utils/
├── format.ts           # 格式化函数
├── validation.ts       # 验证函数
├── constants.ts        # 常量定义
└── helpers.ts          # 辅助函数
```

## 配置文件

### `nuxt.config.ts` - Nuxt 配置

```typescript
export default defineNuxtConfig({
  // 开发工具
  devtools: { enabled: true },
  
  // 模块
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image'
  ],
  
  // CSS 配置
  css: ['~/assets/css/main.css'],
  
  // 类型检查
  typescript: {
    typeCheck: true
  }
})
```

### `app.config.ts` - 应用配置

```typescript
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc'
    }
  },
  
  // 自定义配置
  theme: {
    defaultMode: 'light'
  }
})
```

### `content.config.ts` - 内容配置

```typescript
export default defineContentConfig({
  collections: {
    introduction: {
      source: 'get-started/**/*.md',
      type: 'page'
    }
  }
})
```

## 自动导入

Nuxt 3 提供了强大的自动导入功能：

### 组件自动导入
- `components/` 目录下的组件自动导入
- 支持嵌套目录和命名空间

### Composables 自动导入
- `composables/` 目录下的函数自动导入
- Vue 3 Composition API 自动导入

### Utils 自动导入
- `utils/` 目录下的函数自动导入

## 最佳实践

### 文件命名
- 使用 kebab-case 命名文件和目录
- 组件使用 PascalCase
- 页面使用 kebab-case

### 目录组织
- 按功能模块组织组件
- 保持目录结构清晰简洁
- 使用 index 文件作为模块入口

### 代码分割
- 利用 Nuxt 的自动代码分割
- 合理使用动态导入
- 避免过大的组件文件

## 相关链接

- [Nuxt 3 目录结构](https://nuxt.com/docs/guide/directory-structure)
- [文件路由](https://nuxt.com/docs/guide/directory-structure/pages)
- [组件自动导入](https://nuxt.com/docs/guide/directory-structure/components) 