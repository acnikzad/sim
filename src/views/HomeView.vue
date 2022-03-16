<template>
  <body>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
    <button v-on:click="speedUp()">Speed Up</button>
    <button v-on:click="speedDown()">Slow Down</button>
      <h1>The Month is <span id="month"></span></h1>
      <h1>The Year is <span id="year"></span></h1>
      <h1>You are <span id="age"></span> years old</h1>
      <h2>Your income is <span id="income"></span> per year</h2>
      <h2>Checking Account: <span id="checking"></span></h2>
      <h2>Savings Account: <span id="savings"></span></h2>
      <h2>Stocks Account: <span id="stocks"></span></h2>
      <h2>Compound Interest Account: <span id="ci_princ"></span></h2>
      <h2>Monthly Savings Smount: <span id="save_amount"></span></h2>
      <h2>This years inflation rate: <span id="inflation"></span></h2>
      <h1>Your Net Wealth is: <span id="net_worth"></span></h1>
      <br>
      <h2>Your cars value is: <span id="car_value"></span></h2>
      <h2>Remaining Principle is:<span id="car_principal"></span></h2>
      <h2>Your car payment is:<span id="payments"></span></h2>
      <h2>Remaining payments:<span id="car_terms"></span></h2>
      <button v-on:click="buyCar(), pauseClock()">Buy Car</button>
      <br>
      <button v-on:click="openCI(), pauseClock()">Compound Interest</button>
  </div>

<!-- The Start Modal -->
    <div class="modal fade" id="startModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" ro le="document">
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
            <button type="button" class="" data-dismiss="modal" v-on:click="returnStart(), resumeClock(), startTimer()">Submit</button>
          </div>
        </div>
      </div>
    </div>

<!-- The Car Modal -->
    <div class="modal fade" id="buyCar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Buy a Car</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form name="loandata">
            <table>
              <tr><td colspan="3"><b>Enter Loan Information:</b></td></tr>
              <tr>
                <td>Money Down:</td>
                <td><input type="text" name="car_money_down" size="12" v-model="car_money_down"></td>
              </tr>
              <tr>
                <td>Amount of the loan:</td>
                <td><input type="text" name="car_principal" size="12" v-model="car_principal"></td>
              </tr>
              <tr>
                <td>Annual percentage rate of interest:</td>
                <td><input type="text" name="car_interest" size="12" v-model="car_interest"></td>
              </tr>
              <tr>
                <td>Repayment period in years:</td>
                <td><input type="text" name="car_years" size="12" v-model="car_years"></td>
              </tr>
              <tr><td colspan="3">
                <input type="button" value="Compute" v-on:click="calculate()">
              </td></tr>
              <tr><td colspan="3">
                <b>Payment Information:</b>
              </td></tr>
              <tr>
                <td>Your monthly payment will be:</td>
                <td><input type="text" name="car_payments" size="12"></td>
              </tr>
              <tr>
                <td>Your total payment will be:</td>
                <td><input type="text" name="car_total_payments" size="12"></td>
              </tr>
              <tr>
                <td>Your total interest payments will be:</td>
                <td><input type="text" name="car_total_interest" size="12"></td>
              </tr>
            </table>
          </form>

          <div class="modal-footer">
            <button type="button" class="" data-dismiss="modal" v-on:click="calculate(), resumeClock(),startTimer()">Submit</button>
          </div>
        </div>
      </div>
    </div>

<!-- open ci modal-->
    <div class="modal fade" id="openCI" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Open an account with compound interest</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form name="loandata">
            <table>
              <tr><td colspan="3"><b>Enter Account Information:</b></td></tr>
              <tr>
                <td>Initial Deposit:</td>
                <td><input type="text" name="ci_princ" size="12" placeholder="1000" v-model="ci_princ"></td>
              </tr>
              <tr>
                <td>Monthly Deposits:</td>
                <td><input type="text" name="ci_monthly" size="12" placeholder="250" v-model="ci_monthly"></td>
              </tr>
              <tr>
                <td>Interest Rate:</td>
                <td><input type="text" name="ci_rate" size="12" placeholder="8" v-model="ci_rate"></td>
              </tr>
              <tr>
                <td>Years:</td>
                <td><input type="text" name="ci_rate" size="12" placeholder="30" v-model="ci_years"></td>
              </tr>
            </table>
          </form>
          <div class="modal-footer">
            <button type="button" class="" data-dismiss="modal" v-on:click="ci_account(), resumeClock()">Compound Interest</button>
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
  var col_bills_rate = 0;
  var col_bill = 0;
  var monthly_bills = 0;
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

  var car_value = "";
  var car_money_down = "";
  var car_principal = "";
  var car_interest = "";
  var car_years = "";
  var car_terms = "";
  var car_payments = "";
  var car_total_payments = "";
  var car_total_interest = "";
  var x = "";

  var check_account = 1000;
  var check_amount = 0;

  var i = "";
  var ci_months = "";
  var ci_princ = "";
  var ci_monthly = "";
  var ci_rate = "";
  var ci_years = "";


  var income_tax = 0.08;
  var inflation = 0;
  var net_worth = "";

  var speed = 300;
  var count = -1;
  var rate = .4;
  var product = 0;
  var year = 2006;
  var age = 17;
  var x = 0;
  var month = "";
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var state = 0  // 0 = idle, 1 = running, 2 = paused, 3= resumed


