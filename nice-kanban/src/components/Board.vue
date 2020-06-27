<template>
  <div id="Board">
    <div class="title" @blur="onTitleChange()" ref="titleRef" contenteditable="true" spellcheck="false"> 
      {{ board.title}} 
    </div>
    <svg class="bi bi-plus add-card" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
      <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
    </svg>
    <div class="title-length" v-if="board.cards.length == 1"> 1 card</div>
    <div class="title-length" v-else> {{ board.cards.length }} cards</div>
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
  },

  methods: {
    onTitleChange: function() {
      this.$store.commit('mutateBoardTitle', {
        id: this.board.id,
        title: this.$refs.titleRef.innerText
      })
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
  }
  .add-card {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    padding: 0.25rem;
    margin: 0;
    border-radius: 0.5rem;
    background-color: rgba(255,255,255,0.10);
  }
  .add-card:hover {
    background-color: rgba(255,255,255,0.20);
  }
  .title {
    font-size: 1.5em !important;
    padding-bottom: 0.25em;
  }
  .title:focus {
    outline: 0px solid transparent;
  }
  .title-length {
    font-size: 1.125em !important;
    color: rgba(255,255,255,0.75);
  }
  .scroll-board {
    overflow-y: scroll;
    margin-top: 1rem;
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