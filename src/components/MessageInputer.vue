<template>
    <div class="hbox">
        <a-textarea placeholder="Please input your message" :rows="4" v-model="content"/>
        <div class="sendBtn">
            <a-button type="primary" @click="sendMessage">Send</a-button>
        </div>      
    </div>
</template>
<script>
import messageService from '@/services/messageService';
import Vue from 'vue';
export default {
    data(){
        return {
            content:''
        }
    },
    methods:{
        sendMessage(){
            if(this.content){
                const from = Vue.currentUser.username;
                const to = Vue.currentTarget.name;
                messageService.sendMessage(from,to,this.content).then((result)=>{

                });
            }
        }
    }
}
</script>
<style scope>
.sendBtn{
    padding-left:10px;
}
</style>