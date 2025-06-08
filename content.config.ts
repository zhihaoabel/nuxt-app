import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    introduction: defineCollection({
      type: 'page', 
      source: 'get-started/**'
    }),
    payments: defineCollection({
      type: 'page', 
      source: 'payments/**'
    }),
    content: defineCollection({
      type: 'page',
      source: '**'
    })
  }
})
