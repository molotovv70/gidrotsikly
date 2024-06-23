import { defineStore } from 'pinia';

import { SidebarProps } from '@/types/components/ui/Sidebar.ts';

import ProfileIcon from '@/assets/icons/profile.svg';
import FavoriteIcon from '@/assets/icons/favorite.svg';
import CartIcon from '@/assets/icons/cart.svg';
import HomeIcon from '@/assets/icons/home.svg';
import ActionIcon from '@/assets/icons/action.svg';
import DeliveryIcon from '@/assets/icons/delivery.svg';

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

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    items: items
  }),
  actions: {

  },
  getters: {
    getValue(): typeof items {
      return this.items;
    },
  }
})
