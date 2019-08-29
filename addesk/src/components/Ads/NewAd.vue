<template>
  <v-container>
    <v-row
      align='baseline'
      justify='space-around'
    >
      <v-col
        sm='10'
        md='9'
        lg='7'
        xl='6'
      >
        <v-card
          class="elevation-12"
          :loading="loading"
        >
          <v-toolbar
            color="primary"
            dark
            flat
            dense
          >
            <v-toolbar-title>New ad</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form
              class="mb-4"
              v-model="valid"
              ref="form"
            >
              <v-text-field
                label="Ad title"
                name="title"
                :rules="[v => !!v || 'This is required value']"
                v-model="title"
                type="text"
              ></v-text-field>
              <v-textarea
                label="Ad description"
                name="description"
                v-model="description"
                type="text"
              ></v-textarea>
              <v-switch
                v-model="isPromo"
                :label="'Add to main page'"
                color="success"
              ></v-switch>
              <v-btn
                color="warning"
                small
                @click="triggerUpload"
              >
                Upload image
                <v-icon dark right>cloud_upload</v-icon>
              </v-btn>
              <input
                ref="fileInput"
                type="file"
                style="display: none"
                accept="image/*"
                @change="onFileChange"
              >
            </v-form>
            <v-img :src="imageSrc" />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="onSubmit"
              :loading="loading"
              :disabled="!valid || !image || loading"
            >Create ad</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      imageSrc: '',
      image: null,
      isPromo: false,
      description: '',
      title: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageSrc = reader.result
      };
      reader.readAsDataURL(file);
      this.image = file
    },
    onSubmit () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.isPromo,
          image: this.image
        };

        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('list')
          })
          .catch(() => {})
      }
    }
  }
}
</script>
