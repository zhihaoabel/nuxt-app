<template>
  <footer
    class="relative mt-20 bg-gradient-to-br border-t" :class="[backgroundColorStyle, borderColorStyle]">
    <!-- 装饰性顶部边框 -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r" :class="topBorderGradientStyle">
    </div>

    <UContainer class="relative">
      <!-- 小屏幕布局 -->
      <div class="block lg:hidden py-8">
        <!-- 品牌信息 -->
        <div class="text-center space-y-4 mb-8">
          <div class="flex items-center justify-center space-x-3">
            <div
              class="w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg" :class="brandGradientStyle">
              <UIcon name="i-heroicons-document-text" class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold" :class="headingColorStyle">
                Onerway DOCS
              </h3>
              <p class="text-xs font-medium" :class="brandTextColorStyle">
                文档演示平台
              </p>
            </div>
          </div>
          <p class="text-sm max-w-sm mx-auto" :class="textColorStyle">
            基于 Nuxt 3 + Nuxt UI 构建的现代化文档平台
          </p>
        </div>

        <!-- 社交媒体 -->
        <div class="flex justify-center space-x-4 mb-8">
          <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" size="lg"
            to="https://github.com" target="_blank" aria-label="GitHub"
            class="hover:scale-110 transition-transform duration-200" />
          <UButton icon="i-simple-icons-twitter" color="neutral" variant="ghost" size="lg"
            to="https://twitter.com" target="_blank" aria-label="Twitter"
            class="hover:scale-110 transition-transform duration-200" />
          <UButton icon="i-simple-icons-linkedin" color="neutral" variant="ghost" size="lg"
            to="https://linkedin.com" target="_blank" aria-label="LinkedIn"
            class="hover:scale-110 transition-transform duration-200" />
          <UButton icon="i-heroicons-envelope" color="neutral" variant="ghost" size="lg"
            to="mailto:contact@example.com" aria-label="Email"
            class="hover:scale-110 transition-transform duration-200" />
        </div>

        <!-- 快速链接 -->
        <div class="grid grid-cols-2 gap-4 mb-8">
          <UCard class="p-4">
            <h4 class="font-semibold mb-3 text-sm" :class="headingColorStyle">产品服务</h4>
            <div class="space-y-2">
              <ULink v-for="link in footerLinks.products.slice(0, 3)" :key="link.label" :to="link.to"
                :target="link.external ? '_blank' : undefined"
                class="block text-sm transition-colors" :class="[textColorStyle, linkHoverColorStyle]">
                {{ link.label }}
              </ULink>
            </div>
          </UCard>

          <UCard class="p-4">
            <h4 class="font-semibold mb-3 text-sm" :class="headingColorStyle">开发资源</h4>
            <div class="space-y-2">
              <ULink v-for="link in footerLinks.resources.slice(0, 3)" :key="link.label" :to="link.to"
                :target="link.external ? '_blank' : undefined"
                class="block text-sm transition-colors" :class="[textColorStyle, linkHoverColorStyle]">
                {{ link.label }}
              </ULink>
            </div>
          </UCard>
        </div>

        <!-- 底部信息 -->
        <div class="text-center space-y-4 pt-6 border-t" :class="borderColorStyle">
          <div
            class="flex items-center justify-center space-x-2 text-sm" :class="textColorStyle">
            <UIcon name="i-heroicons-heart" class="w-4 h-4" :class="heartIconColorStyle" />
            <span>© {{ new Date().getFullYear() }} Onerway DOCS</span>
          </div>
          <div class="flex justify-center space-x-4 text-xs">
            <ULink to="/"
              class="transition-colors" :class="[mutedTextColorStyle, linkHoverColorStyle]">
              隐私政策
            </ULink>
            <ULink to="/"
              class="transition-colors" :class="[mutedTextColorStyle, linkHoverColorStyle]">
              服务条款
            </ULink>
          </div>
        </div>
      </div>

      <!-- 大屏幕布局 -->
      <div class="hidden lg:block py-16 lg:py-20">
        <div class="grid grid-cols-4 gap-12">
          <!-- 品牌信息 -->
          <div class="space-y-6">
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg" :class="brandGradientStyle">
                <UIcon name="i-heroicons-document-text" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold" :class="headingColorStyle">
                  Onerway DOCS
                </h3>
                <p class="text-xs font-medium" :class="brandTextColorStyle">
                  文档演示平台
                </p>
              </div>
            </div>

            <p class="text-sm leading-relaxed" :class="textColorStyle">
              现代化的文档平台，基于 Nuxt 3 + Nuxt UI 构建，为开发者提供优质的文档体验和完整的解决方案。
            </p>

            <div class="space-y-3">
              <h5 class="text-sm font-semibold" :class="headingColorStyle">关注我们</h5>
              <div class="flex space-x-3">
                <UButton icon="i-simple-icons-github" color="neutral" variant="outline" size="sm"
                  to="https://github.com" target="_blank" aria-label="GitHub"
                  class="hover:scale-105 transition-transform duration-200" />
                <UButton icon="i-simple-icons-twitter" color="neutral" variant="outline" size="sm"
                  to="https://twitter.com" target="_blank" aria-label="Twitter"
                  class="hover:scale-105 transition-transform duration-200" />
                <UButton icon="i-simple-icons-linkedin" color="neutral" variant="outline" size="sm"
                  to="https://linkedin.com" target="_blank" aria-label="LinkedIn"
                  class="hover:scale-105 transition-transform duration-200" />
                <UButton icon="i-heroicons-envelope" color="neutral" variant="outline" size="sm"
                  to="mailto:contact@example.com" aria-label="Email"
                  class="hover:scale-105 transition-transform duration-200" />
              </div>
            </div>
          </div>

          <!-- 产品链接 -->
          <div class="space-y-4">
            <h4
              class="text-sm font-bold uppercase tracking-wider border-b pb-2" :class="[headingColorStyle, borderColorStyle]">
              产品服务
            </h4>
            <ul class="space-y-3">
              <li v-for="link in footerLinks.products" :key="link.label">
                <ULink :to="link.to" :target="link.external ? '_blank' : undefined"
                  class="text-sm transition-colors duration-200 flex items-center group" :class="[textColorStyle, linkHoverColorStyle]">
                  <span>{{ link.label }}</span>
                  <UIcon v-if="link.external" name="i-heroicons-arrow-top-right-on-square"
                    class="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </ULink>
              </li>
            </ul>
          </div>

          <!-- 资源链接 -->
          <div class="space-y-4">
            <h4
              class="text-sm font-bold uppercase tracking-wider border-b pb-2" :class="[headingColorStyle, borderColorStyle]">
              开发资源
            </h4>
            <ul class="space-y-3">
              <li v-for="link in footerLinks.resources" :key="link.label">
                <ULink :to="link.to" :target="link.external ? '_blank' : undefined"
                  class="text-sm transition-colors duration-200 flex items-center group" :class="[textColorStyle, linkHoverColorStyle]">
                  <span>{{ link.label }}</span>
                  <UIcon v-if="link.external" name="i-heroicons-arrow-top-right-on-square"
                    class="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </ULink>
              </li>
            </ul>
          </div>

          <!-- 支持链接 -->
          <div class="space-y-4">
            <h4
              class="text-sm font-bold uppercase tracking-wider border-b pb-2" :class="[headingColorStyle, borderColorStyle]">
              帮助支持
            </h4>
            <ul class="space-y-3">
              <li v-for="link in footerLinks.support" :key="link.label">
                <ULink :to="link.to" :target="link.external ? '_blank' : undefined"
                  class="text-sm transition-colors duration-200 flex items-center group" :class="[textColorStyle, linkHoverColorStyle]">
                  <span>{{ link.label }}</span>
                  <UIcon v-if="link.external" name="i-heroicons-arrow-top-right-on-square"
                    class="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </ULink>
              </li>
            </ul>
          </div>
        </div>

        <!-- 大屏幕底部版权区域 -->
        <div class="border-t mt-16 pt-8" :class="borderColorStyle">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-2 text-sm" :class="textColorStyle">
              <UIcon name="i-heroicons-heart" class="w-4 h-4" :class="heartIconColorStyle" />
              <span>© {{ new Date().getFullYear() }} Onerway DOCS. 用心构建，保留所有权利。</span>
            </div>
            <div class="flex items-center space-x-6">
              <ULink to="/"
                class="text-sm transition-colors duration-200" :class="[textColorStyle, linkHoverColorStyle]">
                隐私政策
              </ULink>
              <ULink to="/"
                class="text-sm transition-colors duration-200" :class="[textColorStyle, linkHoverColorStyle]">
                服务条款
              </ULink>
              <ULink to="/"
                class="text-sm transition-colors duration-200" :class="[textColorStyle, linkHoverColorStyle]">
                Cookie 政策
              </ULink>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
