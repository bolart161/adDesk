<template>
  <v-container>
    <v-row
      align='baseline'
      justify='space-around'
    >
      <v-col cols="8">
        <v-card>
          <v-img
            class="white--text"
            aspect-ratio
            :src="ad.src"
          >
            <v-card-title class="align-end fill-height">
              {{ad.title}}
            </v-card-title>
          </v-img>
          <v-card-text>
            {{ad.description}}
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn outlined color="warning">Edit</v-btn>
            <v-btn color="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad () {
      const adId = this.id
      return this.$store.getters.adById(adId)
    }
  }
}
</script>
