<template>
  <div id="mainPage">
    <div class="main-board">
      <Board v-for="board in boards" :key="board.id" :board="board"/>
    </div>

    <svg class="bi bi-plus add-board" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
      <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
    </svg>
  </div>
</template>

<script>
import Board from '../components/Board.vue'
export default {
  name: 'MainPage',
  components: {
    Board,
  },
  data: function() { // TODO: replace with mongo stuff, move to store
    return {
      boards: [],
    }
  },
  methods: {
    
  },
  mounted() {
    this.boards = this.$store.state.boards
  }
}
</script>

<style scoped>
  .main-board {
    list-style: none;
    overflow-x: auto;
    white-space: nowrap;  
    display: flex;
    padding: 0.5em 0em;
    margin: 0em 0.5em;
  }
  .add-board {
    position: fixed;
    right: 2em;
    top: 2em;
    background-color: #1b5e20;
    padding: 0.25em;
    border-radius: 0.5em;
  }
  .add-board:hover {
    background-color: #27872d;
  }
</style>