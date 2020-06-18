<template>
  <div class="main-page m-0 p-0">
    <div class="topbar text-center mx-auto pt-4 pb-2">
      nice-kanban 看板
    </div>
    <div class="main-board m-0 px-4 pb-4 pt-0">
      <div class="kanban-board m-4 p-3 rounded-lg" v-for="board in boards" :key="board.name">
        <div class="title text-center"> {{ board.name }} </div>
      </div>
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
          name: 'yeet',
          cards: [
            {
              text: 'yeetus',
              dueDate: '6/21/2020',
              tags: ['lvl1']
            },
            {
              text: 'fetus',
              dueDate: '6/21/2020',
              tags: ['lvl3']
            },
          ]
        },
        {
          name: 'more'
        },
        {
          name: 'more'
        },
        {
          name: 'more'
        },
      ],
    }
  }
}
</script>

<style scoped>
  .main-board {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }
  .kanban-board {
    width: 17.6em;
    height: calc(100vh - 9.5em);
    display: inline-block;
    float: none;
    background-color: #212121;
  }
  .add-board {
    position: fixed;
    right: 2em;
    top: 2em;
    background-color: #003300;
  }
  .topbar {
    font-size: 1.75em !important;
  }
  .title {
    font-size: 1.5em !important;
    font-weight: 300;
  }
</style>