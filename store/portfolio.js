import Vuex from 'vuex'
import contentful from "~/plugins/contentful.js";

const state = () => {
    portfolioItems: []
}

const getters = {
    getAllPortfolioItems: state => {
        return state.portfolioItems
    }
}

const actions = {
    async getAllPortfolioItems({ commit }) {
        const portfolioItems = await contentful.getEntries({ content_type: "portfolioItem" });
        commit('setPortfolioItems', portfolioItems.items)
        console.log(portfolioItems, 9000)
        return portfolioItems.items
    }
}

const mutations = {
    setPortfolioItems(state, data) {
        state.portfolioItems = data
    }
}

export default {
    state, getters, actions, mutations
}