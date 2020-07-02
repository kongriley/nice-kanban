<template>
  <div id="Board">
    <div class="title" @click="redirectToBoardPage()" ref="titleRef"> 
      {{ board.title }} 
    </div>
    <div class="title-length" v-if="board.cards.length == 1"> 1 card</div>
    <div class="title-length" v-else> {{ board.cards.length }} cards</div>

    <svg class="add-card-icon bi bi-plus" @click="addCard()" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
      <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
    </svg>

    <div class="scroll-board">
      <div class="kanban-card my-4 p-2 rounded-lg" v-for="card in board.cards" :key="card.text"> {{ card.text }} </div>
    </div>

  </div>
</template>

<script>
export default {

  name: "Board",

  props: {
    board: Object,
    id: Number,
  },

  methods: {
    redirectToBoardPage: function() {
      this.$router.push('/board/'+this.id)
    },
    addCard: function() {
      this.$store.commit('addCard', this.id)
      this.$store.dispatch('writeBoards')
    }
  },
}
</script>

<style scoped>
  #Board {
    position: relative;
    height: calc(100vh - 11em);
    flex: 0 0 calc( (100vw - 16.5em) / 4);
    background-color: rgba(30, 136, 229, 0.10);
    margin-right: 1.5em;
    margin-bottom: 0.5em;
    padding: 1.25em;
    border-radius: 0.5em;
    min-width: 0;
  }
  .add-card-icon {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    padding: 0.25rem;
    margin: 0;
    border-radius: 0.5rem;
    background-color: rgba(255,255,255,0.1);
  }
  .add-card-icon:hover {
    background-color: rgba(255,255,255,0.2);
  }
  .title {
    display: inline-block; 
    
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 1.5rem !important;

    min-width: 0;
    max-width: calc(100% - 3rem);
    
    padding: 0.25em;
    margin-left: -0.25em;

    border-radius: 0.5rem;
  }
  .title:hover {
    color: rgba(255,255,255,0.75);
    cursor: pointer;
  }
  .title-length {
    font-size: 1.125em !important;
    color: rgba(255,255,255,0.75);
  }
  .scroll-board {
    overflow-y: scroll;
    margin-top: 0.75rem;
  }
  .kanban-card {
    background-color: rgba(255,255,255,0.1);
    margin: 1.5rem 0rem;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
  }
  .kanban-card:hover {
    background-color: rgba(255,255,255,0.2);
  }
</style>