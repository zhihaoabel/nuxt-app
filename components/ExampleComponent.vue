<template>
  <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
    <h3 class="text-lg font-semibold mb-4 flex items-center">
      <Icon name="heroicons:cube" class="mr-2" />
      示例组件
    </h3>

    <!-- UI 组件示例 -->
    <div class="space-y-4">
      <div>
        <h4 class="font-medium mb-2">按钮示例</h4>
        <div class="flex flex-wrap gap-2">
          <UButton color="info">默认按钮</UButton>
          <UButton color="primary">主要按钮</UButton>
          <UButton color="error">危险按钮</UButton>
          <UButton variant="outline">轮廓按钮</UButton>
          <UButton variant="ghost">幽灵按钮</UButton>
        </div>
      </div>

      <div>
        <h4 class="font-medium mb-2">图标示例</h4>
        <div class="flex flex-wrap gap-4 text-2xl">
          <Icon name="heroicons:heart" class="text-red-500" />
          <Icon name="heroicons:star" class="text-yellow-500" />
          <Icon name="heroicons:check-circle" class="text-green-500" />
          <Icon name="heroicons:x-circle" class="text-red-500" />
          <Icon name="heroicons:information-circle" class="text-blue-500" />
        </div>
      </div>

      <div>
        <h4 class="font-medium mb-2">输入框示例</h4>
        <div class="space-y-2 max-w-sm">
          <UInput placeholder="请输入文本" />
          <UTextarea placeholder="请输入多行文本" />
          <USelect :options="[
            { label: '选项 1', value: '1' },
            { label: '选项 2', value: '2' },
            { label: '选项 3', value: '3' }
          ]" placeholder="请选择" />
        </div>
      </div>

      <div>
        <h4 class="font-medium mb-2">卡片示例</h4>
        <UCard class="max-w-sm">
          <template #header>
            <div class="flex items-center">
              <Icon name="heroicons:document-text" class="mr-2" />
              卡片标题
            </div>
          </template>

          <p class="text-gray-600 dark:text-gray-300">
            这是一个使用 Nuxt UI 组件库创建的卡片示例。
          </p>

          <template #footer>
            <div class="flex justify-end">
              <UButton size="sm">操作</UButton>
            </div>
          </template>
        </UCard>
      </div>

      <div>
        <h4 class="font-medium mb-2">通知示例</h4>
        <UButton @click="showNotification">显示通知</UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const toast = useToast()

const showNotification = () => {
  toast.add({
    title: '成功！',
    description: '这是一个使用 Nuxt UI 的通知示例',
    icon: 'heroicons:check-circle',
    color: 'green'
  })
}
</script>