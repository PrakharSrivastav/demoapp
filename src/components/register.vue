<template id="register">
<div  class="home-bg no-margin">
    <div class="row no-margin padding-top-40 padding-bottom-40">
        <div class="col padding-bottom-40 m6 push-m3 clearfix s12">
            <div class="card hoverable large white" id="register_card">
                <div class="grey-text text-darken-2">
                    <div class="flow-text padding-top-20 padding-bottom-20 red-text text-darken-2 grey lighten-2 center-align">Register</div>
                    <form class="col s12 padding-10" id="register_form">
                        <div class="row no-padding no-margin">
                            <div class="input-field col s12 m6">
                                <input id="first_name" v-model="first_name" @keyup="validateFName" type="text" class="validate">
                                <label for="first_name">First Name</label>
                                <div v-if="fname_error" transition="fade" class="weight-300 center-align darken-3 red-text"> {{fname_error}}</div>
                            </div>
                            <div class="input-field col s12 m6">
                                <input id="last_name" v-model="last_name" @keyup="validateLName" type="text" class="validate">
                                <label for="last_name">Last Name</label>
                                <div v-if="lname_error" transition="fade" class="weight-300 center-align darken-3 red-text"> {{lname_error}}</div>
                            </div>
                        </div>
                        <div class="row no-padding no-margin grey-text text-darken-2">
                            <div class="input-field col s12 m6">
                                <input id="password" v-model="password"  @keyup="validatePassword" type="password" class="validate">
                                <label for="password">Password</label>
                                <div v-if="password_error" transition="fade" class="weight-300 center-align darken-3 red-text"> {{password_error}}</div>
                            </div>
                            <div class="input-field col s12 m6">
                                <input id="password_confirm" v-model="c_password"  @keyup="validateCPassword" type="password" class="validate">
                                <label for="password_confirm">Confirm Password</label>
                                <div v-if="c_password_error" transition="fade" class="weight-300 center-align darken-3 red-text"> {{c_password_error}}</div>
                            </div>
                        </div>
                        <div class="row no-padding no-margin">
                            <div class="input-field col s12 m6">
                                <input id="email" type="email" v-model="email" @keyup="validateEmail" class="validate">
                                <label for="email">Your email Address</label>
                                <div v-if="email_error" transition="fade" class="weight-300 center-align darken-3 red-text"> {{email_error}}</div>
                            </div>
                            <div class="input-field col s12 m6">
                                <p>
                                <input type="checkbox" v-model="agree" id="test5" />
                                <label for="test5">Accept Terms and Conditions</label>
                                <div v-if="tnc_error" transition="fade" class="weight-300 center-align darken-3 red-text"> {{tnc_error}}</div>
                                </p>
                            </div>
                        </div>
                        <div class="row no-padding no-margin">
                            <div class="input-field col s12">
                                <button type="button" @click="validateRegistration" class="waves-effect btn-large red darken-2 btn btn-block">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-action grey lighten-2 padding-20">
                    <a href="#!/terms" class="red-text darken-2">Read Terms and conditions</a>
                </div>
            </div>
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
                 first_name: "",
                 last_name: "",
                 password: "",
                 c_password: "",
                 email: "",
                 agree: false,
                 fname_error: "",
                 lname_error: "",
                 password_error: "",
                 c_password_error: "",
                 email_error: "",
                 tnc_error: false
             }
         },
         methods: {
             validateFName: function() {
                 // $.ajax("index.html");
          var       fname = $.trim(this.first_name);
                 if (fname == "" || fname == undefined) {
                     this.fname_error = "First name is required";
                 } else if (fname.length < 2) {
                     this.fname_error = "Please provide atleast 2 characters";
                 } else this.fname_error = "";
             },
             validateLName: function() {
              var    lname = $.trim(this.last_name);
                 if (lname == "" || lname == undefined) {
                     this.lname_error = "Last name is required";
                 } else if (lname.length < 2) {
                     this.lname_error = "Please provide atleast 2 characters";
                 } else this.lname_error = "";
             },
             validatePassword: function() {
               var   password_msg = this.password;
                 if (password_msg == "") {
                     this.password_error = "Password is required";
                 } else if (password_msg.length < 8) {
                     this.password_error = "Please provide atleast 8 characters";
                 } else this.password_error = "";
             },
             validateCPassword: function() {
                 var cpassword_msg = this.c_password;
                 if (cpassword_msg == "") {
                     this.c_password_error = "Password confrmation is required";
                 } else if (cpassword_msg.length < 8) {
                     this.c_password_error = "Please provide atleast 8 characters";
                 } else if (cpassword_msg !== this.password) {
                     this.c_password_error = "The value dest not match the password";
                 } else this.c_password_error = "";
             },
             validateEmail: function() {
                var  email_msg = $.trim(this.email);
                 var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
                 if (email_msg == "") {
                     this.email_error = "Please provide an email address";
                 } else if (!re.test(email_msg)) {
                     this.email_error = "Invalid email format";
                 } else this.email_error = "";
             },
             validateRegistration: function() {
                 console.log(this.fname_error);
                 console.log(this.lname_error);
                 console.log(this.password_error);
                 console.log(this.c_password_error);
                 console.log(this.email_error);
                 console.log(this.tnc_error);
                 if (!this.agree) {
                     this.tnc_error = "Please accept Terms and Conditions";
                     return false;
                 } else this.tnc_error = "";
                 if (this.first_name == "" || this.last_name == "" || this.password == "" || this.c_password == "" || this.email == "" || this.agree == false) {
                    var  fname = $.trim(this.first_name);
                     if (fname == "" || fname == undefined) {
                         this.fname_error = "First name is required";
                     } else if (fname.length < 2) {
                         this.fname_error = "Please provide atleast 2 characters";
                     } else this.fname_error = "";
                  var    lname = $.trim(this.last_name);
                     if (lname == "" || lname == undefined) {
                         this.lname_error = "Last name is required";
                     } else if (lname.length < 2) {
                         this.lname_error = "Please provide atleast 2 characters";
                     } else this.lname_error = "";
                   var   password_msg = this.password;
                     if (password_msg == "") {
                         this.password_error = "Password is required";
                     } else if (password_msg.length < 8) {
                         this.password_error = "Please provide atleast 8 characters";
                     } else this.password_error = "";
                   var   cpassword_msg = this.c_password;
                     if (cpassword_msg == "") {
                         this.c_password_error = "Password confrmation is required";
                     } else if (cpassword_msg.length < 8) {
                         this.c_password_error = "Please provide atleast 8 characters";
                     } else if (cpassword_msg !== this.password) {
                         this.c_password_error = "The value dest not match the password";
                     } else this.c_password_error = "";
                    var  email_msg = $.trim(this.email);
                     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                     if (email_msg == "") {
                         this.email_error = "Please provide an email address";
                     } else if (!re.test(email_msg)) {
                         this.email_error = "Invalid email format";
                     } else this.email_error = "";
                     return false;
                 } else if (this.email_error || this.password_error || this.lname_error || this.fname_error || this.tnc_error || this.c_password_error) {
                     return false;
                 } else {
                     alert("registration successfull");
                     this.fname_error = "";
                     this.lname_error = "";
                     this.password_error = "";
                     this.c_password_error = "";
                     this.email_error = "";
                     this.tnc_error = false;
                 }
             },
         }
}
</script>