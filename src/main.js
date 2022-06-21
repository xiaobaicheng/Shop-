import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Tabbar, TabbarItem,Button,PullRefresh,Search ,Icon    } from 'vant';

import 'vant/lib/index.css';

const app = createApp(App)
app.use(Tabbar);
app.use(TabbarItem);
app.use(Button);
app.use(PullRefresh);
app.use(Search );
app.use(Icon );
app.use(ElementPlus)
axios.defaults.baseURL="http://localhost:4001";
app.config.globalProperties.$axios=axios

app.use(store).use(router).mixin(
    {
        data(){
            return{
                baseURL:'http://localhost:4001'
            }
        }
    }
).mount('#app')
