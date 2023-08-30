<template>
    <MainNav />
    <v-main>
        <router-view />
    </v-main>
</template>

<script>
import MainNav from '@/components/MainNav.vue'
export default {
    components: { MainNav }
}
</script>
