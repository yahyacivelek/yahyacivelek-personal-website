<template>
  <q-page class="inner-page q-pa-md">
    <q-markdown :src="markdown" />
  </q-page>
</template>

<style src="@quasar/quasar-ui-qmarkdown/dist/index.css"></style>

<script>
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown'

export default {
  data () {
    return {
      markdown: ''
    }
  },

  components: {
    QMarkdown
  },

  created () {
    import(`../statics/posts/${this.$route.params.name}`)
      .then(res => {
        this.markdown = res.default
      })
  }
}
</script>

<style scoped>
  .inner-page {
      font-family: Montserrat;
      max-width: 1000px;
      margin: auto;
    }
</style>
