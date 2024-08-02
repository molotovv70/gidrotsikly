<script setup lang='ts'>
import { ProductItem } from '@/types/models/ProductItem.ts'
import MainCardProduct from '@/components/widgets/product/MainCardProduct.vue'

defineProps<{
  items: ProductItem[]
}>()

</script>

<template>
  <div class='slider-container'>
    <swiper-container  navigation="true" pagination="true" scrollbar="true" class='slider-test'>
      <swiper-slide v-for='item in items'>
        <MainCardProduct :item='item' />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style>
.slider-container {
  width: 270px;
  margin: 0 auto;
}


</style>