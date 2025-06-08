<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('introduction').path(route.path).first()
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('introduction', route.path)
})

// 页面元数据
useHead({
  title: page.value?.title || '快速开始指南',
  titleTemplate: '%s - 快速开始指南 | Nuxt Demo'
})
</script>

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
