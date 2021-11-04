<template>
  <div>
    <form>
      <input
        v-model="text"
        type="text"
        id="fname"
        name="task"
        placeholder="enter Task details..."
      />

      <input type="submit" @click.prevent="addTodo" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  props: ["addTask"],

  data() {
    return {
      text: "",
    };
  },
  methods: {
    addTodo() {
      this.$emit("addTask", {
        id: Math.random(),
        text: this.text,
        done: false,
      });
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 20%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>