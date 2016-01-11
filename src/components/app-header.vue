<template>
<nav class="no-margin no-padding red darken-2 z-depth-0">
    <div class="no-margin nav-wrapper ">
        <a href="#" class="padding-left-15 brand-logo weight-300">Tindli</a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down weight-400">
            <li class=""><a  class="weight-300"  href="#!/home">Home</a></li>
            <li><a class="weight-300"  href="#!/how">How It Works</a></li>
            <li><a  class="weight-300" href="#!/terms">Terms And Conditions</a></li>
            <li><a  class="weight-300" href="#!/register">Signup</a></li>
            <li><a  class="weight-300" href="#!/login">Login</a></li>
        </ul>
        <ul class="side-nav grey lighten-2" id="mobile-demo">
            <li class=""><a  class="weight-300 red-text text-darken-2"  href="#!/home">Home</a></li>
            <li><a class="weight-300 red-text text-darken-2"  href="#!/how">How It Works</a></li>
            <li><a  class="weight-300 red-text text-darken-2" href="#!/terms">Terms And Conditions</a></li>
            <li><a  class="weight-300 red-text text-darken-2" href="#!/register">Signup</a></li>
            <li><a  class="weight-300 red-text text-darken-2" href="#!/login">Login</a></li>
        </ul>
    </div>
</nav>
</template>
<script>
import $ from 'jquery';
require('materialize-css/bin/materialize.js');
export default {
    ready: function() {
    $(".button-collapse").sideNav({
    closeOnClick: true
    });
  }
}
</script>