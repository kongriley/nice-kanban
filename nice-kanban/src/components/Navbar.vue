<template>
  <div id="Navbar">
    <router-link to="/" class="home-link"> nice-kanban </router-link>
    <div class="side-container">
      <router-link to="/about" class="about-link"> about </router-link> | tba
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>


<style scoped>
#Navbar {
  /* text-align: center; */
  padding: 1.5rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
  color: white;
}
.home-link {
  font-size: 1.75em !important;
  font-weight: 400 !important;
  margin-right: 5rem;
}
.side-container {
  font-size: 1.75em !important;
  font-weight: 300 !important;
  /* padding-left: 3rem; */
}
</style>