// Props
interface Props {
  footerLinks: {
    products: Array<{ label: string; to: string; external: boolean }>
    resources: Array<{ label: string; to: string; external: boolean }>
    support: Array<{ label: string; to: string; external: boolean }>
  }
}

const props = defineProps<Props>()

// 使用主题配置
const themeConfig = useThemeConfig()

// 计算动态样式
const brandGradientStyle = computed(() => {
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

const topBorderGradientStyle = computed(() => {
  const primaryColor = themeConfig.primaryColor.value
  const colorMap: Record<string, string> = {
    black: 'from-gray-600 via-gray-800 to-gray-600',
    red: 'from-red-500 via-red-600 to-red-500',
    orange: 'from-orange-500 via-orange-600 to-orange-500',
    amber: 'from-amber-500 via-amber-600 to-amber-500',
    yellow: 'from-yellow-500 via-yellow-600 to-yellow-500',
    lime: 'from-lime-500 via-lime-600 to-lime-500',
    green: 'from-green-500 via-green-600 to-green-500',
    emerald: 'from-emerald-500 via-emerald-600 to-emerald-500',
    teal: 'from-teal-500 via-teal-600 to-teal-500',
    cyan: 'from-cyan-500 via-cyan-600 to-cyan-500',
    sky: 'from-sky-500 via-sky-600 to-sky-500',
    blue: 'from-blue-500 via-blue-600 to-blue-500',
    indigo: 'from-indigo-500 via-indigo-600 to-indigo-500',
    violet: 'from-violet-500 via-violet-600 to-violet-500',
    purple: 'from-purple-500 via-purple-600 to-purple-500',
    fuchsia: 'from-fuchsia-500 via-fuchsia-600 to-fuchsia-500',
    pink: 'from-pink-500 via-pink-600 to-pink-500',
    rose: 'from-rose-500 via-rose-600 to-rose-500',
    custom: 'from-blue-500 via-purple-500 to-blue-500'
  }
  
  return colorMap[primaryColor] || 'from-blue-500 via-purple-500 to-blue-500'
})

const linkHoverColorStyle = computed(() => {
  const primaryColor = themeConfig.primaryColor.value
  const colorMap: Record<string, string> = {
    black: 'hover:text-gray-800 dark:hover:text-gray-300',
    red: 'hover:text-red-600 dark:hover:text-red-400',
    orange: 'hover:text-orange-600 dark:hover:text-orange-400',
    amber: 'hover:text-amber-600 dark:hover:text-amber-400',
    yellow: 'hover:text-yellow-600 dark:hover:text-yellow-400',
    lime: 'hover:text-lime-600 dark:hover:text-lime-400',
    green: 'hover:text-green-600 dark:hover:text-green-400',
    emerald: 'hover:text-emerald-600 dark:hover:text-emerald-400',
    teal: 'hover:text-teal-600 dark:hover:text-teal-400',
    cyan: 'hover:text-cyan-600 dark:hover:text-cyan-400',
    sky: 'hover:text-sky-600 dark:hover:text-sky-400',
    blue: 'hover:text-blue-600 dark:hover:text-blue-400',
    indigo: 'hover:text-indigo-600 dark:hover:text-indigo-400',
    violet: 'hover:text-violet-600 dark:hover:text-violet-400',
    purple: 'hover:text-purple-600 dark:hover:text-purple-400',
    fuchsia: 'hover:text-fuchsia-600 dark:hover:text-fuchsia-400',
    pink: 'hover:text-pink-600 dark:hover:text-pink-400',
    rose: 'hover:text-rose-600 dark:hover:text-rose-400',
    custom: 'hover:text-blue-600 dark:hover:text-blue-400'
  }
  
  return colorMap[primaryColor] || 'hover:text-blue-600 dark:hover:text-blue-400'
})

const brandTextColorStyle = computed(() => {
  const primaryColor = themeConfig.primaryColor.value
  const colorMap: Record<string, string> = {
    black: 'text-gray-800 dark:text-gray-300',
    red: 'text-red-600 dark:text-red-400',
    orange: 'text-orange-600 dark:text-orange-400',
    amber: 'text-amber-600 dark:text-amber-400',
    yellow: 'text-yellow-600 dark:text-yellow-400',
    lime: 'text-lime-600 dark:text-lime-400',
    green: 'text-green-600 dark:text-green-400',
    emerald: 'text-emerald-600 dark:text-emerald-400',
    teal: 'text-teal-600 dark:text-teal-400',
    cyan: 'text-cyan-600 dark:text-cyan-400',
    sky: 'text-sky-600 dark:text-sky-400',
    blue: 'text-blue-600 dark:text-blue-400',
    indigo: 'text-indigo-600 dark:text-indigo-400',
    violet: 'text-violet-600 dark:text-violet-400',
    purple: 'text-purple-600 dark:text-purple-400',
    fuchsia: 'text-fuchsia-600 dark:text-fuchsia-400',
    pink: 'text-pink-600 dark:text-pink-400',
    rose: 'text-rose-600 dark:text-rose-400',
    custom: 'text-blue-600 dark:text-blue-400'
  }
  
  return colorMap[primaryColor] || 'text-blue-600 dark:text-blue-400'
})

// 心形图标颜色样式
const heartIconColorStyle = computed(() => {
  const primaryColor = themeConfig.primaryColor.value
  const colorMap: Record<string, string> = {
    black: 'text-gray-600',
    red: 'text-red-500',
    orange: 'text-orange-500',
    amber: 'text-amber-500',
    yellow: 'text-yellow-500',
    lime: 'text-lime-500',
    green: 'text-green-500',
    emerald: 'text-emerald-500',
    teal: 'text-teal-500',
    cyan: 'text-cyan-500',
    sky: 'text-sky-500',
    blue: 'text-blue-500',
    indigo: 'text-indigo-500',
    violet: 'text-violet-500',
    purple: 'text-purple-500',
    fuchsia: 'text-fuchsia-500',
    pink: 'text-pink-500',
    rose: 'text-rose-500',
    custom: 'text-red-500'
  }
  
  return colorMap[primaryColor] || 'text-red-500'
})

// 边框颜色样式
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

// 背景颜色样式
const backgroundColorStyle = computed(() => {
  const neutralColor = themeConfig.neutralColor.value
  const colorMap: Record<string, string> = {
    slate: 'from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900',
    gray: 'from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900',
    zinc: 'from-zinc-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900',
    neutral: 'from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900',
    stone: 'from-stone-50 via-white to-stone-50 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900'
  }
  
  return colorMap[neutralColor] || 'from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
})

// 文本颜色样式
const textColorStyle = computed(() => {
  const neutralColor = themeConfig.neutralColor.value
  const colorMap: Record<string, string> = {
    slate: 'text-slate-600 dark:text-slate-400',
    gray: 'text-gray-600 dark:text-gray-400',
    zinc: 'text-zinc-600 dark:text-zinc-400',
    neutral: 'text-neutral-600 dark:text-neutral-400',
    stone: 'text-stone-600 dark:text-stone-400'
  }
  
  return colorMap[neutralColor] || 'text-gray-600 dark:text-gray-400'
})

// 标题文本颜色样式
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

// 次要文本颜色样式
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
</script> 