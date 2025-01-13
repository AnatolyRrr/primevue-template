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
  <div class="flex flex-col gap-2">
    <UiTypography as="h1" variant="h1-upper" class="text-red-800">Страница для разработки</UiTypography>

    <Fieldset legend="Buttons" toggleable collapsed>
      <div class="flex items-center flex-wrap gap-2 py-2">
        <RouterLink :to="{ name: 'dev' }" v-slot="{ isActive }">
          <Button
            size="large"
            variant="text"
            :class="[
              isActive ? 'p-button-nav--active' : '!text-blackText hover:!text-darkBlueText'
            ]"
          >
            <UiTypography as="span" variant="text-base-normal">Nav-active</UiTypography>
          </Button>
        </RouterLink>

        <RouterLink :to="{ name: 'dev' }" v-slot="{ isActive }">
          <Button
            size="large"
            variant="text"
            :class="[
              !isActive ? 'p-button-nav--active' : '!text-blackText hover:!text-darkBlueText'
            ]"
          >
            <UiTypography as="span" variant="text-base-normal">Nav-inactive</UiTypography>
          </Button>
        </RouterLink>

        <Button size="large">
          <UiTypography as="span" variant="text-sm-semibold">Primary default large-size 44px</UiTypography>
        </Button>

        <Button @click="toggle">
          <BaseIcon :icon="name" :size="16" />
          <UiTypography as="span" variant="text-sm-semibold">Primary default normal-size 38px</UiTypography>
        </Button>

        <Button severity="secondary">
          <UiTypography as="span" variant="text-sm-semibold">Secondary default</UiTypography>
        </Button>

        <Button severity="secondary" variant="text">
          <UiTypography as="span" variant="text-sm-semibold">Secondary text</UiTypography>
        </Button>

        <Button severity="danger" variant="outlined">
          <UiTypography as="span" variant="text-sm-semibold">Danger outlined</UiTypography>
        </Button>
      </div>
    </Fieldset>
  </div>
</template>
