<script setup lang='ts'>
import Sidebar from '@/components/ui/Sidebar.vue'
// import HomeImg from '@/assets/icons/home.svg'
import { SidebarProps } from '@/types/components/ui/Sidebar.ts'

defineProps({
  isShowHeaderBottom: {
    type: Boolean,
    default: true
  }
})

/* icons */
import FavoriteIcon from '@/assets/icons/favorite.svg'
import ProfileIcon from '@/assets/icons/profile.svg'
import CartIcon from '@/assets/icons/cart.svg'
import { RouterLink } from 'vue-router'

const itemsTop: SidebarProps[] = [
  {
    id: 0,
    title: 'Избранное',
    route: 'profile/favorites',
    icon: {
      path: FavoriteIcon,
      alt: 'Избранное'
    }
  },
  {
    id: 0,
    title: 'Войти',
    route: 'login',
    icon: {
      path: ProfileIcon,
      alt: 'Войти'
    }
  },
  {
    id: 3,
    title: 'Корзина',
    route: 'cart',
    icon: {
      path: CartIcon,
      alt: 'Корзина'
    }
  },
]

const itemsBottom: SidebarProps[] = [
  {
    id: 0,
    title: 'Магазины',
    route: '/shops',
  },
  {
    id: 1,
    title: 'Акции',
    route: '/actions',
  },
  {
    id: 2,
    title: 'Доставка и Оплата',
    route: '/delivery',
  },

]

</script>

<template>
  <header class='header'>
    <div class='header__top'>
      <Sidebar />
      <RouterLink class='header__logo' to='/'>
        <span>DRIVE MOTO</span>
      </RouterLink>
      <div class='header__links'>
        <RouterLink v-for="item in itemsTop" :to="item.route" class='header__link'>
          <li :key="item.id" class='header__item'>
            <div class='header__icon-container'>
              <img v-if='item.icon' :src="item.icon.path" :alt="item.icon.alt" class="header__icon" />
            </div>
          </li>
        </RouterLink>
      </div>
    </div>
    <div class='header__bottom' v-if='isShowHeaderBottom'>
      <div class='header__links'>
        <RouterLink v-for="item in itemsBottom" :to="item.route" class='header__link'>
          <li :key="item.id" class='header__item'>
            <span class='header__title'>{{ item.title }}</span>
          </li>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
}
.header__top {
  padding: 20px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header__logo {
  padding-left: 15px;
  flex-grow: 1;
}
.header__logo > span {
  font-family: Staatiliches, sans-serif;
  font-weight: 700;
  font-size: 20px;
}
.header__links {
  display: flex;
  column-gap: 10px;
  justify-self: flex-end;
  align-items: flex-end;
}
.header__bottom {
  padding: 0 10px;
  display: flex;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
  height: 50px;
  background-color: var(--palette-light-third-color);
}
.header__bottom::-webkit-scrollbar {
  display: none;
}
.header__bottom {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.header__title {
  font-weight: 700;
  font-size: 20px;
}
.header__title:active, .header__title:focus {
  text-decoration: underline;
}
</style>