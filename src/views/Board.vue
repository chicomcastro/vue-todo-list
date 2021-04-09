<template>
    <div class="container-board">
        <div class="columns">
            <div class="column col-sm-12 col-md-8 col-xl-6 col-5">
                <div class="panel">
                    <div class="panel-header">
                        <div class="panel-title">Todo</div>
                    </div>
                    <div class="panel-body">
                        <todo
                            v-for="todo in uncheckeds"
                            :todo="todo"
                            @remove="removeTodo"
                            @toggle="toggleTodo"
                            :key="todo.id"
                        />
                    </div>
                    <div class="panel-footer">
                        <button
                            @click="checkAll"
                            v-if="uncheckeds.length > 0"
                            class="btn btn-link float-right"
                        >
                            Concluir tudo
                        </button>
                    </div>
                </div>
            </div>
            <div class="column col-sm-12 col-md-8 col-xl-6 col-5">
                <div class="panel">
                    <div class="panel-header">
                        <div class="panel-title">Done</div>
                    </div>
                    <div class="panel-body">
                        <todo
                            v-for="todo in checkeds"
                            :todo="todo"
                            @remove="removeTodo"
                            @toggle="toggleTodo"
                            :key="todo.id"
                        />
                    </div>
                    <div class="panel-footer">
                        <button
                            @click="uncheckAll"
                            v-if="checkeds.length > 0"
                            class="btn btn-link float-right"
                        >
                            Desmarcar tudo
                        </button>
                        <button
                            @click="removeAllCheckeds"
                            v-if="checkeds.length > 0"
                            class="btn btn-link float-right text-error"
                        >
                            Remover tudo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Todo from '@/components/Todo';
import { mapGetters, mapActions } from 'vuex';
export default {
    components: { Todo },
    computed: {
        ...mapGetters(['uncheckeds', 'checkeds']),
    },
    methods: {
        ...mapActions([
            'removeTodo',
            'toggleTodo',
            'checkAll',
            'uncheckAll',
            'removeAllCheckeds',
        ]),
    },
};
</script>

<style lang="scss" scoped>
$tablet_width: 840px;

.container-board {
    height: calc(100vh - 100px);
    padding: 0 1rem 1rem 1rem;

    @media (max-width: $tablet_width) {
        padding: 0 0.4rem 1rem 0.4rem;
    }
}
.columns {
    height: 100%;
    justify-content: center;
}
.columns .column {
    padding-left: 1rem;
    padding-right: 1rem;

    @media (max-width: $tablet_width) {
        padding-bottom: 1rem;
        min-height: 20rem;
        padding-left: 0.4rem;
        padding-right: 0.4rem;
    }
}
.columns .column .panel {
    height: 100%;
    border: 0;
    box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);

    @media (max-width: $tablet_width) {
        max-width: none;
    }
}
</style>
