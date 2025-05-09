import {createApp} from 'vue'
import App from './App.vue'
import {Icon, NavBar} from 'vant';
import 'vant/lib/index.css';
import { Tabbar, TabbarItem } from 'vant';

const app = createApp(App);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Icon);
app.mount('#app');
