import { GetterTree, MutationTree, ActionTree } from 'vuex';

//Interface model of state
export interface State {

}

//Set default state
const state: State = {

}

//States getters
const getters: GetterTree<State, any> = {

}

//States mutations
const mutations: MutationTree<State> = {

}

//States actions 
const actions: ActionTree<State,any> = {

}

export default {
    state: () => (state),
    getters: getters,
    mutations,
    actions
}

