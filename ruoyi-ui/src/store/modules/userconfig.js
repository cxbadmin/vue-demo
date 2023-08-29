import { queryTreeLists } from '../../api/userConfig';
import { tableData } from './config';

const userconfig = {
  state: {
    treeList: [],
  },

  mutations: {
    SET_TreeList: (state, list) => {
      state.treeList = list;
    }
  },

  actions: {
    // 登录
    queryTreeList({ commit }, params) {
      return new Promise((resolve, reject) => {
        queryTreeLists(params).then(res => {
          commit('SET_TreeList', res);
          resolve(res);
        }).catch(error => {
          reject(error);
        });
      })
    },
    queryTableData({ commit }, params) {
      return new Promise((resolve, reject) => {
        queryTreeLists(params).then(res => {
          // commit('SET_TreeList', res);
          setTimeout(() => {
            resolve(tableData[params.id]);
          }, 1000)
        }).catch(error => {
          reject(error);
        });
      })
    },
  }
}

export default userconfig