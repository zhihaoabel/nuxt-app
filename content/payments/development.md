---
title: 开发指南
description: 详细的开发流程和最佳实践指南
date: 2025-06-05
updated: 2025-06-05
---

# 开发指南2

本指南将帮助您了解项目的开发流程、编码规范和最佳实践。

## 开发环境设置

### IDE 配置

推荐使用 **Visual Studio Code** 并安装以下扩展：

```json
{
  "recommendations": [
    "Vue.volar",
    "Vue.vscode-typescript-vue-plugin",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}
```

### VS Code 设置

创建 `.vscode/settings.json`：

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "vue.codeActions.enabled": true
}
```

## 开发命令

### 基本命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 生成静态站点
npm run generate

# 类型检查
npm run typecheck

# 代码检查
npm run lint

# 代码格式化
npm run format
```

### 高级命令

```bash
# 分析构建包大小
npm run analyze

# 清理缓存
npm run clean

# 更新依赖
npm run update

# 运行测试
npm run test
```

## 编码规范

### TypeScript 规范

#### 类型定义

```typescript
// ✅ 推荐：使用 interface 定义对象类型
interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

// ✅ 推荐：使用 type 定义联合类型
type Status = 'pending' | 'success' | 'error'

// ✅ 推荐：使用泛型
interface ApiResponse<T> {
  data: T
  message: string
  status: number
}
```

#### 函数定义

```typescript
// ✅ 推荐：明确的参数和返回类型
const fetchUser = async (id: number): Promise<User> => {
  const response = await $fetch<ApiResponse<User>>(`/api/users/${id}`)
  return response.data
}

// ✅ 推荐：使用可选参数
const createUser = (data: Partial<User>): Promise<User> => {
  return $fetch('/api/users', {
    method: 'POST',
    body: data
  })
}
```

### Vue 组件规范

#### 组件结构

```vue
<template>
  <!-- 模板内容 -->
</template>

<script setup lang="ts">
// 1. 导入
import type { User } from '~/types'

// 2. Props 定义
interface Props {
  user: User
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
})

// 3. Emits 定义
interface Emits {
  update: [user: User]
  delete: [id: number]
}

const emit = defineEmits<Emits>()

// 4. 响应式数据
const isEditing = ref(false)
const form = reactive({
  name: props.user.name,
  email: props.user.email
})

// 5. 计算属性
const displayName = computed(() => {
  return props.user.name || 'Unknown User'
})

// 6. 方法
const handleSave = () => {
  emit('update', { ...props.user, ...form })
  isEditing.value = false
}

// 7. 生命周期
onMounted(() => {
  console.log('Component mounted')
})
</script>

<style scoped>
/* 组件样式 */
</style>
```

#### 组件命名

```vue
<!-- ✅ 推荐：PascalCase -->
<UserProfile :user="currentUser" />
<ProductCard :product="item" />

<!-- ❌ 避免：kebab-case -->
<user-profile :user="currentUser" />
```

### CSS/Tailwind 规范

#### 类名顺序

```vue
<template>
  <!-- 布局 → 尺寸 → 外观 → 交互 -->
  <div class="flex items-center justify-between w-full h-12 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
    Content
  </div>
</template>
```

#### 自定义样式

```vue
<style scoped>
/* ✅ 推荐：使用 Tailwind 的 @apply */
.custom-button {
  @apply px-4 py-2 bg-blue-500 text-white rounded-lg;
  @apply hover:bg-blue-600 focus:ring-2 focus:ring-blue-500;
  @apply transition-all duration-200;
}

/* ✅ 推荐：CSS 变量 */
.theme-aware {
  background-color: var(--ui-primary);
  border-radius: var(--ui-radius);
}
</style>
```

## 状态管理

### Composables 模式

```typescript
// composables/useAuth.ts
export const useAuth = () => {
  const user = ref<User | null>(null)
  const isLoggedIn = computed(() => !!user.value)
  
  const login = async (credentials: LoginCredentials) => {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: credentials
    })
    user.value = response.user
  }
  
  const logout = async () => {
    await $fetch('/api/auth/logout', { method: 'POST' })
    user.value = null
  }
  
  return {
    user: readonly(user),
    isLoggedIn,
    login,
    logout
  }
}
```

### 全局状态

```typescript
// composables/useGlobalState.ts
const globalState = reactive({
  theme: 'light',
  sidebar: {
    isOpen: false,
    width: 280
  }
})

export const useGlobalState = () => {
  return {
    state: readonly(globalState),
    updateTheme: (theme: string) => {
      globalState.theme = theme
    },
    toggleSidebar: () => {
      globalState.sidebar.isOpen = !globalState.sidebar.isOpen
    }
  }
}
```

