<template>
  <nav class="navbar-container">
    <div class="navbar">
      <div class="nav-icon">
        <img src="/path/to/icon.png" alt="Logo">
      </div>
      <div class="nav-menu">
        <router-link to="/" class="nav-links">Home</router-link>
        <router-link to="/course" class="nav-links">Course</router-link>
        <router-link to="/question" class="nav-links">Question and Answer</router-link>
        <router-link to="/fm" class="nav-links">Forum Moudle</router-link>
        <router-link to="/about" class="nav-links">About</router-link>
      </div>
      <div class="nav-auth">
 <router-link to="/login" tag="button" class="nav-button login">Login</router-link>
        <router-link to="/register" tag="button" class="nav-button login">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #282c34;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  color: #ffffff;
}
.nav-icon img {
  width: 60px;
}
.nav-menu {
  display: flex;
  gap: 2rem;
}
.nav-links {
  text-decoration: none;
  color: #ffffff;
  transition: color 0.3s ease;
}
.nav-links:hover {
  color: #ffb400;
}
.nav-auth .nav-button {
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-left: 1rem;
}
.nav-auth .nav-button:hover {
  background-color: #ffffff;
  color: #282c34;
}
</style>
