import { createStore } from 'vuex';
import actions from './actions';
import getters from './getters';
import modules from './modules';
import mutations from './mutations';
import state, { State } from './state';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence<State>({
    storage: window.localStorage,
});

export default createStore({
    actions,
    getters,
    modules,
    mutations,
    state,
    plugins: [vuexLocal.plugin],
});
