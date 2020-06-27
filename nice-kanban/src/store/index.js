import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: [
      {
        id: 0,
        title: 'testing',
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
        title: 'yeet',
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
        title: 'test-1-card',
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
        title: '中文',
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
        title: '5th',
        cards: [
        ]
      },
    ],
  },
  getters: {
    getBoardIndexById: (state) => (id) => {
      return state.boards.findIndex(board => board.id === id)
    }
  },
  mutations: {
    mutateBoardTitle(state, payload) {
      let boardIndex = this.getters.getBoardIndexById(payload.id)
      state.boards[boardIndex].title = payload.title
      // console.log(state.boards)
    }
  },
  actions: {
  },
  modules: {
  }
})
