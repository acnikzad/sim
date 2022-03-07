<template>
  <body>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
      <h1>The Month is <span id="month"></span></h1>
      <h1>The Year is <span id="year"></span></h1>
      <h1>You are <span id="age"></span> years old</h1>
      <h2>Your income is {{income}} per year</h2>
      <h2>You are saving {{save_rate}} of your income or {{save_amount}} per month</h2>
      <h2>Checking Account: <span id="checking"></span></h2>
      <h2>Savings Account: <span id="savings"></span></h2>
      <h2>Stocks Account: <span id="stocks"></span></h2>
  </div>
<!-- The Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Welcome</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form>
            <input id="userIncome" type="text" placeholder="Enter Annual Income" v-model="income"/>
            <br>
            <input id="userIncome" type="text" placeholder="Percentage Saved" v-model="save_rate"/>
            <br>
            <input id="userIncome" type="text" placeholder="Percentage Invested in Stocks" v-model="stocks_rate"/>
            <br>
            <input id="userIncome" type="text" placeholder="Enter Monthly Bills" v-model="monthly_bills"/>
            <br>
          </form>

          <div class="modal-footer">
            <button type="button" class="" data-dismiss="modal" v-on:click="returnStart(), startTimer()">Submit</button>
          </div>
        </div>
      </div>
    </div>


</body>
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
var monthly_income = (income/12);
var col_bills = 0;
var gas_cost = 0;
var health_insurance = 0;


var save_rate = "";
var save_amount = (monthly_income*save_rate);
var save_account = 0;
var save_rate = "";

var stocks_rate = "";
var stocks_amount = (monthly_income*stocks_rate);
var stocks_account = 0;
var stocks_rate = "";
var stock_market_rate = .1

var check_account = 1000;
var check_amount = 0;

var income_tax = 0.08;
var inflation = 0;

var speed = 350;
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
 
      income: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(income),
      income_tax:null,
      income_tax: .08,
      check_account: 500,
      speed: 150,
        };
      },

  created: function() {

    },
    mounted() {
      $('#exampleModalCenter').modal('show');
    },

    methods: {
       startTimer() {
        var intId = setInterval(counter, speed);

        function counter() {
          document.getElementById("month").innerHTML = month;
          document.getElementById("year").innerHTML = year;
          document.getElementById("age").innerHTML = age;
          document.getElementById("savings").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(save_account);
          document.getElementById("checking").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(check_account);
          document.getElementById("stocks").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(stocks_account);
          console.log(++count);

          oneMonth()

          if (count == 0){
          // when January hits
            console.log("testing");
            oneYear();
          } else if (count == 11) {
          // resetting month count to month 1
            count = -1
          } else if (age == 65) {
          // retirement 
            clearInterval(intId)
          };
        };

      function oneYear() {
        console.log("this is one year");
        year = year + 1
        age = age + 1

        stock_market_rate = Math.floor(Math.random() * 15) + 1;
        stock_market_rate = (stock_market_rate/100)
        console.log("/////////////stock_market_rate is:", stock_market_rate)

        inflation = Math.floor(Math.random() * 4) + 1;
        inflation = (inflation/100)
        console.log("/////////////inflation is:", inflation)

        stocks_account = stocks_account + (stocks_account*stock_market_rate)
      };

      function oneMonth() {
        console.log("this is one month");
        month = (months[count])

        save_account = save_account + save_amount;
        stocks_account = stocks_account + stocks_amount;
        check_amount = monthly_income - save_amount - stocks_amount;

// cost of living
        console.log("++++++++this is before col", check_amount);
        col_bills = Math.floor(Math.random() * 14) + 1;
        col_bills = col_bills/10
        console.log("++++++++this is col", col_bills);
        check_amount = check_amount - ((check_amount*col_bills))
        console.log("++++++++this is after col", check_amount);

        check_account = check_account + check_amount
      }
      
    },

      speedUp() {
        speed = (speed - 100);
        console.log("THE SPEED IS: ", speed);
      },

      speedDown() {
        speed = (speed + 100);
        console.log("THE SPEED IS: ", speed);
      },

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

        stocks_rate = Math.floor(Math.random() * 11) + 1;
        console.log(stocks_rate);
        save_amount = (monthly_income*this.save_rate);
        stocks_amount = (monthly_income*this.stocks_rate);
      },

      startModal() {
      console.log('start modal...');
      var params = {
        // dog_id: this.user["dogs"][0]["id"],
        // user_id: this.user["id"],
        // latitude: this.latitude,
        // longitude: this.longitude,
        // dog_name: this.user["dogs"][0]["name"],
        // color: this.user["dogs"][0]["color"],
        // breed: this.user["dogs"][0]["breed"],
        // address: this.address,
        // owner_name: this.user["first_name"],
        // contact_number: this.user["phone_number"],
        };
        $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
        })
      },
    },
  }
</script>

<style>


</style>

<!-- date management -->
<!-- moment.js -->
<!-- start with a counter associate to month -->
