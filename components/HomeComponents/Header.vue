<template>
  <div class="header">
    <div class="title-container container m-auto p-3 px-16" style="width: fit-content">
      <h1 class="text-3xl">Adopting Bitcoin</h1>
      <h5 class="text-2xl">A Lightning Summit in El Salvador</h5>
      <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-red-800 rounded my-5" style="height: 10px"></div>
      <h5 class="text-2xl">16. - 18. November 2021</h5>
      <button class="bg-white hover:bg-blue-700 text-blue-300 text-sm font-bold py-2 px-4 m-5">
        GRAB YOUR TICKET NOW
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.title-container{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
  .header{
    color: white;
    position: relative;
    height: 40vh;
    width: 100%;
    background-image: url("~/assets/images/lightning_background_color.jpeg");
    background-size: cover;
  }
</style>
