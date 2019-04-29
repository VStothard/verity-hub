import Vuex from 'vuex'
import contentful from "~/plugins/contentful.js";

const state = () => {
    allCourses: []
}

const getters = {
    getAllCourses: state => {
        return state.allCourses
    }
}

const actions = {
    async getAllCourses({ commit }) {
        const allCourses = await contentful.getEntries({ content_type: "skillshareCourse" });
        commit('setCourses', allCourses.items)
        console.log(allCourses, 9000)
        return allCourses.items
    }
}

const mutations = {
    setCourses(state, data) {
        state.allCourses = data
    }
}

export default {
    state, getters, actions, mutations
}