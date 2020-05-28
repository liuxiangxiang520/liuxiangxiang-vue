<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <Add :addComment="addComment"/>
        <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from './components/Add'
import List from '@/components/List'
export default {
    components:{
        Add,
        List
    },
    data(){
      return {
        comments:[
          {id:1,username:'欧阳锋',content:'Vue真棒'},
          {id:2,username:'赵丽颖',content:'Vue666'},
          {id:3,username:'郭德纲',content:'Vue还不错'}
        ]
      }
    },
    methods:{
      addComment(obj){
        this.comments.unshift(obj)//往comments头部添加一条数据
      },
      deleteComment(index){
        this.comments.splice(index,1)//从comments内部删除指定下标的那一个数据
      }
    }

};
</script>

<style scoped>
</style>