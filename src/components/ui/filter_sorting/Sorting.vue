<script setup lang='ts'>
import ArrowsIcon from '@/assets/icons/arrows.png'
import { computed, ref } from 'vue'

const sortings = [
  {
    title: 'По Популярности',
    url_param: 'popularity'
  },
  {
    title: 'Сначала Дешевые',
    url_param: 'price_low'
  },
  {
    title: 'Сначала Дорогие',
    url_param: 'price_high'
  },
]

const currentSorting = ref(sortings[0])
const isActiveOptions = ref(false);

const toggleIsActiveOptions = () => {
  isActiveOptions.value = !isActiveOptions.value
}

const selectSorting = (sorting: any) => {
  currentSorting.value = sorting;
  isActiveOptions.value = false;
};

const availableSortings = computed(() => {
  return sortings.filter(sorting => sorting.url_param !== currentSorting.value.url_param);
});
</script>

<template>
  <div class='sorting' @click='toggleIsActiveOptions'>
    <div class='sorting__main-container'>
      <div class='sorting__img-container'>
        <img :src='ArrowsIcon' alt='' class='sorting__img-container'>
      </div>
      <span class='sorting__title'>
        {{ currentSorting.title }}
      </span>
    </div>
    <div class='sorting__options' v-if='isActiveOptions'>
      <ul>
        <li
          v-for='sorting in availableSortings'
          :key='sorting.url_param'
          @click.stop='selectSorting(sorting)'
          class='sorting__option'
        >
          {{ sorting.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sorting {
  position: relative;
  display: flex;
  flex-direction: column;
}
.sorting:hover {
  cursor: pointer;
}
.sorting__main-container {
  color: #2F3035;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 0;
  display: flex;
  width: 100%;
  border-top: 1px solid var(--palette-light-thin-color);
  border-bottom: 1px solid var(--palette-light-thin-color);
}
.sorting__main-container:hover, .sorting__option:hover {
  background-color: var(--palette-light-third-color);
}
.sorting__title {
  margin-left: 5px;
  font-weight: 600;
}
.sorting__option {
  padding: 10px 10px;
}
</style>