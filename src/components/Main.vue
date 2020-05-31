<template>
<!-- <div class="row">
    <h2 v-if="isFirst">请点击以上按钮进行搜索</h2>
    <h2 v-else-if="isLoading">请求发送中，，请稍后...</h2>
    <h2 v-else-if="errMsg">请求出错，{{errMsg}}.请重新发送请求</h2>
      <div class="card" v-for="(user) in users" :key="user.user_name">
        <a :href="user.user_url" target="_blank">
          <img :src="user.user_img" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.user_name}}</p>
      </div>
    </div> -->
     <div class="row">
    <h2 v-if="isFirst">初次见面请多关照</h2>
    <h2 v-else-if="isLoading">发送请求中，请稍后...</h2>
    <h2 v-else-if="errMsg">请求出错，{{errMsg}}.请重新发送请求</h2>
    <div v-else class="card" v-for="(user) in users" :key="user.user_name">
      <a :href="user.user_url" target="_blank">
        <img :src="user.user_img" style="width: 100px" />
      </a>
      <p class="card-text">{{user.user_name}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
    mounted() {
        this.$bus.$on('searchAjax',this.searchAjax)
    },
    data(){
        return {
            isFirst:true,
            isLoading:false,
            errMsg:'',
            users:[] //用来保存请求成功后的信息
        }
    },
    methods: {
        searchAjax(searchName){
            //发送请求时改成我们需要的数据
            this.isFirst = false,
            this.isLoading = true
            axios({
                method:'GET',
                url:'https://api.github.com/search/users',
                params:{
                    q:searchName
                }
            }).then(response => {
                this.isLoading = false
                // console.log(response.data)
                response.data.items.forEach(item => {
                    //把我们需要的数据过滤出来
                    let user_name = item.login
                    let user_img = item.avatar_url
                    let user_url = item.url
                    //组装为对象
                    let obj = {
                        user_name,
                        user_img,
                        user_url
                    }
                    //将组装的对象放到我的数据当中
                    this.users.push(obj)
                });
            }).catch(error => {
                this.errMsg = error.message
                this.isLoading = false
            })
        }
    },
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}


</style>