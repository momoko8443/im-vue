import messageService from '@/services/messageService';

export default {
    state:{
        messagesPool:{}
    },

    getters:{
        getCurrentMessages:(state,rootState)=>{
            let target = rootState.user.currentTarget.name;
            if(!state.messagesPool[target]){
                state.messagesPool[target] = [];
            }
            return state.messagesPool[target];
        },
       
    },

    actions:{
        sendMessage({commit,rootState}, content){
            let from = rootState.user.currentUser.username;
            let to = rootState.user.currentTarget.name;
            return messageService.sendMessage(from,to,content).then((result)=>{
                if(result.data){
                    let sentMsg = result.data;
                    commit('appendMessagesMutation',{target:to,messages:[sentMsg]});
                    return;
                }          
            })
        },
        loadMessages({commit,rootState}){
            let from = rootState.user.currentUser.username;
            let to = rootState.user.currentTarget.name;
            Promise.all([
                messageService.loadHistoryMessages(from,to),
                messageService.loadUnreadMessagesFromMe(from, to),
                messageService.loadUnreadMessagesToMe(from, to)
            ]).then((result)=>{
                console.log(result);
            });
        }
       
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