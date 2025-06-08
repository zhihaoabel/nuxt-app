export default defineAppConfig({
  ui: {
    colors: {
      primary: 'violet',
      neutral: 'zinc'
    }
  },

  uiPro: {
    contentToc: {
      slots: {
        root: 'mx-0 sm:mx-0'
      }
    },
    pageAside: {
      slots: {
        root: 'lg:ms-0'
      }
    }
  }
}) 