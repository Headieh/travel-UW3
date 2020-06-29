import {itl} from './itl.js'
import {bel} from './bel.js'
import {cos} from './cos.js'
import {cro} from './cro.js'
import {thai} from './thai.js'

var decks = [{
    'id': 'belize',
    'location': 'Belize',
    'images': 'belize.png',
    'title': 'lamanai mayan ruins',
    'area': 'Central America',
    'text': "Picture of Belize",
    'it': bel,//map data
    'lat': '17.1833',//weather data
    'lon': '-87.5000',
    'cur': 'BZD'
  },

  {
    'id': 'costarica',
    'location': 'Costa Rica',
    'images': 'costarica.png',
    'area': 'Central America',
    'title': 'manuel antonio national park',
    'text': "Costa Rica - Manuel Antonio National Park",
    'it': cos,
    'lat': '9.9667',
    'lon': '-84.8333',
    'cur': 'CRC'
  },

  {
    'id': 'croatia',
    'location': 'Croatia',
    'images': 'croatia.png',
    'area': 'Europe',
    'title': 'hvar boat dock',
    'text': "Picture of Croatia",
    'it': cro,
    'lat': '43.5167',
    'lon': '16.4333',
    'cur': 'HRK'
  },

  {
     'id': 'italy',
     'location': 'Italy',
     'images': 'italy.png',
     'area': 'Europe',
     'title': 'trevi fountain',
     'text': "Picture of Italy",
     'it': itl,
     'lat': '41.9000',
     'lon': '12.4833',
     'cur': 'EUR'
   },

  {
    'id': 'thailand',
    'location': 'Thailand',
    'images': 'thai.png',
    'area': 'Asia',
    'title': 'phi phi island',
    'text': "Beach in Thailand with long-tail boats",
    'it': thai,
    'lat': '13.7000',
    'lon': '100.5667',
    'cur':'THB'
  }
];


export {
  decks
}

//Rancho Baiguate hotel
