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
      <h3>This years inflation rate: <span id="inflation"></span></h3>
      <br>
      <h1>You are <span id="age"></span> years old</h1>
      <h3>Your income is <span id="income"></span> per year</h3>
      <br>
      <h3>Checking Account: <span id="checking"></span></h3>
      <h3>Savings Account: <span id="savings"></span></h3>
      <h3><i>Monthly Savings Smount: <span id="save_amount"></span></i></h3>
      <h3>Stocks Account: <span id="stocks"></span></h3>
      <h3>Compound Interest Account: <span id="ci_princ"></span></h3>
      <br>
      <h3>Your cars value is: <span id="car_value"></span></h3>
      <h3>Remaining Principle is:<span id="car_principal"></span></h3>
      <h3>Your car payment is:<span id="payments"></span></h3>
      <h3>Remaining payments:<span id="car_terms"></span></h3>
      <br>
      <h3>Your house value is: <span id="home_value"></span></h3>
      <h3>Remaining Principle is:<span id="home_principal"></span></h3>
      <h3>Your mortgage payment is:<span id="mortgage"></span></h3>
      <h3>Remaining payments:<span id="home_terms"></span></h3>
      <br>
      <h1>Your Net Wealth is: <span id="net_worth"></span></h1>
      <button v-on:click="buyCar(), pauseClock()">Buy Car</button>
      <br>
      <button v-on:click="openCI(), pauseClock()">Compound Interest</button>
      <br>
      <button v-on:click="openRE(), pauseClock()">Buy Real Estate</button>
  </div>

<!-- The Start Modal -->
    <div class="modal fade" id="startModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" ro le="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Welcome</h5>
          </div>
          <form>
            <input id="userIncome" type="number" max="50" oninput="validity.valid||(value='');" placeholder="Percentage Saved" v-model="save_rate" required/>
            <br>
            <input id="userIncome" type="number" max="50" oninput="validity.valid||(value='');" placeholder="Percentage Invested in Stocks" v-model="stocks_rate" required/>
            <br>
            <input id="userIncome" type="number" min="0" oninput="validity.valid||(value='');" placeholder="Enter Monthly Bills" v-model="monthly_bills" required/>
            <br>
          <div class="modal-footer">
            <button type="button" class="" data-dismiss="modal" v-on:click="returnStart(), resumeClock(), startTimer()">Submit</button>
          </div>
          </form>
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
                <td><input type="number" min="0" oninput="validity.valid||(value='');" name="car_money_down" size="12" v-model="car_money_down"></td>
              </tr>
              <tr>
                <td>Amount of the loan:</td>
                <td><input type="number" min="0" oninput="validity.valid||(value='');" name="car_principal" size="12" v-model="car_principal"></td>
              </tr>
              <tr>
                <td>Annual percentage rate of interest:</td>
                <td><input type="number" min="0" oninput="validity.valid||(value='');" name="car_interest" size="12" v-model="car_interest"></td>
              </tr>
              <tr>
                <td>Repayment period in years:</td>
                <td><input type="number" min="0" oninput="validity.valid||(value='');" name="car_years" size="12" v-model="car_years"></td>
              </tr>
            </table>
          </form>
          <div class="modal-footer">
            <button type="button" class="" data-dismiss="modal" v-on:click="car_loan(), resumeClock(),startTimer()">Submit</button>
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
                <td><input type="number" min="0" oninput="validity.valid||(value='');" name="ci_princ" size="12" placeholder="1000" v-model="ci_princ"></td>
              </tr>
              <tr>
                <td>Monthly Deposits:</td>
                <td><input type="number" min="0" oninput="validity.valid||(value='');" name="ci_monthly" size="12" placeholder="250" v-model="ci_monthly"></td>
              </tr>
              <tr>
                <td>Interest Rate:</td>
                <td><input type="number" min="0" oninput="validity.valid||(value='');" name="ci_rate" size="12" placeholder="8" v-model="ci_rate"></td>
              </tr>
              <tr>
                <td>Years:</td>
                <td><input type="number" min="0" oninput="validity.valid||(value='');" name="ci_rate" size="12" placeholder="30" v-model="ci_years"></td>
              </tr>
            </table>
          </form>
          <div class="modal-footer">
            <button type="button" class="" data-dismiss="modal" v-on:click="ci_account(), resumeClock(), startTimer()">Compound Interest</button>
          </div>
        </div>
      </div>
    </div>

