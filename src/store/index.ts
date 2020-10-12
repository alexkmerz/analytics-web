import { createStore } from 'vuex'
import Axios from "axios"

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    register({}, credentials) {
      return new Promise((resolve, reject) => {
        Axios.post('http://localhost:4000/auth/register', credentials)
          .then((response) => {
            console.log(response)
            resolve(response)
          }).catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    login({}, credentials) {
      return new Promise((resolve, reject) => {
        Axios.post('http://localhost:4000/auth/login', credentials)
          .then((response) => {
            console.log(response)
            resolve(response)
          }).catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
