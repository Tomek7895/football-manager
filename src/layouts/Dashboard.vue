<template>
    <MainNav />
    <TopMenu />
    <v-main>
        <router-view />
    </v-main>
    <Footer />
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import TopMenu from '@/components/TopMenu.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: { MainNav, TopMenu, Footer }
}
</script>
