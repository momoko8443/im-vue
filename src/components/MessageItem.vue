<template>
    <div class="hbox">
        <span>{{talker}}</span>
        <span>{{message.content}}</span>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    props:{
        message:Object
    },
    computed:{
        talker(){
            if(this.message.from === Vue.currentUser.username){
                return 'you: ';
            }else{
                return this.message.from + ': ';
            }
        }
    }
}
</script>