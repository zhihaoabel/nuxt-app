<template>
  <div>
    <UContainer class="max-w-7xl mx-auto">
      <div class="py-12 space-y-12">
        <!-- 文档页面主要内容 -->
        <UContainer>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- 主内容区域 -->
            <div class="lg:col-span-2">
              <!-- 标题和描述 -->
              <div class="mb-8">
                <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Documentation
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  Explore our guides and examples to integrate Onerway.
                </p>
              </div>

              <!-- 快速开始按钮区域 -->
              <div class="flex flex-col sm:flex-row gap-4 mb-12">
                <UButton size="lg" color="primary" icon="i-heroicons-rocket-launch" @click="handleGetStarted"
                  class="px-8 py-4 text-lg font-semibold">
                  Get started with payments
                </UButton>
                <UButton size="lg" variant="ghost" color="neutral" @click="handleExploreProducts"
                  :to="{ hash: '#browse-by-product' }"
                  class="px-8 py-4 text-lg font-semibold underline decoration-2 underline-offset-4">
                  Explore all products
                </UButton>
              </div>

              <!-- 产品卡片网格 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <!-- Payments 卡片 -->
                <UCard class="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  @click="handleProductClick('payments')">
                  <div class="p-6">
                    <div class="flex items-center space-x-3 mb-4">
                      <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <UIcon name="i-heroicons-credit-card" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Payments
                      </h3>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Accept payments online, in person, or through your platform.
                    </p>
                  </div>
                </UCard>

                <!-- Connect 卡片 -->
                <UCard class="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  @click="handleProductClick('connect')">
                  <div class="p-6">
                    <div class="flex items-center space-x-3 mb-4">
                      <div class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                        <UIcon name="i-heroicons-link" class="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 class="text-lg font-semibold">
                        Connect
                      </h3>
                    </div>
                    <p class="text-sm leading-relaxed">
                      Everything platforms need to get sellers paid.
                    </p>
                  </div>
                </UCard>

                <!-- Billing 卡片 -->
                <UCard class="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  @click="handleProductClick('billing')">
                  <div class="p-6">
                    <div class="flex items-center space-x-3 mb-4">
                      <div
                        class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <UIcon name="i-heroicons-document-text" class="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Billing
                      </h3>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Build and scale your recurring business model.
                    </p>
                  </div>
                </UCard>

                <!-- Terminal 卡片 -->
                <UCard class="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  @click="handleProductClick('terminal')">
                  <div class="p-6">
                    <div class="flex items-center space-x-3 mb-4">
                      <div
                        class="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                        <UIcon name="i-heroicons-device-tablet" class="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Terminal
                      </h3>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      In-person and omnichannel payments.
                    </p>
                  </div>
                </UCard>
              </div>
            </div>

            <!-- 右侧边栏 -->
            <div class="lg:col-span-1">
              <!-- 最近查看 -->
              <UCard class="mb-6">
                <div class="p-6">
                  <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-4">
                    Recently viewed
                  </h3>
                  <div class="space-y-3">
                    <UButton variant="ghost" color="primary" size="sm"
                      class="w-full justify-start text-left p-1 hover:bg-gray-50 dark:hover:bg-gray-800"
                      @click="handleRecentClick('get-started')">
                      Get started
                    </UButton>
                    <UButton variant="ghost" color="primary" size="sm"
                      class="w-full justify-start text-left p-1 hover:bg-gray-50 dark:hover:bg-gray-800"
                      @click="handleRecentClick('payments')">
                      Payments
                    </UButton>
                    <UButton variant="ghost" color="primary" size="sm"
                      class="w-full justify-start text-left p-1 hover:bg-gray-50 dark:hover:bg-gray-800"
                      @click="handleRecentClick('testing')">
                      Testing
                    </UButton>
                  </div>
                  <div class="py-2">
                    <UButton variant="link" color="primary" size="sm" class="p-0.5 hover:underline"
                      @click="handleSignIn">
                      Sign in
                    </UButton>
                    <span class="text-gray-600 dark:text-gray-400 text-sm"> or </span>
                    <UButton variant="link" color="primary" size="sm" class="hover:underline"
                      @click="handleCreateAccount">
                      create an account
                    </UButton>
                    <span class="text-gray-600 dark:text-gray-400 text-sm">to load your test API keys.</span>
                  </div>
                </div>
              </UCard>

              <!-- 测试信用卡 -->
              <UCard variant="soft"
                class="overflow-hidden group hover:shadow-lg transition-all duration-300 border-none bg-default">
                <div>
                  <!-- Test cards 标题和链接 -->
                  <div class="flex items-center justify-between mb-1 cursor-pointer" @click="handleTestCardsClick">
                    <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
                      Test cards
                    </h3>
                    <UIcon name="i-heroicons-arrow-top-right-on-square"
                      class="size-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                  </div>

                  <!-- 卡片说明 -->
                  <div class="mb-4 text-left">
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Click to view more test cards
                    </p>
                  </div>

                  <!-- 信用卡视觉设计 -->
                  <div class="relative ">
                    <!-- 信用卡背景 -->
                    <div
                      class="aspect-[1.586/1] bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 rounded-xl p-4 sm:p-6 text-white shadow-lg transform group-hover:scale-105 transition-transform duration-300 relative overflow-hidden flex flex-col">
                      <!-- 背景装饰图案 -->
                      <div
                        class="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-8 -translate-y-8">
                      </div>
                      <div
                        class="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full transform -translate-x-4 translate-y-4">
                      </div>

                      <!-- 芯片图标和品牌标识 -->
                      <div class="flex items-start justify-between mb-4 sm:mb-6">
                        <!-- Visa/Mastercard 风格标识 -->
                        <div class="flex space-x-1">
                          <UIcon name="simple-icons:visa" class="size-4 sm:size-8 text-blue-300" />
                          <UIcon name="logos:mastercard" class="size-4 sm:size-8" />
                        </div>
                        <!-- 品牌标识 -->
                        <div class="text-right">
                          <span class="text-xs font-medium opacity-60">Test Card</span>
                        </div>
                      </div>

                      <!-- 卡号 - 使用 flex-1 占据中间空间 -->
                      <div class="flex-1 flex items-center justify-between group/card">
                        <div @click.stop="copyField('cardNumber')"
                          class="text-base sm:text-lg font-mono tracking-wide font-semibold cursor-pointer hover:text-white/90 hover:bg-white/10 transition-all duration-200 select-none rounded px-2 py-1 -mx-2 -my-1"
                          :title="copyStatuses.cardNumber">
                          {{ formattedCardNumber }}
                        </div>
                        <!-- 复制按钮 -->
                        <button @click.stop="copyField('cardNumber')"
                          class="opacity-60 sm:opacity-0 sm:group-hover/card:opacity-100 transition-opacity duration-200 p-1.5 rounded-md hover:bg-white/20 active:bg-white/30 touch-manipulation"
                          :title="copyStatuses.cardNumber">
                          <UIcon
                            :name="copyStatuses.cardNumber === '已复制!' ? 'i-heroicons-check' : 'i-heroicons-clipboard'"
                            class="size-4 text-white/80 hover:text-white transition-colors duration-200" />
                        </button>
                      </div>

                      <!-- 底部信息区域 -->
                      <div class="space-y-2 sm:space-y-3">
                        <!-- 卡片底部信息 -->
                        <div class="flex items-end justify-between">
                          <div class="flex-1">
                            <div class="text-xs opacity-60 mb-1">VALID THRU</div>
                            <div @click.stop="copyField('expiry')"
                              class="text-sm font-mono cursor-pointer hover:text-white/90 hover:bg-white/10 transition-all duration-200 select-none rounded px-2 py-1 -mx-2 -my-1 relative z-10 inline-block"
                              :title="copyStatuses.expiry">
                              {{ formattedExpiryDate }}
                            </div>
                          </div>
                          <div class="text-right flex-1">
                            <div class="text-xs opacity-60 mb-1">CVV</div>
                            <div @click.stop="copyField('cvv')"
                              class="text-sm font-mono cursor-pointer hover:text-white/90 hover:bg-white/10 transition-all duration-200 select-none rounded px-2 py-1 -mx-2 -my-1 relative z-10 inline-block"
                              :title="copyStatuses.cvv">
                              {{ formattedCvv }}
                            </div>
                          </div>
                        </div>

                        <UIcon name="bx:chip" class="size-4 sm:size-6 flex justify-self-end-safe" />
                      </div>
                    </div>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </UContainer>

        <!-- 功能特性 -->
        <UContainer>
          <h2 id="browse-by-product" class="text-2xl font-bold mb-6">Browse by product</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <!-- 颜色配置卡片 -->
            <UCard class="hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              @click="handleFeatureClick('color')">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 flex items-center justify-center transition-all duration-300" :style="{
                  backgroundColor: 'var(--ui-primary, #3b82f6)',
                  borderRadius: 'var(--ui-radius, 0.5rem)'
                }">
                  <UIcon name="i-heroicons-swatch" class="w-5 h-5 transition-all duration-300 text-white" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  颜色配置
                </h3>
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                支持 18 种主色调和 5 种中性色的选择，实时预览颜色变化效果。
              </p>
            </UCard>

            <!-- 圆角调整卡片 -->
            <UCard class="hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              @click="handleFeatureClick('radius')">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                  <UIcon name="i-heroicons-squares-2x2" class="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  圆角调整
                </h3>
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                通过滑块或快捷按钮调整圆角半径，从 0 到 0.5rem 的精确控制。
              </p>
            </UCard>

            <!-- 主题模式卡片 -->
            <UCard class="hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              @click="handleFeatureClick('theme')">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                  <UIcon name="i-heroicons-moon" class="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  主题模式
                </h3>
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                支持浅色、深色和系统自动模式，无缝切换不同主题风格。
              </p>
            </UCard>

            <!-- 实时预览卡片 -->
            <UCard class="hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              @click="handleFeatureClick('preview')">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center">
                  <UIcon name="i-heroicons-eye" class="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  实时预览
                </h3>
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                所有配置更改都会实时反映在页面元素上，提供即时的视觉反馈。
              </p>
            </UCard>

            <!-- 配置导出卡片 -->
            <UCard class="hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              @click="handleFeatureClick('export')">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center">
                  <UIcon name="i-heroicons-clipboard-document" class="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  配置导出
                </h3>
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                一键复制当前主题配置到剪贴板，方便在其他项目中使用。
              </p>
            </UCard>

            <!-- 重置功能卡片 -->
            <UCard class="hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              @click="handleFeatureClick('reset')">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-xl flex items-center justify-center">
                  <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  重置功能
                </h3>
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                快速重置所有配置到默认状态，方便重新开始配置。
              </p>
            </UCard>
          </div>
        </UContainer>

        <!-- 演示链接 -->
        <UContainer>
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              在线演示
            </h3>

            <!-- 特色卡片 - 带外层阴影 -->
            <div class="mb-12 flex justify-center">
              <div class="relative max-w-md group cursor-pointer" @click="handleDemoClick('terminal')">
                <!-- 外层阴影容器 - 只在 hover 时显示 -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 scale-105 group-hover:opacity-30 transition-all duration-500 ease-out border-none">
                </div>

                <!-- 主卡片 -->
                <UCard
                  class="relative group-hover:-translate-y-2 transition-all duration-300 group-hover:shadow-soft-lg group-hover:scale-105 group-active:scale-95 border-none">
                  <div class="p-8">
                    <div class="flex items-center space-x-4 mb-6">
                      <!-- 图标 -->
                      <div
                        class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <UIcon name="i-heroicons-command-line" class="w-8 h-8 text-white" />
                      </div>

                      <!-- 标题和描述 -->
                      <div class="text-left">
                        <h4 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                          Terminal
                        </h4>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">
                          In-person and omnichannel payments
                        </p>
                      </div>
                    </div>

                    <!-- 按钮 -->
                    <UButton color="primary" size="lg" block variant="solid"
                      class="shadow-md group-hover:shadow-glow-lg transition-all duration-300"
                      @click.stop="handleDemoClick('terminal')">
                      开始使用
                    </UButton>
                  </div>
                </UCard>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <!-- 基础版本 -->
              <UCard class="hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                @click="handleDemoClick('basic')">
                <div class="p-8">
                  <div class="mb-6">
                    <h4 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      基础主题配置器
                    </h4>
                    <p class="text-gray-600 dark:text-gray-400">
                      基本的主题配置功能，包含颜色选择、圆角调整和主题切换。
                    </p>
                  </div>
                  <div class="flex flex-col space-y-3">
                    <UButton color="primary" size="lg" block icon="i-heroicons-eye"
                      @click.stop="handleDemoClick('basic')">
                      查看基础演示
                    </UButton>
                    <div class="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="flex items-center space-x-1">
                        <UIcon name="i-heroicons-check" class="w-4 h-4" />
                        <span>颜色配置</span>
                      </span>
                      <span class="flex items-center space-x-1">
                        <UIcon name="i-heroicons-check" class="w-4 h-4" />
                        <span>主题切换</span>
                      </span>
                    </div>
                  </div>
                </div>
              </UCard>

              <!-- 高级版本 -->
              <UCard class="hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                @click="handleDemoClick('advanced')">
                <div class="p-8">
                  <div class="mb-6">
                    <h4 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      高级主题配置器
                    </h4>
                    <p class="text-gray-600 dark:text-gray-400">
                      完整功能的主题配置器，包含实时预览、配置导出和重置功能。
                    </p>
                  </div>
                  <div class="flex flex-col space-y-3">
                    <UButton color="primary" size="lg" block icon="i-heroicons-sparkles"
                      @click.stop="handleDemoClick('advanced')">
                      查看高级演示
                    </UButton>
                    <div class="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="flex items-center space-x-1">
                        <UIcon name="i-heroicons-check" class="w-4 h-4" />
                        <span>实时预览</span>
                      </span>
                      <span class="flex items-center space-x-1">
                        <UIcon name="i-heroicons-check" class="w-4 h-4" />
                        <span>配置导出</span>
                      </span>
                      <span class="flex items-center space-x-1">
                        <UIcon name="i-heroicons-check" class="w-4 h-4" />
                        <span>重置功能</span>
                      </span>
                    </div>
                  </div>
                </div>
              </UCard>

              <!-- 第三个卡片 - 带特殊效果 -->
              <div class="relative group cursor-pointer" @click="handleDemoClick('enterprise')">
                <!-- 外层光晕效果 - 只在 hover 时显示 -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur-lg opacity-0 scale-105 group-hover:opacity-20 transition-all duration-500 ease-out">
                </div>

                <!-- 主卡片 -->
                <UCard
                  class="relative group-hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-active:scale-95">
                  <div class="p-8">
                    <div class="mb-6">
                      <h4 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        企业版配置器
                      </h4>
                      <p class="text-gray-600 dark:text-gray-400">
                        专为企业级应用设计，支持多租户、权限管理和高级定制。
                      </p>
                    </div>
                    <div class="flex flex-col space-y-3">
                      <UButton to="/" color="primary" size="lg" block icon="i-heroicons-star"
                        @click.stop="handleDemoClick('enterprise')">
                        查看企业演示
                      </UButton>
                      <div class="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="flex items-center space-x-1">
                          <UIcon name="i-heroicons-check" class="w-4 h-4" />
                          <span>多租户支持</span>
                        </span>
                        <span class="flex items-center space-x-1">
                          <UIcon name="i-heroicons-check" class="w-4 h-4" />
                          <span>权限管理</span>
                        </span>
                        <span class="flex items-center space-x-1">
                          <UIcon name="i-heroicons-check" class="w-4 h-4" />
                          <span>高级定制</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </UCard>
              </div>
            </div>
          </div>
        </UContainer>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
