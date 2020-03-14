import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    subscriptionList: [
      {
        id: 1,
        title: 'GitHub Pro',
        note: 'It is free for students',
        price: {
          value: 7,
          currency: 'USD',
          symbol: '$',
        },
        cycle: {
          unit: 'Month',
          number: 1,
        },
        date: '2020-03-14',
        color: '#087F8C',
      },
      {
        id: 2,
        title: 'Netflix',
        note: 'STOP spending too much time on it!',
        price: {
          value: 18.99,
          currency: 'USD',
          symbol: '$',
        },
        cycle: {
          unit: 'Month',
          number: 1,
        },
        date: '2020-03-14',
        color: '#86A873',
      },
      {
        id: 3,
        title: 'Gym',
        note: 'Developers do sit a lot',
        price: {
          value: 10.24,
          currency: 'USD',
          symbol: '$',
        },
        cycle: {
          unit: 'Weeks',
          number: 2,
        },
        date: '2020-03-14',
        color: '#BB9F06',
      },
      {
        id: 4,
        title: 'FC Bayern',
        note: '⚽',
        price: {
          value: 0,
          currency: 'USD',
          symbol: '$',
        },
        cycle: {
          unit: 'Years',
          number: 3,
        },
        date: '2020-03-14',
        color: '#5AAA95',
      },
    ],
  },
})
