<template>
  <div class="cta-border p-1 rounded mx-0 my-5">
    <div class="bg-white">
      <a href="#tickets" class="text-lg font-bold p-5 relative block">
        GRAB YOUR TICKET NOW
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CTA'
}
</script>

<style scoped>
.cta-border{
  background: linear-gradient(to right, red, blue);
  width: fit-content;
  height: fit-content;
}
a::before{
  background: white;
  content: "";
}
a{
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
