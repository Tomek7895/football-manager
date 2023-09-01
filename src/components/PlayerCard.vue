<template>
    <v-col
        v-for="card in cards"
        :key="card.name"
    >
    <v-card
    class="mx-auto"
    width="1000"
    height="600">
        <v-row 
        no-gutters
        style="height: 80px;">
            <v-col cols="1" class = "mr-2 ml-2" style="height: 80px;">
                <v-img
                    :src="card.club_logo"
                    max-height= 100%
                >
                </v-img>
            </v-col>
            <v-col cols="4" class="d-flex align-end" >
                <v-card-title class="text-black text-h3 font-weight-bold" v-text="card.name"></v-card-title>
            </v-col>
        </v-row>
         
        <v-row 
        no-gutters
        style="height: 250px;"
        class = "mt-2">
            <v-col cols="3" style="height: 250px;">
                <v-img
                    :src="card.avatar"
                    class="ml-2 mr-2 rounded-lg"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    max-height= 100%
                    max-width = 200px
                    cover>
                </v-img>
            </v-col>
            <v-col cols="4">
                <div class="d-flex">
                    <v-text class="text-h4 font-weight-bold d-flex justify-center">Wiek: </v-text>
                    <v-text class="text-h4 font-weight-bold d-flex justify-center" v-text="card.age"></v-text>
                </div>
                <div class="d-flex mt-2">
                    <v-text class="text-h4 font-weight-bold d-flex justify-center">Pozycja: </v-text>
                    <v-text class="text-h4 font-weight-bold d-flex justify-center" v-text="card.position"></v-text>
                </div>
                <div class="d-flex mt-2">
                    <v-text class="text-h4 font-weight-bold d-flex justify-center">Numer: </v-text>
                    <v-text class="text-h4 font-weight-bold d-flex justify-center" v-text="card.number"></v-text>
                </div>
                <div class="d-flex mt-2">
                    <v-text class="text-h4 font-weight-bold d-flex justify-center">Lepsza Noga: </v-text>
                    <v-text class="text-h4 font-weight-bold d-flex justify-center" v-text="card.foot"></v-text>
                </div>
            </v-col>
            <v-col>
                <div style="height: 120px;">
                    <v-text class="text-h4 font-weight-bold d-flex justify-center">Zdolności: </v-text>
                    <div class="text-h6 d-flex justify-space-between">
                        <v-text class="d-flex justify-center">Jakaś zdolność pierwsza</v-text>
                        <v-text class="d-flex justify-center">Jakaś zdolność druga</v-text>
                    </div>
                </div>
                <div style="height: 120px;">
                    <v-text class="text-h4 font-weight-bold d-flex justify-center">Role: </v-text>
                    <div class="text-h6 d-flex justify-space-between">
                        <v-text class="d-flex justify-center">Jakaś rola pierwsza</v-text>
                        <v-text class="d-flex justify-center">Jakaś rola druga</v-text>
                    </div>
                </div>
            </v-col>
         </v-row>

        <v-row 
        no-gutters
        class = "mt-2 d-flex justify-center">
            <v-text class="text-h5 font-weight-bold">STATYSTYKI</v-text>
        </v-row>

        <v-row 
        no-gutters
        style="height: 100px;"
        class = "d-flex justify-space-between">
        
            <v-col>
                 <v-card>
                    <v-text class="text-h6 font-weight-bold d-flex justify-center">Liczba Meczów</v-text>
                    <v-text class="text-h6 font-weight-bold d-flex justify-center" v-text="card.matches"></v-text>
                </v-card>
            </v-col>
            <v-col>
                 <v-card>
                    <v-text class="text-h6 font-weight-bold d-flex justify-center">Liczba Bramek</v-text>
                    <v-text class="text-h6 font-weight-bold d-flex justify-center" v-text="card.goals"></v-text>
                </v-card>
            </v-col>
            <v-col>
                 <v-card>
                    <v-text class="text-h6 font-weight-bold d-flex justify-center">Liczba Asyst</v-text>
                    <v-text class="text-h6 font-weight-bold d-flex justify-center" v-text="card.asists"></v-text>
                </v-card>
            </v-col>
            <v-col cols="4">
                 <v-card>
                    <v-text class="text-h6 font-weight-bold d-flex justify-center">Liczba Odbytych Treningów</v-text>
                    <v-text class="text-h6 font-weight-bold d-flex justify-center" v-text="card.trainings"></v-text>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
    </v-col>
</template>

<script>
  export default {
    data: () => ({
      show: false,
      cards: [
        { name: 'Cristiano Ronaldo', club_logo: '/Real_Madrid.png', avatar: '/Cristiano.png', age: 36, position: "striker", number: 7, foot: "right", matches: 727, goals: 525, asists: 283, trainings: 3455}
    ]})
  }
</script>

<style scoped>
</style>
