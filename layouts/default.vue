<template>
    <UPage>
        <div class=" w-full bg-default">
            <!-- 头部 -->
            <SiteHeader :navigation-items="navigationItems" :all-navigation-items="allNavigationItems" />

            <!-- 主要内容 -->
            <main>
                <slot />
            </main>

            <!-- 页脚 -->
            <SiteFooter :footer-links="footerLinks" />
        </div>
    </UPage>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const colorMode = useColorMode()
const themeConfig = useThemeConfig()
const toast = useToast()

// 导航菜单数据
const navigationItems = reactive<NavigationMenuItem[][]>([
    [
        {
            label: 'Get Started',
            to: '/get-started'
        },
        {
            label: 'Payments',
            to: '/payments'
        },
        {
            label: 'Revenue',
            to: '/content'
        },
        {
            label: 'Platforms and marketplaces',
            to: '/content'
        },
        {
            label: 'Money management',
            to: '/content'
        },
        {
            label: 'Developer tools',
            to: '/content'
        },
        {
            label: 'APIs & SDKs',
            children: [
                {
                    label: 'REST API',
                    description: 'Complete REST API documentation',
                    icon: "i-lucide-house",
                    to: '/',
                    class: "flex items-center space-x-3"
                },
                {
                    label: 'GraphQL API',
                    description: 'GraphQL API reference',
                    icon: 'i-lucide-cloud-download',
                    to: '/',
                    class: "flex items-center space-x-3"
                },
                {
                    label: 'SDKs',
                    description: 'Software development kits',
                    icon: 'i-lucide-smile',
                    to: '/',
                    class: "flex items-center space-x-3"
                },
                {
                    label: 'Webhooks',
                    description: 'Real-time event notifications',
                    icon: "lucide:bell-ring",
                    to: '/',
                    class: "flex items-center space-x-3"
                }
            ]
        },
        {
            label: 'Help',
            children: [
                {
                    label: 'Documentation',
                    description: 'Complete guides and tutorials',
                    to: '/'
                },
                {
                    label: 'Support Center',
                    description: 'Get help from our team',
                    to: '/'
                },
                {
                    label: 'Community',
                    description: 'Join our developer community',
                    to: '/'
                },
                {
                    label: 'Status',
                    description: 'Check system status',
                    to: '/'
                }
            ]
        }
    ]
])

// 合并所有菜单项（用于移动端）
const allNavigationItems = computed(() => {
    const flatItems = navigationItems.flat()

    // 为每个菜单项添加 onSelect 处理函数来关闭移动端菜单
    const addSelectHandler = (items: any[]): any[] => {
        return items.map(item => {
            const newItem = { ...item }

            // 如果有 children，递归处理
            if (newItem.children) {
                newItem.children = addSelectHandler(newItem.children)
            }

            return newItem
        })
    }

    return addSelectHandler(flatItems)
})

// 默认布局的元数据
useHead({
    titleTemplate: '%s - Nuxt Demo',
    meta: [
        { name: 'description', content: 'Nuxt 3 演示应用' }
    ]
})

// 页脚链接数据
const footerLinks = reactive({
    products: [
        { label: '支付处理', to: '/payments', external: false },
        { label: '收入管理', to: '/revenue', external: false },
        { label: '平台市场', to: '/platforms', external: false },
        { label: '资金管理', to: '/money-management', external: false },
        { label: '开发工具', to: '/developer-tools', external: false }
    ],
    resources: [
        { label: '文档中心', to: '/get-started', external: false },
        { label: 'API 参考', to: '/api', external: false },
        { label: '示例代码', to: '/examples', external: false },
        { label: '最佳实践', to: '/best-practices', external: false },
        { label: '更新日志', to: '/changelog', external: false }
    ],
    support: [
        { label: '帮助中心', to: '/help', external: false },
        { label: '联系我们', to: '/contact', external: false },
        { label: '社区论坛', to: 'https://community.example.com', external: true },
        { label: '状态页面', to: 'https://status.example.com', external: true },
        { label: '反馈建议', to: '/feedback', external: false }
    ]
})
</script>