<template>
    <div class="hbox">
        <a-textarea placeholder="Please input your message" :rows="4" v-model="content"/>
        <div class="sendBtn">
            <a-button type="primary" @click="sendMessage">Send</a-button>
        </div>      
    </div>
</template>
<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            content:''
        }
    },
    methods:{
        ...mapActions(['sendMessage']),
        send(){
            if(this.content){
                this.sendMessage(this.content).then(()=>{
                    alert();
                })

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