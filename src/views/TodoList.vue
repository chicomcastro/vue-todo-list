<template>
    <div class="todoList">
        <div class="container grid-xs py-2">
            <form @submit.prevent="add(todo)">
                <div class="input-group">
                    <input
                        type="text"
                        v-model="todo.description"
                        class="form-input"
                        placeholder="New todo"
                        :disabled="loading"
                    />
                    <button
                        class="btn btn-primary input-group-btn"
                        :class="{ loading }"
                    >
                        Add
                    </button>
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
import { Options, Vue } from 'vue-class-component';
import Todo from '@/components/Todo.vue'; // @ is an alias to /src
import { Todo as TodoType } from '@/types';
import { mapActions, mapState } from 'vuex';

@Options({
    components: {
        Todo,
    },
    data() {
        return { todo: { checked: false } };
    },
    computed: {
        ...mapState(['todos', 'loading']),
    },
    methods: {
        ...mapActions(['addTodo', 'toggleTodo', 'removeTodo']),
        async add(todo: TodoType) {
            await this.addTodo({ ...todo });
            this.todo = { checked: false };
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
