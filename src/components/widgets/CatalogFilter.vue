<script setup lang='ts'>

import Sorting from '@/components/ui/filter_sorting/Sorting.vue'
import FilterPreset from '@/components/ui/filter_sorting/FilterPreset.vue'
import Filter from '@/components/ui/filter_sorting/Filter.vue'

const FilterPresetStubs = [
  {
    title: 'Полноприводные',
    url_param: ''
  },
  {
    title: 'От 5000',
    url_param: ''
  },
]
</script>

<template>
  <div class='catalog-filter'>
    <Filter />
    <Sorting />
    <FilterPreset :items='FilterPresetStubs' />
  </div>
</template>

<style scoped>
.catalog-filter {
  display: flex;
  flex-direction: column;
}
</style>