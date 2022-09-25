<template>
  <div>
    <note-form header="Criar nota" @savedNoted="createNote"/>
  </div>
</template>

<script>
import NoteForm from '@/components/NoteForm.vue';
import { mapActions } from 'vuex';

export default {
  components: { NoteForm },
  methods: {
    ...mapActions('index', ['addNote']),

    createNote(note) {
      note.id = Date.now();
      note.createdAt = new Date();
      this.addNote(note);
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>