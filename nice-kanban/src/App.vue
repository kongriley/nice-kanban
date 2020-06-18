<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MainPage class="m-0 p-0"/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>

@import '../node_modules/lato-font/css/lato-font.css';

html {
  background-color: #000000;
}
#app {
  font-family: "Lato", "Open Sans", "Segoe UI", Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #000000;
}

::-webkit-scrollbar {
  background-color: rgba(0,0,0,0);
  -webkit-border-radius: 100px;
	border-radius: 100px;
}

::-webkit-scrollbar:vertical {
  width: 5px;
}

::-webkit-scrollbar:horizontal {
  height: 5px;
}

::-webkit-scrollbar:hover {
  background-color: rgba(255,255,255, 0.05);
  transition: background-color 0.5 ease;
}

::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.3);
  -webkit-border-radius: 100px;
	border-radius: 100px;
}
::-webkit-scrollbar-thumb:active {
  background: rgba(255,255,255,0.2);
  -webkit-border-radius: 100px;
	border-radius: 100px;
} 
</style>
