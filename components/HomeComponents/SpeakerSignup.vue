<template>
  <Container>
    <form action="https://space.us5.list-manage.com/subscribe/post" method="POST">
      <input type="hidden" name="u" value="625da9c0dc52c7b96a2dffdbe">
      <input type="hidden" name="id" value="bcae950e07">


      <!-- people should not fill these in and expect good things -->
      <div class="field-shift" aria-label="Please leave the following three fields empty">
        <label for="b_name">Name: </label>
        <input type="text" name="b_name" tabindex="-1" value="" placeholder="Freddie" id="b_name">

        <label for="b_email">Email: </label>
        <input type="email" name="b_email" tabindex="-1" value="" placeholder="youremail@gmail.com" id="b_email">

        <label for="b_comment">Comment: </label>
        <textarea name="b_comment" tabindex="-1" placeholder="Please comment" id="b_comment"></textarea>
      </div>

      <div id="mergeTable" class="mergeTable">


        <div class="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
          <label for="MERGE0">Contact Email <span class="req asterisk">*</span></label>
          <div class="field-group">
            <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="">


          </div>

        </div>



        <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
          <label for="MERGE1">Talk Title</label>
          <div class="field-group">
            <input type="text" name="MERGE1" id="MERGE1" size="25" value="">


          </div>

        </div>



        <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-7">
          <label for="MERGE7">COMPANY</label>
          <div class="field-group">
            <input type="text" name="MERGE7" id="MERGE7" size="25" value="">


          </div>

        </div>



        <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-2">
          <label for="MERGE2">Twitter</label>
          <div class="field-group">
            <input type="text" name="MERGE2" id="MERGE2" size="25" value="">


          </div>

        </div>



        <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-3">
          <label for="MERGE3">Github Account</label>
          <div class="field-group">
            <input type="text" name="MERGE3" id="MERGE3" size="25" value="">


          </div>

        </div>



        <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-4">
          <label for="MERGE4">Motivation</label>
          <div class="field-group">
            <input type="text" name="MERGE4" id="MERGE4" size="25" value="">


          </div>

        </div>



        <div class="mergeRow dojoDndItem mergeRow-radio" id="mergeRow-5">
          <label for="MERGE5">Language</label>
          <div class="field-group">
            <div class="interestgroup_field radio-group" id="MERGE5"> <label class="radio" for="MERGE5-0"><input type="radio" data-dojo-type="dijit/form/RadioButton" name="MERGE5" id="MERGE5-0" value="English"  class="av-radio"><span>English</span></label><label class="radio" for="MERGE5-1"><input type="radio" data-dojo-type="dijit/form/RadioButton" name="MERGE5" id="MERGE5-1" value="Espanol"  class="av-radio"><span>Espanol</span></label> </div>




          </div>

        </div>









      </div>

      <div class="submit_container clear">
        <input type="submit" class="formEmailButton" name="submit" value="Subscribe">
      </div>
      <input type="hidden" name="ht" value="504d73d95d354b560499e91e788d2402dca9fcdf:MTYzMDIyNTQwMS4yOTQ5">
      <input type="hidden" name="mc_signupsource" value="hosted">
    </form>
  </Container>
</template>

<script>
import Container from '~/components/Container'
export default {
  name: 'SpeakerSignup',
  components: { Container }
}
</script>

<style scoped>

</style>
