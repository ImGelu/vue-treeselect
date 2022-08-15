import {createApp } from 'vue';

import TreeSelect from '../dist/vue-treeselect.common';
import '../dist/vue-treeselect.css';


import App from './App.vue';

createApp(App)
    .component('TreeSelect',TreeSelect)
    .mount('#app');