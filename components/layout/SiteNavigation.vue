<template>
  <div class="hidden md:block ">
    <UContainer>
      <div class="h-full flex items-center">
        <UNavigationMenu :items="navigationItems" disableHoverTrigger disablePointerLeaveClose
          orientation="horizontal" content-orientation="vertical" highlight-color="primary"
          color="neutral" variant="link" class="w-full justify-start" />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

// Props
interface Props {
  navigationItems: NavigationMenuItem[][]
}

const props = defineProps<Props>()
</script> 