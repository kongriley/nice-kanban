<template>
  <div class="main-page m-0 p-0">
    <div class="topbar text-center mx-auto pt-4 pb-2">
      nice-kanban
    </div>
    <div class="main-board m-0 px-4 pb-4 pt-0">
      <div class="kanban-board m-4 p-3 rounded-lg" v-for="board in boards" :key="board.id">
        <div class="title text-center" contenteditable="true" spellcheck="false" @blur="onTitleChange($event, board.id)"> {{ board.name }} </div>
        <div class="add-card p-1 rounded-lg">
          <div> 
            <svg class="bi bi-plus" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
              <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
            </svg>
          </div>
        </div>
        <div class="title-length text-center" v-if="board.cards.length == 1"> 1 card</div>
        <div class="title-length text-center" v-else> {{ board.cards.length }} cards</div>
        <div class="scroll-board px-2">
          <div class="kanban-item my-4 p-2 rounded-lg" v-for="card in board.cards" :key="card.text"> {{ card.text }} </div>
        </div>
      </div>
      <div class="end-board"></div>
    </div>

    <div class="add-board p-1 rounded-lg">
      <div> 
        <svg class="bi bi-plus" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
          <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data: function() { // TODO: replace with mongo stuff
    return {
      boards: [
        {
          id: 0,
          name: 'testing',
          cards: [
            {
              text: 'do #1',
              dueDate: '6/21/2020',
              tags: ['lvl2']
            },
            {
              text: 'do #2',
              dueDate: '6/21/2020',
              tags: ['lvl2']
            },
          ]
        },
        {
          id: 1,
          name: 'yeet',
          cards: [
            {
              text: 'yeetus',
              dueDate: '6/21/2020',
              tags: ['lvl1']
            },
            {
              text: 'deletus',
              dueDate: '6/21/2020',
              tags: ['lvl3']
            },
          ]
        },
        {
          id: 2,
          name: 'test-1-card',
          cards: [
            {
              text: 'card!!!',
              dueDate: '6/21/2020',
              tags: ['lvl1']
            },
          ]
        },
        {
          id: 3,
          name: '中文',
          cards: [
            {
              text: '你',
              dueDate: '6/21/2020',
              tags: ['lvl1']
            },
            {
              text: '好',
              dueDate: '6/21/2020',
              tags: ['lvl3']
            },
            {
              text: '吗',
              dueDate: '6/21/2020',
              tags: ['lvl3']
            },
          ]
        },
        {
          id: 4,
          name: '5th',
          cards: [
          ]
        },
      ],
    }
  },
  methods: {
    onTitleChange(e, index) {
      this.boards.find(obj => {return obj.id == index}).name = e.target.innerText;
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
  .main-board {
    width: 100vw;
    list-style: none;
    overflow-x: auto;
    white-space: nowrap;  
    display: flex;
  }
  .kanban-board {
    position: relative;
    width: 17.6em;
    height: calc(100vh - 9.5em);
    flex: 0 0 17.6em;
    background-color: #212121;
  }
  .end-board {
    content: '';
    flex: 0 0 1.5rem;
  }
  .add-board {
    position: fixed;
    right: 2em;
    top: 2em;
    background-color: rgba(255,255,255,0.13);
  }
  .add-card {
    position: absolute;
    top: 1em;
    right: 1em;
  }
  .add-card:hover {
    background-color: rgba(255,255,255,0.10);
  }
  .scroll-board {
    overflow-y: auto;
  }
  .kanban-item {
    width: 100%;
    background-color: rgba(255,255,255,0.1);
  }
  .topbar {
    font-size: 1.75em !important;
    font-weight: 400 !important;
  }
  .title {
    font-size: 1.5em !important;
  }
  .title:focus {
    outline: 0px solid transparent;
  }
  .title-length {
    font-size: 1.125em !important;
    color: rgba(255,255,255,0.75);
  }
</style>