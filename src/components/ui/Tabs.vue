<script setup lang="ts">
import { TabsProps, TabsItem } from '@/types/components/ui/Tabs.ts';
import { ref } from 'vue';

const props = defineProps<TabsProps>();
const emit = defineEmits(['tabSelected']);

const activeTabId = ref<number | string | null | undefined>(props.tabs[0]?.id ?? null);

const selectTab = (tab: TabsItem) => {
  activeTabId.value = tab.id;
  emit('tabSelected', tab.id);
};
</script>

<template>
  <div class="tabs">
    <button
      v-for="tab in props.tabs"
      :key="tab.id"
      :class="['tabs__item', { active: tab.id === activeTabId }]"
      @click="selectTab(tab)"
    >
      {{ tab.title }}
    </button>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  overflow: auto;
  white-space: nowrap;
  width: 100%;
}

.tabs__item {
  padding: 10px;
  cursor: pointer;
  border: none;
  background: none;
}

.tabs__item.active {
  font-weight: 500;
  border-bottom: 2px solid var(--pallete-accent-color);
}
</style>
