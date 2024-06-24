<script setup lang='ts'>

import Input from '@/components/ui/Input.vue'
import { ButtonProps } from '@/types/components/ui/Button.ts'
import { AccordionProps } from '@/types/components/ui/Accordion.ts'
import Accordion from '@/components/ui/Accordion.vue'
import { IconProps } from '@/types/components/ui/Icon.ts'

/* icons */
import FacebookIcon from '@/assets/icons/socials/facebook.svg'
import InstagramIcon from '@/assets/icons/socials/instagram.svg'
import VkIcon from '@/assets/icons/socials/vk.svg'
import YoutubeIcon from '@/assets/icons/socials/youtube.svg'
import Icon from '@/components/ui/Icon.vue'

const buttonProps: ButtonProps = {
  value: 'Отправить',
  color: 'primary',
  size: 'full',
}

const accordionProps: AccordionProps[] = [
  {
    id: 0,
    title: 'Информация',
    content: 'Информация sdfsdfsdf',
  },
  {
    id: 1,
    title: 'Интернет-магазин',
    content: 'Интернет-магазин sdfsdfsdfsdfsfs',
  },
]

const socialItems: {icon: IconProps, url: string}[] = [
  {
    icon: {
      path: FacebookIcon,
      alt: 'facebook logo'
    },
    url: '#',
  },
  {
    icon: {
      path: InstagramIcon,
      alt: 'instagram logo'
    },
    url: '#',
  },
  {
    icon: {
      path: VkIcon,
      alt: 'vk logo'
    },
    url: '#',
  },
  {
    icon: {
      path: YoutubeIcon,
      alt: 'youtube logo'
    },
    url: '#',
  },
]

</script>

<template>
  <footer class='footer'>
    <div class='footer__top'>
      <div class='footer__email'>
        <p class='footer__email-content'>Подпишитесь на нашу рассылку <br> и узнавайте о акция быстрее</p>
        <Input type='text' placeholder='Введите ваш e-mail:' :button='buttonProps' class='footer__email-input'></Input>
      </div>
    <Accordion :items='accordionProps' />
    </div>
    <div class='footer__bottom'>
      <div class='footer__socials'>
        <div v-for='item in socialItems' class='footer__social-item'>
          <a :href='item.url'>
            <Icon :item='item.icon' />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--palette-light-footer-color);
  min-height: 500px;
}
.footer__email {
  padding: 17px 0 40px 0;
}
.footer__email-content {
  padding: 20px 15px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
}
.footer__email-input {
  padding: 0 10px;
}
.footer__bottom {
  padding: 40px 0 80px 0;
}
.footer__socials {
  display: flex;
  justify-content: center;
  gap: 30px;
}
.footer__social-item {
  width: 30px;
  height: 30px;
}
</style>