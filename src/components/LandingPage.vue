<template>
  <div>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">Logo</div>
        <ul class="navbar-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Button</a></li>
        </ul>
      </div>
    </nav>
    <div class="home-section">
      <div class="home-content">
        <!-- Your home page content goes here -->
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
.navbar {
  background-color: #ad0606;
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.navbar-brand {
  color: white;
  font-size: 1.5rem;
}

.navbar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  display: inline-block;
  margin-left: 20px;
}

.navbar-menu li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.home-section {
  background-color: #f2f2f2; /* Gray background color */
  padding: 5%;
}

.home-content {
  max-width: 800px;
  margin: 0 auto;
  margin-left: 20px;
  text-align: left;
}
</style>
