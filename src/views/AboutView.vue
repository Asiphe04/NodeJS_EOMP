<template>
<div class="container">
  
    <div class="col-lg-6 col-md-12 col-sm-12 about-grid">
      <h1 class="heading">About elegancescent</h1>
      <p class="about-text">elegance scent was established by Mufuniwa Mbedzi and Asiphe Ndimlana in 2023. We Started this e-commerce website to give young male adults and grown Men a platform to purchase their favourite cologne and smell presentable while looking stylish. <br>
        As a new e-commerce website we are proud to announce our partners that we collaborated with
      </p>

    </div>
    <div class="col-6">

<h2 class="brands">Working with one of the best brands in the Globe</h2>
      <img class="brand-img" src="https://i.postimg.cc/fW5mscgb/HM.png" alt="">
      <img class="brand-img" src="https://i.postimg.cc/YqYJsSSM/download.png" alt="">
      <img class="brand-img" src="https://i.postimg.cc/Vv6VgjNk/the-north-face-brand-logo-white-symbol-clothes-design-icon-abstract-illustration-with-black-backgrou.jpg" alt="">
      <img class="brand-img" src="https://i.postimg.cc/DfXv7nzY/fcce4567-f070-42b4-9b00-d46c32a9cca8.jpg" alt="">
    </div>
  
</div>

    <div class="img-container">
      <div class="card card-img" style="width: 320px;">
  <img src="https://i.postimg.cc/MTVbqYDX/C12-Mufuniwa-Mbedzi-1.jpg" class="card-img-top about-img" alt="">
  <div class="card-body">
    <h5>Mufuniwa Mbedzi</h5>
    <p class="card-text">Frontend Developer.</p>
  </div>
</div>

<div class="card card-img" style="width: 320px;">
  <img src="https://i.postimg.cc/vTJwBNPR/C12-Asiphe-Ndimlana-3.jpg" class="card-img-top about-img" alt="">
  <div class="card-body">
    <h5>Asiphe Ndimlana</h5>
    <p class="card-text">Backend Developer.</p>
  </div>
</div>

    </div>
  
</template>

<style>
.about-img{
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 40px;
  margin: 10px;
}
.container {
  display: grid;
  grid-template-columns: auto auto;
}
.img-container {
  display: flex;
  margin: 20px;
  justify-content: center;
}
.m-img {
  /* width: 800px; */
  border: 2px solid white;
}
.heading {
  color: white;
  font-size: 50px;
  font-family: 'Libre Baskerville', serif;
}
.brands {
  color: white;
  display: grid;
  grid-template-columns: auto auto auto auto;
  font-size: 40px;
  font-family: 'Libre Baskerville', serif;
}
.brand-img {
  border-radius: 100px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 10px;
}
.card-img {
  margin: 5px;
  margin-left: 150px;
  height: 400px;
  border-radius: 40px;
  background-color: rgb(33, 33, 80);
  color: white;
}
.about-text {
  color: white;
  font-size: 26px;
  font-family: 'Libre Baskerville', serif;

}


@media only screen and (max-width: 700px) {
  .about-grid{
    margin: 5px;
  }
  .card-img {
  margin: 5px;
  margin-left: 10px;
  height: 400px;
  width: 300px;
  border-radius: 40px;
  background-color: rgb(33, 33, 80);
  color: white;
}
.about-img{
  width: 220px;
  height: 300px;
  object-fit: cover;
  border-radius: 40px;
  margin: 10px;
}
}
</style>