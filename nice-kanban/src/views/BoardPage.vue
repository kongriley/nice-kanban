<template>
  <div id="BoardPage">

    <h1 class="desc"> Board </h1>

    <div class="field title-field" @keydown.enter="$refs.titleRef.blur()" @blur="changeTitle()" ref="titleRef" contenteditable="true" spellcheck="false"> 
      {{ board.title }} 
    </div>

    <button class="save-button primary-button" @click="redirectToMainPage()"> Save Board </button>
    <button class="delete-button error-button" @click="toggleDeleteMessage()"> Delete Board </button>

    <div class="delete-message-box" v-if="deleteMessage">
      <div class="error delete-display"> Warning! Deleting a board will delete all of its cards. </div>
      <button class="cancel-button primary-button" @click="toggleDeleteMessage()"> Cancel </button>
      <button class="error-button" @click="deleteBoard()"> Really Delete </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardPage',
  
  data: function() {
    return {
      boardId: 0,
      board: {},
      deleteMessage: false,
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
    toggleDeleteMessage: function() {
      this.deleteMessage = !this.deleteMessage;
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
    width: auto;

    padding: 0.25em;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    transition: border-bottom 0.15s ease-out;
  }
  .field:focus {
    outline: 0px solid transparent;
    border-bottom: 2px solid rgba(255,255,255,0.5);
  }

  .title-field {
    min-width: 17.5rem;
    font-size: 1.5em !important;
  }

  .save-button {
    margin-right: 2rem;
  }

  .delete-button {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  .delete-display {
    font-size: 1.25em !important;
  }
  .cancel-button {
    margin-top: 1rem;
    margin-right: 2rem;
  }
  .delete-message-box {
    display: table;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: rgba(255,0,0,0.1);
  }
</style>