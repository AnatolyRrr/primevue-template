import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset, palette } from '@primevue/themes';

// palette returns shades and tints of a given color from 50 to 950 as an object.
const primaryColor = palette('#008DE2');
const redColor = palette('#C22121');
const surfaceColor = palette('#6C757D');
const darkBlueColor = palette('#006DAF');
const lightBlueColor = palette('#CDECFF');

// сustomise Aura styles here
const CustomAuraPreset = definePreset(Aura, {
  semantic: {
    primary: primaryColor,
    red: redColor,
    colorScheme: {
      light: {
        surface: surfaceColor,
      },
    },
  },
  components: {
    button: {
      css: () => `
        .p-button-nav--active {
          background: ${lightBlueColor['400']} !important;
          color: ${darkBlueColor['500']} !important;
          border-color: ${lightBlueColor['400']} !important;
        }
        .p-button-nav--active:hover {
          background: ${lightBlueColor['500']} !important;
          color: ${darkBlueColor['600']} !important;
          border-color: ${lightBlueColor['500']} !important;
        }
        .p-button-nav--active:active {
          background: ${lightBlueColor['600']} !important;
          color: ${darkBlueColor['600']} !important;
          border-color: ${lightBlueColor['600']} !important;
        }
      `,
    },
  }
});

export function setupPrimeVue(app: App) {
  app.use(PrimeVue, {
    theme: {
      preset: CustomAuraPreset,
    },
    ripple: true,
  });
};
