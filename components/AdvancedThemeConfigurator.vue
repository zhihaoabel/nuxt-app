<template>
  <UCard class="w-full sm:w-96 shadow-lg border border-gray-200 dark:border-gray-700 max-h-full">
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          自定义主题
        </h3>
        <UButton icon="i-heroicons-x-mark" variant="ghost" size="sm" @click="$emit('close')" />
      </div>
    </template>

    <div class="space-y-6 max-h-[calc(100vh-12rem)] overflow-y-auto">
      <!-- Primary Colors -->
      <div>
        <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
          Primary
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <UButton v-for="color in primaryColors" :key="color.name"
            :variant="currentPrimary === color.value ? 'solid' : 'outline'"
            :color="currentPrimary === color.value ? 'primary' : 'neutral'" 
            size="sm" 
            class="justify-start h-8 min-w-0"
            @click="setPrimaryColor(color.value)">
            <div class="flex items-center min-w-0 w-full">
              <div class="w-4 h-4 rounded-full flex-shrink-0 mr-2" :style="{ backgroundColor: color.hex }" />
              <span class="text-sm leading-none truncate">{{ color.name }}</span>
            </div>
          </UButton>
        </div>
      </div>

      <!-- Neutral Colors -->
      <div>
        <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
          Neutral
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <UButton v-for="color in neutralColors" :key="color.name"
            :variant="currentNeutral === color.value ? 'solid' : 'outline'"
            :color="currentNeutral === color.value ? 'neutral' : 'neutral'" 
            size="sm" 
            class="justify-start h-8 min-w-0"
            @click="setNeutralColor(color.value)">
            <div class="flex items-center min-w-0 w-full">
              <div class="w-4 h-4 rounded-full flex-shrink-0 mr-2" :style="{ backgroundColor: color.hex }" />
              <span class="text-sm leading-none truncate">{{ color.name }}</span>
            </div>
          </UButton>
        </div>
      </div>

      <!-- Radius -->
      <div>
        <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
          Radius
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <UButton v-for="radius in radiusOptions" :key="radius.value"
            :variant="currentRadius === radius.value ? 'solid' : 'outline'"
            :color="currentRadius === radius.value ? 'primary' : 'neutral'" 
            size="sm" 
            class="h-8"
            @click="setRadius(radius.value)">
            <span class="text-sm leading-none">{{ radius.label }}</span>
          </UButton>
        </div>
      </div>

      <!-- Theme Mode -->
      <div>
        <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
          Theme
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <UButton v-for="theme in themeOptions" :key="theme.value"
            :variant="colorMode.preference === theme.value ? 'solid' : 'outline'"
            :color="colorMode.preference === theme.value ? 'primary' : 'neutral'" 
            size="sm" 
            class="justify-start h-8 min-w-0"
            @click="setTheme(theme.value)">
            <div class="flex items-center min-w-0 w-full">
              <UIcon :name="theme.icon" class="w-4 h-4 flex-shrink-0 mr-2" />
              <span class="text-sm leading-none truncate">{{ theme.label }}</span>
            </div>
          </UButton>
        </div>
      </div>

      <!-- Actions -->
      <div class="mt-4 border-t border-gray-200 dark:border-gray-700 sticky bottom-0 bg-white dark:bg-gray-800">
        <div class="flex space-x-2">
          <UButton variant="outline" size="sm" block @click="copyConfig">
            复制配置
          </UButton>
          <UButton variant="outline" size="sm" block @click="resetConfig">
            重置
          </UButton>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'

const colorMode = useColorMode()
const themeConfig = useThemeConfig()

// 定义事件
defineEmits(['close'])

// 颜色选项
const primaryColors = [
  { name: 'Black', value: 'black', hex: '#000000' },
  { name: 'Red', value: 'red', hex: '#ef4444' },
  { name: 'Orange', value: 'orange', hex: '#f97316' },
  { name: 'Amber', value: 'amber', hex: '#f59e0b' },
  { name: 'Yellow', value: 'yellow', hex: '#eab308' },
  { name: 'Lime', value: 'lime', hex: '#84cc16' },
  { name: 'Green', value: 'green', hex: '#22c55e' },
  { name: 'Emerald', value: 'emerald', hex: '#10b981' },
  { name: 'Teal', value: 'teal', hex: '#14b8a6' },
  { name: 'Cyan', value: 'cyan', hex: '#06b6d4' },
  { name: 'Sky', value: 'sky', hex: '#0ea5e9' },
  { name: 'Blue', value: 'blue', hex: '#3b82f6' },
  { name: 'Indigo', value: 'indigo', hex: '#6366f1' },
  { name: 'Violet', value: 'violet', hex: '#8b5cf6' },
  { name: 'Purple', value: 'purple', hex: '#a855f7' },
  { name: 'Fuchsia', value: 'fuchsia', hex: '#d946ef' },
  { name: 'Pink', value: 'pink', hex: '#ec4899' },
  { name: 'Rose', value: 'rose', hex: '#f43f5e' },
  { name: 'Custom', value: 'custom', hex: '#533afd' }
]

const neutralColors = [
  { name: 'Slate', value: 'slate', hex: '#64748b' },
  { name: 'Gray', value: 'gray', hex: '#6b7280' },
  { name: 'Zinc', value: 'zinc', hex: '#71717a' },
  { name: 'Neutral', value: 'neutral', hex: '#737373' },
  { name: 'Stone', value: 'stone', hex: '#78716c' }
]

const radiusOptions = [
  { label: '0', value: 0 },
  { label: '0.125', value: 0.125 },
  { label: '0.25', value: 0.25 },
  { label: '0.375', value: 0.375 },
  { label: '0.5', value: 0.5 }
]

const themeOptions = [
  { label: 'Light', value: 'light', icon: 'i-heroicons-sun' },
  { label: 'Dark', value: 'dark', icon: 'i-heroicons-moon' },
  { label: 'System', value: 'system', icon: 'i-heroicons-computer-desktop' }
]

// 使用 composable 中的状态
const currentPrimary = themeConfig.primaryColor
const currentNeutral = themeConfig.neutralColor
const currentRadius = themeConfig.radius

// 添加调试信息
watchEffect(() => {
  console.log('Current primary color:', currentPrimary.value)
  console.log('Current neutral color:', currentNeutral.value)
  console.log('Current radius:', currentRadius.value)
})

// 直接使用 composable 中的方法
const setPrimaryColor = themeConfig.setPrimaryColor
const setNeutralColor = themeConfig.setNeutralColor
const setRadius = themeConfig.setRadius

// 设置主题
const setTheme = (theme: string) => {
  colorMode.preference = theme
}

// 复制配置
const copyConfig = async () => {
  const config = {
    ...themeConfig.getConfig(),
    theme: colorMode.preference
  }

  try {
    await navigator.clipboard.writeText(JSON.stringify(config, null, 2))
    console.log('配置已复制到剪贴板')
  } catch (error) {
    console.error('复制失败:', error)
  }
}

// 重置配置
const resetConfig = () => {
  themeConfig.resetConfig()
  colorMode.preference = 'system'
  console.log('配置已重置')
}
</script>