// 全局状态
const globalPrimaryColor = ref('custom')
const globalNeutralColor = ref('zinc')
const globalRadius = ref(0.25)
const globalCustomPrimaryColor = ref('#533afd')

export const useThemeConfig = () => {
  const appConfig = useAppConfig()

  // 初始化全局状态（只在第一次调用时）
  if (globalPrimaryColor.value === 'custom' && appConfig.ui?.colors?.primary) {
    globalPrimaryColor.value = appConfig.ui.colors.primary
  }
  if (globalNeutralColor.value === 'zinc' && appConfig.ui?.colors?.neutral) {
    globalNeutralColor.value = appConfig.ui.colors.neutral
  }

  // 使用全局状态
  const primaryColor = globalPrimaryColor
  const neutralColor = globalNeutralColor
  const radius = globalRadius
  const customPrimaryColor = globalCustomPrimaryColor
  
  // 颜色映射表
  const colorMap: Record<string, string> = {
    black: '#000000',
    red: '#ef4444',
    orange: '#f97316',
    amber: '#f59e0b',
    yellow: '#eab308',
    lime: '#84cc16',
    green: '#22c55e',
    emerald: '#10b981',
    teal: '#14b8a6',
    cyan: '#06b6d4',
    sky: '#0ea5e9',
    blue: '#3b82f6',
    indigo: '#6366f1',
    violet: '#8b5cf6',
    purple: '#a855f7',
    fuchsia: '#d946ef',
    pink: '#ec4899',
    rose: '#f43f5e',
    custom: '#533afd'
  }
  
  // 更新 CSS 变量
  const updateCSSVariables = () => {
    if (import.meta.client) {
      const root = document.documentElement
      
      // 设置主色调
      const colorValue = primaryColor.value === 'custom' 
        ? customPrimaryColor.value 
        : colorMap[primaryColor.value] || '#3b82f6'
      
      root.style.setProperty('--ui-primary', colorValue)
      
      // 强制触发重绘
      nextTick(() => {
        const computedStyle = getComputedStyle(root)
        const actualValue = computedStyle.getPropertyValue('--ui-primary')
      })
      
      // 设置圆角
      root.style.setProperty('--ui-radius', `${radius.value}rem`)
    }
  }
  
  // 更新 app config
  const updateAppConfigColors = (colors: { primary?: string; neutral?: string }) => {
    if (appConfig.ui?.colors) {
      if (colors.primary !== undefined) {
        appConfig.ui.colors.primary = colors.primary
      }
      if (colors.neutral !== undefined) {
        appConfig.ui.colors.neutral = colors.neutral
      }
    }
  }
  
  // 设置主色调
  const setPrimaryColor = (color: string) => {
    primaryColor.value = color
    
    // 更新 app config
    updateAppConfigColors({ primary: color })
    
    // 更新 CSS 变量
    updateCSSVariables()
  }
  
  // 设置自定义主色调
  const setCustomPrimaryColor = (color: string) => {
    customPrimaryColor.value = color
    if (primaryColor.value === 'custom') {
      updateCSSVariables()
    }
  }
  
  // 设置中性色
  const setNeutralColor = (color: string) => {
    neutralColor.value = color
    updateAppConfigColors({ neutral: color })
  }
  
  // 设置圆角
  const setRadius = (value: number) => {
    radius.value = value
    updateCSSVariables()
  }
  
  // 重置配置
  const resetConfig = () => {
    primaryColor.value = 'custom'
    neutralColor.value = 'zinc'
    radius.value = 0.25
    customPrimaryColor.value = '#533afd'
    
    // 更新 app config
    updateAppConfigColors({ 
      primary: primaryColor.value, 
      neutral: neutralColor.value 
    })
    
    // 更新 CSS 变量
    updateCSSVariables()
  }
  
  // 获取配置对象
  const getConfig = () => {
    const colorValue = primaryColor.value === 'custom' 
      ? customPrimaryColor.value 
      : colorMap[primaryColor.value] || '#3b82f6'
      
    return {
      appConfig: {
        ui: {
          colors: {
            primary: primaryColor.value,
            neutral: neutralColor.value
          }
        }
      },
      css: {
        '--ui-primary': colorValue,
        '--ui-radius': `${radius.value}rem`
      }
    }
  }
  
  // 初始化
  onMounted(() => {
    updateCSSVariables()
  })
  
  // 立即执行一次（如果在客户端）
  if (import.meta.client) {
    updateCSSVariables()
  }
  
  return {
    primaryColor: readonly(primaryColor),
    neutralColor: readonly(neutralColor),
    radius: readonly(radius),
    customPrimaryColor: readonly(customPrimaryColor),
    setPrimaryColor,
    setNeutralColor,
    setRadius,
    setCustomPrimaryColor,
    resetConfig,
    getConfig,
    updateCSSVariables
  }
} 