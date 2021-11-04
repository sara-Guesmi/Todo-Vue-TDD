<template>
  <div class="task">
    <li v-bind:class="{ done: task.done }" id="task">
      {{ task.text }}
    </li>
    <div>
      <button class="btn-delete" @click="deleteTask">Delete</button>
      <button v-if="task.done" @click="handleDone" class="btn-done">
        Undone
      </button>
      <button v-else @click="handleDone" class="btn-done">Done</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Task",
  props: ["task"],
  methods: {
    // sending out the eventdelete with the id parameter
    deleteTask() {
      this.$emit("delete-task", this.task.id);
    },
    // sending out the eventdelete with the id parameter
    handleDone() {
      this.$emit("done-task", this.task.id);
    },
  },
};
</script>
<style scoped>
.done {
  text-decoration: line-through;
}
.task {
  display: flex;
  justify-content: space-between;
  padding: 2%;
  background: grey;
  margin: 5px;
}
</style>