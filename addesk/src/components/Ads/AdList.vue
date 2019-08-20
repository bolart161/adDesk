<template>
  <v-container>
    <v-row
      justify="center"
    >
      <h1 class="mb-3">
        My ads
      </h1>
    </v-row>
    <v-row
      justify='center'
      v-if="!loading && myAds.length !== 0"
    >
      <v-col
        v-for="ad in myAds"
        :key="ad.id"
        class="col-md-10"
      >
        <v-card height="240px">
          <v-row>
            <v-col class="pb-0 pt-0" cols="4">
              <v-img
                height="240px"
                :src="ad.imageSrc"
              ></v-img>
            </v-col>
            <v-col class="pb-0 pt-0" cols="8">
              <v-card-title>
                {{ad.title}}
              </v-card-title>
              <v-card-text>
                <p style="height: 80px">
                  {{(ad.description.length > 250)? ad.description.substring(0,247) + '...' : ad.description}}
                </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="info"
                  :to="`/ad/${ad.id}`"
                  x-large
                  rounded
                >Open</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      v-else-if="!loading && myAds.length === 0"
      justify="center"
    >
      <h2>You have not ads</h2>
    </v-row>
    <v-row v-else>
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
                color="white"
              >
              </v-progress-circular>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    myAds () {
      return this.$store.getters.myAds
    }
  }
}
</script>
