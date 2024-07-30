<script setup lang="ts">
import { ref } from 'vue';
import Search from '@/components/ui/Search.vue';
import Tabs from '@/components/ui/Tabs.vue';
import { TabsProps } from '@/types/components/ui/Tabs.ts';

const tabsItems: TabsProps = {
  tabs: [
    { id: 1, title: 'Поиск по номеру' },
    { id: 2, title: 'Поиск по марке' },
    { id: 3, title: 'Поиск по названию товара' },
  ]
};

const activeTab = ref<number | string>(1);

const onTabSelected = (tabId: number | string) => {
  activeTab.value = tabId;
};
</script>

<template>
  <Tabs :tabs="tabsItems.tabs" @tabSelected="onTabSelected" class='product-search__tabs' />
  <Search :activeTab="activeTab" />
</template>

<style scoped>
.product-search__tabs {
  margin-bottom: 20px;
}
</style>
