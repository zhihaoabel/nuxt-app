<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
    <UContainer class="max-w-4xl">
      <div class="space-y-12">
        <!-- 页面标题 -->
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            系统字体演示 System Font Demo
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            展示系统默认字体在不同场景下的效果
          </p>
        </div>

        <!-- 字体演示卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 系统默认字体 -->
          <UCard class="p-6">
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              系统默认字体 System Default
            </h3>
            <div class="space-y-3">
              <p class="text-sm">
                这是系统默认字体的小号文本演示。自动适配最佳字体。
              </p>
              <p class="text-base">
                这是系统默认字体的标准文本演示。清晰易读。
              </p>
              <p class="text-lg font-medium">
                这是系统默认字体的大号标题演示。
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                支持中英文混排：Hello 你好 World 世界 123
              </p>
            </div>
          </UCard>

          <!-- 等宽字体 -->
          <UCard class="p-6">
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              等宽字体 Monospace
            </h3>
            <div class="space-y-3">
              <p class="font-mono text-sm">
                这是等宽字体的演示。适合代码显示。
              </p>
              <p class="font-mono text-base">
                const message = "Hello 世界";
              </p>
              <p class="font-mono text-lg">
                console.log("代码演示");
              </p>
              <p class="font-mono text-xs text-gray-500 dark:text-gray-400">
                Numbers: 123456789 中文：一二三四五
              </p>
            </div>
          </UCard>

          <!-- 不同字重演示 -->
          <UCard class="p-6">
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              字重演示 Font Weights
            </h3>
            <div class="space-y-3">
              <p class="text-sm font-light">
                轻体文本 Light - 优雅轻盈的效果
              </p>
              <p class="text-base font-normal">
                常规文本 Regular - 标准阅读字重
              </p>
              <p class="text-lg font-medium">
                中等文本 Medium - 适合小标题
              </p>
              <p class="text-lg font-bold">
                粗体文本 Bold - 强调和标题
              </p>
            </div>
          </UCard>

          <!-- 实际应用场景 -->
          <UCard class="p-6">
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              实际应用 Real Usage
            </h3>
            <div class="space-y-3">
              <p class="text-sm">
                This is bilingual content. 这是双语内容演示。
              </p>
              <p class="text-base">
                Perfect for modern web apps. 完美适合现代网页应用。
              </p>
              <p class="text-lg font-semibold">
                Natural Typography 自然排版效果
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                自动选择最佳字体，无需手动配置
              </p>
            </div>
          </UCard>
        </div>

        <!-- 系统字体优势 -->
        <UCard class="p-8">
          <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            系统字体的优势 System Font Benefits
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                性能优势
              </h4>
              <div class="space-y-2">
                <p class="text-gray-700 dark:text-gray-300">
                  ⚡ 无需下载字体文件，加载速度更快
                </p>
                <p class="text-gray-700 dark:text-gray-300">
                  📱 自动适配不同设备的最佳字体
                </p>
                <p class="text-gray-700 dark:text-gray-300">
                  🎯 减少网络请求，提升用户体验
                </p>
                <p class="text-gray-700 dark:text-gray-300">
                  💾 节省带宽，降低服务器负载
                </p>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                用户体验
              </h4>
              <div class="space-y-2">
                <p class="text-gray-700 dark:text-gray-300">
                  👁️ 用户熟悉的字体，阅读更舒适
                </p>
                <p class="text-gray-700 dark:text-gray-300">
                  🌍 跨平台一致性，自动本地化
                </p>
                <p class="text-gray-700 dark:text-gray-300">
                  ♿ 更好的无障碍支持
                </p>
                <p class="text-gray-700 dark:text-gray-300">
                  🔧 无需维护字体配置
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- 实际应用场景 -->
        <UCard class="p-8">
          <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            实际应用场景 Real-world Usage
          </h3>
          
          <!-- 文章标题 -->
          <article class="space-y-6">
            <header>
              <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                如何在 Nuxt.js 中使用系统字体
              </h1>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                发布时间：2024年1月15日 | 作者：开发者
              </p>
            </header>
            
            <!-- 文章内容 -->
            <div class="prose prose-gray dark:prose-invert max-w-none">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                在现代 Web 开发中，使用系统字体是一个明智的选择。系统字体不仅加载速度快，
                还能为用户提供熟悉的阅读体验，同时减少了字体配置的复杂性。
              </p>
              
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                通过合理的字体栈配置，我们可以确保在不同操作系统上都能显示最佳的字体效果。
                无论是 macOS 的 PingFang SC，Windows 的微软雅黑，还是 Linux 的系统字体，
                都能提供优秀的中英文混排效果。
              </p>
              
              <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400">
                "最好的字体配置是用户感觉不到的配置，它应该自然、快速、无缝地工作。"
              </blockquote>
            </div>
          </article>
        </UCard>

        <!-- 返回按钮 -->
        <div class="text-center">
          <UButton 
            to="/" 
            variant="outline" 
            size="lg"
          >
            返回首页 Back to Home
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '系统字体演示 - System Font Demo',
  meta: [
    { name: 'description', content: '展示系统默认字体在不同场景下的效果' }
  ]
})
</script> 