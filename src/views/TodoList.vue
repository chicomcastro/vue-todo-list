<template>
  <div class="todoList">
    <div class="container grid-xs py-2">
      <form @submit.prevent="addTodo(todo)">
        <div class="input-group">
          <input
            type="text"
            v-model="todo.description"
            class="form-input"
            placeholder="New todo"
          />
          <button class="btn btn-primary input-group-btn">Add</button>
        </div>
      </form>
      <div class="todo-list">
        <todo
          v-for="t in todos"
          :key="t.id"
          @toggle="toggleTodo"
          @remove="removeTodo"
          :todo="t"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Todo from "@/components/Todo.vue"; // @ is an alias to /src
import { TodoProps } from "@/types";

@Options({
  components: {
    Todo,
  },
  data() {
    return { todos: [], todo: { checked: false } };
  },
  methods: {
    addTodo(todo: TodoProps) {
      todo.id = Date.now();
      this.todos.push(todo);
      this.todo = { checked: false };
    },
    toggleTodo(todo: TodoProps) {
      const index = this.todos.findIndex(
        (item: TodoProps) => item.id === todo.id
      );
      if (index > -1) {
        const checked = !this.todos[index].checked;
        this.todos[index] = { ...this.todos[index], checked };
      }
    },
    removeTodo(todo: TodoProps) {
      const index = this.todos.findIndex(
        (item: TodoProps) => item.id === todo.id
      );
      if (index > -1) {
        this.todos.splice(index, 1);
      }
    },
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.img-logo {
  max-width: 200px;
  margin: 0 auto;
}
.todo-list {
  padding-left: 1rem;
  padding-top: 1.5rem;
}
</style>
