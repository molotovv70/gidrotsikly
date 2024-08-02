<script setup lang='ts'>
defineProps<{
  items: {title: string, url_param: string}[]
}>()
</script>

<template>
  <div class='filter-preset'>
    <div v-for='item in items' class='filter-preset__item' >{{ item.title }}</div>
  </div>
</template>

<style scoped>
.filter-preset {
  display: flex;
  width: 100%;
  column-gap: 10px;
}
.filter-preset__item {
  background-color: var(--palette-light-third-color);
  padding: 4px 28px;
  border-radius: 4px;
}
.filter-preset__item:hover {
  cursor: pointer;
}
</style>