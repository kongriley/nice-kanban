<template>
  <div id="CardPage">

    <h1 class="desc"> Card </h1>

    <div class="field text-field" v-if="boardId && cardId" @keydown.enter="$refs.textRef.blur()" @blur="changeText()" ref="textRef" contenteditable="true" spellcheck="false"> 
      {{ card.text }}
    </div>

    <button class="save-button primary-button" @click="redirectToMainPage()"> Save Card </button>
    <button class="delete-button error-button" @click="deleteCard()"> Delete Card </button>
  </div>
</template>

<script>
export default {
  name: "CardPage",

  data: function() { 
    return {
      boardId: 0,
      cardId: 0,
      card: {},
    }
  },
  methods: {
    changeText: function() {
      let textToChange = this.$refs.textRef.innerText

      if (textToChange) {
        this.$store.commit('mutateCardText', {
          boardId: this.boardId,
          cardId: this.cardId,
          text: textToChange
        })
        this.$store.dispatch('writeBoards')
      } else {
        this.$refs.textRef.innerText = this.$store.state.boards[this.boardId].cards[this.cardId].text
      }
    },
    deleteCard: function() {
      this.$store.commit('deleteCard', {
        boardId: this.boardId,
        cardId: this.cardId,
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
    },
  },
  
  mounted() {
    this.boardId = this.$route.params.boardId
    this.cardId = this.$route.params.cardId
    this.card = this.$store.state.boards[this.boardId].cards[this.cardId]
  }
}
</script>

<style scoped>
  #CardPage {
    padding: 0 3rem;
  }

  .text-field {
    min-width: 30rem;
    
    min-height: 1.25em;
    font-size: 1.25em !important;
  }

  .save-button {
    margin-right: 2rem;
  }

  .delete-button {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
</style>