// 使用默认布局
definePageMeta({
  layout: 'default'
})
const toast = useToast()

// 功能特性卡片点击处理
const handleFeatureClick = (feature: string) => {
  const featureMap = {
    color: {
      title: '颜色配置',
      description: '打开主题配置器来体验颜色配置功能',
      icon: 'i-heroicons-swatch'
    },
    radius: {
      title: '圆角调整',
      description: '打开主题配置器来体验圆角调整功能',
      icon: 'i-heroicons-squares-2x2'
    },
    theme: {
      title: '主题模式',
      description: '打开主题配置器来体验主题模式切换',
      icon: 'i-heroicons-moon'
    },
    preview: {
      title: '实时预览',
      description: '所有配置更改都会实时反映在页面上',
      icon: 'i-heroicons-eye'
    },
    export: {
      title: '配置导出',
      description: '点击主题配置器中的"复制配置"按钮来导出配置',
      icon: 'i-heroicons-clipboard-document'
    },
    reset: {
      title: '重置功能',
      description: '点击主题配置器中的"重置"按钮来重置配置',
      icon: 'i-heroicons-arrow-path'
    }
  }

  const featureInfo = featureMap[feature as keyof typeof featureMap]

  if (featureInfo) {
    toast.add({
      title: featureInfo.title,
      description: featureInfo.description,
      icon: featureInfo.icon,
      color: 'primary',
      duration: 3000
    })

    // 如果是颜色、圆角或主题相关功能，显示提示
    if (['color', 'radius', 'theme'].includes(feature)) {
      toast.add({
        title: '提示',
        description: '请点击右上角的主题配置器按钮来体验此功能',
        icon: 'i-heroicons-information-circle',
        color: 'info',
        duration: 5000
      })
    }
  }
}

