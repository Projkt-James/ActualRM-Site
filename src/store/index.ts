import Vue from 'vue';
import Vuex from 'vuex';
import { GetterTree, MutationTree, ActionTree} from 'vuex';

Vue.use(Vuex)

//Interface model of state
export interface State {

    companySectionData: {
        headerTopline: string,
        headerBottomline: string,
        text: string;
    }
}

//Set default state
const state: State = {

    companySectionData: {
        headerTopline: "tailored for",
        headerBottomline: "SE Queensland",
        text: `Actual Repairs & Maintenance was founded in 2017 with a mission to provide a new level of customer oriented
        contract work to individuals and businesses in South-east Queensland. We believe in a boots on the ground approach to the 
        work we our conduct, with all personal located in the Brisbane area. At Actual we are proud of the work and services to we 
        provide and are driven by the positive impact and results we produce for our customers and the wider community.`
    }
}

//States getters
const getters: GetterTree<State, any> = {

    getCompanySectionData: (state, getters) => {
        return state.companySectionData;
    }
}

//States mutations
const mutations: MutationTree<State> = {

}

//States actions 
const actions: ActionTree<State,any> = {

}

export default {
    state,
    getters: getters,
    mutations,
    actions
}

