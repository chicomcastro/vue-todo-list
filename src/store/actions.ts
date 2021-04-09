import { Todo } from '@/types';
import { ActionContext } from 'vuex';
import { State } from './state';

export default {
    addTodo(context: ActionContext<State, State>, todo: Todo): Promise<Todo> {
        const { commit } = context;
        commit('setLoading', true);
        return new Promise((resolve) => {
            setTimeout(() => {
                todo.id = Date.now();
                commit('addTodo', todo);
                commit('setLoading', false);
                resolve(todo);
            }, 500);
        });
    },

    toggleTodo(context: ActionContext<State, State>, todo: Todo): void {
        const { commit } = context;
        commit('toggleTodo', todo);
    },

    removeTodo(context: ActionContext<State, State>, todo: Todo): void {
        const { commit } = context;
        commit('removeTodo', todo);
    },

    checkAll(context: ActionContext<State, State>): void {
        const { commit, state } = context;
        const uncheckedsIds = state.todos
            .filter((i) => !i.checked)
            .map((i) => i.id);
        commit('toggleList', uncheckedsIds);
    },

    uncheckAll(context: ActionContext<State, State>): void {
        const { commit, state } = context;
        const checkeds = state.todos.filter((i) => i.checked).map((i) => i.id);
        commit('toggleList', checkeds);
    },

    removeAllCheckeds(context: ActionContext<State, State>): void {
        const { commit, state } = context;
        const checkeds = state.todos.filter((i) => i.checked).map((i) => i.id);
        commit('removeList', checkeds);
    },
};
