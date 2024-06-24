<script lang="ts" setup>
import { computed } from 'vue';
import type { ButtonProps } from '@/types/components/ui/Button.ts';

const props = defineProps<ButtonProps>();

const buttonClass = computed(() => {
  return [
    'btn',
    `btn-${props.color}`,
    `btn-${props.size}`,
    { 'btn-disabled': props.disabled },
  ];
});
</script>

<template>
  <button
    :class="buttonClass"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  border: none;
  cursor: pointer;
  font-size: 16px;
  background-color: transparent;
}
.btn-primary {
  background-color: var(--pallete-accent-color);
  color: white;
}
.btn-secondary {
  background-color: grey;
  color: white;
}
.btn-grayscale {
  background-color: lightgrey;
  color: black;
}
.btn-error {
  background-color: red;
  color: white;
}
.btn-outline {
  border: 2px solid;
  background-color: transparent;
}
.btn-none {
  background-color: transparent;
}
.btn-L {
  font-size: 18px;
  padding: 12px 24px;
}
.btn-M {
  font-size: 16px;
  padding: 10px 20px;
}
.btn-S {
  font-size: 14px;
  padding: 8px 16px;
}
.btn-disabled {
  background-color: darkgrey;
  cursor: not-allowed;
}
</style>
