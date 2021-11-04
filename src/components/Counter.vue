<template>
  <div>
    <h1>Counter Application</h1>
    <h1 id="counter-value">{{ counter }}</h1>
    <button id="increment-btn" @click="handleIncrement">+</button>
  </div>
</template>
<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleIncrement() {
      this.counter = this.counter + 1;
    },
  },
};
</script>