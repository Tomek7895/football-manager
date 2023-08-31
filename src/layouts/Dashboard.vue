<template>
    <MainNav />
    <TopMenu />
    <v-main>
        <router-view />
    </v-main>
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import TopMenu from '@/components/TopMenu.vue'
export default {
    components: { MainNav, TopMenu }
}
</script>
