<template>
  <v-card
    class="ma-2"
    color="#F9F9F9"
    v-if="terminado"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">{{climaInfo.location.name + ' '+ climaInfo.location.country}}</v-list-item-title>
        <v-list-item-subtitle>{{climaInfo.location.localtime}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">
          {{climaInfo.current.temperature}}&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            :src="climaInfo.current.weather_icons[0]"
            alt="Clima Icon"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{climaInfo.current.wind_speed}} km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{climaInfo.current.humidity}}% </v-list-item-subtitle>
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
      <p class="display-0">Local: <strong>{{climaInfo.location.country +' '+ climaInfo.location.name + ' ' +climaInfo.location.region }} </strong> </p>
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
        this.$getLocation()
        .then(coordinates => {
          this.GetClima(configAPi.token, coordinates);
        });
      },
      GetClima(token,coordinates){
        axios.get(`http://api.weatherstack.com/current?access_key=${token}&query=${coordinates.lat},${coordinates.lng}`)
        .then(response =>{ 
          this.climaInfo = response.data;
          this.terminado = true;
        });
      }
    }
  }
</script>