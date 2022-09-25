<template>
  <div>
    <div class="d-flex justify-content-between align-items-stretch mx-2">
      <p class="h1 my-4 text-center">Notas criadas</p>
      <div class="filters m-3 px-3 gap-2">
        <span>Favoritadas</span><input type="checkbox" v-model="showJustFavorited">
      </div>
    </div>
    <div class="notes-list p-4" v-show="hasNotes">
      <div v-for="(note, index) in filteredNotes" :key="index" class="note px-3">
        <p class="h3 text-center my-3 mx-0">
          {{note.title}}
        </p>
        <p class="note-content p-2">{{note.content}}</p>
        <p v-if="note.favorited" class="star">&#9733;</p>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <button @click="addNotes" class="add-note-button btn">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      showJustFavorited: false
    }
  },
  computed: {
    ...mapState('index', ['notes']),

    hasNotes() {
      return this.notes.length > 0;
    },

    filteredNotes() {
      if (this.showJustFavorited) {
        return this.notes.filter(note => { return note.favorited})
      }

      return this.notes;
    }
  },
  methods: {
    addNotes() {
      this.$router.push('/add')
    }
  }
}
</script>

<style scoped>
  .notes-list {
    display: grid;
    grid-template-columns: auto;
    justify-content: space-between;
    column-gap: 30px;
    row-gap: 20px;
    background: #F8F9FA;
    border-radius: 10px;
  }

  .note {
    background: #f2f2f2;
    border-radius: 10px;
  }

  .note-content {
    background: white;
    border-radius: 4px;
  }

  .add-note-button {
    font-size: 4em;
  }

  .star {
    text-align: right;
  }

  .filters {
    display: flex;
    align-items: center;
    background: #f2f2f2;
    min-width: 40%;
    border-radius: 9px;
  }

  @media (min-width: 576px) {
    .notes-list {
      grid-template-columns: auto 48%;
    }
  }

  @media (min-width: 992px) {
    .notes-list {
      grid-template-columns: auto auto 30%;
    }
  }
</style>
