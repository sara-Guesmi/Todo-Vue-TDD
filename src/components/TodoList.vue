<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
