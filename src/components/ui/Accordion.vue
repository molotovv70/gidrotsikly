<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ title: string }>();

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="accordion-section">
    <div class="accordion-header" @click="toggle">
      <h3>{{ title }}</h3>
    </div>
    <div class="accordion-content" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.accordion-section {
  border-bottom: 1px solid #ccc;
}
.accordion-header {
  background-color: #f1f1f1;
  padding: 15px;
  cursor: pointer;
  user-select: none;
}
.accordion-header h3 {
  margin: 0;
}
.accordion-content {
  padding: 15px;
  border-top: 1px solid #ccc;
}
</style>