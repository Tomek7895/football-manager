<template>
    <v-app-bar :elevation="3"
      density="compact">
      <Breadcrumb />
      <v-spacer></v-spacer>
      <div class="d-flex mr-4">
        <router-link :to="{ name: 'Settings' }"
        class="text-grey-darken-4">
            <v-btn icon="mdi-cog">
            </v-btn>
        </router-link>
        <router-link :to="{ name: 'Calendar' }"
        class="text-grey-darken-4">
            <v-btn icon="mdi-logout-variant">
            </v-btn>
        </router-link>
      </div>
    </v-app-bar>
  </template>
  
  <script>
  import Breadcrumb from '@/components/Breadcrumb.vue'
  export default {
    components: { Breadcrumb }
  }
  </script>
  
  <style>
  </style>
  