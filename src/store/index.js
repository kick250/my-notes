import { createStore } from 'vuex'

const index = {
  namespaced: true,
  state: {
    notes: [
      {id: 1, createdAt: new Date(), title: 'faucibus volutpat', favorited: false, content: 'Etiam lacus orci, viverra a augue ut, volutpat posuere nisi. Suspendisse dignissim vel quam at finibus. In hac habitasse platea dictumst. Sed '},
      {id: 2, createdAt: new Date(), title: 'faucibus volutpat', favorited: true, content: 'Etiam lacus orci, viverra a augue ut, volutpat posuere nisi. Suspendisse dignissim vel quam at finibus. In hac habitasse platea dictumst. Sed '}
    ],
    selectedNote: {}
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
    },
    deleteNote(state, note) {
      state.notes = state.notes.filter(stateNote => {
        return (stateNote.id !== note.id);
      });
    },
    setSelectedNote(state, note) {
      state.selectedNote = note;
    },
    updateNote(state, note) {
      state.notes = state.notes.map(stateNote => {
        if (note.id === stateNote.id)
          return note;

        return stateNote;
      })
    }
  },
  actions: {
    addNote({commit}, note) {
      commit('addNote', note);
    },
    deleteNote({commit}, note) {
      commit('deleteNote', note);
    },
    setSelectedNote({commit}, note) {
      commit('setSelectedNote', note);
    },
    updateNote({commit}, note) {
      commit('updateNote', note);
    }
  },
  getters: {
    getFavoritedNotes({notes}) {
      return notes.filter(note => { return note.favorited});
    }
  }
};

index

export default createStore({
  modules: {
    index
  }
});
