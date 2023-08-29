import { queryNewsLists } from '@/api/home';

const home = {
  state: {
    newsList: [],
  },

  mutations: {
    SET_NEWSLIST: (state, list) => {
      state.newsList = list;
    }
  },

  actions: {
    // 登录
    queryNewsList({ commit }, params) {
      return new Promise((resolve, reject) => {
        queryNewsLists(params).then(res => {
          console.log(res);
          commit('SET_NEWSLIST', res);
          resolve(res);
        }).catch(error => {
          reject(error);
        });
      })
    },
  }
}

export default home