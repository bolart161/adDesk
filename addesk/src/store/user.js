import * as fb from 'firebase/app'
import 'firebase/auth'

class User {
  constructor (id = localStorage.getItem('addesk-auth-id')) {
    this.id = id
  }
}

export default {
  state: {
    user: new User()
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async registerUser ({commit}, {email, password}) {
      commit('clearError');
      commit('setLoading', true);

      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password);

        localStorage.setItem('addesk-auth-id', user.user.uid);

        commit('setUser', new User(user.user.uid));
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
        throw error
      }
    },
    async loginUser ({commit}, {email, password}) {
      commit('clearError');
      commit('setLoading', true);

      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password);

        localStorage.setItem('addesk-auth-id', user.user.uid);

        commit('setUser', new User(user.user.uid));
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
        throw error
      }
    },
    autoLoginUser ({commit}, payload) {
      localStorage.setItem('addesk-auth-id', payload.uid);
      commit('setUser', new User(payload.uid))
    },
    logoutUser ({commit}) {
      localStorage.removeItem('addesk-auth-id');
      fb.auth().signOut();
      commit('setUser', {id: null})
    }
  },
  getters: {
    user (state) {
      return state.user || localStorage.getItem('addesk-auth-id')
    },
    isUserLoggedIn (state) {
      return state.user.id !== null
    }
  }
}