// 快速开始按钮点击处理
const handleGetStarted = () => {
  toast.add({
    title: 'Get started with payments',
    description: '即将跳转到支付快速开始指南...',
    icon: 'i-heroicons-rocket-launch',
    color: 'primary',
    duration: 3000
  })
}

// 探索产品按钮点击处理
const handleExploreProducts = () => {
  toast.add({
    title: 'Explore all products',
    description: '即将跳转到产品概览页面...',
    icon: 'i-heroicons-squares-2x2',
    color: 'neutral',
    duration: 3000
  })
}

// 产品卡片点击处理
const handleProductClick = (product: string) => {
  const productMap = {
    payments: {
      title: 'Payments',
      description: '即将跳转到支付产品文档...',
      icon: 'i-heroicons-credit-card'
    },
    connect: {
      title: 'Connect',
      description: '即将跳转到 Connect 平台文档...',
      icon: 'i-heroicons-link'
    },
    billing: {
      title: 'Billing',
      description: '即将跳转到订阅计费文档...',
      icon: 'i-heroicons-document-text'
    },
    terminal: {
      title: 'Terminal',
      description: '即将跳转到线下支付文档...',
      icon: 'i-heroicons-device-tablet'
    }
  }

  const productInfo = productMap[product as keyof typeof productMap]

  if (productInfo) {
    toast.add({
      title: productInfo.title,
      description: productInfo.description,
      icon: productInfo.icon,
      color: 'primary',
      duration: 3000
    })
  }
}

