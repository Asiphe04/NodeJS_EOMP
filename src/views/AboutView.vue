<template>
<div class="container">
  
    <div class="col-lg-6 col-md-12 col-sm-12 about-grid">
      <h1 class="heading">About elegancescent</h1>
      <p class="about-text">elegance scent was established by Mufuniwa Mbedzi and Asiphe Ndimlana in 2023. We Started this e-commerce website to give young male adults and grown Men a platform to purchase their favourite cologne and smell presentable while looking stylish. <br>
        As a new e-commerce website we are proud to announce our partners that we collaborated with
      </p>

    </div>
    <div class="col-6 brand-container d-flex flex-column">
      <h2 class="brands">Working with one of the best brands in the Globe</h2>
      <div class="d-flex justify-content-between b-log">
        <img class="brand-img" src="https://i.postimg.cc/fW5mscgb/HM.png" alt="">
        <img class="brand-img" src="https://i.postimg.cc/YqYJsSSM/download.png" alt="">
        <img class="brand-img" src="https://i.postimg.cc/Vv6VgjNk/the-north-face-brand-logo-white-symbol-clothes-design-icon-abstract-illustration-with-black-backgrou.jpg" alt="">
        <img class="brand-img" src="https://i.postimg.cc/DfXv7nzY/fcce4567-f070-42b4-9b00-d46c32a9cca8.jpg" alt="">

      </div>
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
.brand-container {
  /* border: 2px solid white; */
  margin-top: 90px;
  width: 600px;
  height: 400px;
  display: flex;
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
  border: 2px solid white;
  border-radius: 100px;
  width: 100px;
  height: 100px;
  display: flex;
  grid-template-columns: auto auto auto auto;
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
@media only screen and (max-width: 300px) {
  html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
 }
 .heading {
  color: white;
  font-size: 30px;
  width: 270px;
  /* text-align: center; */
  font-family: 'Libre Baskerville', serif;
}
  .about-grid{
    margin: 5px;
    margin-right: 50px;
    /* border: 2px solid white; */
    /* width: 250px; */
  }
  .about-text {
  color: white;
  margin-right: 50px;
  width: 270px;
  font-size: 15px !important;
  font-family: 'Libre Baskerville', serif;
}
.card-img {
  margin: 5px;
  margin-left: 10px;
  height: 200px;
  width: 141px !important;  
  border-radius: 40px;
  background-color: rgb(33, 33, 80);
  color: white;
}
.img-container {
  display: grid !important;
  grid-template-columns: auto;
  margin: 20px;
  justify-content: center;
}
.brands {
  /* border: 2px solid white; */
  margin-left: 40px;
  color: white;
  display: grid;
  /* grid-template-columns: auto; */
  font-size: 30px !important;
  width: 200px;
  font-family: 'Libre Baskerville', serif;
}
.brand-img {
  border-radius: 100px;
  width: 50px !important;
  /* margin: 10px 25px 10px 10px !important; */
  height: 50px !important ;
  display: flex !important;
  margin-right: 50px !important;
  /* flex-template-columns: auto auto !important; */
  object-fit: cover;
  margin: 10px;
}
.b-log {
  justify-content: center;
  max-width: 100px!important;
  /* margin-left: 10px 50px 10px 10px !important; */
  justify-items: center0;
  display: grid !important;
  grid-template-columns: auto auto !important;
  margin-left: 50px;
  /* border: 2px solid white; */
}
.img-container {
  display: flex;
  margin: 20px;
  justify-content: center;
}
}

@media only screen and (max-width: 700px) {

 
  .about-grid{
    margin: 5px;
    margin-right: 50px;
  }
  .about-text {
  color: white;
  margin-right: 50px;
  font-size: 26px;
  font-family: 'Libre Baskerville', serif;
}
  .card-img {
  margin: 5px;
  margin-left: 10px;
  height: 400px;
  width: 241px !important;  
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
.container {
  display: grid;
  grid-template-columns: auto;
}
.brands {
  /* border: 2px solid white; */
  margin-right: 50px;
  color: white;
  display: grid;
  grid-template-columns: auto;
  font-size: 40px;
  font-family: 'Libre Baskerville', serif;
}
.brand-img {
  border-radius: 100px;
  width: 100px;
  height: 100px;
  display: grid;
  margin-right: 50px !important;
  grid-template-columns: auto auto auto auto;
  object-fit: cover;
  margin: 10px;
}
}
</style>