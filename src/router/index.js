import Router from 'vue-router';
import Vue from 'vue';

import routes from './routes';

Vue.use(Router);
const router = new Router({
    routes,
    mode: 'history'
})


export default router;