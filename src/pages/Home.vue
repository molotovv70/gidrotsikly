<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue';
import PromoteProduct from '@/components/widgets/product/PromoteProduct.vue';
import ProductSearch from '@/components/ui/ProductSearch.vue';
import ProductCatalogCard from '@/components/ui/ProductCatalogCard.vue';

/* ProductCatalogCardsImgs */
import Kvadrotsikly from '@/assets/icons/catalog/kvadrotsikly.png'
import Gidrotsikly from '@/assets/icons/catalog/gidrotsikly.png'
import Katera from '@/assets/icons/catalog/katera.png'
import Snegohodi from '@/assets/icons/catalog/snegohodi.png'
import Vezdehodi from '@/assets/icons/catalog/vezdehodi.png'
import Dvigateli from '@/assets/icons/catalog/dvigateli.png'
import ListRecomendationsProduct from '@/components/widgets/product/ListRecomendationsProduct.vue'
import { TabsProps } from '@/types/components/ui/Tabs.ts'

const productCatalogCards = [
  {
    id: 0,
    title: 'Квадроциклы',
    image: {
      path: Kvadrotsikly,
    }
  },
  {
    id: 1,
    title: 'Гидроциклы',
    image: {
      path: Gidrotsikly,
    }
  },
  {
    id: 2,
    title: 'Катера',
    image: {
      path: Katera,
    }
  },
  {
    id: 3,
    title: 'Снегоходы',
    image: {
      path: Snegohodi,
    }
  },
  {
    id: 4,
    title: 'Вездеходы',
    image: {
      path: Vezdehodi,
    }
  },
  {
    id: 5,
    title: 'Двигатели',
    image: {
      path: Dvigateli,
    }
  },
];

const ListRecomendationsProductsProps = [
  {
  }
]

const tabsItemsPopularProducts: TabsProps = {
  tabs: [
    { id: 0, title: 'Запчасти' },
    { id: 1, title: 'Моторы' },
    { id: 2, title: 'Шины' },
    { id: 3, title: 'Электроника' },
  ]
};

const tabsItemsRecommendationProducts: TabsProps = {
  tabs: [
    { id: 0, title: 'Запчасти' },
    { id: 1, title: 'Моторы' },
    { id: 2, title: 'Шины' },
    { id: 3, title: 'Электроника' },
  ]
};
</script>

<template>
  <MainLayout>
    <PromoteProduct />
    <ProductSearch />
    <div class='product-catalog-cards__section'>
      <ProductCatalogCard v-for="card in productCatalogCards" :key="card.id" :item="card" />
    </div>
    <ListRecomendationsProduct title='Популярные товары' :tabs-items='tabsItemsPopularProducts' />
    <ListRecomendationsProduct title='С этим товаром часто покупают' :tabs-items='tabsItemsRecommendationProducts' />
  </MainLayout>
</template>

<style scoped>
.product-catalog-cards__section {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 30px;
}
</style>
