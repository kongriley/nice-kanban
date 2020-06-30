import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

import firebase from 'firebase/app'
import credentials from '../credentials/credentials'
import 'firebase/auth'
import 'firebase/firestore'
firebase.initializeApp(credentials.firebaseConfig)
const db = firebase.firestore()

//TODO: authentication

var userCollection = db.collection('users')

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    loading: true,
    errorMessage: '',
    boards: [
      {
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
        ]
      },
    ],
  },

  mutations: {
    setBoards(state, payload) {
      state.boards = payload.boards
      state.loading = false
    },
    addBoard(state) {
      state.boards.push({
        title: 'New Board',
        cards: [{
          text: 'New Card',
          dueDate: '1/1/1970', // Change to today
          tags: ['lvl1']
        }]
      })
    },
    deleteBoard(state, payload) {
      state.boards.splice(payload.id, 1)
    },
    mutateBoardTitle(state, payload) {
      state.boards[payload.id].title = payload.title
    },
    setNoInternetErrorMessage(state) {
      state.errorMessage = 'Couldn\'t load database! Check internet connection.'
      state.loading = false
    },
    setWriteErrorMessage(state) {
      state.errorMessage = 'Couldn\'t write to database! Check internet connection.'
    }
  },

  actions: {
    retrieveBoards({ commit }) {
      userCollection.get().then((querySnapshot) => {
        let firstDoc = querySnapshot.docs[0].data()
        commit('setBoards', {
          boards: firstDoc.boards
        })
      })
      .catch(() => {
        commit('setNoInternetErrorMessage')
      })
    },
    writeBoards({ state, commit }) {
      userCollection.doc('test').set({
        boards: state.boards
      })
      .catch(() => {
        commit('setWriteErrorMessage')
      })
    }
  },

  getters: {

  }, 

  modules: {

  }
})
