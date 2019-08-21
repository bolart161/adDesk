<template>
  <div v-if="!loading">
    <v-container
      fluid
    >
      <v-carousel
        cycle
        interval="5000"
        height="600"
      >
        <v-carousel-item
          v-for="ad in promoAds"
          :key="ad.id"
          :src="ad.imageSrc"
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
    </v-container>
    <v-container>
      <h1>All ads</h1>
      <v-row>
        <v-col
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-card
            height="100%"
          >
            <v-img
              height="200px"
              :src="ad.imageSrc"
            >
            </v-img>
            <v-card-title>{{ad.title}}</v-card-title>
            <v-card-text>
              <p style="height: 100px">
                {{(ad.description.length > 100)? ad.description.substring(0,97) + '...' : ad.description}}
              </p>
            </v-card-text>
            <v-card-actions style="position:absolute; bottom: 10px; right: 10px">
              <v-btn
                outlined
                color="primary"
                :to="`/ad/${ad.id}`"
              >
                Open
              </v-btn>
              <add-buy-modal :ad="ad"/>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-row
        align='center'
        justify='space-around'
      >
        <v-col
          col="12"
          class="text-center pt-5"
        >
          <v-progress-circular
            indeterminate
            :size="100"
            :width="4"
            color="blue"
          >
          </v-progress-circular>
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
    },
    loading () {
      return this.$store.getters.loading
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
