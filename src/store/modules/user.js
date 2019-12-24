import authService from '@/services/authService';
import Vue from 'vue';
export default {
    state:{
        currentUser:{},
        currentTarget:{}
    },

    getters:{
        getCurrentUsername:(state)=>{
            return state.currentUser.username;
        },
        getCurrentTarget:(state)=>{
            return state.currentTarget;
        },
        getFriends:(state)=>{
            return state.currentUser.friends;
        },
        getGroups:(state)=>{
            return state.currentUser.groups;
        }
    },

    actions:{
        login({commit}, {username,password}){
            authService.login(username,password).then((result)=>{
                const user = result.data;
                Vue.prototype.$socket.emit('login',{username: user.username});
                commit('setCurrentUserMutation',user);
            });
        },
        setCurrentTarget({commit}, payload){
            commit('setCurrentTargetMutation',payload);
            this.dispatch('loadMessages').then(()=>{
                
            });
        }
    },

    mutations:{
        setCurrentUserMutation(state,user){
            state.currentUser = user;
        },
        setCurrentTargetMutation(state,payload){
            state.currentTarget = payload;
        }
    }
}