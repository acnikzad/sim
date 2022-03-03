<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <form>
        <input id="userIncome" type="text" placeholder="Enter Annual Income" v-model="income"/>
        <br>
        <input id="userIncome" type="text" placeholder="Enter Percentage Saved" v-model="save_rate"/>
        <br>
        <input id="userIncome" type="text" placeholder="Enter Monthly Bills:" v-model="monthly_bills"/>
        <br>
        <button type="button" v-on:click="returnStart()">Submit</button>
      </form>
      <h1>The Month is <span id="month"></span></h1>
      <h1>The Year is <span id="year"></span></h1>
      <h1>You are <span id="age"></span> years old</h1>
      <h2>Your income is ${{income}} per year</h2>
      <h2>You are saving {{save_rate}} of your income or {{save_amount}} per month</h2>
      <h2>Your savings account is $<span id="savings"></span></h2>

  </div>
</template>

<script>

var moment = require('moment');
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

var income = 0;
var monthly_income = (income/12)

var save_rate = "";
var save_amount = (monthly_income*save_rate);
var save_account = 0;
var save_rate = "";

var income_tax = 0.08;

var count = -1;
var rate = .4;
var product = 0;
var year = 2006;
var age = 18;
var x = 0;
var month = "";
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default {
  name: 'ExampleModal',
  data() {
    return {
 
      income:null,
      income_tax:null,
      income_tax: .08,
      // save_rate:null,
      // monthly_income:null,
      // save_amount:null,
      // save_account:null,
        };
      },

  created: function() {

      var intId = setInterval(counter, 750);

      function counter() {
        // console.log("this is the monthly_income", monthly_income);
        // console.log("this is the save_amount", save_amount);
        // console.log("this is the income", income);
        document.getElementById("month").innerHTML = month;
        document.getElementById("year").innerHTML = year;
        document.getElementById("age").innerHTML = age;
        document.getElementById("savings").innerHTML = save_account;
        console.log(++count);
        // console.log("*****", save_account, "*****");
        save_account = save_account + save_amount;
        month = (months[count])
        // save_account = save_account + save_amount
        // save_account = (save_account + (monthly_income*save_rate));
        if (count == 0){
          year = year + 1
          age = age + 1
        } else if (count == 11) {
          count = -1
        } else if (age == 65) {
          clearInterval(intId)
        };
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

      // oneYear() {
      //   console.log("x");
      // },

      returnStart() {
        console.warn("This is income:", this.income, this.save_rate, this.monthly_bills)
        console.log("** this is income:", this.income, "**"),
        monthly_income = this.income/12;
        console.log("** this is monthly income pretax:", monthly_income, "**"),
        monthly_income = monthly_income - (monthly_income*income_tax);
        console.log("**this is income after tax:", monthly_income, "**"),
        monthly_income = monthly_income - this.monthly_bills,
        console.log("**this is income after bills:", monthly_income, "**"),
        // if (this.income < 22000) {
        //   income_tax = .02
        // } else if (this.income > 22001 && this.income < 48000) {
        //   income_tax = .06
        // } else if (this.income > 48001 && this.income < 61000) {
        //   income_tax = .08
        // } else if (this.income > 61001 && this.income < 312000) {
        //   income_tax = .093
        // } else {
        //   income_tax = .113
        // }

        save_amount = (monthly_income*this.save_rate),
        save_account = save_account + save_amount
        // formatter.format(monthly_income);
        console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(monthly_income));
        console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(save_account));
        console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(save_amount));
      },

      returnBills() {
        console.log("This are bills:", this.bills)
      }
    },
  }
</script>

<!-- date management -->
<!-- moment.js -->
<!-- start with a counter associate to month -->
