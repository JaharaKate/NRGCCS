<script>
export default {
  name: "LandingPage",
};
</script>

<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="navbar-container">
        <h2>NRGCCS</h2>
        <ul class="navbar-menu">
          <li><a href="home">Home</a></li>
          <li><a href="about">About</a></li>
        </ul>
      </div>
    </nav>

    <!-- Home Section -->
    <div class="home-section">
      <img src="/src/assets/img/men.png" class="men" alt="Men" />
      <div class="home-content">
        <h1>
          Test your English <br />
          proficiency with the BEST <br />
          available resources
        </h1>
        <p>
          Prepare for your next English proficiency test or improve <br />
          your English skills with our free platform NRGCCS.
        </p>
        <p>
          Utilize our available modules for your academic, <br />
          professional, and everyday English needs.
        </p>
        <a href="/home" class="btn">Start Now</a>
        <p class="btn-text">It's Free! Log In Required</p>
      </div>
    </div>

    <!-- About -->
    <div class="about-section">
      <div class="about-content">
        <img src="/src/assets/img/laptop.png" alt="laptop" />
        <div class="text-content">
          <h1>
            Put your English skills to <br />
            the test with our <br />
            selection of modules
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            <br />
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea <br />
            commodo consequat.
          </p>
          <h1>
            Evaluate yourself with an <br />
            accurate feedback grading <br />
            system
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            <br />
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea <br />
            commodo consequat.
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer>
      <div class="footer-section">
        <div class="footer-logo">
          <img src="/src/assets/img/logo1.png" class="logo1" />
          <img src="/src/assets/img/logo2.png" class="logo2" />
          <img src="/src/assets/img/logo3.png" class="logo3" />
          <img src="/src/assets/img/logo4.png" class="logo4" />
          <img src="/src/assets/img/logo5.png" class="logo5" />
          <img src="/src/assets/img/logo6.png" class="logo6" />
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #ad0606;
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
  color: white;
}

.navbar-brand {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
}

.navbar-menu {
  list-style: none;
  margin-right: 10%;
  padding: 0;
}
.navbar-menu li {
  display: inline-block;
  margin-left: 20px;
  padding-right: 20px;
}

.navbar-menu li a {
  color: white;
  text-decoration: none;
  font-size: 20px;
}

.home-section {
  padding-top: 70px;
  padding-left: 0;
  background-image: url(/src/assets/img/homeLP.png);
  background-size: cover;
  background-position: center;
  color: white;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.home-content {
  max-width: 800px;
  margin: 0 auto;
  margin-left: 5%;
  padding: 80px;
  text-align: left;
  font-size: 25px;
}
.btn {
  display: inline-block;
  padding: 10px 30px;
  margin-top: 5%;
  margin-left: 9%;
  background-color: white;
  color: #ad0606;
  border-radius: 25px;
  text-decoration: none;
}

.btn:hover {
  background-color: #f0f0f0;
}
.btn-text {
  margin-left: 7%;
}
.men {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1;
}
.about-section {
  padding-top: 70px;
  padding-left: 0;
  background-color: white;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-content {
  width: 70%;
  position: relative;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-content img {
  width: 30%;
  margin-right: 100px;
}

.about-content h1:first-of-type,
.about-content p:first-of-type {
  text-align: left;
  max-width: 100%;
  margin-bottom: 20px;
}

footer::before {
  content: "";
  display: block;
  width: 100%;
  height: 5px;
  background-color: #ad0606;
  margin-bottom: 20px;
}

.footer-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-logo img {
  width: 100px; /* Set width to desired size */
  height: auto;
  margin: 0 50px; /* Adjust spacing between logos */
}
</style>
