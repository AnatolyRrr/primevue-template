import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset, palette } from '@primevue/themes';

// palette returns shades and tints of a given color from 50 to 950 as an object.
const primaryColor = palette('#008DE2');
const redColor = palette('#C22121');

// сustomise Aura styles here
const CustomAuraPreset = definePreset(Aura, {
  semantic: {
    primary: primaryColor,
    red: redColor,
    formField: {
      height: '44px',
    },
  },
});

export function setupPrimeVue(app: App) {
  app.use(PrimeVue, {
    theme: {
      preset: CustomAuraPreset,
    },
    ripple: true,
  });
};
