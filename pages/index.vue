<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <welcome />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Welcome from '~/components/Welcome.vue'

export default {
  components: {
    Welcome,
  },
}
</script>
