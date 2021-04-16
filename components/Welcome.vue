<template>
  <v-row align="center" justify="center">
    <v-col>
      <div>
        <h1 style="margin-bottom: 5px">sam98uele</h1>

        <hr style="margin-top: 10px; margin-bottom: 20px" />
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <a
              class="social-icon-mar"
              href="https://github.com/sam98uele/"
              v-bind="attrs"
              v-on="on"
            >
              <i class="social-icon fab fa-github fa-2x"></i>
            </a>
          </template>
          <span>Github</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <a
              class="social-icon-mar"
              href="https://www.linkedin.com/in/samuele-portanti-0b3972196/"
              v-bind="attrs"
              v-on="on"
            >
              <i class="social-icon fab fa-linkedin fa-2x"></i>
            </a>
          </template>
          <span>Linkedin</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <a
              href="https://twitter.com/samueleportanti"
              v-bind="attrs"
              v-on="on"
            >
              <i class="social-icon fab fa-twitter-square fa-2x"></i>
            </a>
          </template>
          <span>Twitter</span>
        </v-tooltip>
      </div>
    </v-col>
  </v-row>
</template>

<script>
// import { mdiAccount } from '@mdi/js'

// export default {
//  data: () => ({
//    icons: {
//      mdiAccount,
//    },
//  }),
// }
</script>

<style>
.social-icon {
  color: white;
}
.social-icon-mar {
  margin-right: 10px;
}
</style>
