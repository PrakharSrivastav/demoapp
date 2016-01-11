<template id="login">
<div  class="home-bg no-margin">
    <div class="row no-margin  padding-top-40 padding-bottom-40">
        <div class="col padding-bottom-40 l4 push-l4 s12 m6 push-m3">
            <div class="card hoverable large white" style="min-height:530px">
                <div class="grey-text text-darken-2">
                    <div class="flow-text padding-top-15 padding-bottom-15 center-align red-text text-darken-2 grey lighten-2">Login</div>
                    <div class="row no-margin  grey lighten-2">
                        <div class="input-field col s12">
                            <button type="button" class="weight-300 waves-effect red darken-1 btn btn-block">Login with google</button>
                        </div>
                    </div>
                    <div class="row no-margin padding-bottom-20 grey lighten-2">
                        <div class="input-field col s12">
                            <button type="button" class="weight-300 waves-effect blue darken-4 btn btn-block">Login with facebook</button>
                        </div>
                    </div>
                    <div class="row padding-top-15 margin-top-15 grey-text text-darken-2">
                        <div class="col s5"><hr></div>
                        <div class="col s2 center-align">OR</div>
                        <div class="col s5"><hr></div>
                        <form class="col s12 padding-10">
                            <div class="row">
                                <div class="input-field col s12 no-padding">
                                    <i class="material-icons prefix margin-top-15">perm_identity</i>
                                    <input id="useremail" @keyup="validateEmail" type="email" v-model="email" class="validate">
                                    <label for="useremail">Your Email Address</label>
                                    <div v-if="email_error"  transition="fade" class="weight-300 center-align red-text darken-3"> {{email_error}}</div>
                                </div>
                                <div class="input-field col s12 no-padding">
                                    <i class="material-icons prefix margin-top-15">vpn_key</i>
                                    <input id="password"  @keyup="validatePassword" type="password" v-model="password" class="validate">
                                    <label for="password">Password</label>
                                    <div v-if="password_error"  transition="fade" class="weight-300 center-align  darken-3 red-text"> {{password_error}}</div>
                                </div>
                            </div>
                            <div class="row">
                                <div v-if="login_error"  transition="fade" class="weight-300 center-align red-text darken-3"> {{login_error}}</div>
                                <div class="input-field col s12">
                                    <button type="button" @click="validateLogin" class="waves-effect red darken-2 btn btn-block">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="clear" style="clear:both;"></div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import $ from 'jquery';
export default{
    data: function() {
        return {
            email: "",
            password: "",
            email_error: "",
            password_error: "",
            login_error: ""
        }
    },
    methods: {
        validateEmail: function() {
           var email_msg = $.trim(this.email);
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (email_msg == "") {
                this.email_error = "Please provide an email address";
            } else if (!re.test(email_msg)) {
                this.email_error = "Invalid email format";
            } else this.email_error = "";
        },
        validatePassword: function() {
            var password_msg = $.trim(this.password);
            if (password_msg == "") {
                this.password_error = "Password is required";
            } else if (password_msg.length < 8) {
                this.password_error = "Please provide atleast 8 characters";
            } else this.password_error = "";
        },
        validateLogin: function() {
            if (this.email == "" || this.password == "") {
                if (this.email == "") {
                    this.email_error = "Please provide an email address";
                }
                if (this.password == "") {
                    this.password_error = "Password is required";
                }
            } else if (this.password_error || this.email_error) {
                return false;
            } else {
                if (this.email == "test@test.net" && this.password == "12345678") {
                    // send the ajax request to validate the username and password from the database   
                    alert("Login successful");
                    this.login_error = "";
                } else {
                    this.login_error = "Invalid username or password";
                }
            }
        }
    }
}
</script>