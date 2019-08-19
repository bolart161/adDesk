export default {
  state: {
    ads: [
      {
        id: '1',
        title: 'First ad',
        description: 'description for first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad lorem',
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        promo: true
      },
      {
        id: '2',
        title: 'Second ad',
        description: 'description for Second adst ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad lorem',
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        promo: true
      },
      {
        id: '3',
        title: 'Third ad',
        description: 'description for Third adst ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad lorem',
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        promo: true
      },
      {
        id: '4',
        title: '4th ad',
        description: 'description for 4th adst ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad lorem',
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        promo: true
      },
      {
        id: '5',
        title: '5th ad',
        description: 'description for 5th adst ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad lorem',
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        promo: true
      },
      {
        id: '6',
        title: 'First ad',
        description: 'description for first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad lorem',
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        promo: false
      },
      {
        id: '7',
        title: 'Second ad',
        description: 'description for Second adst ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad lorem',
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        promo: false
      },
      {
        id: '8',
        title: 'Third ad',
        description: 'description for Third adst ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad lorem',
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        promo: false
      },
      {
        id: '9',
        title: '4th ad',
        description: 'description for 4th adst ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad lorem',
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        promo: false
      },
      {
        id: '10',
        title: '5th ad',
        description: 'description for 5th adst ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad loremfor first ad lorem',
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        promo: false
      }
    ]
  },
  mutation: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
