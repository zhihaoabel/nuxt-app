---
title: 配置指南
description: 详细的项目配置和自定义选项说明
date: 2025-06-05
updated: 2025-06-05
---

# 配置指南

本指南详细介绍了项目的各种配置选项和自定义方法。

## Nuxt 配置

### 基础配置

`nuxt.config.ts` 是项目的核心配置文件：

```typescript
export default defineNuxtConfig({
  // 开发工具
  devtools: { enabled: true },
  
  // 应用配置
  app: {
    head: {
      title: 'Nuxt Demo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A modern Nuxt 3 application' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  // CSS 配置
  css: ['~/assets/css/main.css'],
  
  // 模块配置
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/icon'
  ]
})
```

### 模块配置

#### Nuxt Content

```typescript
export default defineNuxtConfig({
  content: {
    // 文档根目录
    sources: {
      content: {
        driver: 'fs',
        prefix: '/docs',
        base: resolve(__dirname, 'content')
      }
    },
    
    // 语法高亮
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    },
    
    // Markdown 配置
    markdown: {
      // 启用代码复制按钮
      copyButton: true,
      
      // 自定义渲染器
      remarkPlugins: ['remark-reading-time'],
      rehypePlugins: ['rehype-figure']
    }
  }
})
```

#### Nuxt UI

```typescript
export default defineNuxtConfig({
  ui: {
    // 全局配置
    global: true,
    
    // 图标配置
    icons: ['heroicons', 'lucide'],
    
    // 安全列表（防止 Tailwind 清除未使用的类）
    safelistColors: ['primary', 'red', 'orange', 'green']
  }
})
```

#### Nuxt Image

```typescript
export default defineNuxtConfig({
  image: {
    // 图片质量
    quality: 80,
    
    // 支持的格式
    format: ['webp', 'avif', 'jpeg'],
    
    // 预设尺寸
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    
    // 外部域名
    domains: ['example.com', 'cdn.example.com']
  }
})
```

## 应用配置

### App Config

`app.config.ts` 用于运行时配置：

```typescript
export default defineAppConfig({
  // UI 主题配置
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc'
    },
    icons: {
      dark: 'i-heroicons-moon',
      light: 'i-heroicons-sun'
    }
  },
  
  // 自定义配置
  site: {
    name: 'Nuxt Demo',
    description: 'A modern Nuxt 3 application',
    url: 'https://example.com',
    logo: '/logo.svg'
  },
  
  // 功能开关
  features: {
    analytics: true,
    comments: false,
    newsletter: true
  }
})
```

### 运行时配置

```typescript
export default defineNuxtConfig({
  runtimeConfig: {
    // 私有配置（仅服务端可用）
    apiSecret: process.env.API_SECRET,
    databaseUrl: process.env.DATABASE_URL,
    
    // 公共配置（客户端和服务端都可用）
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  }
})
```

## 内容配置

### Content Config

`content.config.ts` 配置内容集合：

```typescript
export default defineContentConfig({
  collections: {
    // 文档集合
    docs: {
      source: 'docs/**/*.md',
      type: 'page',
      sortBy: 'date',
      sortOrder: 'desc'
    },
    
    // 博客集合
    blog: {
      source: 'blog/**/*.md',
      type: 'page',
      sortBy: 'publishedAt',
      sortOrder: 'desc'
    },
    
    // 快速开始集合
    introduction: {
      source: 'get-started/**/*.md',
      type: 'page'
    }
  }
})
```

### 自定义字段

```yaml
---
title: 文章标题
description: 文章描述
publishedAt: 2025-06-05
updatedAt: 2025-06-05
tags: [nuxt, vue, typescript]
category: tutorial
featured: true
author:
  name: John Doe
  avatar: /avatars/john.jpg
  bio: Full-stack developer
seo:
  title: 自定义 SEO 标题
  description: 自定义 SEO 描述
  image: /images/og-image.jpg
---
```

## TypeScript 配置

### tsconfig.json

```json
{
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true
  },
  "include": [
    "**/*.ts",
    "**/*.vue"
  ],
  "exclude": [
    "node_modules",
    ".nuxt",
    ".output"
  ]
}
```

### 类型定义

```typescript
// types/index.ts
export interface User {
  id: number
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'user'
  createdAt: string
  updatedAt: string
}

export interface Post {
  id: number
  title: string
  content: string
  excerpt?: string
  publishedAt: string
  author: User
  tags: string[]
  featured: boolean
}

export interface ApiResponse<T> {
  data: T
  message: string
  status: number
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
```

## 样式配置

### Tailwind CSS

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      }
    }
  },
  
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}
```

### CSS 变量

```css
/* assets/css/main.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

:root {
  /* 主题颜色 */
  --color-primary: 59 130 246;
  --color-secondary: 156 163 175;
  
  /* 间距 */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* 字体 */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  
  /* 阴影 */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

