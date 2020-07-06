<template>
  <div id="Board">
    <router-link class="title" :to="`/board/${id}`"> 
      {{ board.title }} 
    </router-link>
    <div class="title-length" v-if="board.cards.length == 1"> 1 card</div>
    <div class="title-length" v-else> {{ board.cards.length }} cards</div>

    <svg class="add-card-icon bi bi-plus" @click="addCard()" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
      <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
    </svg>

    <div class="scroll-board">
      <draggable :list="board.cards" chosenClass="chosen" group="board" @update="onBoardChange">
        <Card class="kanban-card" v-for="(n, i) in board.cards" :key="i" :card="board.cards[i]" :boardId="id" :id="i"> </Card>
      </draggable>
    </div>

  </div>
</template>

<script>
import Card from './Card.vue'
import draggable from 'vuedraggable'

export default {

  name: "Board",

  components: {
    Card,
    draggable,
  },

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
    },
    onBoardChange: function() {
      this.$store.dispatch('writeBoards')
    }
  },
}
</script>

<style scoped>
  
  #Board {
    position: relative;
    height: calc(100vh - 10em);
    flex: 0 0 calc(100vw / 4 - 1.75em);
    background-color: rgba(30, 136, 229, 0.10);
    margin-right: 1.5em;
    margin-bottom: 0.5em;
    padding-top: 1.25em;
    border-radius: 0.5em;
    min-width: 0;
  }
  /* #Board:hover {
    background-color: rgba(30, 136, 229, 0.12);
  } */
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

    color: #FFFFFF !important;
    text-decoration: none;

    font-size: 1.5rem !important;

    min-width: 0;
    max-width: calc(100% - 3rem);
    
    padding: 0.25em;
    padding-left: 1.25em;
    margin-left: -0.25em;

    border-radius: 0.5rem;
  }
  .title:hover {
    color: rgba(255,255,255,0.75);
    cursor: pointer;
  }
  .title-length {
    font-size: 1.125em !important;
    padding-left: 1.25em;
    color: rgba(255,255,255,0.75);
  }
  .scroll-board {
    overflow-y: scroll;
    height: calc(100vh - 17.5em);
    margin: 1.5rem 0;
    padding: 0 1.25em;
    display: flex;
    flex-direction: column;
  }
  
  @media (max-width: 768px) { /* Small displays */
    #Board {
      flex: 0 0 calc(100vw / 2 - 1.75em);
    }
  }

  @media (max-width: 576px) {
    #Board {
      height: calc(100vh - 12.25em);
      flex: 0 0 calc(100vw - 2.25em);
    }
    .scroll-board {
      height: calc(100vh - 20em);
    }
  }
</style>