<template>
  <div>
    <Header />
    <AddTask v-on:addTask="addTask" />
    <TodoList
      title="List Of My Tasks To be Done!"
      :todos="todos"
      v-on:delete-task="deleteTask"
      v-on:done-task="doneTask"
    />
    <hr />
    <Counter />
  </div>
</template>

<script>
import AddTask from "./components/AddTask.vue";
import Counter from "./components/Counter.vue";
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";
import { taskList } from "./constants/taskList";
export default {
  name: "App",
  components: {
    TodoList,
    AddTask,
    Counter,
    Header,
  },
  data() {
    return {
      todos: taskList,
    };
  },
  methods: {
    addTask(newTask) {
      this.todos = [...this.todos, newTask];
    },

    // delete a task using its id
    deleteTask(id) {
      // before we delete we should cofirm it
      const confirm = window.confirm("are you sure to delete the Task?");
      // if confirm is true so we filter the data
      if (confirm) {
        this.todos = this.todos.filter((task) => task.id !== id);
      }
    },

    // done Tasks
    doneTask(id) {
      this.todos = this.todos.map((task) =>
        task.id == id ? { ...task, done: !task.done } : task
      );
    },
  },
};
</script>

<style>
</style>
