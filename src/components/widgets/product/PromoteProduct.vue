<script setup lang='ts'>
import Item from '@/assets/stubs/promote-item.png';
</script>

<template>
  <div class='promote-product'>
    <div class='promote-product__badge'>Акция</div>
    <div class='promote-product__prices'>
      <span class='promote-product__old-price'>225 000</span>
      <span class='promote-product__new-price'>190 000</span>
    </div>
    <div class='promote-product__top'>
      <img :src='Item' alt='' class='promote-product__img'>
      <span class='promote-product__title'>Лодочный мотор Suzuki DF9.9BRS</span>
    </div>
    <div class='promote-product__bottom'>
      <div class='promote-product__end-date'>
        <div class='promote-product__end-date-text'>
          Акция действует до
        </div>
        <div class='promote-product__date-value'>31.08.2020</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.promote-product {
  position: relative;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
}
.promote-product__badge {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px;
  background-color: var(--pallete-accent-color);
  color: var(--palette-light-primary-color);
}
.promote-product__prices {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.promote-product__old-price {
  font-size: 27px;
  font-weight: 700;
  color: var(--pallete-accent-color);
}
.promote-product__new-price {
  font-size: 14px;
  text-decoration: line-through;
  color: var(--palette-light-thin-color);
}
.promote-product__top {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
}
.promote-product__img {
  max-width: 150px;
  max-height: 250px;
}
.promote-product__title {
  font-weight: 700;
  font-size: 18px;
  max-width: 80%;
  text-align: center;
}
.promote-product__bottom {
  width: 100%;
  padding: 25px 0;
  background-color: var(--palette-light-third-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.promote-product__end-date {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  justify-content: center;
  align-items: center;
}
.promote-product__end-date-text {
  font-weight: 500;
}
.promote-product__date-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--pallete-accent-color);
}

</style>