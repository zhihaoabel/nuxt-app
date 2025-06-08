# Nuxt 3 Demo 项目

这是一个集成了多个 Nuxt 模块的演示项目，展示了如何使用 Content、Image、UI 和 Icon 模块。

## 🚀 功能特性

- ✅ **@nuxt/content** - 强大的内容管理系统，支持 Markdown
- ✅ **@nuxt/image** - 自动图片优化和响应式图片
- ✅ **@nuxt/ui** - 美观的 UI 组件库，基于 Tailwind CSS
- ✅ **@nuxt/icon** - 丰富的图标库，支持多种图标集

## 📦 已安装的模块

```json
{
  "@nuxt/content": "^3.5.1",
  "@nuxt/icon": "^1.13.0",
  "@nuxt/image": "^1.10.0",
  "@nuxt/ui": "^3.1.3"
}
```

## 🛠️ 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
nuxt-app/
├── assets/
│   └── css/
│       └── main.css          # 主要样式文件
├── components/
│   └── ExampleComponent.vue  # 示例组件
├── content/
│   └── index.md             # Markdown 内容文件
├── pages/
│   ├── index.vue            # 首页
│   └── content.vue          # 内容展示页
├── public/
│   └── images/              # 静态图片资源
├── app.vue                  # 根组件
├── nuxt.config.ts          # Nuxt 配置文件
└── package.json            # 项目依赖
```

## 🎯 使用示例

### Content 模块

在 `content/` 目录下创建 Markdown 文件：

```markdown
# 标题

这是内容...

## 代码示例

\`\`\`vue
<template>
  <div>Hello World</div>
</template>
\`\`\`
```

在页面中使用：

```vue
<template>
  <ContentDoc />
</template>
```

### Image 模块

使用优化的图片组件：

```vue
<template>
  <NuxtImg 
    src="/images/example.jpg" 
    alt="示例图片"
    width="400"
    height="300"
  />
</template>
```

### UI 模块

使用 UI 组件：

```vue
<template>
  <div>
    <UButton color="primary">按钮</UButton>
    <UCard>
      <template #header>标题</template>
      内容
    </UCard>
  </div>
</template>
```

### Icon 模块

使用图标：

```vue
<template>
  <Icon name="heroicons:heart" class="text-red-500" />
</template>
```

## 🎨 主题和样式

项目使用 Tailwind CSS 进行样式设计，支持深色模式。你可以在 `assets/css/main.css` 中自定义样式。

## 📚 更多资源

- [Nuxt 3 文档](https://nuxt.com/)
- [Nuxt Content 文档](https://content.nuxt.com/)
- [Nuxt Image 文档](https://image.nuxt.com/)
- [Nuxt UI 文档](https://ui.nuxt.com/)
- [Nuxt Icon 文档](https://nuxt.com/modules/icon)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## �� 许可证

MIT License
