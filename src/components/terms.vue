<template id="terms">
<div  class="home-bg no-margin" style="min-height:560px">
    <div class="row grey-text text-darken-2 no-margin">
        <div class="col padding-top-40 padding-bottom-40 m8 push-m2 s12">
            <ul class="collapsible popout"  data-collapsible="accordion">
                <li  class="margin-bottom-5">
                    <div class="collapsible-header grey lighten-2 red-text text-darken-2 active center-align flow-text">Terms and Conditions</div>
                    <div class="collapsible-body weight-300 white"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                </li>
                <li  class="margin-bottom-5">
                    <div class="collapsible-header grey lighten-2 red-text text-darken-2 center-align flow-text">Privacy policies</div>
                    <div class="collapsible-body weight-300 white"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                </li>
                <li  class="margin-bottom-5">
                    <div class="collapsible-header grey lighten-2 red-text text-darken-2 center-align flow-text">Legal Information</div>
                    <div class="collapsible-body weight-300 white"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery';
export default{
    ready: function() {
        $('.collapsible').collapsible({
            accordion: false 
        });
    }
}
</script>