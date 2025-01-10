<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import FallbackIcon from './ui/FallbackIcon.vue';

const props = defineProps<{
  icon: string;
  size: number;
}>();
const iconComponent = ref();

const loadComponent = async (name: string) => {
  try {
    const res = await import(`@/shared/icons/${name}.svg?component`);

    iconComponent.value = res;
  } catch {
    console.error('Не найдена иконка:', name);
  }
};

watch(
  () => props.icon,
  (newVal) => {
    loadComponent(newVal);
  },
);

onMounted(() => {
  loadComponent(props.icon);
});
</script>

<template>
  <component :is="iconComponent ?? FallbackIcon" :width="`${size}px`" :height="`${size}px`" />
</template>
