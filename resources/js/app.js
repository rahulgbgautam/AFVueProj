require('./bootstrap');

window.Vue = require('vue');



import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter);






// Vue.component('header-component',require('./components/common/HeaderComponent.vue').default);
Vue.component('header-component',require('./components/HeaderComponent.vue').default);
// Vue.component('footer-component',require('./components/common/FooterComponent.vue').default);
Vue.component('footer-component',require('./components/FooterComponent.vue').default);
Vue.component('contact-component',require('./components/ContactComponent.vue').default);
Vue.component('ngodetail-component',require('./components/NgoDetailComponent.vue').default);
Vue.component('login-component',require('./components/LoginComponent.vue').default);
Vue.component('signup-component',require('./components/SignUpComponent.vue').default);
Vue.component('bgimage-component',require('./components/BackgroundImageComponent.vue').default);
Vue.component('ngosubdetail-component',require('./components/NgoSubDetailComponent.vue').default);
Vue.component('astrology-component',require('./components/AstrologyComponent.vue').default);
Vue.component('donor-component',require('./components/DonorComponent.vue').default);
Vue.component('promoters-component',require('./components/PromotersComponent.vue').default);
Vue.component('payment-component',require('./components/PaymentComponent.vue').default);
Vue.component('donorform-component',require('./components/DonorFormComponent.vue').default);
Vue.component('beneficiaryform-component',require('./components/BeneficiaryFormComponent.vue').default);
Vue.component('astrologerform-component',require('./components/AstrologerFormComponent.vue').default);
Vue.component('userform-component',require('./components/UserFormComponent.vue').default);

Vue.component('aboutus-component',require('./components/AboutUsComponent.vue').default);
Vue.component('ourteam-component',require('./components/OurTeamComponent.vue').default);
Vue.component('test-component',require('./components/TestComponent.vue').default);



Vue.component('preheader-component',require('./components/PreHeaderComponent.vue').default);
Vue.component('postheader-component',require('./components/PostHeaderComponent.vue').default);



Vue.component('ngodetails-component',require('./components/NgoDetailsComponent.vue').default);






Vue.component('education-component',require('./components/EducationComponent.vue').default);
Vue.component('health-component',require('./components/HealthComponent.vue').default);
Vue.component('village-component',require('./components/VillageComponent.vue').default);
Vue.component('water-component',require('./components/WaterComponent.vue').default);
Vue.component('agriculture-component',require('./components/AgricultureComponent.vue').default);
Vue.component('skilldevelopement-component',require('./components/SkillDevelopementComponent.vue').default);
Vue.component('differentlyabled-component',require('./components/DifferentlyAbledComponent.vue').default);
Vue.component('womenempowerment-component',require('./components/WomenEmpowermentComponent.vue').default);
Vue.component('humanrights-component',require('./components/HumanRightsComponent.vue').default);







const router = new VueRouter({
    routes,
    // mode: 'history'
    // history: true,
});

const app = new Vue({

		el:'#app',
		router,
		
});

