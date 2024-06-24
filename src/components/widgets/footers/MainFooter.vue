<script setup lang='ts'>

import Input from '@/components/ui/Input.vue'
import { ButtonProps } from '@/types/components/ui/Button.ts'
import { AccordionProps } from '@/types/components/ui/Accordion.ts'
import Accordion from '@/components/ui/Accordion.vue'

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

</script>

<template>
  <footer class='footer'>
    <div class='footer__top'>
      <div class='footer__email'>
        <p class='footer__email-content'>Подпишитесь на нашу рассылку <br> и узнавайте о акция быстрее</p>
        <Input type='text' placeholder='Введите ваш e-mail:' :button='buttonProps' class='footer__email-input'></Input>
      </div>
      </div>
    <Accordion :items='accordionProps' />
<!--      <div class='footer__accordion'>-->
<!--        <div class='footer__accordion-item'>-->
<!--          <p class='footer__accordion-content'></p>-->
<!--        </div>-->
<!--      </div>-->
    <div class='footer__bottom'>

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
</style>