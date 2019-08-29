<template>
  <v-container>
    <v-row
      align='baseline'
      justify='space-around'
    >
      <v-col
        sm='8'
        md='6'
        lg='5'
        xl='4'
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form
              v-model="valid"
              ref="form"
            >
              <v-text-field
                label="Email"
                name="email"
                :rules="emailRules"
                v-model="email"
                prepend-icon="person"
                type="email"
              ></v-text-field>
              <v-text-field
                label="Password"
                name="password"
                :rules="passwordRules"
                v-model="password"
                prepend-icon="lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text :to="'/register'">Sign up</v-btn>
            <v-btn
              color="primary"
              :disabled="!valid"
              :loading="loading"
              @click="onSubmit"
            >Sign in</v-btn>
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
      email: '',
      password: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more than 6 characters'
      ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        };

        this.$store.dispatch('loginUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
      }
    }
  },
  created() {
    if (this.$route.query['loginError']) {
      this.$store.dispatch('setError', 'For this page need be logged')
    }
  }
}
</script>
