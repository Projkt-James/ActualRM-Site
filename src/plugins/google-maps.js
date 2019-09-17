import Vue from 'vue';

import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'

Vue.use(VueGoogleMaps, {
  load: {
    // TODO: Grab API key from secrets JSON file
    apiKey: '',

    // Use new renderer
    useBetaRenderer: false,
  },
})