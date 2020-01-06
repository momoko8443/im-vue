import axios from 'axios';
const domain = process.env.VUE_APP_API_SERVER;
function sendMessage(from,to,content,isGroup){
    return axios.post(domain + '/api/messages',{
        from:from,
        to:to,
        content:content,
        isGroup: isGroup
    });
}

function loadUnreadMessagesFromMe(me, target){
    return axios.get(domain + '/api/messages/unread',{
        params:{
            from:me,
            to: target
        }
    })
}

function loadUnreadMessagesToMe(me, target){
    return axios.get(domain + '/api/messages/unread',{
        params:{
            from:target,
            to: me
        }
    })
}

function markHasRead(me, target){
    return axios.delete(domain + '/api/messages/unread',{
        params:{
            from:target,
            to: me
        }
    })
}

function loadHistoryMessages(me, target){
    return axios.get(domain + '/api/messages',{
        params:{
            from:target,
            to: me
        }
    })
}

export default {
    sendMessage,
    loadUnreadMessagesFromMe,
    loadUnreadMessagesToMe,
    markHasRead,
    loadHistoryMessages
}