<template>
  <div class="home">
  <div class="background">
<div class="container">
  <div class="row">
    <div class="col-6 div">
      <img class="home-img" src="https://i.postimg.cc/x8gN9HyH/Cheap-Cologne-hsh-91-696x572.webp" alt="">
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12">
      <p class="home-p">You Want people to notice you as soon <br> as you enter a room? Well you <br> Came to the right place</p>
    </div>
  </div>
</div>






<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner slide">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/XqdtHpzy/best-smelling-colognes-edit.jpg" class=" home-slide" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="comment">Get 20% OFF for The Colognes displayed in the slide show.</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/4d1ZxgMr/hsh-91-Best-Cologne-For-Young-Men-1-edit2.jpg" class=" home-slide" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="comment">sent bon pour les réunions d'affaires.</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/cHk9mk8v/6108v-Uoj05-L-SX569-edit5.jpg" class=" home-slide" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="comment">Be a ladies with Ammunition.</h5>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="https://i.postimg.cc/Bntx5ZBB/DAV-CW-REB-22-CPV-CW-M-In-Store-16-9-edit3.jpg" class=" home-slide" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="comment">Be cool Like the water with DAVIDOFF.</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>






  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>



/* .div {
  border: 2px solid black;
  height: 410px;
} */
/* .slide {
  box-shadow: grey 10px 10px 10px;
  border-radius: 40px;
  width: 1000px;
  height: 200px;
  align-items: center;
  padding: 5px;
  margin: 40px;
  margin-left: 50px;
  object-fit: fill;
} */
.home-slide {
  box-shadow: grey 10px 10px 10px;
  border-radius: 40px;
  width: 1200px !important;
  height: 300px;
  align-items: center;
  padding: 5px;
  margin: 40px;
  margin-left: 50px;
  object-fit: fill;
}
.comment {
  background: rgba(0, 0, 0, 0.8);
  /* width: 1000px; */
  /* opacity: (0, 0, 0, 2222); */
}
.home-p {
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  font-size: xx-large;
  color: white;
  margin-top: 60px;
  font-family: 'Libre Baskerville', serif;
/* font-family: 'Montserrat', sans-serif !important; */
}
.home-img {
  box-shadow: grey 10px 10px 10px;
  /* border: 2px solid black; */
  width: 450px;
  height: 400px;
  border-radius: 40px;
  object-fit: cover;
}
@media only screen and (max-width: 700px) {
  .home-slide {
  box-shadow: grey 5px 5px 5px !important;
  border-radius: 40px;
  max-width: 200px !important;
  height: 190px !important;
  align-items: center;
  padding: 5px;
  margin: 40px;
  margin-left: 50px;
  object-fit: fill;
}
.home-img {
  box-shadow: grey 5px 5px 5px !important;
  /* border: 2px solid black; */
  width: 200px !important;
  height: 190px !important;
  border-radius: 20px;
  margin-left: 40px !important;
  object-fit: cover;
}
}

@media only screen and (max-width: 700px) {

  .home-slide {
  box-shadow: grey 10px 10px 10px;
  border-radius: 40px;
  width: 390px !important;
  height: 130px;
  align-items: center;
  padding: 5px;
  margin: 40px;
  margin-left: 50px;
  object-fit: fill;
}
.home-img {
  box-shadow: grey 10px 10px 10px;
  /* border: 2px solid black; */
  width: 350px;
  height: 300px;
  border-radius: 40px;
  margin-left: 80px;
  object-fit: cover;
}
}

</style>
