<template  id="homepage">
<div  class="home-bg no-margin" style="overflow-y:visible;min-height:550px">
    <div class="row no-padding no-margin padding-top-50 padding-bottom-50">
        <div class="col s12 m12 l12 padding-20 ">
            <div class="col s12 m2 offset-m5">
                <a href="#!/how" class="btn btn-block btn-large red darken-3">How It Works</a>
            </div>
        </div>
    </div>
    <div class="row padding-top-50 padding-bottom-50 container">
        <form action="" method="POST">
            <div class="input-field col s12 m5">
                <select class="black-text">
                    <option value="" selected="">Source Location</option>
                    <option v-for="city in locations" track-by="$index" value="{{ city }}">{{ city }}</option>
                </select>
            </div>
            <div class="input-field col s12 m5">
                <select class="black-text">
                    <option value="" selected="">Destination Location</option>
                    <option v-for="city in locations" track-by="$index" value="{{ city }}">{{ city }}</option>
                </select>
            </div>
            <div class=" col s12 m2 margin-top-10">
                <button type="button" class="btn red darken-3 white-text btn-large btn-block"><span class="center-align">Ship</span></button>
            </div>
        </form>
    </div>
    <div class="row padding-top-50 padding-bottom-50 no-margin ">
        <div class="col s12 m2 offset-m5">
            <button type="button" class="red darken-3 btn-block btn  btn-large"><span>Carry ? </span></button>
        </div>
    </div>
</div>
</template>
<script>
import $ from 'jquery';
jQuery = require('jquery');
export default{
data: function() {
            // $('select').material_select();
            return {
                locations: ["Clayton", "Mt Meigs", "Birmingham", "Helena", "Albertville", "Albertville", "Grant"]
            }
        },
        ready: function() {
                $('select').material_select();
            }
            }
</script>