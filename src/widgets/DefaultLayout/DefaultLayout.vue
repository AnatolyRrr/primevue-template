<template>
  <div class="w-screen h-dvh max-h-dvh flex flex-col">
    <div class="w-full h-[4.25rem] min-h-[4.25rem] max-h-[4.25rem] bg-headerBackground">

    </div>

    <ScrollPanel
      class="flex-1 overflow-auto"
      :dt="{
          bar: {
              background: '#6C757D'
          }
      }"
    >
      <div class="px-20 py-6">
        <slot />
      </div>
    </ScrollPanel>
  </div>
</template>
