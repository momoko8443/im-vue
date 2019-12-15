import messageService from '@/services/messageService';

export default {
    state:{
        messagesPool:{}
    },

    getters:{
        getCurrentMessages:(state,rootState)=>{
            return state.currentUser.username;
        },
       
    },

    actions:{
        sendMessage({commit,rootState}, {content}){
            let from = rootState.user.currentUser.username;
            let to = rootState.user.currentTarget.name;
            messageService.sendMessage(from,to,content).then((result)=>{
                if(result.data){
                    let sentMsg = result.data;
                    commit('appendMessagesMutation',{target:to,messages:[sentMsg]});
                }          
            })
        },
       
    },

    mutations:{
        appendMessagesMutation(state,{target,messages}){
            if(!state.messagesPool[target]){
                state.messagesPool[target] = [];
            }
            let oldMessages = state.messagesPool[target];
            for(let i=0;i<messages.length;i++){
                oldMessages.push(messages[i]);
            }
        },
    }
}