<template>
  <nav class="navbar">
    <div class="navbar-container">
      <img
        src="/src/components/img/nrgccs.png"
        alt="NRGCCS Logo"
        class="logo"
      />
      <ul class="navbar-menu">
        <li><a href="home">Home</a></li>
        <li><a href="about">Overview</a></li>
        <li><a href="about">Courses</a></li>
      </ul>
    </div>
  </nav>

  <v-container fluid class="home-section">
    <v-layout row wrap>
      <v-flex>
        <h2>
          National Roadmap for Global Competitiveness in Communication Skills
        </h2>
        <h1>GLOBAL ENGLISH COMPETITIVE MODULE</h1>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container fluid class="logo-section">
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 sm6 md4 lg2>
        <img
          src="/src/components/img/nrgccs.png"
          alt="Logo 2"
          class="logo-image"
        />
      </v-flex>
      <v-flex xs12 sm6 md4 lg2>
        <img
          src="/src/components/img/logo1.png"
          alt="Logo 1"
          class="logo-image"
        />
      </v-flex>
      <v-flex xs12 sm6 md4 lg2>
        <img
          src="/src/components/img/logo2.png"
          alt="Logo 2"
          class="logo-image"
        />
      </v-flex>
      <v-flex xs12 sm6 md4 lg2>
        <img
          src="/src/components/img/logo3.png"
          alt="Logo 3"
          class="logo-image"
        />
      </v-flex>
      <v-flex xs12 sm6 md4 lg2>
        <img
          src="/src/components/img/logo4.png"
          alt="Logo 4"
          class="logo-image"
        />
      </v-flex>
      <v-flex xs12 sm6 md4 lg2>
        <img
          src="/src/components/img/logo5.png"
          alt="Logo 5"
          class="logo-image"
        />
      </v-flex>
      <v-flex xs12 sm6 md4 lg2>
        <img
          src="/src/components/img/logo6.png"
          alt="Logo 6"
          class="logo-image"
        />
      </v-flex>
    </v-layout>
  </v-container>

  <v-container fluid class="overview-section">
    <v-layout row wrap>
      <v-flex xs12 md6>
        <p class="overviewOne">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          gravida magna vitae ligula aliquam, sit amet cursus urna volutpat.
          Nulla facilisi. Phasellus rutrum diam vitae purus viverra hendrerit.
          Vestibulum quis purus et velit rutrum feugiat vitae a libero. Vivamus
          nec est quis nunc dignissim vehicula.
        </p>
        <p class="overviewTwo">
          Integer et metus et dui posuere interdum. Duis sit amet justo quis
          dolor pharetra suscipit. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Nunc luctus
          lectus nec sapien mattis, ut efficitur nisi ultrices. Donec ut
          fringilla metus.
        </p>
        <p class="overviewThree">
          Part of the short-term targets of the NRGCCS Project is to further
          raise the level of awareness and adoption of Philippine higher
          education institutions to international standards and teaching
          techniques and develop our competitive advantage in this area to
          contribute to our progress towards a globally competitive knowledge
          economy. Its main goal is adopting the Common European Framework of
          Reference (CEFR) for Languages as a recognized metric for
          communicative competitiveness.
        </p>
      </v-flex>
    </v-layout>
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
</template>

<script>
export default {
  name: "HomeSection",
};
</script>

<style scoped>
.navbar {
  background-color: whitesmoke;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.navbar-brand {
  font-size: 1.5rem;
  text-decoration: none;
}
.logo {
  width: 60px; /* Adjust width as needed */
  height: auto; /* Maintains aspect ratio */
}
.navbar-menu {
  list-style: none;
  margin-right: 5%;
  padding: 0;
}
.navbar-menu li {
  display: inline-block;
  margin-left: 20px;
  padding-right: 30px;
}

.navbar-menu li a {
  color: #ad0606;
  text-decoration: none;
  font-size: 20px;
}
.home-section {
  background-image: url("/src/components/img/home-nrgccs.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px; /* Adjust padding according to your design */
}

.home-section h2 {
  text-align: center;
  color: white;
  margin-top: 300px;
  margin-bottom: 1px; /* Add margin for better separation */
  font-size: 1.5rem;
}

.home-section h1 {
  text-align: center;
  color: white;
  margin-top: 1px;
  margin-bottom: 100px; /* Add margin for better separation */
  font-size: 3.5rem;
}
.logo-section {
  background-color: #eef2f8;
  background-size: cover;
  background-position: center;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px; /* Adjust padding according to your design */
}
.logo-image {
  width: 100%; /* Ensure logo images fill the space */
  max-width: 100px; /* Adjust max-width as needed */
  height: auto; /* Maintain aspect ratio */
  margin-top: 40px;
  margin-bottom: 25px;
  margin-left: 80px;
  margin-right: 50px;
}
.overview-section {
  background-color: #ad0606;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px; /* Adjust padding according to your design */
}
.overview-section .overviewOne {
  color: white;
  font-size: 1.2rem;
  margin-left: 50px;
  margin-top: 50px;
  width: 50%;
}
.overview-section .overviewTwo {
  color: white;
  font-size: 1.2rem;
  margin-left: 50px;
  margin-top: 50px;
  width: 50%;
}
.overview-section .overviewThree {
  color: white;
  font-size: 1.2rem;
  margin-left: 50px;
  margin-top: 50px;
  width: 90%;
}
.course-title {
  color: black;
  margin-top: 20px;
  font-size: 2rem;
}
.course-background {
  background-color: #eef2f8;
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.v-card {
  width: 100%;
  max-width: 80%;
  height: 300px;
  margin: auto;
}
</style>
