<template>
  <div class="loginView">
    <a-form layout="inline">
    <a-form-item>
      <a-input
        placeholder="Username"
        v-model="username"
      >
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        type="password"
        placeholder="Password"
        v-model="password"
      >
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" @click="handleSubmit">
        Log in
      </a-button>
    </a-form-item>
  </a-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import axios from 'axios';


export default {
  data() {
    return {
      username:'user_a',
      password:'123456'
    };
  },

  methods: {
    ...mapActions(["login"]),
    handleSubmit(e) {
      e.preventDefault();
      if(this.username && this.password){
        this.login({
            username:this.username,
            password:this.password
          }).then(()=>{
          this.$router.push({path: '/chat'});
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #components-layout-demo-basic {
    text-align: center;
  }
  .loginView{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    vertical-align: middle;

  }
</style>
