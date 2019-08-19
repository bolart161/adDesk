<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      class="d-flex d-md-none"
    >
      <v-list dense>
        <v-list-item
          v-for="link of links"
          :key="link.id"
          :to="link.url"
        >
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dense
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-flex d-md-none"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link
          class="pointer"
          tag="span"
          :to="'/'"
          >
          Ad Application
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-md-flex">
        <v-btn
          text
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
        <v-icon left>{{link.icon}}</v-icon>
        {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <template v-if="error">
      <v-snackbar
        :timeout="5000"
        :multi-line="true"
        @input="closeError"
        :value="true"
        color="error"
      >
        {{error}}
        <v-btn
          dark
          text
          @click="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
    <v-footer app>
      <span>&copy; 2019 BolArt Inc</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
    links: [
      {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
      {title: 'New ad', icon: 'note_add', url: '/new'},
      {title: 'My ads', icon: 'list', url: '/list'},
      {title: 'Sign in', icon: 'lock', url: '/login'},
      {title: 'Sign up', icon: 'account_circle', url: '/register'},
    ]
  }),
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
