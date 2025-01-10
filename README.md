# BAS

This is main frontend repository of the ЦРК БАС project.

## Installation

- Copy the repository
- Install npm dependencies: `npm install`
- Setup configuration in the `.env` file:
```dotenv
VITE_APP_MODE=development
```

## Starting web server

Run `npm run dev` command and visit url from the output of the command.

## Production Build

Run `npm run build` to create a production build.

## Tests

- Unit tests: `npm run test:unit`

## Code Style

We use ESLint + Prettier. To check the code style run: `npm run lint`.

## Folder Structure

Внимательно изучите документацию [Feature-Sliced Design](https://feature-sliced.design/). Была добавлена папка `src/modules/`, которая разделяет страницы на независимые друг от друга модули, внутри каждого модуля также используется структура FSD. Это сделано для быстрого перехода на микросервисы, если потребуется.

- `app/`: находится только в корневой папке `src/`.
- `pages/`: общие для всех модулей страницы приложения.
- `widgets/`: общие для всех модулей более сложные композиционные блоки интерфейса.
- `features/`: общие для всех модулей функциональные блоки.
- `entities/`: общие для всех модулей сущности, бизнес-логика.
- `shared/`: слой общих компонентов, утилит и хелперов, которые могут использоваться в нескольких слоях и/или модулях.
- `modules/`: каждый модуль может содержать вышеперечисленные папки, кроме `app/`. Модули не могут взаимодействовать друг с другом.

## Naming Conventions

- **Компоненты**: `SomeComponent.vue`.
- **Переменные**: `useCamelCase` для JS/TS.
- **Файлы утилит**: `formatDate.ts`.
- **Прочие файлы**: `kebab-case.ts`.

## Typography & Icons

- **Typography**: используйте компонент `UiTypography.vue` из `@/shared/ui` для всех текстов. Список вариантов составлен согласно дизайну.
- **Icons**: используйте [PrimeIcons](https://primevue.org/icons/#list) или собственные svg-иконки с помощью `BaseIcon.vue` из `@/shared/ui`. Добавление собственных иконок осуществляется по следующей инструкции:
  - Сохранить svg в `src/shared/icons/`.
  - Уберите width и height для возможности динамической настройки размера.
  - Замените цвет иконки на `currentColor`, если необходима возможность динамически задавать цвет иконки.

## Styles

- Используйте стилизацию преимущественно с помощью [Tailwind CSS](https://tailwindcss.com/), в том числе в postcss с помощью `@apply`.
- Переменные colors добавляйте в `tailwind.config.js`.
- Изменить базовые стили [PrimeVue (Theming)](https://primevue.org/theming/styled/) можно в файле `src/app/plugins/prime-vue.ts`.

## Forms

- Для написания форм используется [PrimeVue Forms](https://primevue.org/forms/).
- Для валидации форм используется [zod](https://zod.dev/).

## Other

- Придерживайтесь следующего порядка импортов в компонентах:
  - Импорты из node_modules, например `vue`.
  - Импорты из слоев `widgets` > `features` > `entities` > `shared`.
  - Прочие импорты.
- Старайтесь по возможности группировать функционал Vue в скрипте компонентов, пример порядка:
  - `import`.
  - `type` и `interface`.
  - `defineProps`.
  - `defineEmits`.
  - `inject`.
  - Не реактивные переменные.
  - `use`-функции.
  - `ref` и `reactive`.
  - `computed`.
  - `functions`.
  - `watch`.
  - Хуки жизненного цикла.
  - `provide`.
- Используйте преимущественно стрелочные функции.
- Используйте преимущественно forEach, вместо цикла for.
- Используйте try catch для асинхронных операций.
- Используйте [Pinia Setup Stores](https://pinia.vuejs.org/core-concepts/#Setup-Stores) для оформления сторов.
- Разделяйте api ендпоинты на модули, на примере `src/shared/api/example`.

## Useful links

- [Feature-Sliced Design](https://feature-sliced.design/)
- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vite](https://vite.dev/)
- [PrimeVue](https://primevue.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [VueUse](https://vueuse.org/)

## Commits

For commits naming we follow [Conventional Commit Messages](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13).
