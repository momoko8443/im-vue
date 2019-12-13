<template>
    <div>
        <h1 class="hello">{{helloMessage}}</h1>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters(['getCurrentUsername']),
        helloMessage(){
            return 'Hello ' + this.getCurrentUsername;
        }
    },
}
</script>