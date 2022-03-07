<template>
  <body>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
    <!-- <button v-on:click="speedUp()">Speed Up</button> -->
    <!-- <button v-on:click="speedDown()">Slow Down</button> -->
      <h1>The Month is <span id="month"></span></h1>
      <h1>The Year is <span id="year"></span></h1>
      <h1>You are <span id="age"></span> years old</h1>
      <h2>Your income is <span id="income"></span> per year</h2>
      <h2>Checking Account: <span id="checking"></span></h2>
      <h2>Savings Account: <span id="savings"></span></h2>
      <h2>Stocks Account: <span id="stocks"></span></h2>
      <h2>Monthly Savings Smount: <span id="save_amount"></span></h2>
      <h2>This years inflation rate: <span id="inflation"></span></h2>
  </div>

  <form name="loandata">
    <table>
      <tr><td colspan="3"><b>Enter Loan Information:</b></td></tr>
      <tr>
        <td>1)</td>
        <td>Amount of the loan (any currency):</td>
        <td><input type="text" name="principal" size="12" 
                   v-on:change="calculate();"></td>
      </tr>
      <tr>
        <td>2)</td>
        <td>Annual percentage rate of interest:</td>
        <td><input type="text" name="interest" size="12" 
                   v-on:change="calculate();"></td>
      </tr>
      <tr>
        <td>3)</td>
        <td>Repayment period in years:</td>
        <td><input type="text" name="years" size="12" 
                   v-on:change="calculate();"></td>
      </tr>
      <tr><td colspan="3">
        <input type="button" value="Compute" v-on:click="calculate()">
      </td></tr>
      <tr><td colspan="3">
        <b>Payment Information:</b>
      </td></tr>
      <tr>
        <td>4)</td>
        <td>Your monthly payment will be:</td>
        <td><input type="text" name="payment" size="12"></td>
      </tr>
      <tr>
        <td>5)</td>
        <td>Your total payment will be:</td>
        <td><input type="text" name="total" size="12"></td>
      </tr>
      <tr>
        <td>6)</td>
        <td>Your total interest payments will be:</td>
        <td><input type="text" name="totalinterest" size="12"></td>
      </tr>
    </table>
  </form>


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
            <p><i>*Average Income for an 18 year old is $10,569*</i></p>
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

// annual income
var income = 0; 
// monthly_income
var monthly_income = (income/12);
// cost of living
var col_bills_rate = 0;
var col_bill = 0;
var monthly_bills = 0;
// var cost_gas = 0;
// var cost_food = 0;
// var cost_car_insurance = 0;
// var cost_health_insurance = 0;
// var cost_subscriptions = 0;
var ca

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
 
      income: "",
      income_tax:null,
      income_tax: .08,
      check_account: 500,
      speed: 150,
      monthly_bills:"",
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
          document.getElementById("income").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(income);
          document.getElementById("save_amount").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(save_amount);
          document.getElementById("savings").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(save_account);
          document.getElementById("checking").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(check_account);
          document.getElementById("stocks").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(stocks_account);
          document.getElementById("inflation").innerHTML = parseFloat(inflation*100).toFixed(2)+"%";
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

          stock_market_rate = Math.floor(Math.random() * 12) + 1;
          stock_market_rate = (stock_market_rate/100)
          console.log("/////////////stock_market_rate is:", stock_market_rate)

          inflation = Math.floor(Math.random() * 4) + 1;
          inflation = (inflation/100)
          console.log("/////////////inflation is:", inflation)

          stocks_account = stocks_account + (stocks_account*stock_market_rate)
        };

        function oneMonth() {
          console.log("this is one month");
          console.log(income);
          monthly_income = income/12
          console.log("this is monthly income", monthly_income);

          if (count > 6) {
            col_bills_rate = Math.floor(Math.random() * 15) + 1;
            col_bills_rate = col_bills_rate/10
          } else {
            col_bills_rate = Math.floor(Math.random() * 10) + 1;
            col_bills_rate = col_bills_rate/10
          }

          console.log("++++++++this is col", col_bills_rate);
          console.log("++++++++this is the tax rate", income_tax);

          console.log("++++++++this is income pretax", monthly_income);
          monthly_income = monthly_income - (monthly_income*income_tax);
          console.log("++++++++this is income post tax", monthly_income);
          monthly_income = monthly_income - monthly_bills;
          console.log("++++++++this is income after bills", monthly_income);
          col_bill = monthly_income*col_bills_rate;
          console.log("++++++++this is col bill", col_bill);
          monthly_income = monthly_income - col_bill;
          console.log("++++++++this is income after col", monthly_income);

          save_amount = monthly_income*save_rate
          stocks_amount = monthly_income*stocks_rate
          monthly_income = monthly_income - (save_amount + stocks_amount)
          console.log("++++++++this is net income after save", monthly_income);

          check_account = check_account + monthly_income
          save_account = save_account + save_amount
          stocks_account = stocks_account + stocks_amount

          month = (months[count])
         };

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
        console.log("This is income:", this.income, this.save_rate, this.monthly_bills)
        console.log("** this is income:", this.income, "**"),
        income = this.income;
        monthly_bills = this.monthly_bills;
        save_rate = this.save_rate;
        stocks_rate = this.stocks_rate;
        stock_market_rate = Math.floor(Math.random() * 11) + 1;
        save_rate = (this.save_rate/100)
        stocks_rate = (this.stocks_rate/100)

        if (income < 22000) {
            income_tax = .02
          } else if (income > 22001 && income < 48000) {
            income_tax = .06
          } else if (income > 48001 && income < 61000) {
            income_tax = .08
          } else if (income > 61001 && income < 312000) {
            income_tax = .093
          } else {
            income_tax = .113
          }
      },

    calculate() {
      // Get the user's input from the form. Assume it is all valid.
      // Convert interest from a percentage to a decimal, and convert from
      // an annual rate to a monthly rate. Convert payment period in years
      // to the number of monthly payments.
      var principal = document.loandata.principal.value;
      var interest = document.loandata.interest.value / 100 / 12;
      var payments = document.loandata.years.value * 12;

      // Now compute the monthly payment figure, using esoteric math.
      var x = Math.pow(1 + interest, payments);
      var monthly = (principal*x*interest)/(x-1);

      // Check that the result is a finite number. If so, display the results.
      if (!isNaN(monthly) && 
          (monthly != Number.POSITIVE_INFINITY) &&
          (monthly != Number.NEGATIVE_INFINITY)) {

          console.log(principal);
          console.log(interest);
          console.log(payments);
          console.log(monthly);

          document.loandata.payment.value = (monthly);
          document.loandata.total.value = (monthly * payments);
          document.loandata.totalinterest.value = ((monthly * payments) - principal);

              monthly = Math.round(monthly*100)/100;
              console.log(monthly);
      }
      // Otherwise, the user's input was probably invalid, so don't
      // display anything.
      else {
          document.loandata.payment.value = "";
          document.loandata.total.value = "";
          document.loandata.totalinterest.value = "";
      }
    },

    },
  }
</script>

<style>




</style>

<!-- date management -->
<!-- moment.js -->
<!-- start with a counter associate to month -->
