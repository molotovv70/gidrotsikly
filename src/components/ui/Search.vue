<script setup lang='ts'>
import SearchIcon from '@/assets/icons/search.svg'
</script>

<template>
  <div class='search'>
    <input type='text' placeholder='Введите марку' class='search__input'>
    <div class='search__icon-after'>
      <img :src='SearchIcon' alt='search icon'>
    </div>
  </div>
</template>

<style scoped>
.search {
  border-radius: 3px;
  position: relative;
}
.search__input {
  background-color: var(--palette-light-third-color);
  padding: 15px 10px;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
}
.search__input::placeholder {
  opacity: 1;
  color: var(--primary-text-color);
}
.search__icon-after {
  position: absolute;
  top: 0;
  right: 15px;
  width: 25px;
  transform: translateY(50%);
}
</style>