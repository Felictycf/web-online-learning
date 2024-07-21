
<template>
  <Navbar />
  <router-view class="p-24"></router-view>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const user = ''
const stack = computed(() => {
    return store.state.stack
})
</script>

