<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br />
    <h3>{{ text }}</h3>
    <div class="btn-group">
      <button>button</button>
      <a-button type="primary">a-button</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { text } from '@/constant'

export default defineComponent({
  setup() {
    return {
      text
    }
  }
})
</script>

<style lang="less">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

.btn-group {
  display: flex;
  justify-content: space-around;
}
</style>
