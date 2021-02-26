import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allWines: [],
    recommendation: [],
    showList: false
  },
  mutations: {
    setAllWines(state, payload) {
      state.allWines = payload;
    },
    setRecommendation(state, payload) {
      state.recommendation = payload;
    },
    setShowList(state, value) {
      state.showList = value;
    }
  },
  actions: {
    getAllWines: async ({ commit }) => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/wine/all");
        commit("setAllWines", response.data.wine_data);
      } catch (error) {
        commit('setAllWines', []);
      }
    },
    getRecommendation: async ({ commit }, id) => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/wine/recommendation/${id}`);
        commit("setRecommendation", response.data.recommendation);
      } catch (error) {
        commit("setRecommendation", []);
      }
    },
    setShowList: ({ commit }, value) => {
      commit("setShowList", value);
    },
  },
  getters: {
    getRecommendation: state => {
      return state.recommendation;
    }
  }
})