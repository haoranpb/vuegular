import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    subscriptionList: [
      {
        icon: 'Icon',
        id: 1,
        title: 'GitHub Pro',
        note: 'Unlimited private repositories',
        price: {
          value: 7,
          currency: 'USD',
          symbol: '$',
        },
        cycle: {
          unit: 'Month',
          number: 1,
        },
        date: '',
        color: '',
      },
    ],
  },
})
