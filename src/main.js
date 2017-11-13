// import Vue from 'vue'
// var myHeaderChild = {
//     template: '<p>myHeaderChild</p>',
// }
// var myHeader ={
//     template: '<p>段落<my-header-child></my-header-child></p>',
//     components:{
//         'my-header-child':myHeaderChild
//     }
//     // data:{
//     //     aa:"hello"
//     // }
// }
//
// new Vue({
//   el: '#app',
//   data:{
//     word:"hello"
//   },
//     components:{
//       'my-header':myHeader
//     }
// });


import Vue from 'vue'
import App from './App.vue'

new Vue({
  el:'#app',
    render:h => h(App)
});