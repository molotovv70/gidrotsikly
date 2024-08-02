<script setup lang='ts'>
import { ProductItem } from '@/types/models/ProductItem.ts'

import FavoriteIcon from '@/assets/icons/favorite.svg'
import AddToCart from '@/assets/icons/cart.svg'

defineProps<{
  item: ProductItem
  isSale?: boolean
}>()
</script>

<template>
  <div class='main-card-product'>
    <button class='main-card-product__favorite-btn'>
      <img :src='FavoriteIcon' alt='Add to favorite' class='main-card-product__favorite-btn-img'>
    </button>
    <div class='main-card-product__item-container'>
      <div class='main-card-product__thumbnail-container'>
        <img :src='item.url' alt='' class='main-card-product__thumbnail-container'>
      </div>
      <p class='main-card-product__title'>
        {{ item.title }}
      </p>
      <span class='main-card-product__product-price'>{{ item.price }} Руб.</span>
    </div>
    <button class='main-card-product__add-to-cart-btn'>
      <img :src='AddToCart' alt='Add to Cart' class='main-card-product__add-to-cart-btn-img'>
    </button>
  </div>
</template>

<style scoped>
.main-card-product {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  min-height: 400px;
  max-width: 270px;
  border: 1px solid #CDCDCD;
}
.main-card-product__favorite-btn {
  align-self: flex-end;
}
.main-card-product__item-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}
.main-card-product__thumbnail-container {
  width: 200px;
  height: 200px;
}
.main-card-product__title {
  text-align: center;
  font-size: 18px;
  margin-top: 12px;
}
.main-card-product__product-price {
  margin-top: auto;
  font-weight: 700;
  font-size: 30px;
}
.main-card-product__add-to-cart-btn {
  position: absolute;
  padding: 5px;
  background-color: var(--pallete-accent-color);
  border-top-left-radius: 10px;
  bottom: 0;
  right: 0;
}
.main-card-product__add-to-cart-btn-img {
  padding: 4px 8px;
}
</style>