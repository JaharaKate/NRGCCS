<template>
  <v-app>
    <v-app-bar app>
      <v-img
        src="/src/components/img/nrgccs.png"
        max-height="48"
        contain
      ></v-img>
      <v-spacer></v-spacer>
      <v-btn text to="/" class="custom-btn">Home</v-btn>
      <v-btn text to="/" class="custom-btn">Overview</v-btn>
      <v-btn text to="/" class="custom-btn">Courses</v-btn>
    </v-app-bar>

    <!-- Home Section-->
    <v-container fluid fill-height>
      <v-row justify="center" align="center" class="background-image">
        <v-col cols="12" class="text-center">
          <h2 class="sub-title">
            National Roadmap for Global Competitiveness in Communication Skills
          </h2>
          <h1 class="title">
            GLOBAL ENGLISH COMPETITIVE <br />
            MODULE
          </h1>
        </v-col>
      </v-row>
    </v-container>

    <!-- Logo -->
    <div class="logo-section">
      <div class="container-logo">
        <img src="/src/components/img/logo1.png" class="logo1" />
        <img src="/src/components/img/logo2.png" class="logo2" />
        <img src="/src/components/img/logo3.png" class="logo3" />
        <img src="/src/components/img/logo4.png" class="logo4" />
        <img src="/src/components/img/logo5.png" class="logo5" />
        <img src="/src/components/img/logo6.png" class="logo6" />
      </div>
    </div>

    <!-- Overview Section -->
    <v-container fluid fill-height>
      <v-row justify="center" align="center" class="overview-background">
        <v-col cols="12" class="text-center">
          <h1 class="title">OVERVIEW</h1>
        </v-col>
      </v-row>
    </v-container>

    <!-- Course Section-->
    <v-container fluid fill-height>
      <v-row justify="center" align="center" class="course-background">
        <v-card-title class="course-title"> Courses </v-card-title>
        <v-col cols="12" class="text-center"> </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              class="bg-grey-lighten-2"
              height="220"
              src="https://picsum.photos/350/165?random"
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
              src="https://picsum.photos/350/165?random"
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
              src="https://picsum.photos/350/165?random"
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
              src="https://picsum.photos/350/165?random"
              cover
            ></v-img>
            <v-card-title class="text-h6">
              English For Global and Intercultural <br />Communication
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.custom-btn {
  color: #ad0606;
}
.background-image {
  background-image: url(/src/components/img/home-nrgccs.png);
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.sub-title {
  color: white;
  font-size: 1rem;
}
.title {
  color: white;
  font-size: 3rem;
}
.logo-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-logo img {
  width: 100px;
  height: auto;
  margin: 0 50px;
}
.overview-background {
  background-color: #ad0606;
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.course-background {
  background-color: #eef2f8;
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.v-card {
  width: 400px;
  height: 300px;
  margin: auto;
}
</style>
