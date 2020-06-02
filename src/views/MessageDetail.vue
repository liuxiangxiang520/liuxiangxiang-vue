<template>
 <ul class="list-group">
    <li class="list-group-item">
        <a href="##">messageId:{{msgId}}</a>
    </li>
    <li class="list-group-item">
        <a href="##">messageContent:{{msgContent}}</a>
    </li>
    <li class="list-group-item">
        <a href="##">messageTitle:{{title}}</a>
    </li>
</ul>
</template>

<script type="text/ecmascript-6">
let msgTitles = [
        { id: 1, title: "msg001" },
        { id: 2, title: "msg002" },
        { id: 3, title: "msg003" }
    ]
export default {
    props:['msgId','msgContent'],
    data(){
        return {
            title:""
        }
    }
}
</script>

<style scoped>


</style>
