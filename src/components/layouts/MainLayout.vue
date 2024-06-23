<script setup lang='ts'>
import MainHeader from '@/components/widgets/headers/MainHeader.vue'
import MainFooter from '@/components/widgets/footers/MainFooter.vue'
</script>

<template>
  <MainHeader />
  <div class='container'>
    <slot />
  </div>
  <MainFooter />
</template>

<style scoped>
.container {
  margin: 0 auto;
  width: 1320px;
  padding: 0 15px;
}
</style>