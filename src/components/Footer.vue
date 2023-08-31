<template>
    <v-bottom-navigation>
      <v-footer class="d-flex flex-row justify-space-between">
        <div class="mr-">
            <DateTime />
        </div>
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
  import DateTime from '@/components/DateTime.vue';
  export default {
    components: { DateTime },
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
  