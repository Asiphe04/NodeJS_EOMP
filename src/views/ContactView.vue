<template>

<form class="form-container" action="https://formspree.io/f/mknaypjg" method="POST">
              <div class="mb-3">
                <label for="first name" class="label">First Name</label><br>
                <input
                  name="first name"
                  class="inputs"
                  placeholder="First Name"
                  id="firstname"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="Last Name" class="label">Last Name</label><br>
                <input
                  name="Last name"
                  class="inputs"
                  placeholder="Last Name"
                  id="last Name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="label">email account</label><br>
                <input
                  type="email"
                  class="inputs"
                  placeholder="email@gmail.com"
                  id="email account"
                  required
                />
              </div>
              <label><br>
    <textarea class="msg-input" name="message" placeholder="Enter Message"></textarea>
  </label>
              <div>
                <button class="btn btn-outline-secondary button" type="submit">
                  Submit
                </button>
              </div>
            </form>


      <!-- <form class="contact-container"
  action="https://formspree.io/f/xleybjok"
  method="POST"
>
  <label for="">
    first Name
    <input class="inputs" type="fName" placeholder="First Name"/>
  </label>
    <input class="inputs" type="secondName" placeholder="Second NAme"/>
    <input class="inputs" type="email" placeholder="email@gmail.com"/>
  
  <label>
    <textarea class="msg-input" name="message" placeholder="Enter Message"></textarea>
  </label>
  your other form fields go here -->
  <!-- <button type="submit">Send</button>
</form> --> 
</template>

<style>
.msg-input {
    width: 500px;
    height: 70px;
    border-radius: 15px;
    text-align: left;
}
.label {
  color: white;
}
.button {
  color: white;
}
.contact-container {
  border: 2px solid white;
  width: 400px;
  height: 400px;
  margin-left: 560px;
  margin-bottom: 50px;
}
.form-container {
  width: 500px;
  margin-bottom: 40px;
  margin-left: 570px;
}
.inputs {
  border-radius: 40px;
width: 400px;
height: 60px;
  margin: 5px;
  text-align: center;
}
</style>
