<template>
  <Container>
    <BlueTitle>Call for Participation</BlueTitle>

    <div class="mx-auto">
      <!-- Begin Mailchimp Signup Form -->
      <div id="mc_embed_signup">
        <form
          id="mc-embedded-subscribe-form"
          action="https://space.us5.list-manage.com/subscribe/post?u=625da9c0dc52c7b96a2dffdbe&amp;id=96b79303ff"
          method="post"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div class="grid grid-cols-1 md:grid-cols-3  grid-flow-row gap-4 ">
              <div class="cta-border-grey p-1 rounded  text-center w-100 h-100">
                <div class="bg-white px-5 py-2">
                  <input id="mce-TALKTITLE" type="text" placeholder="TALK TITLE" name="TALKTITLE" class="">
                </div>
              </div>

              <div class="col-span-2 row-span-2 cta-border-grey p-1 rounded  text-center w-100 h-100">
                <div class="bg-white px-5 py-2">
                  <textarea id="mce-TALKDETAI" type="text" name="TALKDETAI" placeholder="TALK DETAILS" />
                </div>
              </div>

              <div class="cta-border-grey p-1 rounded  text-center w-100 h-100">
                <div class="bg-white px-5 py-2">
                  <input id="mce-TWITTER" type="text" placeholder="TWITTER" name="TWITTER" class="">
                </div>
              </div>

              <div class="cta-border-grey p-1 rounded  text-center w-100 h-100">
                <div class="bg-white px-5 py-2">
                  <input id="mce-GITHUB" type="text" placeholder="GITHUB" name="GITHUB" class="">
                </div>
              </div>

              <div class="cta-border-grey p-1 rounded  text-center w-100 h-100 col-span-2">
                <div class="bg-white px-5 py-2">
                  <input id="mce-MOTIVATION" type="text" placeholder="MOTIVATION" name="MOTIVATION" class="">
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="p-1 rounded  text-center w-100 h-100">
                  <div class="bg-white px-5 py-2">
                    <input
                      id="mce-LANG-0"
                      type="radio"
                      value="English"
                      name="LANG"
                      checked
                    ><label for="mce-LANG-0" class="px-1">English</label>
                  </div>
                </div>
                <div class="p-1 rounded  text-center w-100 h-100">
                  <div class="bg-white px-5 py-2">
                    <input id="mce-LANG-1" type="radio" value="Español" name="LANG"><label for="mce-LANG-1" class="px-1">Español</label>
                  </div>
                </div>
              </div>

              <div class="cta-border-grey p-1 rounded  text-center w-100 h-100">
                <div class="bg-white px-5 py-2">
                  <input id="mce-EMAIL" type="email" placeholder="CONTACT EMAIL" name="EMAIL" class="required email">
                </div>
              </div>

              <div class="cta-border-grey p-1 rounded  text-center w-100 h-100">
                <div class="bg-white px-5 py-2">
                  <input id="mce-COMPANY" type="text" placeholder="COMPANY" name="COMPANY" class="">
                </div>
              </div>
            </div>

            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_625da9c0dc52c7b96a2dffdbe_96b79303ff" tabindex="-1" value="">
            </div>

            <div class="cta-border p-1 rounded mx-auto my-10 text-center w-100">
              <div class="bg-white">
                <input id="mc-embedded-subscribe" type="submit" value="LETS PUSH THINGS FORWARD" class="cursor-pointer px-5 py-2">
              </div>
            </div>
          </div>
        </form>
      </div>
      <!--End mc_embed_signup-->
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
}.cta-border-grey{
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
