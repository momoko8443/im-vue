<template>
    <div :class="['hbox','messageItem', isYou ? 'right':'left']">
        <a-avatar shape="square" size="large" icon="user"></a-avatar>
        <span class="messageBody">{{message.content}}</span>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    props:{
        message:Object
    },
    computed:{
        ...mapGetters(['getCurrentUsername']),
        talker(){
            return this.message.from;
        },
        isYou(){
            if(this.message.from === this.getCurrentUsername){
                return true;
            }else{
                return false;
            }
        }
    }
}
</script>
<style scope>
    .messageItem{
        padding-left:24px;
        padding-top:10px;
        padding-right:24px;
        align-items:center;
    }
    .messageBody{
        padding-left: 10px;
        padding-right: 10px;
    }
    .talker{
        /* font-size: 14px;
        font-weight: bold; */
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: yellowgreen;
        line-height:50px;
    }
    .left{
        flex-direction: row;
    }
    .right{
        flex-direction: row-reverse;
        
    }
</style>