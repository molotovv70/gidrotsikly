<script setup lang='ts'>

import Input from '@/components/ui/Input.vue'
import { ButtonProps } from '@/types/components/ui/Button.ts'

const buttonProps: ButtonProps = {
  value: 'Отправить',
  color: 'primary',
  size: 'full',
}
</script>

<template>
  <footer class='footer'>
    <div class='footer__top'>
      <div class='footer__email'>
        <p class='footer__email-content'>Подпишитесь на нашу рассылку и узнавайте о акция быстрее</p>
        <Input type='text' placeholder='Введите ваш e-mail:' :button='buttonProps' class='footer__email-input'></Input>
      </div>
      </div>
      <div class='footer__accordion'>
        <div class='footer__accordion-item'>
          <p class='footer__accordion-content'></p>
        </div>
      </div>
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
  padding: 0 15px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
}
.footer__email-input {
  padding: 0 10px;
}
</style>