import messageService from '@/services/messageService';
export default {
    state:{
        messagesPool:{},
        currentMessages:[]
    },

    getters:{
        getCurrentMessages:(state,getters,rootState,rootGetters)=>{
            return state.currentMessages;
        },
       
    },

    actions:{
        markHasRead({rootState}){
            let from = rootState.user.currentUser.username;
            let to = rootState.user.currentTarget.name;
            return messageService.markHasRead(from, to);
        },
        receiveMessage({commit, rootState}, {from,message}){
            //let from = rootState.user.currentUser.username;
            let to = rootState.user.currentTarget.name;
            if(from === to){
                commit('appendMessagesMutation',{target:to,messages:[message]});
            }
        },
        sendMessage({commit,rootState}, content){
            let from = rootState.user.currentUser.username;
            let to = rootState.user.currentTarget.name;
            let isGroup = rootState.user.currentTarget.isGroup;
            return messageService.sendMessage(from,to,content,isGroup).then((result)=>{
                if(result.data){
                    let sentMsg = result.data;
                    commit('appendMessagesMutation',{target:to,messages:[sentMsg]});
                    return;
                }          
            })
        },
        loadMessages({state,commit,rootState}){
            let from = rootState.user.currentUser.username;
            let to = rootState.user.currentTarget.name;
            if(state.messagesPool[to]){
                commit('updateMessagesMutation',{target:to,messages:state.messagesPool[to]});
                return Promise.resolve();
            }else{
                return Promise.all([
                    messageService.loadHistoryMessages(from,to),
                    messageService.loadUnreadMessagesFromMe(from, to),
                    messageService.loadUnreadMessagesToMe(from, to)
                ]).then((result)=>{
                    //console.log(result);
                    let messages = [];
                    for (let i = 0; i < result.length; i++) {
                        const r = result[i];
                        const msg = r.data;
                        messages = messages.concat(msg);
                    }
                    messages.sort((a,b)=>{
                        if(a.time < b.time){
                            return -1;
                        }
                        if(a.time >= b.time){
                            return 1;
                        }
                    })
                    commit('updateMessagesMutation',{target:to,messages:messages});
                });
            }
            
        }
       
    },

    mutations:{
        appendMessagesMutation(state,{target,messages}){
            for(let i=0;i<messages.length;i++){
                state.messagesPool[target].push(messages[i]);
                //state.currentMessages.push(messages[i]);
            }
        },
        updateMessagesMutation(state, {target, messages}){
            // Vue.set(state.messagesPool, target, messages)
            state.messagesPool[target] = messages;
            state.currentMessages = messages;
        }
    }
}