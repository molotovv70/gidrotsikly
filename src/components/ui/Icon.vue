<script setup lang='ts'>
import { IconProps } from '@/types/components/ui/Icon.ts'

defineProps<{item: IconProps }>()

</script>

<template>
  <img :src='item.path' :alt='item.alt' class='icon'>
</template>

<style scoped>
.icon {
  width: 100%;
  height: 100%;
}
</style>