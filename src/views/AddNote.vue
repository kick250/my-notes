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
      this.addNote(note);
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>