<script setup lang='ts'>
import { ProductCatalogCard } from '@/types/components/ui/ProductCatalogCard.ts'

defineProps<{
  item: ProductCatalogCard
}>()
</script>

<template>
  <div class='product-catalog-card'>
    <div class='product-catalog-card__left'>
      <p class='product-catalog-card__title'>{{ item.title }}</p>
      <p class='product-catalog-card__more-info'>Подробнее></p>
    </div>
    <img :src="item.image.path" alt="item.title" v-if='item.image.path' class='product-catalog-card__image'/>
  </div>
</template>

<style scoped>
.product-catalog-card {
  display: inline-flex;
  position: relative;
  padding: 20px;
  justify-content: space-between;
  min-width: 300px;
  min-height: 130px;
  border: 1px solid var(--palette-light-thin-color);
  border-radius: 5px;
}
.product-catalog-card__left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-catalog-card__title {
  font-weight: 700;
  font-size: 23px;
}
.product-catalog-card__more-info {
  color: var(--palette-light-thin-color);
  font-weight: 300;
  font-size: 14px;
  justify-self: flex-end;
}
.product-catalog-card__image {
  position: absolute;
  right: 15px;
  bottom: 15px;
  max-height: 100px;
}
</style>