<template>
  <div class="">
    <div class="trigger" @click="menuIsShown = true">
      <div class="bg-white line m-2" />
      <div class="bg-white line m-2" />
      <div class="bg-white line m-2" />
    </div>

    <div
      class="fixed left-0 top-0 w-100-vw h-100-vh bg-opacity-95 bg-white"
      :class="{ 'hidden': !menuIsShown }"
    >

      <div class="z-40 absolute right-0 top-0 p-5 text-gray-500 text-5xl" :class="{ 'hidden': !menuIsShown }" @click="menuIsShown = false">
        <i class="fas fa-times"></i>
      </div>
      <div class="w-full h-full flex items-center justify-center">
        <div class="py-auto">
          <NuxtLink to="/#home" class="link" @click.native="menuIsShown=false">Home</NuxtLink>
          <NuxtLink to="/#speakers" class="link" @click.native="menuIsShown=false">Speakers</NuxtLink>
          <NuxtLink to="/#tickets" class="link" @click.native="menuIsShown=false">Tickets</NuxtLink>
          <NuxtLink to="/#sponsors" class="link" @click.native="menuIsShown=false">Sponsors</NuxtLink>
          <NuxtLink to="/#location" class="link" @click.native="menuIsShown=false">Location</NuxtLink>
          <NuxtLink to="/#news" class="link" @click.native="menuIsShown=false">News</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      menuIsShown: false
    }
  }
}
</script>

<style scoped>
.line{
  height: 2px;
  width: 50px;
}

.link{
  @apply text-black text-center block p-2 md:p-4 text-gray-500 text-3xl md:text-xl;
}
</style>