// 最近查看项目点击处理
const handleRecentClick = (item: string) => {
  const recentMap = {
    'get-started': {
      title: 'Get started',
      description: '即将跳转到快速开始指南...',
      icon: 'i-heroicons-rocket-launch'
    },
    'payments': {
      title: 'Payments',
      description: '即将跳转到支付文档...',
      icon: 'i-heroicons-credit-card'
    },
    'testing': {
      title: 'Testing',
      description: '即将跳转到测试指南...',
      icon: 'i-heroicons-beaker'
    }
  }

  const recentInfo = recentMap[item as keyof typeof recentMap]

  if (recentInfo) {
    toast.add({
      title: recentInfo.title,
      description: recentInfo.description,
      icon: recentInfo.icon,
      color: 'neutral',
      duration: 3000
    })
  }
}

// 登录按钮点击处理
const handleSignIn = () => {
  toast.add({
    title: '登录',
    description: '即将跳转到登录页面...',
    icon: 'i-heroicons-user',
    color: 'primary',
    duration: 3000
  })
}

// 创建账户按钮点击处理
const handleCreateAccount = () => {
  toast.add({
    title: '创建账户',
    description: '即将跳转到注册页面...',
    icon: 'i-heroicons-user-plus',
    color: 'primary',
    duration: 3000
  })
}

