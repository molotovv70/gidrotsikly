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
    <div class='header__top'>
      <Sidebar />
      <span class='header__logo'>DRIVE MOTO</span>
    </div>
    <div class='header__bottom'>
    </div>
  </header>
</template>

<style scoped>
.header__top {
  display: flex;
}
.header__logo {
  font-family: Staatiliches, sans-serif;
  font-weight: 700;
  font-size: 20px;
}
</style>