<script setup lang="ts">
import { ref } from 'vue';
import { BaseIcon, UiTypography } from '@/shared/ui';

const name = ref('user');
const toggle = () => {
  if (name.value === 'user') {
    name.value = 'bell-ringing';
  } else {
    name.value = 'user';
  }
};
</script>

<template>
  <div>
    <UiTypography as="p" variant="h1-upper">Главная</UiTypography>
    <Button @click="toggle">
      <BaseIcon :icon="name" :size="16" />
      <UiTypography as="span" variant="text-sm-semibold">Кнопка</UiTypography>
    </Button>
    <InputText fluid />
  </div>
</template>
