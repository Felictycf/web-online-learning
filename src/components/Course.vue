<template>
  <div class="courses-container">
    <div v-for="video in videos" :key="video.id" class="video-card">
      <img :src="video.thumbnail" alt="Video thumbnail" class="video-thumbnail" />
      <div class="video-info">{{ video.info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Course',
  data() {
    return {
      videos: [
        { id: 1, thumbnail: './assets/boilerplate.png', info: 'Video 1 info...' },
        { id: 2, thumbnail: '/path/to/thumbnail2.jpg', info: 'Video 2 info...' },
        { id: 3, thumbnail: '/path/to/thumbnail3.jpg', info: 'Video 3 info...' },
        { id: 4, thumbnail: '/path/to/thumbnail4.jpg', info: 'Video 4 info...' },
        { id: 5, thumbnail: '/path/to/thumbnail5.jpg', info: 'Video 5 info...' },
        { id: 6, thumbnail: '/path/to/thumbnail6.jpg', info: 'Video 6 info...' },
      ],
    };
  },
}
</script>

<style scoped>
.courses-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.video-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}
.video-card:hover {
  box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
}
.video-thumbnail {
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* this gives the thumbnail a 4:3 aspect ratio */
  object-fit: cover;
  object-position: center;
}
.video-info {
  padding: 1rem;
  background-color: #f5f5f5;
}
</style>
