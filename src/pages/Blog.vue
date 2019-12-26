<template>
  <q-page class="inner-page">
    <q-list bordered padding class="q-mt-xl">
      <q-item-label header>Blog Yazıları</q-item-label>
      <q-item v-for="(post,i) in posts" :key="i"
              clickable v-ripple
              :to="{name: 'post', params: {name: post.name}}">
        <q-item-section>
          <q-item-label>{{post.label}}</q-item-label>
          <q-item-label caption>{{post.date}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<style src="@quasar/quasar-ui-qmarkdown/dist/index.css"></style>

<script>
export default {
  data () {
    return {
      posts: [
        { name: 'tavsiyeler.md', label: '10+ Yıllık Gömülü Yazılımcıdan 10+ Tavsiye', date: '15 Aralık 2019' },
        { name: 'deneme.md', label: 'Deneme', date: '15 Ocak 2020' }
      ]
    }
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
