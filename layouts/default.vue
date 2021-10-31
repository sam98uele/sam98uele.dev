<template>
  <v-app dark>
    <v-main>
      <v-container fill-height fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="true" app>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-card class="pa-2 no-color-no-border" outlined tile>
              <span
                >&copy; {{ new Date().getFullYear() }} Samuele Portanti
              </span>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pa-2 no-color-no-border text-center" outlined tile>
              <span>Hosted on Github Pages</span>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pa-2 no-color-no-border text-right" outlined tile>
              <span>
                <a href="https://github.com/sam98uele/sam98uele.dev"
                  >Source Code
                </a>
              </span>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script></script>

<style scoped>
.no-color-no-border {
  border-color: transparent;
  background-color: transparent;
}
</style>
