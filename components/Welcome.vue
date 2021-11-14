<template>
  <v-row align="center" justify="center">
    <v-col>
      <div>
        <h1 style="margin-bottom: 35px">Samuele Portanti</h1>

        <hr style="margin-top: 10px; margin-bottom: 30px" />
        <ul class="text-left space-lines-10">
          <li>
            High School Diploma at Liceo Scientifico opzione Scienze Applicate
            I.I.S. J. Torriani Cremona (2017)
          </li>
          <li>
            Barcelor Degree in Computer Science and Engineering at Politecnico
            di Milano (2020)
          </li>
          <li>
            Currently I'm studying Computer Scenze and Engineering at
            Politecnico di Milano (Artifical Neural Network and Deep Learning)
          </li>
        </ul>
        <hr style="margin-top: 30px; margin-bottom: 40px" />
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
              href="https://twitter.com/sam98uele"
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

<style scoped>
.social-icon {
  color: white;
}
.social-icon-mar {
  margin-right: 10px;
}
.space-lines-10 li {
  margin: 0 0 10px 0;
}
</style>
