<template>
  <div class="tile" :class="{ checked: todo.checked }">
    <div class="tile-icon">
      <i class="icon" :class="todo.checked ? 'icon-check' : 'icon-time'"></i>
    </div>
    <div class="tile-content">
      <p class="tile-subtitle">{{ todo.description }}</p>
    </div>
    <div class="tile-action">
      <button @click="$emit('toggle', todo)" class="btn btn-link">
        <span v-if="todo.checked">Uncheck</span>
        <span v-else>Done</span>
      </button>
      <button @click="$emit('remove', todo)" class="btn btn-link">
        <span class="text-error">Remove</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { TodoProps } from "@/types";

@Options({
  props: {
    todo: {
      id: Number,
      checked: Boolean,
      description: String,
      required: true,
    },
  },
})
export default class Todo extends Vue {
  todo!: TodoProps;
}
</script>

<style scoped>
.checked {
  text-decoration: line-through;
  color: lightgray;
}
.tile {
  align-items: center;
  margin-bottom: 0.5rem;
}
.tile-subtitle {
  margin: 0;
}
</style>
