import Vuex from 'vuex'
import contentful from "~/plugins/contentful.js";

const state = () => {
    allPosts: []
}

const getters = {
    getAllPosts: state => {
        return state.allPosts
        return 'test'
    }
}

const actions = {
    async getAllPosts({ commit }) {
        const allPosts = await contentful.getEntries({ content_type: "blogPost" });
        commit('setBlogPosts', allPosts.items)
        console.log(allPosts, 2000)
        return { stories: allPosts.items }
    }
}

const mutations = {
    setBlogPosts(state, data) {
        state.allPosts = data
    }
}

export default {
    state, getters, actions, mutations
}