<template>
  <v-app>
    <v-navigation-drawer app class="elevation-0" v-model="drawer" floating>
      <v-btn color="primary" elevation="0" icon dark class="fixed-fab" @click="drawer = !drawer"><v-icon>mdi-menu</v-icon></v-btn>

      <v-list nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" color="primary">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="background-patern">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "App",

    data() {
      return {
        items: [
          { to: "/", title: "Início", icon: "mdi-home" },
          { to: "/ordena", title: "Ordenação", icon: "mdi-sort" },
          { to: "/interlace", title: "Interligação", icon: "mdi-set-center" },
        ],
        drawer: true,
      }
    },
  }
</script>

<style lang="scss">
  .v-navigation-drawer {
    overflow: visible !important;
    filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1));
    border: none;
    opacity: 1 !important;
    &.v-navigation-drawer--close {
      visibility: visible;
    }

    .fixed-fab {
      position: fixed;
      top: 16px;
      right: 0;
      transform: translateX(80%);
      background-color: #ffffff;
      z-index: 999;
    }
  }
  .background-patern {
    background-color: #f8f8fd;
    background-image: radial-gradient(#444cf780 0.85px, #f8f8fd 0.85px);
    background-size: 16px 16px;
    background-repeat: repeat;
  }
</style>
