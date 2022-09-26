<template>
  <div>
    <p class="h1 text-center mb-4">{{header}}</p>
    <div class="row justify-content-center">
      <form class="d-flex flex-column align-items-center gap-3 col-12 col-sm-8 col-lg-6" @submit.prevent="">
        <div class="alert alert-danger w-100" v-for="(error, index) in this.errors" :key="index">
          {{error}}
        </div>
        <p v-if="note.createdAt">Criada em {{noteDate}}</p>
        <input class="w-50 text-center form-control" v-model="note.title" type="text" placeholder="Titulo da nota">
        <div class="form-check">
          <input v-model="note.favorited" class="form-check-input" id="favorited" name="favorited" type="checkbox">
          <label class="form-check-label" for="favorited">
            Favoritar nota
          </label>
        </div>
        <label class="h3" for="content">Conteúdo da nota</label>
        <textarea v-model="note.content" class="w-100 form-control" name="content" cols="30" rows="10"></textarea>
        <button @click="save" type="button" class="btn btn-primary w-50">
          Salvar nota
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true
    },
    preLoadedNote: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      errors: [],
      note: {
        title: '',
        content: '',
        favorited: false
      }
    }
  },
  mounted() {
    if (Object.keys(this.preLoadedNote).length > 0)
      this.note = this.preLoadedNote;
  },
  methods: {
    save() {
      if (!this.validate(this.note)) return;

      this.$emit('savedNoted', this.note);
    },
    validate(note) {
      let errors = [];

      if (note.title.length < 4)
        errors.push('O titulo da nota deve ter pelo menos 4 digitos.');

      if (note.content.length < 10)
        errors.push('O conteúdo da nota deve ter pelo menos 10 digitos.')

      this.errors = errors;

      return this.errors.length === 0;
    }
  },
  computed: {
    noteDate() {
      return this.note.createdAt.toLocaleDateString("pt-BR");
    }
  }
}
</script>

<style>

</style>