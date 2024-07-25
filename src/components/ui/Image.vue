<script setup lang='ts'>
import { ImageProps } from '@/types/components/ui/Image.ts'

defineProps<{item: ImageProps }>()

</script>

<template>
  <img :src='item.path' :alt='item.alt' class='image'>
</template>

<style scoped>
.image {
  width: 100%;
  height: 100%;
}
</style>