// 卡片数据
const cardNumber = '4242424242424242'
const cvv = '123'
const expiryDate = '1225'

// 复制状态管理
const copyStatuses = ref({
  cardNumber: '复制卡号',
  expiry: '复制有效期',
  cvv: '复制CVV'
})

// 格式化卡号显示（每4位加空格）
const formattedCardNumber = computed(() => {
  return cardNumber.replace(/(.{4})/g, '$1 ').trim()
})

// 格式化 CVV 显示（每3位加空格）
const formattedCvv = computed(() => {
  return cvv.replace(/(.{3})/g, '$1 ').trim()
})

// 格式化有效期显示（月/年）
const formattedExpiryDate = computed(() => {
  return expiryDate.replace(/(\d{2})(\d{2})/, '$1/$2')
})

// 统一的复制功能
const copyField = async (fieldType: 'cardNumber' | 'expiry' | 'cvv') => {
  const fieldConfig = {
    cardNumber: {
      value: cardNumber,
      name: '卡号',
      defaultStatus: '复制卡号'
    },
    expiry: {
      value: expiryDate,
      name: '有效期',
      defaultStatus: '复制有效期'
    },
    cvv: {
      value: cvv,
      name: 'CVV',
      defaultStatus: '复制CVV'
    }
  }

  const config = fieldConfig[fieldType]

  try {
    await navigator.clipboard.writeText(config.value)
    copyStatuses.value[fieldType] = '已复制!'

    toast.add({
      title: '复制成功',
      description: `${config.name}已复制到剪贴板`,
      icon: 'i-heroicons-clipboard-document-check',
      color: 'success',
      duration: 2000
    })

    // 2秒后恢复提示文本
    setTimeout(() => {
      copyStatuses.value[fieldType] = config.defaultStatus
    }, 2000)
  } catch (err) {
    copyStatuses.value[fieldType] = '复制失败'

    toast.add({
      title: '复制失败',
      description: `无法复制${config.name}到剪贴板，请手动复制`,
      icon: 'i-heroicons-exclamation-triangle',
      color: 'error',
      duration: 3000
    })

    setTimeout(() => {
      copyStatuses.value[fieldType] = config.defaultStatus
    }, 3000)
  }
}

