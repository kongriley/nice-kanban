<template>
  <div id="Navbar">
    <router-link to="/" class="home-link"> nice-kanban </router-link>
    <div class="side-container">
      <router-link to="/calendar" class="calendar-link"> calendar </router-link> |
      <router-link to="/settings" class="settings-link"> settings </router-link>
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
    font-size: 1.5em !important;
    font-weight: 300 !important;
  }

  @media (max-width: 576px) {
    #Navbar {
      flex-direction: column;
      justify-content: center;
    }
    .home-link {
      font-size: 2em !important;
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
    .side-container {
      font-size: 1.125em !important;
    }
  }
</style>