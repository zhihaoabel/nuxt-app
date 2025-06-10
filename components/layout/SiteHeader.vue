<template>
  <header
    class="sticky flex flex-col justify-center h-[var(--ui-header-height)] top-0 z-50 bg-default shadow-md border-b"
    :class="borderColorStyle">
    <!-- 上层：Logo 和工具按钮 -->
    <div class="">
      <UContainer class="max-w-full">
        <div class="flex items-center justify-between h-full">
          <!-- Logo 区域 -->
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-gradient-to-br rounded-lg flex items-center justify-center"
              :class="logoGradientStyle">
              <UIcon name="i-heroicons-document-text" class="w-5 h-5 text-white" />
            </div>
            <div class="hover:cursor-pointer" @click="navigateTo('/')">
              <h1 class="text-xl font-bold" :class="headingColorStyle">
                Onerway DOCS
              </h1>
              <p class="text-xs hidden sm:block" :class="mutedTextColorStyle">
                文档演示
              </p>
            </div>
          </div>

          <!-- 右侧工具按钮 -->
          <div class="flex items-center space-x-2">
            <!-- 移动端菜单按钮 -->
            <UButton icon="i-heroicons-bars-3" variant="ghost" color="neutral" class="md:hidden" data-mobile-menu-button
              @click="toggleMobileMenu" :title="showMobileMenu ? '关闭菜单' : '打开菜单'" />

            <!-- 主题配置器触发按钮 -->
            <div class="relative">
              <UButton icon="i-heroicons-swatch" variant="ghost" color="primary" @click="toggleThemeConfigurator"
                :title="showThemeConfigurator ? '关闭主题配置器' : '打开主题配置器'" class="theme-configurator-button" />

              <!-- 主题配置器面板 -->
              <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                <div v-if="showThemeConfigurator"
                  class="fixed inset-4 top-16 bottom-4 z-50 theme-configurator-panel sm:absolute sm:top-12 sm:right-0 sm:inset-auto sm:w-auto sm:bottom-auto">
                  <AdvancedThemeConfigurator @close="showThemeConfigurator = false" />
                </div>
              </Transition>
            </div>

            <!-- GitHub 链接 -->
            <UButton icon="i-lucide-github" title="查看源码" variant="ghost" color="neutral" to="https://github.com"
              target="_blank" />
          </div>
        </div>
      </UContainer>
    </div>

    <!-- 下层：导航菜单 -->
    <SiteNavigation :navigation-items="navigationItems" />
  </header>

  <!-- 移动端菜单 (独立的overlay) -->
  <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
    <div v-if="showMobileMenu"
      class="fixed top-[var(--ui-header-height)] left-0 right-0 z-40 md:hidden border-t bg-inherit shadow-lg"
      :class="borderColorStyle" data-mobile-menu-panel>
      <UContainer>
        <div class="py-4">
          <UNavigationMenu :items="[allNavigationItems]" orientation="vertical" color="neutral" variant="link"
            class="w-full" />
        </div>
      </UContainer>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

// Props
interface Props {
  navigationItems: NavigationMenuItem[][]
  allNavigationItems: any
}

const props = defineProps<Props>()

// 使用主题配置
const themeConfig = useThemeConfig()

// 响应式状态
const showMobileMenu = ref(false)
const showThemeConfigurator = ref(false)

// 计算动态样式
const logoGradientStyle = computed(() => {
  const primaryColor = themeConfig.primaryColor.value
  const colorMap: Record<string, string> = {
    black: 'from-gray-800 to-black',
    red: 'from-red-500 to-red-600',
    orange: 'from-orange-500 to-orange-600',
    amber: 'from-amber-500 to-amber-600',
    yellow: 'from-yellow-500 to-yellow-600',
    lime: 'from-lime-500 to-lime-600',
    green: 'from-green-500 to-green-600',
    emerald: 'from-emerald-500 to-emerald-600',
    teal: 'from-teal-500 to-teal-600',
    cyan: 'from-cyan-500 to-cyan-600',
    sky: 'from-sky-500 to-sky-600',
    blue: 'from-blue-500 to-blue-600',
    indigo: 'from-indigo-500 to-indigo-600',
    violet: 'from-violet-500 to-violet-600',
    purple: 'from-purple-500 to-purple-600',
    fuchsia: 'from-fuchsia-500 to-fuchsia-600',
    pink: 'from-pink-500 to-pink-600',
    rose: 'from-rose-500 to-rose-600',
    custom: 'from-blue-500 to-purple-600'
  }

  return colorMap[primaryColor] || 'from-blue-500 to-purple-600'
})

const borderColorStyle = computed(() => {
  const neutralColor = themeConfig.neutralColor.value
  const colorMap: Record<string, string> = {
    slate: 'border-slate-200 dark:border-slate-700',
    gray: 'border-gray-200 dark:border-gray-700',
    zinc: 'border-zinc-200 dark:border-zinc-700',
    neutral: 'border-neutral-200 dark:border-neutral-700',
    stone: 'border-stone-200 dark:border-stone-700'
  }

  return colorMap[neutralColor] || 'border-gray-200 dark:border-gray-700'
})

const headingColorStyle = computed(() => {
  const neutralColor = themeConfig.neutralColor.value
  const colorMap: Record<string, string> = {
    slate: 'text-slate-900 dark:text-slate-100',
    gray: 'text-gray-900 dark:text-gray-100',
    zinc: 'text-zinc-900 dark:text-zinc-100',
    neutral: 'text-neutral-900 dark:text-neutral-100',
    stone: 'text-stone-900 dark:text-stone-100'
  }

  return colorMap[neutralColor] || 'text-gray-900 dark:text-gray-100'
})

const mutedTextColorStyle = computed(() => {
  const neutralColor = themeConfig.neutralColor.value
  const colorMap: Record<string, string> = {
    slate: 'text-slate-500 dark:text-slate-400',
    gray: 'text-gray-500 dark:text-gray-400',
    zinc: 'text-zinc-500 dark:text-zinc-400',
    neutral: 'text-neutral-500 dark:text-neutral-400',
    stone: 'text-stone-500 dark:text-stone-400'
  }

  return colorMap[neutralColor] || 'text-gray-500 dark:text-gray-400'
})

// 方法
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const toggleThemeConfigurator = () => {
  showThemeConfigurator.value = !showThemeConfigurator.value
}

// 点击外部关闭移动菜单和主题配置器
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as Element

    // 关闭移动菜单
    if (!target.closest('[data-mobile-menu-button]') && !target.closest('[data-mobile-menu-panel]')) {
      showMobileMenu.value = false
    }

    // 关闭主题配置器
    if (!target.closest('.theme-configurator-button') && !target.closest('.theme-configurator-panel')) {
      showThemeConfigurator.value = false
    }
  }

  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>