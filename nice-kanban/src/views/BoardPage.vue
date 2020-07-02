<template>
  <div id="BoardPage">

    <h1 class="desc"> Board </h1>

    <div class="field" @keydown.enter="$refs.titleRef.blur()" @blur="changeTitle()" ref="titleRef" contenteditable="true" spellcheck="false"> 
      {{ board.title }} 
    </div>

    <button class="delete-button" @click="deleteBoard()"> Delete Board </button>
  </div>
</template>

<script>
export default {
  name: 'BoardPage',
  
  data: function() {
    return {
      boardId: 0,
      board: {},
    }
  },

  methods: {
    changeTitle: function() {
      let textToChange = this.$refs.titleRef.innerText

      if (textToChange) {
        this.$store.commit('mutateBoardTitle', {
          id: this.boardId,
          title: textToChange
        })
        this.$store.dispatch('writeBoards')
      } else {
        this.$refs.titleRef.innerText = this.$store.state.boards[this.boardId].title
      }
    },
    deleteBoard: function() {
      this.$store.commit('deleteBoard', {
        id: this.boardId
      })
      this.$store.dispatch('writeBoards')
      .then(() => {
        setTimeout(() => {
        this.redirectToMainPage()
        }, 100)
      })
    },
    redirectToMainPage: function() {
      this.$router.push('/')
    }
  }, 

  mounted() {
    this.boardId = this.$route.params.boardId
    this.board = this.$store.state.boards[this.boardId]
  }
}
</script>

<style>
  #BoardPage {
    padding: 0 3rem;
  }
  .desc {
    font-size: 2.5em !important;
    padding-bottom: 0.25em;
  }
  .field {
    display: table;
    min-width: 17.5rem;
    width: auto;

    font-size: 1.5em !important;

    padding: 0.25em;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    transition: border-bottom 0.15s ease-out;
  }
  .field:focus {
    outline: 0px solid transparent;
    border-bottom: 2px solid rgba(255,255,255,0.5);
  }

  .delete-button {
    margin-top: 3rem;
    background-color: #b71c1c;
  }
  .delete-button:hover {
    background-color: #b70909;
  }
</style>