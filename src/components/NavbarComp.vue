<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg bg-body-dark">
            <div class="container-fluid">
              
              <a class="navbar-brand" href="#">  <img src="https://i.postimg.cc/fkQWYhTv/nodelogo.jpg" class="img-nav" alt="Logo"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                  <li class="nav-item">
                    <router-link  to="/">Home</router-link>
                  </li>
                     <li class="nav-item">
                    <router-link  to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/products">Products</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact">Contact Us</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/admin">Admin</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/admin">Login</router-link>
                  </li>
                   <li class="nav-item">
                    <router-link to="/admin">Register</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>
<script>
export default {
   
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Catamaran&family=Cormorant+Garamond&family=Genos&family=Montserrat:wght@500&display=swap');
nav {
  background-color: #61b3ff;
  box-shadow: 0 0 5px -3px #121212;
  margin-bottom: 20px;
}
.navbar-brand {
  background-color: transparent;
}
.img-nav{
    text-align: left;
    border: 2px solid black;
    width: 35px;
    height: 35px;
    border-radius: 50px;
}
router-link {
  text-decoration: none;
  transition: all 0.2s;
  color: #121212;
  position: relative;
}
router-link:hover::after {
  content: '';
  height: 2px;
  width: 100%;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
}

.body {
  background-color: #D4C4C4B2 !important;
  ;
  position: fixed;
}
</style>