---
description: 详细的生产环境部署和配置指南
date: 2025-06-05
updated: 2025-06-05
---

# 部署指南

本指南将帮助您将应用部署到生产环境，包括各种部署平台的配置和最佳实践。

## 构建准备

### 环境变量配置

创建生产环境变量文件：

```bash
# .env.production
NUXT_PUBLIC_SITE_URL=https://yoursite.com
NUXT_PUBLIC_API_BASE=https://api.yoursite.com
NUXT_UI_PRO_LICENSE=your-license-key
NUXT_SECRET_KEY=your-secret-key
DATABASE_URL=your-database-url
```

### 构建命令

```bash
# 生产构建
npm run build

# 静态站点生成
npm run generate

# 预览构建结果
npm run preview
```

## 部署平台

### Vercel 部署

#### 1. 安装 Vercel CLI

```bash
npm i -g vercel
```

#### 2. 配置 `vercel.json`

```json
{
  "builds": [
    {
      "src": "nuxt.config.ts",
      "use": "@nuxtjs/vercel-builder"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ],
  "env": {
    "NUXT_PUBLIC_SITE_URL": "@nuxt_public_site_url",
    "NUXT_PUBLIC_API_BASE": "@nuxt_public_api_base"
  }
}
```

#### 3. 部署

```bash
# 首次部署
vercel

# 生产部署
vercel --prod
```

### Netlify 部署

#### 1. 配置 `netlify.toml`

```toml
[build]
  command = "npm run generate"
  publish = ".output/public"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 2. 环境变量

在 Netlify 控制台设置环境变量：

- `NUXT_PUBLIC_SITE_URL`
- `NUXT_PUBLIC_API_BASE`
- `NUXT_UI_PRO_LICENSE`

### Docker 部署

#### 1. 创建 `Dockerfile`

```dockerfile
# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

# 复制依赖文件
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# 生产阶段
FROM node:18-alpine AS runner

WORKDIR /app

# 创建非 root 用户
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs

# 复制构建结果
COPY --from=builder --chown=nuxtjs:nodejs /app/.output /app/.output

USER nuxtjs

EXPOSE 3000

ENV PORT 3000
ENV HOST 0.0.0.0

CMD ["node", ".output/server/index.mjs"]
```

#### 2. 创建 `docker-compose.yml`

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NUXT_PUBLIC_SITE_URL=https://yoursite.com
      - NUXT_PUBLIC_API_BASE=https://api.yoursite.com
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
```

#### 3. 构建和运行

```bash
# 构建镜像
docker build -t nuxt-app .

# 运行容器
docker run -p 3000:3000 nuxt-app

# 使用 docker-compose
docker-compose up -d
```

### AWS 部署

#### 1. 使用 AWS Amplify

```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run generate
  artifacts:
    baseDirectory: .output/public
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

#### 2. 使用 AWS Lambda

安装 Serverless 框架：

```bash
npm install -g serverless
npm install --save-dev serverless-nuxt
```

配置 `serverless.yml`：

```yaml
service: nuxt-app

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1

plugins:
  - serverless-nuxt

custom:
  nuxt:
    version: 3

functions:
  nuxt:
    handler: .output/server/index.handler
    events:
      - http:
          path: /{proxy+}
          method: ANY
      - http:
          path: /
          method: ANY
```

部署：

```bash
serverless deploy
```

## 性能优化

### 缓存策略

#### 1. 静态资源缓存

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      // 静态页面缓存 1 小时
      '/': { prerender: true, headers: { 'cache-control': 's-maxage=3600' } },
      
      // API 路由缓存 10 分钟
      '/api/**': { headers: { 'cache-control': 's-maxage=600' } },
      
      // 静态资源长期缓存
      '/images/**': { headers: { 'cache-control': 's-maxage=31536000' } }
    }
  }
})
```

