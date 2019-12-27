import axios from 'axios';
function sendMessage(from,to,content,isGroup){
    return axios.post('/api/messages',{
        from:from,
        to:to,
        content:content,
        isGroup: isGroup
    });
}

function loadUnreadMessagesFromMe(me, target){
    return axios.get('/api/messages/unread',{
        params:{
            from:me,
            to: target
        }
    })
}

function loadUnreadMessagesToMe(me, target){
    return axios.get('/api/messages/unread',{
        params:{
            from:target,
            to: me
        }
    })
}

function markHasRead(me, target){
    return axios.delete('/api/messages/unread',{
        params:{
            from:target,
            to: me
        }
    })
}

function loadHistoryMessages(me, target){
    return axios.get('/api/messages',{
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