<template>
  <div id="carouselControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://picsum.photos/600/300/?image=25" class="d-block" alt="image goes here">
      </div>
       <div class="carousel-item active">
        <img src="https://picsum.photos/600/300/?image=25" class="d-block" alt="image goes here">
      </div>
       <div class="carousel-item active">
        <img src="https://picsum.photos/600/300/?image=25" class="d-block" alt="image goes here">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
  </div>
</template>

<style>
  img {
    border-radius: 10px;
    width: 75%;
    height: 50%;
    overflow-x: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  #carouselControls {
    margin-bottom: 20px;
  }
</style>
