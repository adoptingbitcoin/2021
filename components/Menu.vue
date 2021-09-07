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
      <div class="cross z-40 absolute right-0 top-0 p-5" :class="{ 'hidden': !menuIsShown }" @click="menuIsShown = false" />
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
.cross {
  height: 75px;
  width: 75px;
}

.cross:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "\2716"; /* use the hex value here... */
  font-size: 50px;
  color: black;
  line-height: 75px;
  text-align: center;
}

.link{
  @apply text-black text-center block p-4 text-gray-500 text-3xl;
}
</style>
