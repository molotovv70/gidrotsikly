<script setup lang='ts'>
import MainHeader from '@/components/widgets/headers/MainHeader.vue'
import MainFooter from '@/components/widgets/footers/MainFooter.vue'

defineProps({
  isShowHeaderBottom: {
    type: Boolean,
    default: true
  }
})
</script>

<template class='main-layout__container'>
  <MainHeader :is-show-header-bottom='isShowHeaderBottom' />
  <div class='container'>
    <slot />
  </div>
  <MainFooter />
</template>

<style scoped>
.main-layout__container {
  display: flex;
}
.container {
  flex-grow: 1;
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
  padding: 0 15px;
}
</style>