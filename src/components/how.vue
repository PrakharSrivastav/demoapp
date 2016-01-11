<template id="howitworks">
<div class="row">
    <h3 class="weight-300  grey-text text-darken-2 center-align">How It Works</h3>
    <div class="col padding-top-40 padding-bottom-40 m10 push-m1 clearfix s12">
        <div v-for="cards in upperCards" class="col s12 m6">
            <div class="card small  hoverable white">
                <div class="grey-text text-darken-4 nop-padding">
                    <div class="card-title grey lighten-2 red-text text-darken-2 padding-15">{{{cards.title}}}</div>
                    <p class="padding-10 grey-text text-darken-2">{{cards.text}}</p>
                </div>
            </div>
        </div>
        <div v-for="cards in lowercards" class="col s12 m6">
            <div class="card small  hoverable white">
                <div class="grey-text text-darken-4">
                    <div class="r grey lighten-2 red-text text-darken-2 padding-15 card-title">{{{cards.title}}}</div>
                    <p class="padding-10 grey-text text-darken-2">{{cards.text}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default{
    data: function() {
             return {
                 upperCards: [{
                     title: "<i class='material-icons margin-top-5'>room</i>  <span class='margin-top--5'>Find Locations</span>",
                     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
                 }, {
                     title: "<i class='material-icons margin-top-5'>search</i>  <span class='margin-top--5'>Search Tindler</span>",
                     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
                 }, {
                     title: "<i class='material-icons margin-top-5'>send</i>  <span class='margin-top--5'>Send Stuff</span>",
                     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
                 }, {
                     title: "<i class='material-icons margin-top-5'>credit_card</i>  <span class='margin-top--5'>Pay Online</span>",
                     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
                 }],
                 lowercards: [{
                     title: "<i class='material-icons margin-top-5'>verified_user</i>  <span class='margin-top--5'>Recieve Payments</span>",
                     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
                 }, {
                     title: "<i class='material-icons margin-top-5'>recent_actors</i>  <span class='margin-top--5'>Deliver Package</span>",
                     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
                 }, ]
             }
         }
}
</script>