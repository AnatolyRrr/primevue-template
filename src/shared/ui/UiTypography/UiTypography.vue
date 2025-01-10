<script setup lang="ts">
import { computed } from 'vue';
import type { TypographyTag, TypographyVariant } from './UiTypography.types';

const props = withDefaults(
  defineProps<{
    as?: TypographyTag;
    variant?: TypographyVariant;
  }>(),
  {
    as: 'p',
    variant: 'text-base-normal',
  },
);


const computedClass = computed(() => {
  const variantClasses: Record<TypographyVariant, string> = {
    'h1-upper': 'text-4xl leading-10 font-bold tracking-wider uppercase',
    'h2-upper': 'text-3xl leading-10 font-bold tracking-wider uppercase',
    'h3': 'text-2xl leading-8 font-bold',
    'h4': 'text-xl leading-6 font-bold',
    'h5-upper': 'text-base leading-5 font-semibold tracking-wider uppercase',
    'h6-upper': 'text-sm leading-5 font-medium tracking-wider uppercase',
    'text-base-bold': 'text-base leading-5 font-bold',
    'text-base-semibold': 'text-base leading-5 font-semibold',
    'text-base-medium': 'text-base leading-5 font-medium',
    'text-base-normal': 'text-base leading-5 font-normal',
    'text-base-normal-lh3': 'text-base leading-6 font-normal',
    'text-sm-semibold': 'text-sm leading-4 font-semibold',
    'text-sm-medium': 'text-sm leading-4 font-medium',
    'text-sm-normal': 'text-sm leading-4 font-normal',
    'text-sm-normal-lh2': 'text-sm leading-5 font-normal',
    'text-sm-normal-underline': 'text-sm leading-4 font-normal underline',
    'text-sm-normal-crossed': 'text-sm leading-4 font-normal line-through',
    'text-xs-semibold': 'text-xs leading-4 font-semibold',
    'text-xs-medium': 'text-xs leading-4 font-medium',
    'text-xs-normal': 'text-xs leading-4 font-normal',
    'text-xxs-normal': 'text-xxs leading-3 font-semibold',
  };

  return variantClasses[props.variant] || variantClasses['text-base-normal'];
});
</script>

<template>
  <component :is="as" :class="computedClass">
    <slot />
  </component>
</template>
