<template>
  <div class="person-center">
    <h1 style="font-size: 50px">Person Center</h1>
    <div class="navigation">
      <br>

      <div v-for="nav in navigation" :key="nav.route" class="nav-item">
        <router-link :to="nav.route" class="nav-button">{{ nav.name }}</router-link>
      </div>
    </div>
    <div class="course-list">
      <div v-for="course in courses" :key="course.id" class="course-item">
        <div class="course-thumbnail">
          <img :src="course.thumbnail" :alt="course.name" />
        </div>
        <div class="course-info">
          <h3>{{ course.name }}</h3>
          <p>{{ course.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        { name: 'Joined Online Exam', route: '/exam' },
        { name: 'Joined Courses', route: '/joined-course' },
        { name: 'My Questions', route: '/my-question' },
        { name: 'My Answers', route: '/my-answer' },
        { name: 'Account Info', route: '/account-info' },
        { name: 'Schedule', route: '/schedule' },
        { name: 'Note', route: '/note'},
        { name: 'Performanec', route: '/performance'},
        { name: 'email', route: '/email'},
      ],
      courses: [
        { id: 1, name: 'Vue.js Basics', thumbnail: '/images/vue-basics.jpg', description: 'Learn the basics of Vue.js.' },
        { id: 2, name: 'Vue.js Advanced', thumbnail: '/images/vue-advanced.jpg', description: 'Learn advanced Vue.js topics.' },
        { id: 3, name: 'Web Advanced', thumbnail: '/images/vue-advanced.jpg', description: 'Learn advanced Vue.js topics.' },
        // More courses...
      ]
    }
  }
}
</script>

<style scoped>
.person-center {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.navigation {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin-bottom: 2rem;
}
.nav-item {
  margin: 1rem;
}
.nav-button {
  display: inline-block;
  background-color: #353d46;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.2s;
}
.nav-button:hover {
  background-color: #0056b3;
}
.course-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.course-item {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}
.course-thumbnail img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.course-info {
  padding: 1rem;
}
</style>
