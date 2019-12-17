<template>
    <div class="vbox">
        <h3 class="talkTo">{{talkWithWho}}</h3>
        <MessageItem v-for="msg in getCurrentMessages" :key="msg.time" :message="msg"></MessageItem>
    </div>
</template>
<script>
import MessageItem from '@/components/MessageItem';
import { mapGetters } from 'vuex';
export default {
    components:{
        MessageItem
    },
    // props:{
    //     messages:Array
    // },
    computed:{
        ...mapGetters(['getCurrentTarget','getCurrentMessages']),
        talkWithWho(){
            if(this.getCurrentTarget.name){
                return 'Conversation with ' + this.getCurrentTarget.name;
            }
            return '';
            
        },
        
    }
}
</script>
<style scoped>

</style>