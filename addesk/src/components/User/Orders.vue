<template>
  <v-container>
    <v-row
      align='baseline'
      justify='space-around'
    >
      <v-col
        col="12"
        class="text-center pt-5"
        v-if="loading"
      >
        <v-progress-circular
          indeterminate
          :size="100"
          :width="4"
          color="blue"
        >
        </v-progress-circular>
      </v-col>
      <v-col
        v-else-if="!loading && orders.length !== 0"
        class="col-12 col-sm-8 col-xl-6"
      >
        <h1>Orders</h1>
        <v-list
          class="pt-0 pb-0 mt-5"
          v-if="orders.length > 0"
        >
          <template
            v-for="order in orders"
          >
            <v-list-item
              :key="order.id"
              two-line
            >
              <v-list-item-action class="mr-4 mr-sm-7">
                <v-checkbox
                  color="success"
                  :input-value="order.done"
                  @change="markDone(order)"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{order.name}}</v-list-item-title>
                <v-list-item-subtitle class="pt-1">
                  <a
                    style="text-decoration: none;"
                    :href="`tel:${order.phone}`"
                  >
                    {{order.phone}}
                  </a>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                 :to="'/ad/' + order.adId"
                 class="primary"
                 small
                >
                  Open
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-divider :key="'div-' + order.id"/>
          </template>
        </v-list>
      </v-col>
      <v-col
        col="12"
        class="text-center pt-5"
        v-else
      >
        <h1>You have no orders</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    orders () {
      return this.$store.getters.orders
    }
  },
  methods: {
    markDone (order) {
      this.$store.dispatch('markOrderDone', {id: order.id, isDone: !order.done})
        .then(() => {
          order.done = !order.done
        })
        .catch(() => {})
    }
  },
  created() {
    this.$store.dispatch('fetchOrders')
  }
}
</script>
