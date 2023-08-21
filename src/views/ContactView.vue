<template>
      <form
  action="https://formspree.io/f/xleybjok"
  method="POST"
>
  <div class="contact-container">
    <input class="inputs" type="fName" placeholder="First Name"/>
    <input class="inputs" type="secondName" placeholder="Second NAme"/>
    <input class="inputs" type="email" placeholder="email@gmail.com"/>
  </div>
  <label>
    <textarea class="msg-input" name="message" placeholder="Enter Message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>
</template>

<style>
.msg-input {
    width: 350px;
    height: 120px;
    border-radius: 40px;

}
.contact-container {
  /* border: 2px solid white; */
  width: 400px;
  margin-left: 560px;
}
.inputs {
  border-radius: 40px;

  margin: 5px;
}
</style>
