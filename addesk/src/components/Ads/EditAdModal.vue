<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-dialog
    width="400px"
    v-model="modal"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        color="warning"
        outlined
        v-on="on"
      >
        Edit
      </v-btn>
    </template>

    <v-card>
      <v-container>
        <v-row>
          <v-col xs12>
            <v-card-title>
              <h3>Edit ad</h3>
            </v-card-title>
          </v-col>
        </v-row>
      </v-container>
      <v-divider/>
      <v-container>
        <v-row>
          <v-col xs12>
            <v-card-text>
              <v-form
                v-model="valid"
                ref="form"
              >
                <v-text-field

                  outlined
                  label="Title"
                  name="title"
                  :rules="[v => !!v || 'This is required area']"
                  v-model="title"
                  type="text"
                ></v-text-field>
                <v-textarea
                  outlined
                  label="Description"
                  name="description"
                  v-model="description"
                  type="text"
                ></v-textarea>
                <v-switch
                  v-model="promo"
                  label="Show on main page?"
                  color="success"
                >
                </v-switch>
              </v-form>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
      <v-divider/>
      <v-container>
        <v-row>
          <v-col xs12>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="error" @click="onCancel">Cancel</v-btn>
              <v-btn color="success" @click="onSave" :disabled="!valid">Save</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['ad'],
    data () {
      return {
        modal: false,
        valid: false,
        description: this.ad.description,
        title: this.ad.title,
        promo: this.ad.promo,
      }
    },
    methods: {
      onCancel () {
        this.description = this.ad.description;
        this.title= this.ad.title;
        this.promo = this.ad.promo;

        this.modal = false
      },
      onSave () {
        this.$store.dispatch('updateAd', {
          title: this.title,
          description: this.description,
          promo: this.promo,
          id: this.ad.id
        });

        this.modal = false
      }
    }
  }
</script>