/* 深色模式 */
.dark {
  --color-primary: 96 165 250;
  --color-secondary: 107 114 128;
}
```

## 环境配置

### 环境变量

```bash
# .env.example
# 站点配置
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_API_BASE=http://localhost:3000/api

# 第三方服务
NUXT_UI_PRO_LICENSE=your-license-key
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
SENTRY_DSN=your-sentry-dsn

# 数据库
DATABASE_URL=postgresql://user:password@localhost:5432/mydb

# 认证
JWT_SECRET=your-jwt-secret
OAUTH_GITHUB_CLIENT_ID=your-github-client-id
OAUTH_GITHUB_CLIENT_SECRET=your-github-client-secret

# 邮件服务
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# 存储
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
AWS_BUCKET=your-bucket-name
```

### 多环境配置

```typescript
// nuxt.config.ts
const isDev = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  // 开发环境特定配置
  ...(isDev && {
    devtools: { enabled: true },
    ssr: false
  }),
  
  // 生产环境特定配置
  ...(isProduction && {
    nitro: {
      compressPublicAssets: true,
      prerender: {
        routes: ['/sitemap.xml', '/robots.txt']
      }
    }
  }),
  
  runtimeConfig: {
    // 根据环境设置不同的配置
    apiSecret: process.env.API_SECRET,
    
    public: {
      apiBase: isDev 
        ? 'http://localhost:3000/api' 
        : 'https://api.yoursite.com',
      
      analyticsId: isProduction 
        ? process.env.GOOGLE_ANALYTICS_ID 
        : undefined
    }
  }
})
```

## 插件配置

### 全局插件

```typescript
// plugins/global-components.ts
export default defineNuxtPlugin(() => {
  // 注册全局组件
  return {
    provide: {
      // 全局方法
      formatDate: (date: string) => {
        return new Intl.DateTimeFormat('zh-CN').format(new Date(date))
      },
      
      // 全局常量
      constants: {
        APP_NAME: 'Nuxt Demo',
        VERSION: '1.0.0'
      }
    }
  }
})
```

### 客户端插件

```typescript
// plugins/analytics.client.ts
export default defineNuxtPlugin(() => {
  const { $config } = useNuxtApp()
  
  if ($config.public.analyticsId) {
    // 初始化 Google Analytics
    useHead({
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${$config.public.analyticsId}`,
          async: true
        }
      ]
    })
    
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    
    gtag('js', new Date())
    gtag('config', $config.public.analyticsId)
  }
})
```

## 中间件配置

### 全局中间件

```typescript
// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to) => {
  // 需要认证的路由
  const protectedRoutes = ['/dashboard', '/profile', '/admin']
  
  if (protectedRoutes.some(route => to.path.startsWith(route))) {
    const { $auth } = useNuxtApp()
    
    if (!$auth.isLoggedIn) {
      return navigateTo('/login')
    }
  }
})
```

### 页面中间件

```typescript
// middleware/admin.ts
export default defineNuxtRouteMiddleware(() => {
  const { $auth } = useNuxtApp()
  
  if (!$auth.user?.role === 'admin') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Access Denied'
    })
  }
})
```

## 服务端配置

### API 路由

```typescript
// server/api/config.get.ts
export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  
  return {
    // 只返回公共配置
    site: {
      name: 'Nuxt Demo',
      version: '1.0.0'
    },
    features: {
      analytics: !!config.public.analyticsId,
      comments: true
    }
  }
})
```

### 服务端中间件

```typescript
// server/middleware/cors.ts
export default defineEventHandler(async (event) => {
  // 设置 CORS 头
  setHeaders(event, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  })
  
  // 处理预检请求
  if (getMethod(event) === 'OPTIONS') {
    event.node.res.statusCode = 204
    event.node.res.end()
    return
  }
})
```

## 构建配置

### Nitro 配置

```typescript
export default defineNuxtConfig({
  nitro: {
    // 预渲染配置
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt'],
      crawlLinks: true
    },
    
    // 路由规则
    routeRules: {
      '/': { prerender: true },
      '/admin/**': { ssr: false },
      '/api/**': { cors: true }
    },
    
    // 压缩配置
    compressPublicAssets: true,
    
    // 实验性功能
    experimental: {
      wasm: true
    }
  }
})
```

### Vite 配置

```typescript
export default defineNuxtConfig({
  vite: {
    // CSS 配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables.scss" as *;'
        }
      }
    },
    
    // 构建配置
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            ui: ['@nuxt/ui']
          }
        }
      }
    },
    
    // 开发服务器配置
    server: {
      port: 3000,
      host: '0.0.0.0'
    }
  }
})
```

## 相关资源

- [Nuxt 3 配置文档](https://nuxt.com/docs/api/configuration/nuxt-config)
- [App Config 文档](https://nuxt.com/docs/guide/directory-structure/app-config)
- [Runtime Config 文档](https://nuxt.com/docs/guide/going-further/runtime-config)
- [Tailwind CSS 配置](https://tailwindcss.com/docs/configuration) 