<script setup lang='ts'>
import Tabs from '@/components/ui/Tabs.vue'
import Slider from '@/components/ui/Slider.vue'
import { ref } from 'vue'
import { ProductItem } from '@/types/models/ProductItem.ts'

import ProductStub1 from '@/assets/stubs/product-1.png'

const props = defineProps<{
  title: string,
  tabsItems: any,
}>()

const onTabSelected = (tabId: any) => {
  // productItems.value = props.tabsItems.tabs[tabId]
  // const fetchItems = async () => {
  //   await
  //     productItems.value = fetch ...
  // }
}

const productItems = ref({})

const productItemsStub: ProductItem[] = [
  {
    id: 0,
    title: 'Водонепроницаемый Рюкзак',
    price: 9800,
    url: ProductStub1,
  },
  {
    id: 0,
    title: 'Водонепроницаемый Рюкзак',
    price: 9800,
    url: ProductStub1,
  },
  {
    id: 0,
    title: 'Водонепроницаемый Рюкзак',
    price: 9800,
    url: ProductStub1,
  },
]

</script>

<template>
  <div class='list-recommendations-product'>
    <h2 class='list-recommendations-product__title'>{{ props.title }}</h2>
    <Tabs :tabs="tabsItems.tabs" @tabSelected="onTabSelected" class='product-search__tabs' />
    <Slider :items='productItemsStub' />
    <a href='#' class='list-recommendations-product__show-more'>Показать Еше</a>
  </div>
</template>

<style scoped>
.list-recommendations-product__title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 23px;
}
.list-recommendations-product__show-more {
  display: block;
  font-weight: 300;
  text-align: center;
  margin: 10px auto 0;
  padding: 15px 17px;
  background-color: var(--palette-light-third-color);
  width: 270px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
</style>