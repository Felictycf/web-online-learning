<template>
  <div class="forum-container">
    <h1>Note</h1>
    <ul class="topic-list">
      <li v-for="topic in topics" :key="topic.id" class="topic-item">
        <div class="topic-box">{{ topic.title }}</div>
      </li>
    </ul>
    <div class="pagination">
      <a-button type="primary" @click="changePage" size="large">pagination button</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  data() {
    return {
      topics: [
        { id: 1, title: "Note 1" },
        { id: 2, title: "Note 2" },
        { id: 3, title: "Note 3" },
        { id: 4, title: "Note 4" },
        { id: 5, title: "Note 5" },
      ],
    };
  },
  methods: {
    changePage() {
      // Implement page changing logic here
    },
  },
};
</script>

<style scoped>
.forum-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
.topic-list {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 2rem;
}
.topic-item {
  margin: 1rem 0;
}
.topic-box {
  border: 1px solid #ddd;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
}
.pagination {
  display: flex;
  justify-content: center;
}
</style>
