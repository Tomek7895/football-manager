<template>
    <h1 class="d-flex justify-center mb-6 bg-cyan-darken-3">Player Profile View</h1>
    <v-toolbar density="compact"
    color="cyan-darken-3">
    <v-tabs v-model="tab"
      align-tabs="title">
      <v-tab value="one">Cristiano Ronaldo</v-tab>
      <v-tab value="two">W przyszłości</v-tab>
      <v-tab value="three">W przyszłości</v-tab>
    </v-tabs>
  </v-toolbar>

  <v-window v-model="tab">
    <v-window-item value="one">
      <PlayerCard />>
    </v-window-item>

    <v-window-item value="two">
      Testy 2
    </v-window-item>

    <v-window-item value="three">
      Testy 3
    </v-window-item>
  </v-window>
  </template>
  
  <script>
  import PlayerCard from '@/components/PlayerCard.vue'
  export default {
    components: { PlayerCard },
    data: () => ({
    tab: null,
  }),
  }
  </script>
  