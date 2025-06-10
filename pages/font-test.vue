<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
    <UContainer class="max-w-6xl">
      <div class="space-y-12">
        <!-- 页面标题 -->
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            字体全场景测试 Font Comprehensive Test
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            验证默认字体栈在各种使用场景下的效果
          </p>
        </div>

        <!-- 基础文本测试 -->
        <UCard class="p-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            基础文本测试 Basic Text Test
          </h2>
          <div class="space-y-4">
            <p class="text-sm">小号文本 Small text: 这是小号中文文本 This is small English text 123</p>
            <p class="text-base">标准文本 Regular text: 这是标准中文文本 This is regular English text 456</p>
            <p class="text-lg">大号文本 Large text: 这是大号中文文本 This is large English text 789</p>
            <p class="text-xl font-semibold">标题文本 Heading text: 这是标题中文文本 This is heading English text</p>
          </div>
        </UCard>

        <!-- Emoji 和符号测试 -->
        <UCard class="p-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Emoji 和符号测试 Emoji & Symbol Test
          </h2>
          <div class="space-y-4">
            <p class="text-lg">
              常用 Emoji: 😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚
            </p>
            <p class="text-lg">
              表情符号: ❤️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉️ ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐
            </p>
            <p class="text-lg">
              技术符号: ⚡ 🔥 💻 📱 🖥️ ⌨️ 🖱️ 🖨️ 💾 💿 📀 🧮 🎮 🕹️ 📷 📸 📹 🎥 📽️ 🎞️
            </p>
            <p class="text-lg">
              数学符号: ∑ ∏ √ ∞ ∫ ≠ ≤ ≥ ± × ÷ ° ∆ ∇ ∂ ∈ ∉ ∪ ∩ ⊂ ⊃ ⊆ ⊇
            </p>
          </div>
        </UCard>

        <!-- 代码和等宽字体测试 -->
        <UCard class="p-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            代码测试 Code Test
          </h2>
          <div class="space-y-4">
            <p>内联代码: <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">const message = "Hello 世界";</code></p>
            
            <div>
              <p class="mb-2">代码块:</p>
              <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code>// JavaScript 示例
function greet(name) {
  console.log(`Hello, ${name}! 你好，${name}！`);
  return `欢迎 Welcome ${name}`;
}

// 中文注释和英文代码混合
const users = [
  { name: "张三", age: 25 },
  { name: "John", age: 30 },
  { name: "李四", age: 28 }
];

// 数字和符号
const numbers = [1, 2, 3, 4, 5];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];
</code></pre>
            </div>
          </div>
        </UCard>

        <!-- Markdown 内容测试 -->
        <UCard class="p-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Markdown 内容测试 Markdown Content Test
          </h2>
          <div class="prose prose-gray dark:prose-invert max-w-none">
            <h3>这是 Markdown 标题 This is Markdown Heading</h3>
            
            <p>
              这是一段 Markdown 正文内容，包含中英文混排。This is a paragraph of Markdown content with mixed Chinese and English text.
              我们可以测试各种文本效果，包括 <strong>粗体文本 bold text</strong> 和 <em>斜体文本 italic text</em>。
            </p>

            <blockquote>
              这是一个引用块，通常使用衬线字体来增强可读性。
              This is a blockquote, typically using serif fonts for enhanced readability.
              "好的设计是显而易见的，伟大的设计是透明的。"
            </blockquote>

            <ul>
              <li>列表项目一 List item one</li>
              <li>列表项目二 List item two</li>
              <li>列表项目三 List item three</li>
            </ul>

            <ol>
              <li>有序列表项目一 Ordered list item one</li>
              <li>有序列表项目二 Ordered list item two</li>
              <li>有序列表项目三 Ordered list item three</li>
            </ol>

            <p>
              内联代码示例: <code>npm install @nuxtjs/google-fonts</code>
            </p>

            <pre><code>// 代码块示例
export default {
  name: "FontTest",
  data() {
    return {
      message: "Hello 世界"
    }
  }
}</code></pre>
          </div>
        </UCard>

        <!-- 多语言测试 -->
        <UCard class="p-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            多语言测试 Multi-language Test
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold mb-3">简体中文 Simplified Chinese</h4>
              <p class="text-sm mb-2">这是简体中文文本示例。包含常用汉字和标点符号。</p>
              <p class="text-base">中文数字：一二三四五六七八九十</p>
              <p class="text-lg font-medium">标题：现代化的网页字体解决方案</p>
            </div>
            
            <div>
              <h4 class="font-semibold mb-3">繁體中文 Traditional Chinese</h4>
              <p class="text-sm mb-2">這是繁體中文文本示例。包含常用漢字和標點符號。</p>
              <p class="text-base">中文數字：一二三四五六七八九十</p>
              <p class="text-lg font-medium">標題：現代化的網頁字體解決方案</p>
            </div>
            
            <div>
              <h4 class="font-semibold mb-3">English</h4>
              <p class="text-sm mb-2">This is English text sample with various characters and punctuation.</p>
              <p class="text-base">Numbers: 1234567890</p>
              <p class="text-lg font-medium">Heading: Modern Web Font Solutions</p>
            </div>
            
            <div>
              <h4 class="font-semibold mb-3">Mixed 混合</h4>
              <p class="text-sm mb-2">Mixed content 混合内容 with English and 中文 characters.</p>
              <p class="text-base">URL: https://example.com/中文路径</p>
              <p class="text-lg font-medium">Email: user@example.com 用户邮箱</p>
            </div>
          </div>
        </UCard>

        <!-- 字体权重测试 -->
        <UCard class="p-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            字体权重测试 Font Weight Test
          </h2>
          <div class="space-y-3">
            <p class="font-light text-lg">轻体 Light (300): 这是轻体文本 This is light text</p>
            <p class="font-normal text-lg">常规 Regular (400): 这是常规文本 This is regular text</p>
            <p class="font-medium text-lg">中等 Medium (500): 这是中等文本 This is medium text</p>
            <p class="font-semibold text-lg">半粗 Semibold (600): 这是半粗文本 This is semibold text</p>
            <p class="font-bold text-lg">粗体 Bold (700): 这是粗体文本 This is bold text</p>
          </div>
        </UCard>

        <!-- 特殊字符测试 -->
        <UCard class="p-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            特殊字符测试 Special Characters Test
          </h2>
          <div class="space-y-4">
            <p class="text-lg">
              标点符号: 。，！？；：""''（）【】《》〈〉「」『』〔〕
            </p>
            <p class="text-lg">
              货币符号: ¥ $ € £ ¢ ₹ ₽ ₩ ₪ ₫ ₡ ₦ ₨ ₱ ₵ ₴ ₸ ₼
            </p>
            <p class="text-lg">
              单位符号: ℃ ℉ ° ′ ″ ℓ ㎡ ㎥ ㎏ ㎎ ㎝ ㎞ ㎢ ㎦ ㎧ ㎨
            </p>
            <p class="text-lg">
              其他符号: © ® ™ § ¶ † ‡ • ‰ ‱ ′ ″ ‴ ※ ‼ ⁇ ⁈ ⁉
            </p>
          </div>
        </UCard>

        <!-- 返回按钮 -->
        <div class="text-center">
          <UButton to="/" variant="outline" size="lg">
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
  title: '字体全场景测试 - Font Comprehensive Test',
  meta: [
    { name: 'description', content: '验证默认字体栈在各种使用场景下的效果' }
  ]
})
</script> 