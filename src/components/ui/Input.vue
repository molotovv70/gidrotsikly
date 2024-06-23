<script setup lang='ts'>
import { InputProps } from "@/types/components/ui/Input.ts"
import Button from '@/components/ui/Button.vue'

const props = defineProps<InputProps>()
</script>

<template>
  <div class='input__container'>
    <input class='input' :type='props.type' :placeholder='props.placeholder'>
    <button v-if='props.button'></button>
  </div>
</template>

<style scoped>
.input {

}
</style>