<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap');
html {
  background-color: #000000;
}
#app {
  font-family: "Lato", "Noto Sans SC", "Segoe UI", Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
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
