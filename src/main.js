require('materialize-css/bin/materialize.js');
var Vue = require('vue');
Vue.config.debug = true;
var VueRouter = require('vue-router');
Vue.use(VueRouter);
var router = new VueRouter({
    // history: false
});
var App = require('./components/app.vue');
Vue.transition('fade', {
    css: false,
    enter: function(el, done) {
        $(el).css('opacity', .5).animate({
            opacity: 1
        }, 500, done)
    },
    enterCancelled: function(el) {
        $(el).stop()
    },
    leave: function(el, done) {
        $(el).animate({
            opacity: .5
        }, 500, done)
    },
    leaveCancelled: function(el) {
        $(el).stop()
    }
});
router.map({
    '/': {
        component: require('./components/home.vue'),
        name: 'home'
    },
    '/home': {
        component: require('./components/home.vue'),
        name: 'homepage'
    },
    '/how': {
        component: require('./components/how.vue'),
        name: 'how'
    },
    '/terms': {
        component: require('./components/terms.vue'),
        name: 'terms'
    },
    '/login': {
        component: require('./components/login.vue'),
        name: 'login'
    },
    '/register': {
        component: require('./components/register.vue'),
        name: 'register'
    }
});
router.start(App, '#app');