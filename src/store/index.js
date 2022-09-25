import { createStore } from 'vuex'

const index = {
  namespaced: true,
  state: {
    notes: [
      {title: 'faucibus volutpat', favorited: false, content: 'Etiam lacus orci, viverra a augue ut, volutpat posuere nisi. Suspendisse dignissim vel quam at finibus. In hac habitasse platea dictumst. Sed '}
    ]
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
    }
  },
  actions: {
    addNote({commit}, note) {
      commit('addNote', note);
    }
  }
};

index

export default createStore({
  modules: {
    index
  }
});
