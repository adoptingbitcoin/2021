<template>
  <div class="container mx-auto">
    <Container>
      <BlueTitle class="">
        {{ $t('subscribe.title') }}
      </BlueTitle>
      <div class="mx-auto">
        <p class="mb-10">
          {{ $t('subscribe.text') }}
        </p>

        <form @submit.prevent="subscribe">
          <div class="cta-border p-1 rounded mx-auto my-5 text-center w-100 md:inline-block md:w-auto">
            <div class="bg-white px-5 py-2">
              <input v-model="email" type="email" :placeholder="$t('subscribe.enteremail')">
            </div>
          </div>

          <div class="cta-border p-1 rounded mx-auto my-5 text-center w-100 md:inline-block md:w-auto md:ml-5">
            <div class="bg-white px-5 py-2">
              <button type="submit">
                {{ $t('subscribe.signup') }}
              </button>
            </div>
          </div>
          <div v-if="error">
            There was an Error!
          </div>
          <div v-if="success">
            Yay!
          </div>
          <div v-if="loading">
            Loading…
          </div>
        </form>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/Container'
import BlueTitle from '~/components/BlueTitle'
export default {
  name: 'Subscribe',
  components: { BlueTitle, Container },
  data () {
    return {
      email: '',
      error: false,
      success: false,
      loading: false
    }
  },
  methods: {
    onError () {
      console.log('Error subscribing to Newsletter!')
    },
    onSuccess () {
      console.log('Successfully Subscribed to Newsletter!')
    },
    subscribe () {
      this.loading = true
      this.success = false
      this.error = false
      fetch('https://bitkushin.space/adoptingbitcoin_mail_subscribe.php?email=' + this.email).then((result) => {
        this.loading = false
        if (result.ok || result.status === 400) {
          this.success = true
          this.email = ''
        } else {
          this.success = false
          this.error = true
        }
        console.log(result)
      }, (error) => {
        this.loading = false
        this.success = false
        this.error = true
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.cta-border{
  background: linear-gradient(to right, red, blue);
  height: fit-content;
}
input{
  text-align: center;
}
input:focus{
  outline: none;
}
</style>
