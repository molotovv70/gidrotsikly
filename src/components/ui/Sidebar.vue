<script setup lang='ts'>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { IconProps } from '@/types/components/ui/Icon.ts'
import { SidebarProps } from '@/types/components/ui/Sidebar.ts'

/* icons */
import ProfileIcon from '@/assets/icons/profile.svg'
import FavoriteIcon from '@/assets/icons/favorite.svg'
import CartIcon from '@/assets/icons/cart.svg'
import HomeIcon from '@/assets/icons/home.svg'
import ActionIcon from '@/assets/icons/action.svg'
import DeliveryIcon from '@/assets/icons/delivery.svg'

import HamburgerIcon from '@/assets/icons/hamburger-button.svg'
import Icon from '@/components/ui/Icon.vue'

const isOpen = ref(false)

const hamburgerIcon: IconProps = {
  path: HamburgerIcon,
  alt: 'hamburger'
}

const items: SidebarProps[] = [
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
    id: 1,
    title: 'Регистрация',
    route: 'register',
    icon: {
      path: ProfileIcon,
      alt: 'Регистрация'
    }
  },
  {
    id: 2,
    title: 'Избранное',
    route: 'profile/favorites',
    icon: {
      path: FavoriteIcon,
      alt: 'Избранное'
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
  {
    id: 4,
    title: 'Магазины',
    route: '/shops',
    icon: {
      path: HomeIcon,
      alt: 'Магазины'
    }
  },
  {
    id: 5,
    title: 'Акции',
    route: '/actions',
    icon: {
      path: ActionIcon,
      alt: 'Акции'
    }
  },
  {
    id: 6,
    title: 'Доставка и Оплата',
    route: '/delivery',
    icon: {
      path: DeliveryIcon,
      alt: 'Доставка и Оплата'
    }
  },
  {
    id: 7,
    title: 'Квадроциклы',
    route: '/catalog/atvs'
  },
  {
    id: 8,
    title: 'Лодки',
    route: '/catalog/boats'
  },
  {
    id: 9,
    title: 'Катера',
    route: '/catalog/jet-skis'
  },
  {
    id: 10,
    title: 'Гидроциклы',
    route: '/catalog/motorboats'
  },
  {
    id: 11,
    title: 'Лодки Вездеходы',
    route: '/catalog/all-terrain-vehicles'
  },
  {
    id: 12,
    title: 'Снегоходы',
    route: '/catalog/snowmobiles'
  },
  {
    id: 13,
    title: 'Двигатели',
    route: '/catalog/engines'
  },
  {
    id: 14,
    title: 'Запчасти',
    route: '/catalog/spare-parts'
  }
]

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}

</script>

<template>
  <div class='sidebar'>
    <button
      @click="toggleSidebar"
      class='open-btn sidebar__btn'
    >
      <img :src='hamburgerIcon.path' alt='hamburgerIcon.alt'>
    </button>
    <div v-if="isOpen" class="sidebar__overlay" @click="toggleSidebar"></div>
    <div v-if="isOpen" class="sidebar__content">
      <ul class='sidebar__list'>
          <RouterLink v-for="item in items" :to="item.route" class='sidebar__link'>
            <li :key="item.id" class='sidebar__item'>
                <div class='sidebar__icon-container'>
                  <Icon v-if='item.icon' :item='item.icon' class="sidebar__icon" />
                </div>
                <span class='sidebar__title'>{{ item.title }}</span>
            </li>
          </RouterLink>
      </ul>
      <div class='sidebar__bottom'>
        <span class='sidebar__bottom-content'>Москва,<br> ул. Науки 25</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
}
.sidebar__btn {
  padding: 10px;
  border-radius: 10px;
  transition: .1s all ease-in-out;
}
.sidebar__btn:hover {
  background-color: var(--palette-light-secondary-color);
}
.sidebar__link {
  width: 100%;
}
.sidebar__list {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
}
.sidebar__item {
  padding: 0 10px;
  height: 60px;
  border-bottom: 1px solid #E6E6E6;
  display: flex;
  align-items: flex-end;
  transition: .1s all ease-in-out;
}
.sidebar__item:hover {
  background-color: var(--palette-light-secondary-color);
}
.sidebar__icon-container {
  width: 50px;
  padding-right: 25px;
}
.sidebar__title {
  font-size: 20px;
}
.sidebar__bottom {
  padding: 65px 18px 65px 44px;
}
.sidebar__bottom-content {
  font-family: 'SF Pro Display', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 20px;
}
button {
  cursor: pointer;
}

.sidebar__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.sidebar__content {
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: var(--main-page-background);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.close-btn {
  display: block;
  margin: 20px 0 20px 10px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

</style>