<!-- open RE modal-->
    <div class="modal fade" id="buyHouse" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Buy Real Estate</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form name="loandata">
            <table>
              <tr><td colspan="3"><b>Enter Mortgage Information:</b></td></tr>
              <tr>
                <td>Money Down:</td>
                <td><input type="number" min="0" oninput="validity.valid||(value='');" name="home_money_down" size="12" v-model="home_money_down"></td>
              </tr>
              <tr>
                <td>Amount of the loan:</td>
                <td><input type="number" min="0" oninput="validity.valid||(value='');" name="home_principal" size="12" v-model="home_principal"></td>
              </tr>
              <tr>
                <td>Annual percentage rate of interest:</td>
                <td><input type="number" min="0" oninput="validity.valid||(value='');" name="home_interest" size="12" v-model="home_interest"></td>
              </tr>
              <tr>
                <td>Repayment period in years:</td>
                <td><input type="number" min="0" oninput="validity.valid||(value='');" name="home_years" size="12" v-model="home_years"></td>
              </tr>
            </table>
          </form>
          <div class="modal-footer">
            <button type="button" class="" data-dismiss="modal" v-on:click="home_loan(), resumeClock(),startTimer()">Submit</button>
          </div>
        </div>
      </div>
    </div>

<!-- open end modal-->
    <div class="modal fade" id="endModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Congrats! You are retired!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h1>Your Net Wealth is: <span id="retired_net_worth"></span></h1>
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
  var car_pay_b4_i = "";
  var car_total_payments = "";
  var car_total_interest = "";
  var x = "";

  var home_value = "";
  var home_money_down = "";
  var home_principal = "";
  var home_interest = "";
  var home_years = "";
  var home_terms = "";
  var home_payments = "";
  var home_pay_b4_i = "";
  var home_total_payments = "";
  var home_total_interest = "";
  var home_x = "";

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

  var count = -1;
  var rate = .4;
  var product = 0;
  var year = 2006;
  var age = 17;
  var x = 0;
  var month = "";
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var state = 0;  // 0 = idle, 1 = running, 2 = paused, 3= resumed
  var speed = 150;

