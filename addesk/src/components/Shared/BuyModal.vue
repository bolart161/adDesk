<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-dialog
    width="400px"
    v-model="modal"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        color="success"
        v-on="on"
        class="ml-3"
      >
        Buy
      </v-btn>
    </template>

    <v-card :loading="localLoading">
      <v-container>
        <v-row>
          <v-col xs12>
            <v-card-title>
              <h3>Do you want buy it?</h3>
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
                  label="Name"
                  name="name"
                  :rules="[v => !!v || 'This is required area']"
                  v-model="name"
                  type="text"
                ></v-text-field>
                <v-text-field
                  outlined
                  label="Phone"
                  name="phone"
                  :rules="phoneRules"
                  v-mask="mask"
                  v-model="phone"
                  type="phone"
                ></v-text-field>
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
              <v-btn
                color="error"
                @click="onCancel"
                :disabled="localLoading"
              >
                Cancel
              </v-btn>
              <v-btn
                color="success"
                @click="onSubmit"
                :disabled="!valid || localLoading"
                :loading="localLoading"
              >
                Buy it!
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mask } from 'vue-the-mask'

  export default {
    props: ['ad'],
    directives: {
      mask,
    },
    data () {
      return {
        modal: false,
        valid: false,
        localLoading: false,
        phone: '',
        name: '',
        phoneRules: [
          v => !!v || 'This is required area',
          v => v.length === 18 || 'Enter right phone'
        ],
        mask: '+7-(###)-###-##-##'
      }
    },
    methods: {
      onCancel () {
        this.phone = '';
        this.name = '';

        this.modal = false
      },
      onSubmit () {
        this.localLoading = true;
        this.$store.dispatch('createOrder', {
          phone: this.phone,
          name: this.name,
          adId: this.ad.id,
        ownerId: this.ad.ownerId
        })
          .finally(() => {
            this.name = '';
            this.phone = '';
            this.localLoading = false;
            this.modal = false
          })
      }
    }
  }
</script>
