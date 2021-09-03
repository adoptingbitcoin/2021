<template>
  <div class="fixed top-0 left-0 w-100 nav-bar z-50" >
    <div class="w-100-vw pt-3">
      <div class="background" :class="{ 'scrolled': !view.atTopOfPage }"/>
      <NuxtLink to="/">
        <div class="inline-block mr-4">
          <Logo class="p-2" />
        </div>
        <div class="md:inline-block vertical-align-bottom hidden">
          <h1 class="text-3xl md:text-5xl">
            {{ $t('header.title') }}
          </h1>
          <h5 class="text-lg md:text-2xl">
            {{ $t('header.subtitle') }}
          </h5>
        </div>
      </NuxtLink>

      <div class="absolute right-5 top-5">
        <nuxt-link :to="switchLocalePath('en')">
          English
        </nuxt-link> |
        <nuxt-link :to="switchLocalePath('es')">
          Español
        </nuxt-link>
      </div>
    </div>
    <div class="bg-gradient-to-r from-yellow via-red to-red rounded mt-5 w-100" style="height: 5px" />
  </div>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  name: 'Nav',
  components: { Logo },
  data () {
    return {
      view: {
        atTopOfPage: true
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll () {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0 && this.view.atTopOfPage) {
        this.view.atTopOfPage = false
      } else if (window.pageYOffset === 0 && !this.view.atTopOfPage) {
        this.view.atTopOfPage = true
      }
    }
  }
}
</script>

<style scoped>

.background{
  opacity: 0;
  width: 100%;
  height: 100%;
  background-image: url("~/assets/images/adopting_bitcoin_the_lightning_network.jpg");
  background-size: cover;
  background-position: top center;
  -webkit-transition: background-image 0.2s ease-in-out;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9999;
}
.background.scrolled{
  opacity: 1;
}
img{
  height: 100px;
  width: auto;
}
.vertical-align-bottom{
  vertical-align: bottom;
}
</style>
