<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 导航栏 -->
    <nav class="bg-white dark:bg-gray-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center">
              <Icon name="heroicons:arrow-left" class="h-5 w-5 mr-2" />
              返回首页
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <UPage>
      <!-- 内容区域 -->
      <main class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <ContentRenderer v-if="home" :value="home" />
        <div v-else>Home not found</div>
      </main>

      <template #right>
        <UContentToc highlight highlight-color="primary" :links="home?.body?.toc?.links" />
      </template>
    </UPage>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: home } = await useAsyncData(route.path, () => {
  return queryCollection('content').path('/').first()
})

// 页面元数据
useHead({
  title: 'Nuxt Demo - 内容展示',
  meta: [
    { name: 'description', content: '展示 Nuxt Content 模块的功能' }
  ]
})
</script>