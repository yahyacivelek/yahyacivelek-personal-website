<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey">
    <q-header class="transparent">
      <q-toolbar>
        <q-btn
          v-if="!isPlatformDesktop"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title v-if="isPlatformDesktop" class="text-center" style="font-family: Montserrat">
          <q-btn v-for="(item, i) in menuItems"
                  flat dense
                  :key="i"
                  class="q-ml-md text-bold">
            {{item.name}}
          </q-btn>
        </q-toolbar-title>

        <!--<div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      menuItems: [
        { name: 'About Me', value: 'about' },
        { name: 'Resume', value: 'resume' },
        { name: 'Blog', value: 'blog' },
        { name: 'Contact', value: 'contact' }
      ]
    }
  },

  computed: {
    isPlatformDesktop () {
      return this.$q.platform.is.desktop
    }
  }
}
</script>
