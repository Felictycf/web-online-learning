<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const stack = computed(() => {
    return store.state.stack
})
</script>

<template>
    <main class="p-24 text-center">
      <h1>Website announcement moudle</h1>
      <h1>Website announcement moudle</h1>
      <h1>Website announcement moudle</h1>
    </main>
</template>
