<template>
  <div id="components-layout-demo-basic">
    <a-layout style="height:100%">
      <a-layout-sider>
        <h3 class="title">Friends</h3>
        <TargetsList :targets="friendsList"></TargetsList>
        <h3 class="title">Groups</h3>
       <TargetsList :targets="groupsList"></TargetsList>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>
          <Header></Header>
        </a-layout-header>
        <a-layout-content>
          <ConversationView v-if="hasCurrentTarget"></ConversationView>
          <!-- <Welcome v-else></Welcome> -->
        </a-layout-content>
        <a-layout-footer>
          <MessageInputer v-if="hasCurrentTarget"></MessageInputer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Vue from 'vue';
import TargetsList from '@/components/TargetsList';
import Header from '@/components/Header';
import MessageInputer from '@/components/MessageInputer';
import ConversationView from '@/components/ConversationView';
import Welcome from '@/components/Welcome';
import { mapGetters } from 'vuex';
export default {
  components:{
    TargetsList,
    MessageInputer,
    Header,
    ConversationView,
    Welcome
  },
  mounted(){
    //console.log(JSON.stringify(Vue.currentUser));
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
</style>