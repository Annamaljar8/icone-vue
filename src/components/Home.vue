<template>
      <carousel :data="data"></carousel>
 </template>

<script>
export default {
    data() {
      return {
        data: [
          '<div class="slide"><img src="src/assets/slide.jpg" class="img"></div>',
          '<div class="slide"><img src="src/assets/slide1.jpg" class="img"></div>',
          '<div class="slide"><img src="src/assets/slide2.jpg"class="img"></div>',
        ],
      };
    },

}
</script>

<style>
.slide {
    align-items: center;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
  }
  .img {
     width: 100%;
     height: 90vh;

  }
</style>
