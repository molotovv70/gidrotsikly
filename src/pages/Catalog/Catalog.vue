<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
</script>

<template>
  <MainLayout :is-show-header-bottom='false'>
    <Breadcrumbs />
    <router-view />
  </MainLayout>
</template>

<style scoped>
</style>
