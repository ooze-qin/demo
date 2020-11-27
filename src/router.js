import vue from 'vue'
import Router from 'vue-router'

vue.use(Router)

import state from './components/state.vue'
import getters from './components/getters.vue'
import mutations from './components/mutations.vue'
import actions from './components/actions.vue'

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/state',
            componend:state
        },
        {
            path:'/getters',
            componend:getters
        },
        {
            path:'/mutations',
            componend:mutations
        },
        {
            path:'/actions',
            componend:actions
        }
    ]
})