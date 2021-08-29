<template>
  <div class="w-full">
    <Header />
    <JoinTheNetwork />
    <SpeakerList :speakers="speakers" />
    <ComeJoinUs />
    <Schedule />
    <Tickets />
<!--    <Sponsors :sponsors="sponsors" />-->
    <Locations :locations="locations" />
    <OrganizerList :speakers="organizers" />
    <Subscribe />
    <ContactUs></ContactUs>
  </div>
</template>

<script>
import JoinTheNetwork from '~/components/HomeComponents/JoinTheNetwork'
import Header from '~/components/HomeComponents/Header'
import SpeakerList from '~/components/HomeComponents/SpeakerList'
import ComeJoinUs from '~/components/HomeComponents/ComeJoinUs'
import Schedule from '~/components/HomeComponents/Schedule'
import Locations from '~/components/HomeComponents/Locations'
import Subscribe from '~/components/HomeComponents/Subscribe'
import ContactUs from '~/components/HomeComponents/ContactUs'
import OrganizerList from '~/components/HomeComponents/OrganizerList'
import Tickets from '~/components/HomeComponents/Tickets'
export default {
  components: { Tickets, OrganizerList, ContactUs, Subscribe, Locations, Schedule, ComeJoinUs, SpeakerList, JoinTheNetwork, Header },
  async asyncData ({ $content, params, i18n }) {
    const speakers = await $content('speakers', params.slug)
      .only(['name', 'function', 'img', 'slug'])
      .sortBy('prio', 'asc')
      .fetch()

    const organizers = await $content('organizers', params.slug)
      .only(['name', 'function', 'social', 'img', 'slug'])
      .sortBy('prio', 'asc')
      .fetch()

    const locations = await $content('locations', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .where({ language: i18n.locale })
      .sortBy('prio', 'asc')
      .fetch()

    const sponsors = await $content('sponsors', params.slug)
      .only(['width', 'img', 'slug'])
      .sortBy('width', 'desc')
      .fetch()

    return {
      speakers,
      organizers,
      locations,
      sponsors
    }
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.description')
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://adoptingbitcoin.reichart.xyz/adopting_bitcoin_meta_preview.jpg'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$t('seo.title')
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://adoptingbitcoin.reichart.xyz'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:description',
          name: 'og:title',
          content: this.$t('seo.description')
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@AdoptingBTC'
        },
        ...i18nHead.meta
      ],
      link: [
        ...i18nHead.link
      ]
    }
  }
}
</script>

<style scoped>
</style>
