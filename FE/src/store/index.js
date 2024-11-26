// store.js
import { createStore } from 'vuex';

const store = createStore({
//   state: {
//     isAuthenticated: false,
//     user: null,
//   },
    state: {
        isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
        user: JSON.parse(localStorage.getItem("user")) || null,
    },    
  mutations: {
    login(state, user) {
      state.isAuthenticated = true;
      state.user = user;
      // 儲存到 LocalStorage
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      // 從 LocalStorage 移除
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    },
  },
  actions: {
    fakeLogin({ commit }, { username, password }) {
      // 假設的用戶名和密碼
      const fakeUser = { username: 'testuser', password: 'password123' };

      // 模擬驗證過程
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === fakeUser.username && password === fakeUser.password) {
            commit('login', fakeUser);
            resolve();
          } else {
            reject('Invalid credentials');
          }
        }, 1000); // 模擬延遲
      });
    },
    logout({ commit }) {
      commit('logout');
    },
  },
});

export default store;