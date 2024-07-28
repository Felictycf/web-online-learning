<template>
  <div class="schedule">
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card title="Course List" class="card">
          <a-list
              item-layout="horizontal"
              :dataSource="courses"
              class="list"
          >
            <a-list-item v-for="(item, index) in courses" :key="index" class="list-item">
              {{ item.name }}
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="Timetable" class="card">
          <a-list
              item-layout="horizontal"
              :dataSource="timetable"
              class="list"
          >
            <a-list-item v-for="(time, index) in timetable" :key="index" class="list-item">
              {{ time.start }} - {{ time.end }}
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Card, List, Row, Col } from 'ant-design-vue';

export default {
  name: "Schedule",
  components: {
    'a-card': Card,
    'a-list': List,
    'a-row': Row,
    'a-col': Col,
  },
  data() {
    return {
      courses: [
        { id: 1, name: 'Course 1' },
        { id: 2, name: 'Course 2' },
        { id: 3, name: 'Course 3' },
        { id: 4, name: 'Course 4' },
        { id: 5, name: 'Course 5' },
        { id: 6, name: 'Course 6' }
      ],
      timetable: [
        { id: 1, start: '09:00', end: '10:00' },
        { id: 2, start: '10:00', end: '11:00' },
        { id: 3, start: '11:00', end: '12:00' },
        { id: 4, start: '13:00', end: '14:00' },
        { id: 5, start: '14:00', end: '15:00' },
        { id: 6, start: '15:00', end: '16:00' },
      ]
    }
  }
}
</script>

<style scoped>
.schedule {
  margin: 16px;
}

.card {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
}

.list {
  margin-top: 16px;
}

.list-item {
  margin-bottom: 8px;
  font-size: 16px;
}
</style>
