<script setup lang='ts'>
import Sidebar from '@/components/ui/Sidebar.vue'
import HomeImg from '@/assets/icons/home.svg'

// const items = [
//   {
//     path: '@/'
//     title: string
//     alt?: string
//   },
// ]
console.log(HomeImg)

</script>

<template>
  <header>
    <Sidebar />
    Header
    <div class='sd'>
    </div>
  </header>
</template>

<style scoped>
.sd {
  width: 20px;
  height: 20px;
}
</style>