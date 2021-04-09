import { Todo } from '@/types';
import { State } from './state';

export default {
    uncheckeds(state: State): Todo[] {
        return state.todos.filter((todo) => todo.checked === false);
    },

    checkeds(state: State): Todo[] {
        return state.todos.filter((todo) => todo.checked);
    },
};
