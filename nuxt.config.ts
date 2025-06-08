// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  nitro: {
    prerender: {
      routes: [
        // Include other routes but exclude problematic ones
        '/revenue',
        '/webhooks',
      ],
      ignore: ['/revenue', '/webhooks'], // Exclude problematic routes
    },
  },

  // 模块配置
  modules: [
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/icon',
    'nuxt-component-meta',
    '@nuxtjs/color-mode',
    '@nuxtjs/mdc',
    '@nuxthq/studio'
  ],

  // 组件自动导入配置
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  ui: {
    fonts: true,
  },

  mdc: {
    components: {
      prose: true
    },

    highlight: {
      highlighter: 'shiki',
      theme: {
        default: 'slack-ochin',
        dark: 'slack-dark',
        light: 'slack-ochin',
      },
    },

    headings: {
      anchorLinks: {

      }
    }
  },

  // 内容配置
  content: {
    build: {
      markdown: {
       
      }
    },
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  // CSS 配置
  css: ['~/assets/css/main.css'],

  // 类型检查
  typescript: {
    typeCheck: true
  },

  // 应用配置
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // 路由配置
  router: {
    options: {
      strict: false
    }
  },

  // 插件配置
  plugins: [
  ],

  // color-mode 配置
  colorMode: {
    preference: 'system',
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  }
})