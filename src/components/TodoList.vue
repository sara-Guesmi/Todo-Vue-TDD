<template>
  <div>
    <h2 id="title">{{ title }}</h2>
    <div class="todoList" v-for="task in todos" :key="task.id">
      <Task
        :task="task"
        v-on:delete-task="deleteTask"
        v-on:done-task="doneTask"
      />
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  components: { Task },
  name: "TodoList",
  component: {
    Task,
  },
  props: ["title", "todos"],

  methods: {
    // sending out the eventdelete with the id parameter
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
    doneTask(id) {
      this.$emit("done-task", id);
    },
  },
};
</script>

