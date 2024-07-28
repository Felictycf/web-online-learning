<template>
  <a-table :dataSource="data" :columns="columns" class="custom-table">
    <template v-slot:email="{ record }">
      <div class="email-container">
        <span class="email-text">{{ record.email }}</span>
        <a-button type="danger" @click="deleteEmail(record.id)" class="delete-button">Delete</a-button>
      </div>
    </template>
  </a-table>
</template>

<script>
import { message } from 'ant-design-vue';

export default {
  name: "EmailList",
  data() {
    return {
      data: [
        {
          id: 1,
          email: 'example1@gmail.com',
        },
        {
          id: 2,
          email: 'example2@gmail.com',
        },
        // 更多数据...
      ],
      columns: [
        {
          title: 'Email',
          dataIndex: 'email',
          slots: { customRender: 'email' },
        },
      ],
    };
  },
  methods: {
    deleteEmail(id) {
      this.data = this.data.filter(item => item.id !== id);
      message.success('delete success！');
    },
  },
};
</script>

<style scoped>
.custom-table {
}

.email-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.email-text {
}

.delete-button {
  margin-left: 20px;
}
</style>
