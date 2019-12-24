<template>
    <div :class="{'active':isActive}">
        <span>{{target}}</span>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    props:{
        target:String
    },
    computed:{
        ...mapGetters(['getCurrentUsername']),
        isActive(){
            return this.target === this.getCurrentUsername; 
        }
    }
}
</script>
<style scoped>

</style>