export default {
  name: 'ExampleModal',
  data() {
    return {
      timer: null,
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
      $('#startModal').modal({backdrop: 'static', keyboard: false}, 'show');
    },

    methods: {

      resumeClock() {
        state = 1
        console.log("THIS IS THE STATE",state)
      },

      pauseClock() {
        clearInterval(this.timer);
        state = 0
        console.log("THIS IS THE STATE",state)
      },

     startTimer() {
      console.log("THIS IS THE STARTING TIMER",state)
        clearInterval(this.timer);
        if (state == 1) {
          this.timer = setInterval(() => {
            counter()
          }, speed)
          //var intId = setInterval(counter, speed);
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
            document.getElementById("retired_net_worth").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(net_worth);

            document.getElementById("home_terms").innerHTML = home_terms;
            document.getElementById("home_value").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(home_value);
            document.getElementById("home_principal").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(home_principal);
            document.getElementById("mortgage").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(home_payments);

            document.getElementById("inflation").innerHTML = parseFloat(inflation*100).toFixed(2)+"%";
            console.log(++count);

            oneMonth()

            console.log("THIS IS THE COUNT BEFORE IF:", count);
            if (count == 0){
            // when January hits
              console.log("testing");
              oneYear();
            } else if (count == 11) {
            // resetting month count to month 1
              count = -1
            };

            console.log("this is the count", count)

            if (car_terms > 0) {
              car_terms = (car_terms - 1);
              car_principal = (car_principal - car_pay_b4_i);
            }
          };

          function oneYear() {
            console.log("this is one year");
            year = year + 1
            age = age + 1

            if (car_value > 3000) {
              car_value = (car_value * .91)
            }

            if (age == 18) {
              income = 9725
            } else if (age == 19) {
              income = 15062
            } else if (age == 20) {
              income = 18513
            } else if (age == 21) {
              income = 20712
            } else if (age == 22) {
              income = 24447
            } else if (age == 23) {
              income = 29814
            } else if (age == 24) {
              income = 33164
            } else if (age == 25) {
              income = 41461
            } else if (age == 26) {
              income = 43945
            } else if (age == 27) {
              income = 48376
            } else if (age == 28) {
              income = 47399
            } else if (age == 29) {
              income = 51638
            } else if (age == 30) {
              income = 52706
            } else if (age == 31) {
              income = 59068
            } else if (age == 32) {
              income = 58708
            } else if (age == 33) {
              income = 59082
            } else if (age == 34) {
              income = 60506
            } else if (age == 35) {
              income = 66320
            } else if (age == 36) {
              income = 68082
            } else if (age == 37) {
              income = 69128
            } else if (age == 38) {
              income = 66746
            } else if (age == 39) {
              income = 70235
            } else if (age == 40) {
              income = 72731
            } else if (age == 41) {
              income = 77143
            } else if (age == 42) {
              income = 71286
            } else if (age == 43) {
              income = 83279
            } else if (age == 44) {
              income = 74478
            } else if (age == 45) {
              income = 79101
            } else if (age == 46) {
              income = 75233
            } else if (age == 47) {
              income = 78354
            } else if (age == 48) {
              income = 68728
            } else if (age == 49) {
              income = 75458
            } else if (age == 50) {
              income = 81711
            } else if (age == 51) {
              income = 75777
            } else if (age == 52) {
              income = 80279
            } else if (age == 53) {
              income = 80802
            } else if (age == 54) {
              income = 77406
            } else if (age == 55) {
              income = 77308
            } else if (age == 56) {
              income = 76857
            } else if (age == 57) {
              income = 78139
            } else if (age == 58) {
              income = 73165
            } else if (age == 59) {
              income = 78624
            } else if (age == 60) {
              income = 73392
            } else if (age == 61) {
              income = 77592
            } else if (age == 62) {
              income = 77624
            } else if (age == 63) {
              income = 77189
            } else if (age == 64) {
              income = 73604
            } else if (age == 65) {
              income = 74420
              endModal();
            } 

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

          function endModal() {
              $('#endModal').modal('show');
              pauseClock();
            };
          }
        },

      speedUp() {
        speed += 100;
        console.log("THE SPEED IS: ", speed);
      },

      speedDown() {
        speed -= 100;
        console.log("THE SPEED IS: ", speed);
      },

      buyCar(){
        $('#buyCar').modal({backdrop: 'static', keyboard: false}, 'show');
      },

      openCI(){
        $('#openCI').modal({backdrop: 'static', keyboard: false}, 'show');
      },

      openRE(){
        $('#buyHouse').modal({backdrop: 'static', keyboard: false}, 'show');
      },

      car_loan() {
        // Get the user's input from the form. Assume it is all valid.
        // Convert interest from a percentage to a decimal, and convert from
        // an annual rate to a monthly rate. Convert payment period in years
        // to the number of monthly payments.
        car_money_down = parseInt(this.car_money_down);
        car_principal = parseInt(this.car_principal);
        car_interest = parseInt(this.car_interest) / 100 / 12;
        car_years = parseInt(this.car_years);
        car_terms = (car_years * 12);
        car_pay_b4_i = (car_principal/car_terms);

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

        check_account = check_account - car_money_down
        // Otherwise, the user's input was probably invalid, so don't
        // display anything.
        // else {
        //     document.loandata.payment.value = "";
        //     document.loandata.total.value = "";
        //     document.loandata.totalinterest.value = "";
        // }
      },

      returnStart() {
        console.log("This is income:", this.save_rate, this.monthly_bills)
        console.log("** this is income:", this.income, "**"),
        income = this.income;
        if (isNaN(save_rate)) {
          alert("Must input numbers");
          return false;
        }

        if (isNaN(stocks_rate)) {
          alert("Must input numbers");
          return false;
        }

        if (isNaN(monthly_bills)) {
          alert("Must input numbers");
          return false;
        }


        monthly_bills = this.monthly_bills;
        save_rate = this.save_rate || 0;
        stocks_rate = this.stocks_rate || 0;
        stock_market_rate = Math.floor(Math.random() * 11) + 1;
        save_rate = (this.save_rate/100)
        stocks_rate = (this.stocks_rate/100)
      },

      ci_account() {
            console.log("This is CI:", this.ci_princ, this.ci_rate, this.ci_years, this.ci_monthly);

            ci_princ = parseInt(this.ci_princ); // start deposit
            ci_rate = parseInt(this.ci_rate) / 100; // monthly deposit (need plus it every year)
            ci_years = parseInt(this.ci_years); // term years
            ci_monthly = parseInt(this.ci_monthly); // monthly deposit (need plus it every year)
            ci_months = (ci_years * 12); //10 years of monthly contributions
            check_account = check_account - ci_princ
            i = 1
      },

      home_loan() {
        home_money_down = parseInt(this.home_money_down);
        home_principal = parseInt(this.home_principal);
        home_interest = parseInt(this.home_interest) / 100 / 12;
        home_years = parseInt(this.home_years);
        home_terms = (home_years * 12);
        home_pay_b4_i = (home_principal/home_terms);

        console.log(home_money_down);
        console.log(home_principal);
        console.log(home_interest);
        console.log(home_years);
        console.log(home_terms);

        home_x = Math.pow(1 + home_interest, home_terms);
        home_payments = (home_principal*home_x*home_interest)/(home_x-1);

        if (!isNaN(home_payments) && 
            (home_payments != Number.POSITIVE_INFINITY) &&
            (home_payments != Number.NEGATIVE_INFINITY)) {
            console.log("this is car home_principal", home_principal);
            console.log("this is car home_interest", home_interest);
            console.log("this is car home_payments", home_payments);
            home_value = (home_payments * home_terms);
            home_total_interest = ((home_payments * home_terms) - home_principal);
            home_payments = Math.round(home_payments*100)/100;
            console.log("this is car home_total_interest", home_total_interest);
            home_value = (home_money_down + home_principal);
            console.log("this is car home_value", home_value);
        }

        check_account = check_account - home_money_down
 
      },
    },
  }
</script>

<!-- date management -->
<!-- moment.js -->
<!-- start with a counter associate to month -->
