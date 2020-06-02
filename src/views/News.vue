<template>
<div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
        <li class="list-group-item" v-for="(n) in news" :key="n.id">
            <router-link to="/home/news/info"></router-link>
            {{n.content}}
            <button type="button" class="btn btn-primary" data-toggle="button"
                aria-pressed="false" autocomplete="off">{{n.id}}
            </button>
        </li>
    </ul>
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
    }
}
</script>

<style scoped>


</style>
