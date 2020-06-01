<template>
<div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">{{count}}</button>
    <button @click="incrementAsync">{{count}}</button>
    <p>4倍的count {{currenCount}}</p>
</div>
</template>

<script type="text/ecmascript-6">
import {mapActions,mapMutations,mapGetters,mapState} from 'vuex'
export default {
    // data(){
    //     return {
    //         count:0
    //     }
    // },
    methods: {
        // increment(){
        //     this.$store.commit('increment')
        // },
        // decrement(){
        //     this.$store.commit('decrement')
        // },
        // incrementIfOdd(){
        //     this.$store.dispatch('incrementIfOdd')
        // },
        // incrementAsync(){
        //     this.$store.dispatch('incrementAsync')
        // }
        ...mapMutations(['increment','decrement']),
        ...mapActions(['incrementIfOdd','incrementAsync']),
    },
    computed: {
        ...mapState(['count']),
        ...mapGetters(['currentCount'])
    },
}
</script>

<style scoped>


</style>
