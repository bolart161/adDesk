<template>
  <v-container>
    <v-row
      align='baseline'
      justify='space-around'
    >
      <v-col cols="10">
        <v-card v-if="!loading">
          <v-img
            aspect-ratio
            :src="ad.imageSrc"
            height="400px"
          ></v-img>
          <v-card-title>
            {{ad.title}}
          </v-card-title>
          <v-card-text>
            {{ad.description}}
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <add-edit-ad-modal :ad="ad" v-if="isOwner"/>
            <add-buy-modal :ad="ad"/>
          </v-card-actions>
        </v-card>
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
                  color="white"
                >
                </v-progress-circular>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal'

export default {
  props: ['id'],
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    ad () {
      const adId = this.id;
      return this.$store.getters.adById(adId)
    },
    isOwner () {
      const user = this.$store.getters.user;
      return user && (this.ad.ownerId === user.id)
    }
  },
  components: {
    addEditAdModal: EditAdModal,
  }
}
</script>
