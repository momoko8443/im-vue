<template>
    <div>
        <div v-for="target in targets" :key="target" :class="['item',{'active':getCurrentTarget.name === target}]" @click="itemClick(target)">
            <TargetItem :target="target"></TargetItem>
        </div>
    </div>
</template>
<script>
import TargetItem from '@/components/TargetItem';
import { mapActions, mapGetters } from 'vuex';
export default {
    components:{
        TargetItem
    },
    props:{
        targets:Array,
        isGroup:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        ...mapGetters(['getCurrentTarget']),
    },
    methods:{
        ...mapActions(['setCurrentTarget']),
        itemClick(t){
           this.setCurrentTarget({name:t,isGroup:this.isGroup});
        }
    }
}
</script>
<style scope>
    
</style>