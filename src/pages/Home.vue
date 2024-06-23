<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MainLayout from '@/components/layouts/MainLayout.vue'

</script>

<template>
  <MainLayout>
    <h1>Home</h1>
    <RouterLink to="/catalog">Go to Catalog</RouterLink>
    <img src='@/assets/vue.svg' alt=''>
  </MainLayout>
</template>

<style scoped>

</style>