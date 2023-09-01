<template>
    <h1 class="d-flex justify-center mb-6 bg-cyan-darken-3">Settings View</h1>
    <v-card class="mx-4 my-4">
    <v-card-title class="mb-2">Ustawienia zawodników</v-card-title>
    <v-expansion-panels variant="accordion">
      <AbilityParameter />
      <WeaknessParameter />
      <FootParameter />
    </v-expansion-panels>
  </v-card>
  </template>
  
  <script>
import AbilityParameter from '@/views/parameters/AbilityParameter.vue';
import WeaknessParameter from '@/views/parameters/WeaknessParameter.vue';
import FootParameter from '@/views/parameters/FootParameter.vue';
export default {
  components: {
    AbilityParameter,
    WeaknessParameter,
    FootParameter,
  }
}
  </script>
  