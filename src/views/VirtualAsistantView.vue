<template>
    <h1 class="d-flex justify-center mb-6 bg-cyan-darken-3">Virtual Asistant View</h1>
    <LinearProgress :value="value" />
  </template>
  
  <script>
import LinearProgress from '@/components/LinearProgress.vue'
export default {
  components: {
    LinearProgress
  },
  data() {
    return {
      value: 50
    }
  },
}
  </script>
  