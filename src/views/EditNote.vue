<template>
  <div>
    <note-form header="Editar nota" :preLoadedNote="selectedNote" @savedNoted="salveNote"/>
  </div>
</template>

<script>
import NoteForm from '@/components/NoteForm.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: { NoteForm },
  methods: {
    ...mapActions('index', ['updateNote']),

    salveNote(note) {
      this.updateNote(note);
      this.$router.push('/');
    }
  },
  mounted() {
    if (Object.keys(this.selectedNote).length === 0)
      return this.$router.push('/');
  },
  computed: {
    ...mapState('index', ['selectedNote'])
  }
}
</script>

<style>

</style>