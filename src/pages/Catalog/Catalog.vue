<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import CatalogFilter from '@/components/widgets/CatalogFilter.vue'

</script>

<template>
  <MainLayout :is-show-header-bottom='false'>
    <Breadcrumbs />
    <CatalogFilter />
    <router-view />
  </MainLayout>
</template>

<style scoped>
</style>
