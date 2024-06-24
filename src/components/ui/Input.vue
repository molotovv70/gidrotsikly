<script setup lang='ts'>
import { InputProps } from "@/types/components/ui/Input.ts"
import Button from '@/components/ui/Button.vue'

const props = defineProps<InputProps>()
</script>

<template>
  <div class='input__container'>
    <input class='input' :type='props.type' :placeholder='props.placeholder'>
    <Button
      v-if='props.button'
      :color='props.button.color'
      :size='props.button.size'
      class='input__btn'
    >
      {{ props.button.value }}
    </Button>
  </div>
</template>

<style scoped>
.input__container {
  display: flex;
  width: 100%;
}
.input {
  color: var(--palette-light-thin-color);
  flex-grow: 1;
  padding: 14px 0 14px 14px;
}
.input__btn {
  padding: 0 18px;
}
.input__btn:hover {
  opacity: 0.7;
}
</style>