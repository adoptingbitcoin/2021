<template>
  <Container>
    <BlueTitle>{{ $t('speakers.callforparticipation') }}</BlueTitle>

    <div class="mx-auto">
      <!-- Begin Mailchimp Signup Form -->
      <!--      <div id="mc_embed_signup">-->
      <!--        <form-->
      <!--          id="mc-embedded-subscribe-form"-->
      <!--          action="https://space.us5.list-manage.com/subscribe/post?u=625da9c0dc52c7b96a2dffdbe&amp;id=96b79303ff"-->
      <!--          method="post"-->
      <!--          name="mc-embedded-subscribe-form"-->
      <!--          class="validate"-->
      <!--          target="_blank"-->
      <!--        >-->
      <!--          <div id="mc_embed_signup_scroll">-->
      <!--            <div class="grid grid-cols-1 md:grid-cols-3  grid-flow-row gap-4 ">-->
      <!--              <div class="cta-border-grey p-1 rounded  text-center w-100 h-100">-->
      <!--                <div class="bg-white px-5 py-2">-->
      <!--                  <input id="mce-TALKTITLE" type="text" :placeholder="$t('speakers.signup.talktitle')" name="TALKTITLE" required>-->
      <!--                </div>-->
      <!--              </div>-->

      <!--              <div class="md:col-span-2 row-span-2 cta-border-grey p-1 rounded  text-center w-100 h-100">-->
      <!--                <div class="bg-white px-5 py-2">-->
      <!--                  <textarea-->
      <!--                    id="mce-TALKDETAI"-->
      <!--                    rows="3"-->
      <!--                    class="pt-3"-->
      <!--                    name="TALKDETAI"-->
      <!--                    required-->
      <!--                    :placeholder="$t('speakers.signup.talkdetails')"-->
      <!--                  />-->
      <!--                </div>-->
      <!--              </div>-->

      <!--              <div class="cta-border-grey p-1 rounded  text-center w-100 h-100">-->
      <!--                <div class="bg-white px-5 py-2">-->
      <!--                  <input id="mce-TWITTER" type="text" :placeholder="$t('speakers.signup.twitter')" name="TWITTER" class="">-->
      <!--                </div>-->
      <!--              </div>-->

      <!--              <div class="cta-border-grey p-1 rounded  text-center w-100 h-100">-->
      <!--                <div class="bg-white px-5 py-2">-->
      <!--                  <input id="mce-GITHUB" type="text" :placeholder="$t('speakers.signup.github')" name="GITHUB" class="">-->
      <!--                </div>-->
      <!--              </div>-->

      <!--              <div class="cta-border-grey p-1 rounded  text-center w-100 h-100 md:col-span-2">-->
      <!--                <div class="bg-white px-5 py-2">-->
      <!--                  <input id="mce-MOTIVATION" type="text" :placeholder="$t('speakers.signup.motivation')" name="MOTIVATION" class="">-->
      <!--                </div>-->
      <!--              </div>-->

      <!--              <div class="grid grid-cols-2 gap-4">-->
      <!--                <div class="p-1 rounded  text-center w-100 h-100">-->
      <!--                  <label for="mce-LANG-0" class="">-->
      <!--                    <div class="bg-white px-5 py-2">-->
      <!--                      <input-->
      <!--                        id="mce-LANG-0"-->
      <!--                        type="radio"-->
      <!--                        value="English"-->
      <!--                        name="LANG"-->
      <!--                        checked-->
      <!--                      >-->
      <!--                      &lt;!&ndash;                      <span class="checkmark"></span>&ndash;&gt;-->
      <!--                      English-->
      <!--                    </div>-->
      <!--                  </label>-->
      <!--                </div>-->
      <!--                <div class="p-1 rounded  text-center w-100 h-100">-->
      <!--                  <label for="mce-LANG-1" class="">-->
      <!--                    <div class="bg-white px-5 py-2">-->
      <!--                      <input id="mce-LANG-1" type="radio" value="Español" name="LANG">-->
      <!--                      &lt;!&ndash;                      <span class="checkmark"></span>&ndash;&gt;-->
      <!--                      Español-->
      <!--                    </div>-->
      <!--                  </label>-->
      <!--                </div>-->
      <!--              </div>-->

      <!--              <div class="cta-border-grey p-1 rounded  text-center w-100 h-100">-->
      <!--                <div class="bg-white px-5 py-2">-->
      <!--                  <input id="mce-EMAIL" type="email" :placeholder="$t('speakers.signup.contactemail')" name="EMAIL" required>-->
      <!--                </div>-->
      <!--              </div>-->

      <!--              <div class="cta-border-grey p-1 rounded  text-center w-100 h-100">-->
      <!--                <div class="bg-white px-5 py-2">-->
      <!--                  <input id="mce-COMPANY" type="text" :placeholder="$t('speakers.signup.company')" name="COMPANY" class="">-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </div>-->

      <!--            &lt;!&ndash; real people should not fill this in and expect good things - do not remove this or risk form bot signups&ndash;&gt;-->
      <!--            <div style="position: absolute; left: -5000px;" aria-hidden="true">-->
      <!--              <input type="text" name="b_625da9c0dc52c7b96a2dffdbe_96b79303ff" tabindex="-1" value="">-->
      <!--            </div>-->

      <!--            <div class="cta-border p-1 rounded mx-auto my-10 text-center w-100">-->
      <!--              <div class="bg-white">-->
      <!--                <input id="mc-embedded-subscribe" type="submit" :value="$t('speakers.signup.submit')" class="cursor-pointer px-5 py-2">-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </form>-->
      <!--      </div>-->
      <!--End mc_embed_signup-->
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf1jR7R2By3yts1R_lD7Bqu3Pm_U7WWB3A10O429dF3del5gg/viewform?embedded=true"
        width="100%"
        height="1600px"
        class="mx-auto"
        >Loading…</iframe>
    </div>
  </Container>
</template>

<script>
import Container from '~/components/Container'
import BlueTitle from '~/components/BlueTitle'
export default {
  name: 'SpeakerSignup',
  components: { BlueTitle, Container }
}
</script>

<style scoped>
.cta-border{
  background: linear-gradient(to right, red, blue);
  height: fit-content;
}
.cta-border-grey{
   background: darkgrey;
   height: fit-content;
 }
input:not([type="radio"]), textarea{
  text-align: center;
  height: 100%;
  width: 100%;
}
input:focus, textarea:focus{
  outline: none;
}
input{
  background: none;
}
</style>
