import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VeLine from 'v-charts/lib/line.common';
import VeMap from 'v-charts/lib/map.common';

import 'v-charts/lib/style.css';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/title';
import 'zrender/lib/svg/svg';

[VeLine, VeMap].forEach(comp => {
  Vue.component(comp.name, comp);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
