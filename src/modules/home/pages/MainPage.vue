<script setup lang="ts">
import { ref } from 'vue';
import { BaseIcon, UiTypography } from '@/shared/ui';
import { RouterLink } from 'vue-router';

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
  <div class="flex flex-col gap-2">
    <UiTypography as="p" variant="h1-upper">Главная</UiTypography>
    <Button fluid @click="toggle">
      <BaseIcon :icon="name" :size="16" />
      <UiTypography as="span" variant="text-sm-semibold">Primary default normal-size 38px</UiTypography>
    </Button>
    <Button fluid size="large">
      <UiTypography as="span" variant="text-sm-semibold">Primary default large-size 44px</UiTypography>
    </Button>

    <!-- TODO: вынести в компонент NavButton -->
    <RouterLink :to="{ name: 'home' }" v-slot="{ isActive }">
      <Button
        fluid
        size="large"
        variant="text"
        :class="[
          isActive ? 'p-button-nav--active' : '!text-blackText hover:!text-darkBlueText'
        ]"
      >
        <UiTypography as="span" variant="text-base-normal">Nav-active default large-size 44px</UiTypography>
      </Button>
    </RouterLink>

    <Button fluid severity="secondary">
      <UiTypography as="span" variant="text-sm-semibold">Secondary default</UiTypography>
    </Button>
    <Button fluid severity="secondary" variant="text">
      <UiTypography as="span" variant="text-sm-semibold">Secondary text</UiTypography>
    </Button>
    <Button fluid severity="danger" variant="outlined">
      <UiTypography as="span" variant="text-sm-semibold">Danger outlined</UiTypography>
    </Button>
    <InputText fluid placeholder="Write text" />
  </div>
</template>
