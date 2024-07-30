<script setup lang='ts'>
import SearchIcon from '@/assets/icons/search.svg'

import { ref, watch } from 'vue';

const props = defineProps<{
  activeTab: number | string;
}>();

const query = ref('');
const placeholder = ref('Введите номер');

watch(() => props.activeTab, (newTab) => {
  switch (newTab) {
    case 1:
      placeholder.value = 'Введите номер';
      break;
    case 2:
      placeholder.value = 'Введите марку';
      break;
    case 3:
      placeholder.value = 'Введите название товара';
      break;
    default:
      placeholder.value = 'Введите номер';
      break;
  }
});

const search = () => {
  // Логика запроса для фильтрации
  console.log(`Поиск по: ${query.value}`);
};
</script>

<template>
  <div class='search'>
    <input v-model='query' type='text' :placeholder='placeholder ?? "Введите значение"' class='search__input'>
    <div class='search__icon-after'>
      <img @click="search" :src='SearchIcon' alt='search icon'>
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