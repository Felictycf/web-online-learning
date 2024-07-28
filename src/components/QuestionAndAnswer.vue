<template>
  <div class="create-question">
    <div v-for="(question, index) in questions" :key="index" class="question">
      <h2>Question {{ index + 1 }}</h2>
      <label :for="'question-' + index">Question:</label>
      <textarea :id="'question-' + index" type="text" v-model="question.text" class="input-field"></textarea>
      <label :for="'answer-a-' + index">Answer A:</label>
      <input :id="'answer-a-' + index" type="text" v-model="question.answers.a" class="input-field">
      <label :for="'answer-b-' + index">Answer B:</label>
      <input :id="'answer-b-' + index" type="text" v-model="question.answers.b" class="input-field">
      <label :for="'answer-c-' + index">Answer C:</label>
      <input :id="'answer-c-' + index" type="text" v-model="question.answers.c" class="input-field">
    </div>

    <button @click="addQuestion" class="add-button">Add Another Question</button>
    <button @click="submitQuestions" class="submit-button">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          text: '',
          answers: {
            a: '',
            b: '',
            c: '',
          }
        }
      ]
    }
  },
  methods: {
    addQuestion() {
      this.questions.push({
        text: '',
        answers: {
          a: '',
          b: '',
          c: '',
        }
      });
    },
    submitQuestions() {
      console.log(this.questions);
    }
  }
}
</script>

<style scoped>
.create-question {
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  background-color: #f8f9fa;
}

.question {
  width: 100%;
  margin-bottom: 2rem;
}

.question h2 {
  text-align: center;
  color: #333;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  outline: none;
}

.input-field:focus {
  border-color: #007bff;
}

.add-button,
.submit-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  color: #fff;
  font-size: 1rem;
}

.add-button {
  background-color: #007bff;
}

.submit-button {
  background-color: #28a745;
}
</style>