#### 2. CDN 配置

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    cdnURL: 'https://cdn.yoursite.com'
  },
  
  image: {
    domains: ['cdn.yoursite.com']
  }
})
```

### 压缩和优化

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    // 启用压缩
    compressPublicAssets: true,
    
    // 预渲染路由
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },
  
  // 实验性功能
  experimental: {
    // 减少 payload 大小
    payloadExtraction: false,
    
    // 内联样式
    inlineSSRStyles: false
  }
})
```

## 监控和日志

### 错误监控

#### 1. Sentry 集成

```bash
npm install @sentry/nuxt
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@sentry/nuxt/module'],
  
  sentry: {
    dsn: process.env.SENTRY_DSN
  }
})
```

#### 2. 自定义错误处理

```typescript
// plugins/error-tracking.client.ts
export default defineNuxtPlugin(() => {
  // 全局错误处理
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error)
    
    // 发送到监控服务
    $fetch('/api/errors', {
      method: 'POST',
      body: {
        message: event.error.message,
        stack: event.error.stack,
        url: window.location.href,
        userAgent: navigator.userAgent
      }
    })
  })
})
```

### 性能监控

```typescript
// plugins/analytics.client.ts
export default defineNuxtPlugin(() => {
  // 页面加载时间
  window.addEventListener('load', () => {
    const loadTime = performance.now()
    
    // 发送性能数据
    $fetch('/api/analytics', {
      method: 'POST',
      body: {
        type: 'page_load',
        duration: loadTime,
        url: window.location.href
      }
    })
  })
})
```

## 安全配置

### HTTPS 和安全头

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'X-XSS-Protection': '1; mode=block',
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'"
        }
      }
    }
  }
})
```

### 环境变量安全

```bash
# 使用加密的环境变量
NUXT_SECRET_KEY=$(openssl rand -base64 32)
DATABASE_PASSWORD=$(openssl rand -base64 16)
```

## 备份和恢复

### 数据库备份

```bash
#!/bin/bash
# backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"
DB_NAME="myapp"

# 创建备份
pg_dump $DATABASE_URL > $BACKUP_DIR/backup_$DATE.sql

# 保留最近 7 天的备份
find $BACKUP_DIR -name "backup_*.sql" -mtime +7 -delete

echo "Backup completed: backup_$DATE.sql"
```

### 自动化备份

```yaml
# .github/workflows/backup.yml
name: Database Backup

on:
  schedule:
    - cron: '0 2 * * *'  # 每天凌晨 2 点

jobs:
  backup:
    runs-on: ubuntu-latest
    steps:
      - name: Backup Database
        run: |
          pg_dump ${{ secrets.DATABASE_URL }} > backup_$(date +%Y%m%d).sql
          
      - name: Upload to S3
        run: |
          aws s3 cp backup_$(date +%Y%m%d).sql s3://my-backups/
```

## CI/CD 流水线

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Type check
        run: npm run typecheck

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build application
        run: npm run build
        env:
          NUXT_PUBLIC_SITE_URL: ${{ secrets.SITE_URL }}
          NUXT_PUBLIC_API_BASE: ${{ secrets.API_BASE }}
          
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 故障排除

### 常见问题

#### 1. 构建失败

```bash
# 清理缓存
rm -rf .nuxt .output node_modules
npm install
npm run build
```

#### 2. 内存不足

```bash
# 增加 Node.js 内存限制
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

#### 3. 静态资源 404

检查 `nuxt.config.ts` 中的 `app.baseURL` 配置：

```typescript
export default defineNuxtConfig({
  app: {
    baseURL: '/your-app/'  // 如果部署在子路径
  }
})
```

### 日志调试

```typescript
// server/api/health.get.ts
export default defineEventHandler(() => {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version,
    node: process.version,
    memory: process.memoryUsage()
  }
})
```

## 相关资源

- [Nuxt 3 部署文档](https://nuxt.com/docs/getting-started/deployment)
- [Vercel 部署指南](https://vercel.com/docs/frameworks/nuxt)
- [Netlify 部署指南](https://docs.netlify.com/frameworks/nuxt/)
- [Docker 最佳实践](https://docs.docker.com/develop/dev-best-practices/) 