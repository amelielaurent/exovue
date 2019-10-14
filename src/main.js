import Vue from 'vue'
import App from './App'
import router from './rooter';

new Vue({ el: '#app', router, render: h => h(App) })