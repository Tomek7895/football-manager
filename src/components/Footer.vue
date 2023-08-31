<template>
    <v-bottom-navigation>
      <v-footer class="d-flex flex-row justify-end">
        <div>
          <v-btn v-for="icon in icons"
            :key="icon"
            class="mx-1"
            :icon="icon"
            variant="text">
          </v-btn>
        </div>
      </v-footer>
    </v-bottom-navigation>
  </template>
  
  <script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-instagram',
      ],
    }),
  }
  </script>
  
  <style>
</style>
  