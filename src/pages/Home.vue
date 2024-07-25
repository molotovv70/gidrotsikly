<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
// import Slider from '@/components/ui/Slider.vue'

// import { SliderProps } from '@/types/components/ui/Slider.ts';
import PromoteProduct from '@/components/widgets/product/PromoteProduct.vue'
import Search from '@/components/ui/Search.vue'

// const items: SliderProps[] = [
//   {
//
//   }
// ]

</script>

<template>
  <MainLayout>
<!--    <Slider :items='items' />-->
    <PromoteProduct />
    <Search />
  </MainLayout>
</template>

<style scoped>

</style>