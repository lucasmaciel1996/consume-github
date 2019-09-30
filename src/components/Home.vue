<template>
  <v-card
    class="ma-2"
    color="#F9F9F9"
    v-if="terminado"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">{{climaInfo.name +' '+ climaInfo.state +' '+ climaInfo.country}}</v-list-item-title>
        <v-list-item-subtitle>{{climaInfo.data.date}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">
          {{climaInfo.data.temperature}}&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{climaInfo.data.wind_velocity}} km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{climaInfo.data.humidity}}%</v-list-item-subtitle>
    </v-list-item>

    <v-slider
      v-model="time"
      :max="6"
      :tick-labels="labels"
      class="mx-4"
      color="black"
      ticks
    ></v-slider>

    <v-divider></v-divider>

    <v-card-actions>
      <p class="display-0">Local: <strong>{{climaInfo.name }} </strong> </p>
    </v-card-actions>
  </v-card>
</template>
<script>
  import axios from 'axios';
  import {configAPi} from './../service/configApiClima';
  export default {
    data () {
      return {
        labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
        time:new Date().getDay(),
        climaInfo:'',
        terminado:false
      }
    },
    mounted(){
      this.getLocaltion();
    },
    methods:{
      getLocaltion(){
        axios.get(`http://apiadvisor.climatempo.com.br/api/v1/weather/locale/${configAPi.idCity}/current?token=${configAPi.token}`)
        .then(response =>{ this.climaInfo = response.data; this.terminado=true;})
      },
    }
  }
</script>