## API 集成

### 服务端 API

```typescript
// server/api/users/index.get.ts
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  
  // 验证查询参数
  const { page = 1, limit = 10 } = query
  
  try {
    const users = await getUsersFromDatabase({
      page: Number(page),
      limit: Number(limit)
    })
    
    return {
      data: users,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: users.length
      }
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch users'
    })
  }
})
```

### 客户端调用

```typescript
// composables/useUsers.ts
export const useUsers = () => {
  const users = ref<User[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  
  const fetchUsers = async (params?: { page?: number; limit?: number }) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await $fetch('/api/users', {
        query: params
      })
      users.value = response.data
    } catch (err) {
      error.value = 'Failed to fetch users'
      console.error(err)
    } finally {
      loading.value = false
    }
  }
  
  return {
    users: readonly(users),
    loading: readonly(loading),
    error: readonly(error),
    fetchUsers
  }
}
```

## 错误处理

### 全局错误处理

```typescript
// plugins/error-handler.client.ts
export default defineNuxtPlugin(() => {
  // 处理未捕获的错误
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason)
    
    // 显示用户友好的错误消息
    const toast = useToast()
    toast.add({
      title: '操作失败',
      description: '请稍后重试或联系支持团队',
      color: 'red'
    })
  })
})
```

### 组件错误边界

```vue
<!-- components/ErrorBoundary.vue -->
<template>
  <div v-if="error" class="error-boundary">
    <h2>出现了错误</h2>
    <p>{{ error.message }}</p>
    <UButton @click="retry">重试</UButton>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
const error = ref<Error | null>(null)

const retry = () => {
  error.value = null
  // 重新渲染子组件
}

// 捕获子组件错误
onErrorCaptured((err) => {
  error.value = err
  return false
})
</script>
```

## 性能优化

### 懒加载

```vue
<template>
  <!-- 组件懒加载 -->
  <LazyHeavyComponent v-if="showHeavyComponent" />
  
  <!-- 图片懒加载 -->
  <NuxtImg
    src="/images/large-image.jpg"
    loading="lazy"
    placeholder
  />
</template>

<script setup>
// 动态导入
const HeavyComponent = defineAsyncComponent(() => 
  import('~/components/HeavyComponent.vue')
)
</script>
```

### 缓存策略

```typescript
// composables/useCache.ts
export const useCache = <T>(key: string, fetcher: () => Promise<T>) => {
  return useLazyAsyncData(key, fetcher, {
    // 缓存 5 分钟
    maxAge: 1000 * 60 * 5,
    // 在客户端和服务端都缓存
    server: true,
    client: true
  })
}
```

## 测试

### 组件测试

```typescript
// tests/components/UserCard.test.ts
import { mount } from '@vue/test-utils'
import UserCard from '~/components/UserCard.vue'

describe('UserCard', () => {
  const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  }

  it('renders user information correctly', () => {
    const wrapper = mount(UserCard, {
      props: { user: mockUser }
    })

    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('john@example.com')
  })

  it('emits delete event when delete button is clicked', async () => {
    const wrapper = mount(UserCard, {
      props: { user: mockUser }
    })

    await wrapper.find('[data-testid="delete-button"]').trigger('click')
    
    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')[0]).toEqual([mockUser.id])
  })
})
```

## 部署准备

### 环境变量

```bash
# .env.production
NUXT_PUBLIC_API_BASE=https://api.production.com
NUXT_PUBLIC_SITE_URL=https://yoursite.com
NUXT_SECRET_KEY=your-secret-key
```

### 构建优化

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    // 预渲染路由
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    },
    
    // 压缩
    compressPublicAssets: true
  },
  
  // 实验性功能
  experimental: {
    // 启用 payload 提取
    payloadExtraction: false
  }
})
```

## 调试技巧

### Vue DevTools

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  }
})
```

### 日志记录

```typescript
// utils/logger.ts
export const logger = {
  info: (message: string, data?: any) => {
    if (process.dev) {
      console.log(`[INFO] ${message}`, data)
    }
  },
  
  error: (message: string, error?: any) => {
    console.error(`[ERROR] ${message}`, error)
  },
  
  warn: (message: string, data?: any) => {
    console.warn(`[WARN] ${message}`, data)
  }
}
```

## 相关资源

- [Vue 3 风格指南](https://vuejs.org/style-guide/)
- [TypeScript 最佳实践](https://typescript-eslint.io/rules/)
- [Tailwind CSS 最佳实践](https://tailwindcss.com/docs/reusing-styles)
- [Nuxt 3 最佳实践](https://nuxt.com/docs/guide/going-further/experimental-features) 