---
title: 安装指南
description: 详细的项目安装和环境配置指南
date: 2025-06-05
updated: 2025-06-05
---

# 安装指南

本指南将帮助您在本地环境中安装和配置项目。

## 系统要求

在开始之前，请确保您的系统满足以下要求：

### 必需软件

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 或 **yarn** >= 1.22.0 或 **pnpm** >= 7.0.0
- **Git** >= 2.20.0

### 推荐工具

- **VS Code** - 推荐的代码编辑器
- **Vue Language Features (Volar)** - Vue 3 语言支持
- **TypeScript Vue Plugin (Volar)** - TypeScript 支持

## 克隆项目

```bash
# 使用 HTTPS
git clone https://github.com/your-username/nuxt-app.git

# 或使用 SSH
git clone git@github.com:your-username/nuxt-app.git

# 进入项目目录
cd nuxt-app
```

## 安装依赖

选择您喜欢的包管理器：

### 使用 npm

```bash
npm install
```

### 使用 yarn

```bash
yarn install
```

### 使用 pnpm

```bash
pnpm install
```

## 环境配置

### 创建环境变量文件

```bash
# 复制环境变量模板
cp .env.example .env

# 编辑环境变量
nano .env
```

### 环境变量说明

```bash
# .env 文件示例
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_API_BASE=https://api.example.com
NUXT_UI_PRO_LICENSE=your-license-key
```

## 启动开发服务器

```bash
# 启动开发服务器
npm run dev

# 或
yarn dev

# 或
pnpm dev
```

开发服务器将在 `http://localhost:3000` 启动。

## 验证安装

访问 `http://localhost:3000`，如果看到欢迎页面，说明安装成功！

## 常见问题

### Node.js 版本问题

如果遇到 Node.js 版本不兼容的问题：

```bash
# 使用 nvm 管理 Node.js 版本
nvm install 18
nvm use 18
```

### 依赖安装失败

```bash
# 清除缓存
npm cache clean --force

# 删除 node_modules 和 lock 文件
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### 端口占用

如果 3000 端口被占用：

```bash
# 指定其他端口
npm run dev -- --port 3001
```

## 下一步

安装完成后，建议阅读：

- [项目结构](./project-structure)
- [开发指南](./development)
- [部署指南](./deployment) 