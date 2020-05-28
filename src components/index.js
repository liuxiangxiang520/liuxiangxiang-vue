import indexCss from './public/css/index.css';
import imgSrc from './public/imgs/24.jpg'; 
import Vue from 'vue';
import App from './App'

let liu = document.createElement('p');
liu.innerText = '打倒陈天意';
document.getElementById('root').appendChild(liu);

let myFunc = () =>{
    console.log('haha')
}
myFunc()

//创建图片
let imgNode = new Image()
imgNode.src = imgSrc
document.getElementById('root').appendChild(imgNode)

new Vue({
    el:'#root',
    render:h => h(App)
})