<template>
  <div class="person-center">
    <h1 style="font-size: 50px">Online Exam</h1>
    <div class="navigation">
      <div v-for="nav in navigation" :key="nav.route" class="nav-item">
        <router-link :to="nav.route" class="nav-button">{{ nav.name }}</router-link>
      </div>
    </div>

    <div class="exam-panel">
      <a-select
          class="exam-selector"
          placeholder="Select Exam"
          v-model="selectedExam"
      >
        <a-select-option v-for="exam in exams" :key="exam.id" :value="exam.id">{{ exam.name }}</a-select-option>
      </a-select>

      <a-button
          class="start-button"
          type="primary"
          @click="startExam"
          size="large"
      >
        <a-icon type="play-circle" slot="prefix"/>
        Start Exam
      </a-button>
      <div class="exam-info">
        <div class="exam-image-container">
          <img :src="selectedExam ? selectedExam.image : ''" alt="Exam Image" class="exam-image"/>
        </div>
        <div class="exam-description">{{ selectedExam ? selectedExam.description : '' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      navigation: [
        { name: 'Joined Courses', route: '/joined-course' },
        { name: 'My Questions', route: '/my-question' },
        { name: 'My Answers', route: '/my-answer' },
        { name: 'Account Info', route: '/account-info' },
        { name: 'Schedule', route: '/schedule' },
        { name: 'Check in', route: '/check-in' },
        { name: 'Chat', route: '/chat' },
      ],
      exams: [
        { id: 1, name: "Exam 1", image: "path_to_image_1", description: "Description for Exam 1" },
        { id: 2, name: "Exam 2", image: "path_to_image_2", description: "Description for Exam 2" },
        { id: 3, name: "Exam 3", image: "path_to_image_3", description: "Description for Exam 3" },
      ],
      selectedExam: null
    }
  },
  methods: {
    ...mapActions([
      'startExamAction'
    ]),
    startExam() {
      if (!this.selectedExam) {
        alert("Please select an exam first")
        return
      }
      this.startExamAction(this.selectedExam)
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
.exam-panel {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
}
.exam-selector {
  flex: 1;
  margin-right: 20px;
}
.start-button {
  margin-left: 20px;
}
.exam-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  background-color: #fafafa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
  position: relative;
  right: 500px;
  top: 100px;
}
.exam-image-container {
  width: 300px;
  height: 300px;
  border: 2px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: border-color 0.3s;
}
.exam-image-container:hover {
  border-color: #0056b3;
}
.exam-image {
  max-width: 100%;
  max-height: 100%;
}
.exam-description {
  font-size: 1.2rem;
  text-align: center;
  color: #333;
}
</style>
