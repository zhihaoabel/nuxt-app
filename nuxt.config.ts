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
    minify: true,
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
    '@nuxtjs/google-fonts'
  ],

  // 组件自动导入配置
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  ui: {
    fonts: true, // 启用字体支持
  },

  googleFonts: {
    families: {
      // 核心英文字体
      Inter: [300, 400, 500, 600, 700], // 主要无衬线字体
      'Crimson Pro': [400, 500, 600, 700], // 主要衬线字体
      
      // 核心中文字体
      'Noto Sans SC': [300, 400, 500, 700], // 简体中文无衬线
      'Noto Sans TC': [400, 500, 700], // 繁体中文无衬线
      'Noto Serif SC': [400, 500, 700], // 简体中文衬线
      'Source Han Sans': [400, 500, 700], // 思源黑体
      
      // Emoji 和符号字体支持
      'Noto Color Emoji': true, // Emoji 字体
    },
    // 字体显示策略
    display: 'swap',
    // 预连接到字体服务器
    preconnect: true,
    // 子集化优化
    subsets: ['latin', 'latin-ext', 'chinese-simplified', 'chinese-traditional'],
  },

  mdc: {
    components: {
      prose: true
    },

    highlight: {
      highlighter: 'shiki',
      theme: {
        default: 'light-plus',
        dark: 'dracula',
        light: 'catppuccin-latte',
      },
    },
  },

  // 内容配置
  content: {
    build: {
      markdown: {

      }
    },
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true
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

  icon: {
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: 'iconify',
  },

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
  },

  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false, // 保留 console，只去除注释
          drop_debugger: true,
        },
        format: {
          comments: false, // 去除所有注释
        },
      },
      cssMinify: true,
    },
    css: {
      postcss: {
        plugins: [
          // CSS 注释处理
        ]
      }
    }
  },
})