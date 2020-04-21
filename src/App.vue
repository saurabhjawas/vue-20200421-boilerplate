<template>
  <div id="app">
    <input type="text" v-model="message"/>
    <h2 class="message">{{ message }}</h2>
    <h3>Some Other Message!!!</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Yolo World!!! It seems to work..'
    }
  }
}
</script>

<style>
.message {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: blue;
}
</style>