<template>
    <v-breadcrumbs :items="items"
      divider=">" />
  </template>
  
  <script>
  export default {
    name: "Breadcrumb",
    computed: {
      items: {
        get() {
          let breadcrumbs = ["Football Manager"];
          this.$route.matched.forEach(element => {
            breadcrumbs.push(element.meta.breadCrumb['text']);
          });
          return breadcrumbs;
        }
      }
    }
  }
  </script>
  