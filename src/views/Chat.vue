<template>
  <div id="components-layout-demo-basic">
    <a-layout style="height:100%">
      <a-layout-sider>
        <h3 class="title">Friends</h3>
        <TargetsList :targets="friendsList" :isGroup="false"></TargetsList>
        <h3 class="title">Groups</h3>
       <TargetsList :targets="groupsList" :isGroup="true"></TargetsList>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>
          <Header></Header>
        </a-layout-header>
        <a-layout-content class="conversationView" ref="conversationView">
          <ConversationView v-if="hasCurrentTarget"></ConversationView>
          <!-- <Welcome v-else></Welcome> -->
        </a-layout-content>
        <a-layout-footer>
          <MessageInputer v-if="hasCurrentTarget" @sendMessageSuccess="sendMessageSuccessHandler"></MessageInputer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
//import Vue from 'vue';
import TargetsList from '@/components/TargetsList';
import Header from '@/components/Header';
import MessageInputer from '@/components/MessageInputer';
import ConversationView from '@/components/ConversationView';
import { mapGetters, mapActions } from 'vuex';
export default {
  components:{
    TargetsList,
    MessageInputer,
    Header,
    ConversationView,
  },
  mounted(){
    //console.log(JSON.stringify(Vue.currentUser));
    let vm = this;
    this.$socket.on('unreadMessage',(data)=>{
        //loadUnreadMessagesToMe();
        //console.log(JSON.stringify(data));
        vm.receiveMessage(data);
        //markHasRead(data.from,data.to);
        // setTimeout(()=>{
          
        // },500);
        vm.$nextTick(()=>{
          vm.$refs['conversationView'].$el.scrollTop = vm.$refs['conversationView'].$el.clientHeight + 9999;
          vm.markHasRead().then(()=>{

          });
        });
        
    });
  },
  computed:{
    ...mapGetters(['getFriends','getGroups','getCurrentTarget']),
    friendsList(){
      return this.getFriends;
    },
    groupsList(){
      return this.getGroups;
    },
    hasCurrentTarget(){
      return this.getCurrentTarget.name ? true: false;
    }
  },
  methods:{
    ...mapActions(['loadMessages','receiveMessage','markHasRead']),
    sendMessageSuccessHandler(){
      this.$nextTick(()=>{
          this.$refs['conversationView'].$el.scrollTop = this.$refs['conversationView'].$el.clientHeight + 9999;
        });
    }
  },
  watch:{
    hasCurrentTarget(val){
      if(val){
        this.loadMessages().then(()=>{
          return this.markHasRead().then(()=>{})
        });
      }
    }
  }
}
</script>
<style scoped>
#components-layout-demo-basic{
  height: 100%;
}
.title{
  font-size: 32px;
  padding-top:60px;
  color:violet;
}
.conversationView{
  overflow: auto;
}
</style>