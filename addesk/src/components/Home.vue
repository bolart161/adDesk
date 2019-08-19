<template>
  <div>
    <v-container fluid>
      <v-row
        align='baseline'
        justify='space-around'
      >
        <v-col>
          <v-carousel
            cycle
            dark
            interval="5000"
          >
            <v-carousel-item
              v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.src"
            >
              <div
                class="show-ad-btn"
              >
                <v-btn
                  :to="`/ad/${ad.id}`"
                  class="error"
                >
                  {{ad.title}}
                </v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h1>All ads</h1>
      <v-row
        align='baseline'
        justify='center'
      >
        <v-col
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              aspect-ratio
              :src="ad.src"
            >
              <v-card-title class="align-end fill-height">{{ad.title}}</v-card-title>
            </v-img>
            <v-card-text>
              {{ad.description}}
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                outlined
                color="primary"
                :to="`/ad/${ad.id}`"
              >
                Open</v-btn>
              <v-btn color="success">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    }
  }
}
</script>

<style scoped>
  .show-ad-btn {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .3);
    transform: translate(-50%, 0);
    padding: 5px 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>
