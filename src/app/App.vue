<script setup lang="ts">
import { computed } from 'vue';
import { DefaultLayout } from '@/widgets';

const layout = computed(() => DefaultLayout);
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
