import { MutationTree } from 'vuex';
import { Todo } from '@/types';
import { State } from './state';

enum MutationTypes {
    SET_LOADING = 'setLoading',
    ADD_TODO = 'addTodo',
    TOGGLE_TODO = 'toggleTodo',
    REMOVE_TODO = 'removeTodo',
    TOGGLE_LIST = 'toggleList',
    REMOVE_LIST = 'removeList',
}

export type Mutations<S = State> = {
    [MutationTypes.SET_LOADING](state: S, payload: boolean): void;
    [MutationTypes.ADD_TODO](state: S, payload: Todo): void;
    [MutationTypes.TOGGLE_TODO](state: S, payload: Todo): void;
    [MutationTypes.REMOVE_TODO](state: S, payload: Todo): void;
    [MutationTypes.TOGGLE_LIST](state: S, payload: number[]): void;
    [MutationTypes.REMOVE_LIST](state: S, payload: number[]): void;
};

const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_LOADING](state, payload) {
        state.loading = payload;
    },

    [MutationTypes.ADD_TODO](state, payload) {
        state.todos.push(payload);
    },

    [MutationTypes.TOGGLE_TODO](state, payload) {
        const index = state.todos.findIndex((item) => item.id === payload.id);
        if (index > -1) {
            const checked = !state.todos[index].checked;
            state.todos[index] = { ...state.todos[index], checked };
        }
    },

    [MutationTypes.REMOVE_TODO](state, payload) {
        state.todos = state.todos.filter((item) => item.id !== payload.id);
    },

    [MutationTypes.TOGGLE_LIST](state, todosIds: number[]) {
        const todos = state.todos.map((item) => {
            return todosIds.includes(item.id)
                ? { ...item, checked: !item.checked }
                : item;
        });
        state.todos = todos;
    },

    [MutationTypes.REMOVE_LIST](state: State, todosIds: number[]) {
        const todos = state.todos.filter((item) => !todosIds.includes(item.id));
        state.todos = todos;
    },
};
export default mutations;
