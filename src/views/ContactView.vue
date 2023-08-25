<template>
   <br>
  <br>
  <br> 
<h1  class="m-1 text-white">Contact</h1>
<div class="container d-flex">
    <div class="contact-form col-6 m-4">
        <span class="title text-white">Leave a Message</span>
  <form class="form"  action="https://formspree.io/f/mzblpqqg"
  method="POST">
    <div class="group">
    <input placeholder="‎" type="text" required oninvalid="this.setCustomValidity('Please fill in the space')"
            oninput="this.setCustomValidity('')"/>
    <label for="name">Name</label>
    </div>
<div class="group">
    <input placeholder="‎" type="email" id="email" name="email" required oninvalid="this.setCustomValidity('Please fill in the space')"
            oninput="this.setCustomValidity('')"/>
    <label for="email">Email</label>
    </div>
<div class="group">
    <textarea placeholder="‎" id="comment" name="comment" rows="5" required oninvalid="this.setCustomValidity('Please fill in the space')"
            oninput="this.setCustomValidity('')"></textarea>
    <label for="comment">Message</label>
</div>
    <button type="submit">Send!</button>
  </form> 
    </div>
    <div class="col-6 m-4" id="contact-img">  
    </div>
</div>
</template>

<script>
    export default{

    }
</script>
<style scoped>

@media (max-width:700px){
  .contact-form{
    width: 90% !important;
  }
  .title{
    display: none;
  }
  #contact-img{
    display: none;
  }
}
#contact-img{
  border-radius: 3%;
    height: 350px;
    width: 500px;
    background-image: url("https://i.postimg.cc/zGr9kGjy/IMG-20220430-WA0017.jpg");
    background-size: cover;
  background-position: center;
}
.container {
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 24px;
}
.title {
  font-size: 24px;
  text-align: center;
}

.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.group {
  position: relative;
}

.form .group label {
  font-size: 14px;
  color: white;
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #fff;
  transition: all .3s ease;
}

.form .group input,
.form .group textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
  background-color: transparent;
}

.form .group input:placeholder-shown+ label, .form .group textarea:placeholder-shown +label {
  top: 10px;
  background-color: transparent;
}

.form .group input:focus,
.form .group textarea:focus {
  background-color: white;
  border-color: var(--secondary-color);
}

.form .group input:focus+ label, .form .group textarea:focus +label {
  top: -20px;
  left: 10px;
  background-color: transparent;
  border-radius: 5%;
  color: var(--secondary-color);
  font-size: 14px;
}

.form .group textarea {
  height: 100px;
}
button {
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge  #653aff;
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  margin:14px
}

</style>