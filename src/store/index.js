import { createStore } from 'vuex'

const index = {
  namespaced: true,
  state: {
    notes: [
      {id: 1, title: 'faucibus volutpat', favorited: false, content: 'Etiam lacus orci, viverra a augue ut, volutpat posuere nisi. Suspendisse dignissim vel quam at finibus. In hac habitasse platea dictumst. Sed '},
      {id: 2, title: 'faucibus volutpat', favorited: true, content: 'Etiam lacus orci, viverra a augue ut, volutpat posuere nisi. Suspendisse dignissim vel quam at finibus. In hac habitasse platea dictumst. Sed '}
    ]
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
    },
    deleteNote(state, note) {
      state.notes = state.notes.filter(stateNote => {
        return (stateNote.id !== note.id);
      });
    }
  },
  actions: {
    addNote({commit}, note) {
      commit('addNote', note);
    },
    deleteNote({commit}, note) {
      commit('deleteNote', note);
    }
  },
};

index

export default createStore({
  modules: {
    index
  }
});
