<template>
  <br>
  <br>
  <br> 
<div class="container">
  
    <div class="col-12 ">
      <h1 class="heading">About elegancescent</h1>
      <p class="about-text text-start">Elegance Scent, founded by Mufuniwa Mbedzi and Asiphe Ndimlana in 2023, is more than just an e-commerce website; it's a testament to their vision of helping young male adults and grown men elevate their personal style and confidence through the power of fragrance. With an array of carefully curated colognes, Elegance Scent caters to the diverse tastes and preferences of its discerning clientele.

Our founders, driven by a passion for the art of scent, embarked on this journey to create a seamless and convenient shopping experience for individuals who understand the transformative impact of a signature fragrance. Elegance Scent isn't just about selling colognes; it's about fostering a culture of self-expression and self-assuredness.

As you explore our online platform, you'll discover a meticulously selected collection of fragrances from renowned brands worldwide. From the fresh, invigorating notes that accompany a casual day to the sophisticated, captivating scents suitable for special occasions, Elegance Scent has it all.

We believe that every man should have the opportunity to exude elegance and charisma effortlessly. With Elegance Scent, it's not just about smelling good; it's about feeling good. Our commitment to quality, authenticity, and exceptional customer service sets us apart as a trusted destination for all your fragrance needs.

<!-- In the coming years, we look forward to expanding our product offerings, collaborating with emerging perfumers, and enhancing the overall experience for our valued customers. Elegance Scent is not just a business; it's a journey of self-discovery and personal refinement, one spritz at a time. Thank you for joining us on this fragrant adventure, and we can't wait to help you find your signature scent. <br> -->
     
      </p>

    </div>
    <div class="header">
      <h1 class="text-white">Our Founders</h1>
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
    <div class="col-12 brand-container ">
<div class="bran">
  <h1 class="text-white">Our official sponsers</h1>
</div>
      <div class="d-flex justify-content-center brands">
        <img class="brand-img" src="https://i.postimg.cc/fW5mscgb/HM.png" alt="">
        <img class="brand-img" src="https://i.postimg.cc/YqYJsSSM/download.png" alt="">
        <img class="brand-img" src="https://i.postimg.cc/Vv6VgjNk/the-north-face-brand-logo-white-symbol-clothes-design-icon-abstract-illustration-with-black-backgrou.jpg" alt="">
        <img class="brand-img" src="https://i.postimg.cc/DfXv7nzY/fcce4567-f070-42b4-9b00-d46c32a9cca8.jpg" alt="">

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
  /* display: grid; */
  /* grid-template-columns: auto auto auto auto; */
  /* font-size: 40px; */
  font-family: 'Libre Baskerville', serif;
}
.brand-img {
  border: 2px solid white;
  border-radius: 100px;
  width: 100px;
  height: 100px;
  display: flex;
  /* grid-template-columns: auto auto auto auto; */
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
  font-size: 22px;
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
 .bran{
  width: 250px !important;
  margin-left: 20px !important;
 }
 .brands {
display: grid !important;
justify-content: center !important;
align-items: center !important;
margin-left: 65px !important;
grid-template-columns: auto auto !important;
 }
 .header {
  justify-content: center !important;
  align-items: center !important;
  width: 250px !important;
 }
 .heading {
  color: white;
  font-size: 30px;
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
  grid-template-columns: auto !important;
  margin: 20px;
  width: 240px;
  /* margin-left: 25px !important; */
  justify-content: center !important;
  align-items: center !important;
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