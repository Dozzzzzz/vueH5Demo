import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import { NavBar, Tabbar, TabbarItem } from 'vant';
import Vconsole from 'vconsole';

if (process.env.VUE_APP_ENV === 'development') {//测试环境打开Vconsole
    new Vconsole()
}

//导航守卫，未登录且不在登录页状态下跳转至登录页
const isAuthenticated = true
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else next()
})

const app = createApp();
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);

createApp(App).use(store).use(router).mount('#app')

