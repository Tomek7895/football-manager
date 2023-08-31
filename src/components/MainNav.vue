<template>
    <v-navigation-drawer
        expand-on-hover
        rail
    >
        <v-list>
        <v-list-item
            prepend-avatar="Lewy.png"
            title="Robert Lewandowski"
            subtitle="Napastnik"
        ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <router-link :to="{ name: 'Dashboard' }"
            class="text-decoration-none">
                <v-list-item
                base-color="cyan-darken-3"
                title="Dashboard"
                value="dashboard">
                </v-list-item>
            </router-link>
            <router-link :to="{ name: 'News' }"
            class="text-decoration-none">
                <v-list-item
                base-color="grey-darken-4"
                title="Aktualności"
                value="aktualności">
                </v-list-item>
            </router-link>
            <router-link :to="{ name: 'Profile' }"
            class="text-decoration-none">
                <v-list-item
                base-color="grey-darken-4"
                title="Profil Gracza"
                value="profil">
                </v-list-item>
            </router-link>
            <router-link :to="{ name: 'Calendar' }"
            class="text-decoration-none">
                <v-list-item
                base-color="grey-darken-4"
                title="Kalendarz"
                value="kalendarz">
                </v-list-item>
            </router-link>
            <router-link :to="{ name: 'Table' }"
            class="text-decoration-none">
                <v-list-item
                base-color="grey-darken-4"
                title="Tabela"
                value="tabela">
                </v-list-item>
            </router-link>
            <router-link :to="{ name: 'Settings' }"
            class="text-decoration-none">
                <v-list-item
                base-color="grey-darken-4"
                title="Ustawienia"
                value="ustawienia">
                </v-list-item>
            </router-link>
            <router-link :to="{ name: 'Asistant' }"
            class="text-decoration-none">
                <v-list-item
                base-color="grey-darken-4"
                title="Virtualny Asysten"
                value="asystent">
                </v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  </script>
