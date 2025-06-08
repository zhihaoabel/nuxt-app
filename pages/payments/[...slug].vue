<template>
  <UPage>
    <UPageBody class="p-10 sm:p-8">
      <ContentRenderer v-if="page" :value="page" />

      <USeparator />

      <UContentSurround v-if="surround" :surround="surround" />
    </UPageBody>

    <template #right>
      <UContentToc highlight highlight-color="primary" v-if="page && page.body && page.body.toc" :links="page.body.toc.links" />
    </template>
  </UPage>
</template>

<script setup lang="ts">
// 使用 docs 布局
definePageMeta({
  layout: 'docs'
})

const route = useRoute()

// 查询内容（布局会处理导航和页面数据）
const { data: page, pending, error } = await useAsyncData(route.path, () => {
  return queryCollection('payments').path(route.path).first()
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('payments', route.path)
})

// 页面元数据
useHead({
  title: page.value?.title || '支付文档',
  titleTemplate: '%s - 支付 | Nuxt Demo'
})
</script>