// 测试卡片点击处理
const handleTestCardsClick = () => {
  toast.add({
    title: 'Test Cards',
    description: '即将跳转到测试卡片文档页面...',
    icon: 'i-heroicons-credit-card',
    color: 'primary',
    duration: 3000
  })
}

// 演示卡片点击处理
const handleDemoClick = (demo: string) => {
  const demoMap = {
    terminal: {
      title: 'Terminal 演示',
      description: '即将跳转到 Terminal 演示页面...',
      icon: 'i-heroicons-command-line'
    },
    basic: {
      title: '基础演示',
      description: '即将跳转到基础主题配置器演示页面...',
      icon: 'i-heroicons-eye'
    },
    advanced: {
      title: '高级演示',
      description: '即将跳转到高级主题配置器演示页面...',
      icon: 'i-heroicons-sparkles'
    },
    enterprise: {
      title: '企业演示',
      description: '即将跳转到企业版配置器演示页面...',
      icon: 'i-heroicons-star'
    }
  }

  const demoInfo = demoMap[demo as keyof typeof demoMap]

  if (demoInfo) {
    toast.add({
      title: demoInfo.title,
      description: demoInfo.description,
      icon: demoInfo.icon,
      color: 'success',
      duration: 3000
    })

    // 模拟跳转延迟
    setTimeout(() => {
      // 这里可以添加实际的路由跳转逻辑
      console.log(`跳转到 ${demo} 演示页面`)
    }, 1000)
  }
}

// SEO 头部信息
useSeoMeta({
  title: 'Nuxt UI 主题配置器演示',
  description: '仿照 Nuxt UI 官网的主题配置组件实现，支持实时预览和配置导出'
})
</script>