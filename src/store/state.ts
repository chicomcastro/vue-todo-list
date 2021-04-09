import { Todo } from '@/types';

export type State = {
    todos: Todo[];
    loading: boolean;
};

const state = {
    todos: [],
    loading: false,
};

export default state;
