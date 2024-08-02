<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean);
  const breadcrumbs = paths.map((path, index) => {
    const to = '/' + paths.slice(0, index + 1).join('/');
    return {
      name: router.resolve(to).name || path,
      to,
    };
  });
  return breadcrumbs;
});

const navigate = (to: string) => {
  router.push(to);
};
</script>

<template>
  <nav class="breadcrumbs">
    <ul>
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <router-link :to="breadcrumb.to">{{ breadcrumb.name }}</router-link>
        <span v-if="index < breadcrumbs.length - 1"> > </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  font-size: 15px;
  color: var(--palette-light-thin-color);
  margin-bottom: 1rem;
}

.breadcrumbs ul {
  display: flex;
  list-style: none;
  padding: 0;
}

.breadcrumbs li {
  color: var(--palette-light-thin-color);
  margin-right: 0.5rem;
}
.breadcrumbs span {
  color: var(--palette-light-thin-color);
}
</style>
