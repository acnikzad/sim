<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <div>
        <p>{{month}}</p>
        <div id="clock"></div>
      </div>
      <button v-on:click="startHere()"> START </button>

      <form>
        <input id="userIncome" type="text" placeholder="Enter Annual Income" v-model="income"/>
        <br>
        <input id="userIncome" type="text" placeholder="Enter Percentage Saved" v-model="save_rate"/>
        <br>
        <button type="button" v-on:click="returnIncome()">Submit</button>
      </form>
      <h1>The Month is <span id="month"></span></h1>
      <h1>The Year is <span id="year"></span></h1>
      <h1>You are <span id="age"></span> years old</h1>
      <p>Your income is ${{income}} per year</p>
      <h1>Your savings account is $<span id="savings"></span></h1>

  </div>
</template>

<script>

var moment = require('moment');
var income = "";
var monthly_income = (income/12)
var save_rate = "";
var save_amount = (monthly_income*save_rate);
var save_account = save_account + save_amount;
var save_rate = "";
// var save_account = 0;

var count = -1;
var rate = .4;
var product = 0;
var year = 1987;
var age = 18;
var x = 0;
var month = "";
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default {
  name: 'ExampleModal',
  data() {
    return {
 
      income:null,
      save_rate:null,
      monthly_income:null,
      save_amount:null,
      save_account:null,
        };
      },

  created: function() {

      var intId = setInterval(counter, 333);

      function counter() {
        save_account = save_account + save_amount;
        document.getElementById("month").innerHTML = month;
        document.getElementById("year").innerHTML = year;
        document.getElementById("age").innerHTML = age;
        document.getElementById("savings").innerHTML = save_account;
        console.log(++count);
        console.log("this is the monthly_income", monthly_income)
        console.log("this is the save_amount", save_amount)
        console.log(monthly_income);
        save_account = save_account + save_amount;
        month = (months[count])
        // save_account = save_account + save_amount
        // save_account = (save_account + (monthly_income*save_rate));
        if (count == 0){
          year = year + 1
          age = age + 1
        } else if (count == 11) {
          count = -1
        }
        console.log(save_account);
      };

      // function save_account() {
      //   parseInt(save_rate);
      //   save_account = save_account + (monthly_income*save_rate);
      //   console.log(save_account);
      // }
    },

    methods: {
      startHere() {
        console.log("x");
      },

      returnIncome() {
        // var income =document.getElementById("userIncome").innerHTML;
        console.warn("This is income:", this.income, this.save_rate)
        monthly_income = this.income/12
        save_amount = (monthly_income*this.save_rate)
        console.log(income, save_rate, monthly_income, save_amount)
      },
    },
  }
</script>

<!-- date management -->
<!-- moment.js -->
<!-- start with a counter associate to month -->