export default {
  name: 'ExampleModal',
  data() {
    return {
 
      income: "",
      income_tax:null,
      income_tax: .08,
      check_account: 500,
      monthly_bills:"",
      speed:null,
      car_payment: 0,
      car_value: 0,
      car_principal: 0,
        };
      },

  created: function() {

    },

    mounted() {
      $('#startModal').modal('show');
    },

    methods: {

      resumeClock() {
        state = 1
        console.log("THIS IS THE STATE",state)
        // return startTimer()
      },

      pauseClock() {
        state = 0
        console.log("THIS IS THE STATE",state)
        // return startTimer()
      },

       startTimer() {
        console.log("THIS IS THE STARTING TIMER",state)
          clearInterval(intId);
          if (state == 1) {
            var intId = setInterval(counter, speed);
            function counter() {
              document.getElementById("month").innerHTML = month;
              document.getElementById("year").innerHTML = year;
              document.getElementById("age").innerHTML = age;
              document.getElementById("car_terms").innerHTML = car_terms;
              document.getElementById("income").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(income);
              document.getElementById("save_amount").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(save_amount);
              document.getElementById("savings").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(save_account);
              document.getElementById("checking").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(check_account);
              document.getElementById("stocks").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(stocks_account);
              document.getElementById("car_value").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(car_value);
              document.getElementById("car_principal").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(car_principal);
              document.getElementById("payments").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(car_payments);
              document.getElementById("ci_princ").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ci_princ);
              document.getElementById("net_worth").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(net_worth);
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

              if (car_terms > 0) {
                car_terms = (car_terms - 1);
                car_principal = (car_principal - car_payments);
              }
            };

            function oneYear() {
              console.log("this is one year");
              year = year + 1
              age = age + 1
              car_value = (car_value * .91)

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

              if (payments > 0) {
                payments = payments - 1
                console.log(payments)
              }

              if (count > 6) {
                col_bills_rate = Math.floor(Math.random() * 15) + 1;
                col_bills_rate = col_bills_rate/10
              } else {
                col_bills_rate = Math.floor(Math.random() * 10) + 1;
                col_bills_rate = col_bills_rate/10
              }

              monthly_income = monthly_income - (monthly_income*income_tax);
              monthly_income = monthly_income - monthly_bills - ci_monthly - car_payments;
              col_bill = monthly_income*col_bills_rate;
              monthly_income = monthly_income - col_bill;

              save_amount = monthly_income*save_rate
              stocks_amount = monthly_income*stocks_rate
              monthly_income = monthly_income - (save_amount + stocks_amount)
              // console.log("++++++++this is net income after save", monthly_income);

              check_account = check_account + monthly_income
              save_account = save_account + save_amount
              stocks_account = stocks_account + stocks_amount

              month = (months[count])

              net_worth = stocks_account + check_account + ci_princ


              console.log("this is the princ:", ci_princ)
              console.log("this is the months:", ci_months)
              console.log("this is the i:", i)
              console.log("this is the monthly:", ci_monthly)
              if (i <= ci_months) {
                ci_princ += ci_monthly;
                ci_princ += (ci_princ * (ci_rate / 12));
                i += 1;
                console.log(ci_princ);
                console.log(i);
                console.log(ci_months);
              }
              // console.log(ci_princ.toFixed(2)); //69636.12
             };
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

      buyCar(){
        $('#buyCar').modal('show');
      },

      calculate() {
        // Get the user's input from the form. Assume it is all valid.
        // Convert interest from a percentage to a decimal, and convert from
        // an annual rate to a monthly rate. Convert payment period in years
        // to the number of monthly payments.
        car_money_down = parseInt(this.car_money_down);
        car_principal = parseInt(this.car_principal);
        car_interest = parseInt(this.car_interest) / 100 / 12;
        car_years = parseInt(this.car_years);
        car_terms = (car_years * 12);

        console.log(car_money_down);
        console.log(car_principal);
        console.log(car_interest);
        console.log(car_years);
        console.log(car_terms);

        // Now compute the monthly payment figure, using esoteric math.
        x = Math.pow(1 + car_interest, car_terms);
        car_payments = (car_principal*x*car_interest)/(x-1);
        // Check that the result is a finite number. If so, display the results.
        if (!isNaN(car_payments) && 
            (car_payments != Number.POSITIVE_INFINITY) &&
            (car_payments != Number.NEGATIVE_INFINITY)) {
            console.log("this is car car_principal", car_principal);
            console.log("this is car car_interest", car_interest);
            console.log("this is car car_payments", car_payments);
            car_value = (car_payments * car_terms);
            car_total_interest = ((car_payments * car_terms) - car_principal);
            car_payments = Math.round(car_payments*100)/100;
            console.log("this is car car_total_interest", car_total_interest);
            car_value = (car_money_down + car_principal);
            console.log("this is car car_value", car_value);
        }
        // Otherwise, the user's input was probably invalid, so don't
        // display anything.
        // else {
        //     document.loandata.payment.value = "";
        //     document.loandata.total.value = "";
        //     document.loandata.totalinterest.value = "";
        // }
      },

      openCI(){
        $('#openCI').modal('show');
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

      ci_account() {
            console.log("This is CI:", this.ci_princ, this.ci_rate, this.ci_years, this.ci_monthly);

            ci_princ = parseInt(this.ci_princ); // start deposit
            ci_rate = parseInt(this.ci_rate) / 100; // monthly deposit (need plus it every year)
            ci_years = parseInt(this.ci_years); // term years
            ci_monthly = parseInt(this.ci_monthly); // monthly deposit (need plus it every year)
            ci_months = (ci_years * 12); //10 years of monthly contributions
            i = 1
      },
    },
  }
</script>

<!-- date management -->
<!-- moment.js -->
<!-- start with a counter associate to month -->
