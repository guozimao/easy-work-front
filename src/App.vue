<template>
  <div id="app">
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
      name:'root',
  }
</script>

<style scoped>
</style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width:1150px;

}
html {
  overflow-y: scroll;
}

:root {
  overflow-y: auto;
  overflow-x: hidden;

}

:root body {
  position: absolute;

}

body {
  width: 100vw;
  overflow: hidden;
  padding: 0px;
}
</style>
