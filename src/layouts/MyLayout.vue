<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="transparent">
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
      <q-list class="q-mt-xl">
        <q-item clickable
                v-for="(item, i) in menuItems"
                :key="i">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.name}}</q-item-label>
            <!--<q-item-label caption>quasar.dev</q-item-label>-->
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
        { name: 'About Me', value: 'about', icon: 'accessibility' },
        { name: 'Resume', value: 'resume', icon: 'assignment_ind' },
        { name: 'Blog', value: 'blog', icon: 'chrome_reader_mode' },
        { name: 'Contact', value: 'contact', icon: 'contact_mail' }
      ]
    }
  },

  computed: {
    isPlatformDesktop () {
      return this.$q.platform.is.desktop
    }
  },

  created () {
    this.$q.dark.set(true)
  }
}
</script>
