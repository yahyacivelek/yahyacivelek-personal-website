<template>
  <q-page class="flex flex-center" style="font-family: Montserrat;">
    <q-markdown :is="markdown" :src="markdownn" />
  </q-page>
</template>

<style src="@quasar/quasar-ui-qmarkdown/dist/index.css"></style>

<script>
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown'

export default {
  data () {
    return {
      markdownn: `../statics/posts/${this.$route.params.name}`
    }
  },
  computed: {
    markdown () {
      return () => import(`../statics/posts/${this.$route.params.name}`)
    }
  },
  components: {
    QMarkdown
  }
}
</script>

<style scoped>

</style>
