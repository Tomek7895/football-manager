<template>
    <v-progress-linear :model-value="value"
      height="10"
      bg-color="rgb(105, 105, 101)"
      color="rgba(19, 213, 213, 0.5)"
      rounded-bar="true"
      class="mt-4">
    </v-progress-linear>
    <p class="d-flex justify-center">{{ value }}%</p>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: Number,
        required: true
      }
    },
  }
  </script>
  