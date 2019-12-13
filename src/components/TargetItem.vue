<template>
    <div :class="{'active':isActive}">
        <span>{{target}}</span>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    props:{
        target:String
    },
    computed:{
        isActive(){
            //return this.target === Vue. .name; 
        }
    }
}
</script>
<style scoped>

</style>