<template>
  <main class="px-10 py-20 text-center">
    <Header class="absolute top-4 right-4" />

    <slot />
    <div class="mx-auto mt-5 text-center text-sm opacity-25">
      [Home Layout]
    </div>

    <Footer class="absolute bottom-4 right-4" />
  </main>
</template>
