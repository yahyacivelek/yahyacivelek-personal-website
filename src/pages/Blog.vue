<template>
  <q-page class="flex flex-center">
    <q-markdown :src="markdown" />
  </q-page>
</template>

<style src="@quasar/quasar-ui-qmarkdown/dist/index.css"></style>

<script>
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown'
import markdown from '../statics/posts/test.md'

export default {
  data () {
    return {
      markdown: markdown
    }
  },
  components: {
    QMarkdown
  }
}
</script>

<style scoped>

</style>
