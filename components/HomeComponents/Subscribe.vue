<template>
  <div class="container mx-auto">
    <Container>
      <BlueTitle class="">
        {{ $t('subscribe.title') }}
      </BlueTitle>
      <div class="mx-auto">
        <mailchimp-subscribe
          url="https://space.us5.list-manage.com/subscribe/post-json"
          user-id="625da9c0dc52c7b96a2dffdbe"
          list-id="bcae950e07"
          @error="onError"
          @success="onSuccess"
        >
          <template v-slot="{ subscribe, setEmail, error, success, loading }">
            <form @submit.prevent="subscribe">
              <div class="cta-border p-1 rounded mx-auto my-5 text-center w-100 md:inline-block md:w-auto">
                <div class="bg-white px-5 py-2">
                  <input type="email" @input="setEmail($event.target.value)" :placeholder="$t('subscribe.enteremail')" />
                </div>
              </div>

              <div class="cta-border p-1 rounded mx-auto my-5 text-center w-100 md:inline-block md:w-auto">
                <div class="bg-white px-5 py-2">
                  <button type="submit">{{ $t('subscribe.signup') }}</button>
                </div>
              </div>
              <div v-if="error">{{ error }}</div>
              <div v-if="success">Yay!</div>
              <div v-if="loading">Loading…</div>
            </form>
          </template>
        </mailchimp-subscribe>
      </div>

    </Container>
  </div>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'
import Container from '~/components/Container'
import BlueTitle from '~/components/BlueTitle'
export default {
  name: 'Subscribe',
  components: { BlueTitle, Container, MailchimpSubscribe },
  methods: {
    onError () {
      console.log('Error subscribing to Newsletter!')
    },
    onSuccess () {
      console.log('Successfully Subscribed to Newsletter!')
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
