<template>
  <div>
    <p v-text="hello"></p>
    <p v-html="hello"></p>
    {{num+1}}
    {{status ? "sucess" : "false"}}

    <ul>
      <li v-for="(item,index) in list" :class="{odd:index%2}">{{item.name}}---{{item.price}}-{{index}}</li>
    </ul>
    <ul>
      <li v-for="(value,key) in objList" >{{key}}---{{value}}</li>
    </ul>

    <componentA v-for="(value,key) in objList" ></componentA>

    <button @click="addItem">addItem</button>
    <a v-bind:href="link">百度一下</a>
  </div>


</template>

<script>
    import componentA from './component/componentA.vue'
    import Vue from 'vue'
    export default{
        components:{componentA},
        data(){
            return {
                hello:'hello',
                num:1,
                status:true,
                link:'http://www.baidu.com',
                list:[{
                    name:"apple",
                    price:12
                },{
                    name:"bannaa",
                    price:13
                },{
                    name:"orange",
                    price:14
                }],
                objList:{
                    name:"orange",
                    price:14,
                    age:111
                }
            }
        },
        methods:{
            addItem(){
                Vue.set(this.list,1,{
                    name:'addfoods',
                    price:155
                })
//                this.list.push({
//                    name:'addfoods',
//                    price:155
//                })

            }
        }
    }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
