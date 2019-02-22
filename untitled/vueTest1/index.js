var app=new Vue({
    el:'#app',
    data:{
        message:'<h1>哈哈哈</h1>',
        data:1
    },
    created: function () {
      //  alert(this.message);
        // `this` 指向 vm 实例
        console.log('message is: ' + this.message)
    }
})

var app2=new Vue({
    el:'#app-2',
    data:{
        message:'页面加载于 ' + new Date().toLocaleString(),
        defaultTxt:'测试'
    }
})
var app3=new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
})
var app4=new Vue({
    el:'#app-4',
    data:{
        todos:[{text:'学习 JavaScript'},{text:'学习 Vue'},{text:'haha'}]
    }
})
var app5=new Vue({
    el:'#app-5',
    data:{
        message:'hello  vue!'
    },
    methods:{
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var app6=new Vue({
    el:'#app-6',
    data:{
        message:'Hello Vue!'
    }
})

Vue.component('todo-item',{
    template:'<li>这是一个待办事项{{todo.text}}</li>',
    props:['todo']
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
})
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
        }
    }
})