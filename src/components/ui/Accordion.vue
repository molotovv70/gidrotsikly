<script setup lang="ts">
import { ref } from 'vue';
import Icon from '@/components/ui/Icon.vue'
import { AccordionProps } from '@/types/components/ui/Accordion.ts'
import { IconProps } from '@/types/components/ui/Icon.ts'

/* icon */
import ArrowDownIcon from '@/assets/icons/arrow-down.svg'

const props = defineProps<{ items: AccordionProps[] }>();

const isOpen = ref<boolean[]>(props.items.map(() => false));

const icon: IconProps = {
  path: ArrowDownIcon,
  alt: 'Accordion arrow down'
}

const toggle = (index: number) => {
  isOpen.value = isOpen.value.map((open, i) => (i === index ? !open : false));
};
</script>

<template>
  <div v-for='(item, index) in items' :key='item.id' class="accordion">
    <div class="accordion__header" @click="toggle(index)">
      <h3 class='accordion__title'>{{ item.title }}</h3>
      <div class='accordion__icon-container'>
        <Icon v-if='icon' :item='icon' class="accordion__icon" />
      </div>
    </div>
    <div class="accordion__content" v-show="isOpen[index]">
      {{ item.content }}
    </div>
  </div>
</template>

<style scoped>
.accordion {
  border-bottom: 1px solid #ccc;
}
.accordion__header {
  display: flex;
  justify-content: space-between;
  background-color: var(--palette-light-footer-color);
  padding: 15px;
  cursor: pointer;
  user-select: none;
}
.accordion__title {
  font-weight: 500;
  color: var(--palette-gray-primary-color);
  margin: 0;
}
.accordion__icon-container {
}
.accordion__icon {
  width: 12px;
}
.accordion__content {
  background-color: var(--palette-light-primary-color);

  padding: 15px;
  border-top: 1px solid #ccc;
}
</style>