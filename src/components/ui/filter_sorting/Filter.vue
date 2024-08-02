<script setup lang='ts'>
import { computed, ref } from 'vue'

const filter = {
  title: 'Фильтр'
}

const isActiveWindow = ref(false);

const toggleFilterScreen = () => {
  isActiveWindow.value = !isActiveWindow.value
}
</script>

<template>
  <div class='filter' @click='toggleFilterScreen'>
    <div class='filter__main-container'>
      <span class='filter__title'>
        {{ filter.title }}
      </span>
    </div>
    <div class='filter__options' v-if='isActiveWindow'>
      <ul>
        <li
          @click='toggleFilterScreen'
          class='filter__option'
        >
          sdfhgsdkjfhgsdkjfhsgdfkjhsgdfkjshdgfkjshdfgksdjhfgskjdfhgsdkjfhgsdkjh
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.filter {
  position: relative;
  display: flex;
  flex-direction: column;
}
.filter__main-container:hover {
  cursor: pointer;
}
.filter__main-container {
  color: #2F3035;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 0;
  display: flex;
  width: 100%;
  border-top: 1px solid var(--palette-light-thin-color);
  border-bottom: 1px solid var(--palette-light-thin-color);
}
.filter__main-container:hover, .sorting__option:hover {
  background-color: var(--palette-light-third-color);
}
.filter__title {
  margin-left: 5px;
  font-weight: 600;
}
.filter__option {
  padding: 10px 10px;
}
</style>