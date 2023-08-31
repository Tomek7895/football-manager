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
                prepend-icon="mdi-view-dashboard-edit"
                base-color="cyan-darken-3"
                title="Dashboard"
                value="dashboard">
                </v-list-item>
            </router-link>
            <router-link :to="{ name: 'News' }"
            class="text-decoration-none">
                <v-list-item
                prepend-icon="mdi-newspaper-variant"
                base-color="grey-darken-4"
                title="Aktualności"
                value="aktualności">
                </v-list-item>
            </router-link>
            <router-link :to="{ name: 'Profile' }"
            class="text-decoration-none">
                <v-list-item
                prepend-icon="mdi-account-card"
                base-color="grey-darken-4"
                title="Profil Gracza"
                value="profil">
                </v-list-item>
            </router-link>
            <router-link :to="{ name: 'Calendar' }"
            class="text-decoration-none">
                <v-list-item
                prepend-icon="mdi-calendar-clock-outline"
                base-color="grey-darken-4"
                title="Kalendarz"
                value="kalendarz">
                </v-list-item>
            </router-link>
            <router-link :to="{ name: 'Table' }"
            class="text-decoration-none">
                <v-list-item
                prepend-icon="mdi-table"
                base-color="grey-darken-4"
                title="Tabela"
                value="tabela">
                </v-list-item>
            </router-link>
            <router-link :to="{ name: 'Settings' }"
            class="text-decoration-none">
                <v-list-item
                prepend-icon="mdi-cog"
                base-color="grey-darken-4"
                title="Ustawienia"
                value="ustawienia">
                </v-list-item>
            </router-link>
            <router-link :to="{ name: 'Asistant' }"
            class="text-decoration-none">
                <v-list-item
                prepend-icon="mdi-google-assistant"
                base-color="grey-darken-4"
                title="Virtualny Asysten"
                value="asystent">
                    <template v-slot:append>
                        <v-badge color="green-darken-2"
                        content="Beta"
                        inline></v-badge>
                    </template>
                </v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  </script>
