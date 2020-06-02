<template>
<div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
        <li class="list-group-item" v-for="(n) in news" :key="n.id">
            <router-link to="/home/news/info"></router-link>
            {{n.content}}
            <button type="button" class="btn btn-primary" data-toggle="button"
                aria-pressed="false" autocomplete="off"
                @click="hanlerJump(n)"
                >{{n.id}}
            </button>
        </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <div class="alert alert-success" role="alert">
       <router-view></router-view>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    data(){
        return {
            news:[
                {id:1,content:'newsOne'},
                {id:2,content:'newsTwo'},
                {id:3,content:'newsThree'},
            ]
        }
    },
    methods: {
        hanlerJump(n){
            // this.$router.replace({name:'newsInfo',params:{newsId:n.id},query:{newsContent:n.content}})
            this.$router.push({name:'newsInfo',params:{newsId:n.id},query:{newsContent:n.content}})
        }
    },
}
</script>

<style scoped>


</style>
