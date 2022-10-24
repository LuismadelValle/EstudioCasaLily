<template>
   <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    :interval="3000"
    no-animation
    controls
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide caption="Hacemos fotos de quinces">
      <b-img-lazy id="fifteen" slot="img" :src="fifteen" alt="girl in dress"></b-img-lazy>
    </b-carousel-slide>
    <b-carousel-slide caption="Para bebes">
      <b-img-lazy id="baby" slot="img" :src="baby" alt="baby"></b-img-lazy>
    </b-carousel-slide>
    <b-carousel-slide caption="Servicios de Edición">
      <b-img-lazy id="edition" slot="img" :src="edition" alt="baby girl with dog"></b-img-lazy>
    </b-carousel-slide>
    <b-carousel-slide caption="Y más">
      <b-img-lazy id="more" slot="img" :src="more" alt="baby boy"></b-img-lazy>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import fifteenSRC from '@/assets/IMG_9489mac.jpg';
import baby from '@/assets/9a (1).jpg';
import edition from '@/assets/5 (1).jpg';
import more from '@/assets/IMG_8244.jpg';

export default {
  data() {
    return {
      fifteen: fifteenSRC,
      baby: baby,
      edition: edition,
      more: more
    }
  }
}
</script>

<style>
  #fifteen, #baby, #edition, #more {
    width: 75%;
    height: 40%;
  }
  #carousel-no-animation___BV_inner_ {
    width: 75%;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
  }
  .sr-only {
    display: none;
  }
</style>