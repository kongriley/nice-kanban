<template>
  <div id="mainPage">

    <div v-if="$store.state.errorMessage" class="error message"> {{ $store.state.errorMessage }} </div>
    <div v-else-if="$store.state.loading" class="loading message"> Loading boards... </div>
    <div v-else-if="$store.state.boards.length == 0" class="message"> No boards yet! Create a board to start. </div>
    <div v-else class="main-frame">
      <draggable class="drag-frame" chosenClass="chosen" v-model="$store.state.boards" @update="onBoardChange()">
        <Board v-for="(n, i) in $store.state.boards" :key="i" :board="$store.state.boards[i]" :id="i"/>
      </draggable>

      <svg class="add-board-icon bi bi-plus" @click="addBoard()" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
      </svg>
    </div>

  </div>
</template>

<script>
import Board from '../components/Board.vue'
import draggable from 'vuedraggable'
export default {

  name: 'MainPage',

  components: {
    Board,
    draggable,
  },

  data: function() {
    return {
      
    }
  },

  methods: {
    addBoard: function() {
      this.$store.commit('addBoard')
      this.$store.dispatch('writeBoards')
      .then(() => {
        if (this.$store.state.redirectWhenAdd) {
          this.redirectToBoardPage()
        }
      })
    },
    redirectToBoardPage: function() {
      this.$router.push('/board/'+(this.$store.state.boards.length-1))
    },
    onBoardChange: function() {
      this.$store.dispatch('writeBoards')
    }
  },

  mounted() {
    this.$store.dispatch('retrieveBoards')
  }
}
</script>

<style scoped>
  .message {
    font-size: 2em !important;
    font-weight: 400 !important;
    text-align: center;
    margin-top: 1em;
  }
  
  .loading {
    font-weight: 300 !important;
  }
  .drag-frame {
    list-style: none;
    overflow-x: auto;
    white-space: nowrap;  
    display: flex;
    padding: 0.5em 0em;
    margin: 0em 0.5em;
  }
  .add-board-icon {
    position: fixed;
    right: 2em;
    top: 2em;
    background-color: #1b5e20;
    padding: 0.25em;
    border-radius: 0.5em;
  }
  .add-board-icon:hover {
    background-color: #27872d;
  }
</style>