<template>
  <div class="d-flex justify-content-center">
    <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style>
 span {
  font: 2px;
  font-weight: 600;
  animation: blur 3s linear infinite;
  line-height: 20px;
  transition: all 0.5s;
  letter-spacing: 0.2em;
}
@keyframes blur {
  0%,
  90% {
    filter: blur(0);
  }
  50% {
    filter: blur(10px);
  }
}
</style>
