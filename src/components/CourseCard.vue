<script setup></script>

<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center" class="course-background">
      <v-col cols="6">
        <v-card>
          <v-img
            class="bg-grey-lighten-2"
            height="220"
            src="/src/assets/img/course1.png"
            cover
          ></v-img>
          <v-card-title class="text-h6">
            English For Academic Purposes
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-img
            class="bg-grey-lighten-2"
            height="220"
            src="/src/assets/img/course2.png"
            cover
          ></v-img>
          <v-card-title class="text-h6"> Everyday English </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-img
            class="bg-grey-lighten-2"
            height="220"
            src="/src/assets/img/course3.png"
            cover
          ></v-img>
          <v-card-title class="text-h6">
            English For Professional <br />Communication
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-img
            class="bg-grey-lighten-2"
            height="220"
            src="/src/assets/img/course4.png"
            cover
          ></v-img>
          <v-card-title class="text-h6">
            English For Global and Intercultural <br />Communication
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.v-card {
  width: 500px;
  margin-top: 50px;
  margin-left: 100px;
}

.v-img {
  height: 200px !important;
}
</style>
