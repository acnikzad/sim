<template>
  <body>
  <div class="home">
    </div>
    <div class="main-panel">
      <div class="content">
        <div class="row">
          <div class="col-12">
            <div class="card card-chart">
              <div class="card-header">
                <div class="row">
                  <div class="col-sm-6 text-left">
                    <h5 class="card-category">Net Wealth</h5>
                    <h2 class="card-title">Performance</h2>
                  </div>
                  <!-- <div class="col-sm-6">
                    <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                      <label class="btn btn-sm btn-primary btn-simple active" id="0">
                        <input type="radio" name="options" checked>
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Net Wealth</span>
                        <span class="d-block d-sm-none">
                          <i class="tim-icons icon-single-02"></i>
                        </span>
                      </label>
                    </div>
                  </div> -->
                </div>
              </div>
              <div class="card-body">
                <div class="chart-area">
                  <canvas id="chartBig1"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="info-icon text-center icon-success">
                      <i class="tim-icons icon-calendar-60"></i>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Net Worth</p>
                      <h3 class="card-title" align="center"><span id="net_worth"></span></h3>
                    </div>
                  </div>s
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="info-icon text-center icon-success">
                      <i class="tim-icons icon-calendar-60"></i>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Date</p>
                      <h3 class="card-title"><span id="month"></span>, <span id="year"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Age</p>
                      <h3 class="card-title"><span id="age"></span></h3>
                    </div>
                  </div>s
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="info-icon text-center icon-success">
                      <i class="tim-icons icon-single-02"></i>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">National Average Income per Age</p>
                      <h3 class="card-title"><span id="income"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Income Tax</p>
                      <h3 class="card-title"><span id="income_tax"></span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <button class="btn btn-primary btn-sm" data-toggle="modal" v-on:click="openCI(), pauseClock()">Compound Interest</button>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Account Balance</p>
                      <h3 class="card-title"><span id="ci_princ"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Total Contributions</p>
                      <h3 class="card-title"><span id="ci_total_cont"></span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="info-icon text-center icon-warning">
                      <i class="tim-icons icon-money-coins"></i>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Checking Account</p>
                      <h3 class="card-title"><span id="checking"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Monthly Income After Expenses</p>
                      <h3 class="card-title"><span id="monthly_income"></span></h3>
                    </div>
                  </div>s
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="info-icon text-center icon-success">
                      <i class="tim-icons icon-single-02"></i>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Savings Account</p>
                      <h3 class="card-title"><span id="savings"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Monthly Savings Amount</p>
                      <h3 class="card-title"><span id="save_amount"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Total Contributions</p>
                      <h3 class="card-title"><span id="save_total_cont"></span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div class="col-lg-4 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="info-icon text-center icon-success">
                      <i class="tim-icons icon-single-02"></i>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">National Average Income per Age</p>
                      <h3 class="card-title"><span id="income"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Monthly Income</p>
                      <h3 class="card-title"><span id="monthly_income"></span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <button class="btn btn-primary btn-sm" data-toggle="modal" v-on:click="openCrypto(), pauseClock()">Buy Crypto</button>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Sim Coin Bag</p>
                      <h3 class="card-title"><span id="sim_coin_bag"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Sim Coin Price</p>
                      <h3 class="card-title"><span id="sim_coin"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Sim Coin Volatility</p>
                      <h3 class="card-title"><span id="crypto_rate"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Crypto Value</p>
                      <h3 class="card-title"><span id="crypto_value"></span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div class="col-lg-4 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <button class="btn btn-primary btn-sm" data-toggle="modal" v-on:click="openStocks(), pauseClock()">Buy Stocks</button>
                    </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Shares of Stock Owned</p>
                      <h3 class="card-title"><span id="stocks_holding"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Stocks Portfolio</p>
                      <h3 class="card-title"><span id="stocks"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">APY</p>
                      <h3 class="card-title"><span id="stock_market_rate"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Sim Stock Price</p>
                      <h3 class="card-title"><span id="sim_stock"></span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <button class="btn btn-primary btn-sm" data-toggle="modal" v-on:click="buyCar(), pauseClock()">Take Car Loan</button>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Car Value</p>
                      <h3 class="card-title"><span id="car_value"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Car Payment</p>
                      <h3 class="card-title"><span id="car_payments"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Loan Principal</p>
                      <h3 class="card-title"><span id="car_principal"></span></h3>
                    </div>
                    <div class="numbers">
                      <p class="card-category">Payments Left</p>
                      <h3 class="card-title"><span id="car_terms"></span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <!--     home_value: parseInt(home_value),
          home_money_down: parseInt(home_money_down),
          home_principal: parseInt(home_principal),
          home_interest: parseInt(home_interest),
          home_years: parseInt(home_years),
          home_equity: parseInt(home_equity),
          home_terms: parseInt(home_terms),
          home_mortgage: parseInt(home_mortgage), -->


          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <div class="row">
                  <div class="col-5">
                    <button class="btn btn-success btn-sm" data-toggle="modal" v-on:click="openRE(), pauseClock()">Buy Real Estate</button>
                  </div>
                  <h5 class="card-title">Real Estate</h5>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class="text-primary">
                      <tr>
                        <th class="text-center">
                          Property Value
                        </th>
                        <th>
                          Mortgage Payment
                        </th>
                        <th>
                          Equity
                        </th>
                        <th>
                          Loan Principal
                        </th>
                        <th class="text-right">
                          Interest
                        </th>
                        <th class="text-right">
                          Terms Left
                        </th>
                      </tr>
                    </thead>
                    <tbody v-for="propertyObj in properties">
                      <tr>
                        <td>
                          {{ propertyObj.home_value }}
                        </td>
                        <td>
                          {{ propertyObj.home_mortgage }}
                        </td>
                        <td>
                          {{ propertyObj.home_equity }}
                        </td>
                        <td>
                          {{ propertyObj.home_loan_principal }}
                        </td>
                        <td>
                          {{ propertyObj.home_interest }}
                        </td>
                        <td>
                          {{ propertyObj.home_loan_principal }}
                        </td>
                        <td>
                          {{ propertyObj.home_terms }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
  <!-- </div> -->


<!-- The Start Modal -->
      <div class="modal fade bd-example-modal-lg" id="startModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                <i class="tim-icons icon-simple-remove"></i>
              </button>
              <h5 class="modal-title" id="myModalLabel">My Finance Sim</h5>
            </div>
            <div class="modal-body">
             <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Enter Information</h4>
                </div>
                <div class="card-body">
                  <form id="RangeValidation" class="form-horizontal">
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Percentage of Income Saved:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="1" max="50" placeholder="15" v-model="save_rate" required/>
                          <!-- <span class="form-text">A block of help text that breaks onto a new line.</span> -->
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Monthly Bills:</label>
                      <div class="col-sm-10">s
                        <div class="form-group">
                          <input class="form-control" type="number" max="800" placeholder="800" v-model="monthly_bills" required/>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button class="btn btn-primary animation-on-hover" rel="tooltip" data-original-title="Lets get money!" data-placement="bottom" data-dismiss="modal" v-on:click=" returnStart(), resumeClock(), startTimer()">Submit</button>
          </div>
        </div>
      </div>
    </div>

<!-- The Crypto Modal -->
    <div class="modal fade" id="cryptoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="tim-icons icon-simple-remove"></i>
            </button>
            <h5 class="modal-title" id="myModalLabel">Buy Crypto</h5>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Enter Information</h4>
                </div>
                <div class="card-body">
                  <form id="RangeValidation" class="form-horizontal">
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Initial Investment:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="1" placeholder="1000" v-model="crypto_initial" required/>
                          <!-- <span class="form-text">A block of help text that breaks onto a new line.</span> -->
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Monthly Crypto Purchases:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="1" placeholder="250" v-model="crypto_monthly" required/>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button class="btn btn-primary animation-on-hover" rel="tooltip" data-original-title="To the moon!" data-placement="bottom" data-dismiss="modal" v-on:click="cryptoAccount(), resumeClock(), startTimer()">Submit</button>
          </div>
        </div>
      </div>
    </div>

<!-- The Stocks Modal -->
    <div class="modal fade" id="stocksModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="tim-icons icon-simple-remove"></i>
            </button>
            <h5 class="modal-title" id="myModalLabel">Buy Stocks</h5>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Enter Information</h4>
                </div>
                <div class="card-body">
                  <form id="RangeValidation" class="form-horizontal">
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Initial Investment:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="1" placeholder="1000" v-model="stocks_initial" required/>
                          <!-- <span class="form-text">A block of help text that breaks onto a new line.</span> -->
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Monthly Stock Purchases:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="1" placeholder="250" v-model="stocks_monthly" required/>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button class="btn btn-primary animation-on-hover" rel="tooltip" data-original-title="To the moon!" data-placement="bottom" data-dismiss="modal" v-on:click="stocksAccount(), resumeClock(), startTimer()">Submit</button>
          </div>
        </div>
      </div>
    </div>

<!-- The Car Modal -->
    <div class="modal fade" id="buyCar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="tim-icons icon-simple-remove"></i>
            </button>
            <h5 class="modal-title" id="myModalLabel">Take a Car Loan</h5>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Enter Information</h4>
                </div>
                <div class="card-body">
                  <form id="RangeValidation" class="form-horizontal">
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Down Payment:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="0" oninput="validity.valid||(value='');" placeholder="5000" name="car_money_down" v-model="car_money_down">
                          <!-- <span class="form-text">A block of help text that breaks onto a new line.</span> -->
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Amount of Money Borrowed:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="0" oninput="validity.valid||(value='');" name="car_principal" placeholder="20000" v-model="car_principal">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Interest Rate:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="0" oninput="validity.valid||(value='');" name="car_interest" placeholder="8" v-model="car_interest">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Years of Loan:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="0" oninput="validity.valid||(value='');" name="car_years" placeholder="5" v-model="car_years">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button class="btn btn-primary animation-on-hover" rel="tooltip" data-original-title="To the moon!" data-placement="bottom" data-dismiss="modal" v-on:click="car_loan(), resumeClock(), startTimer()">Submit</button>
          </div>
        </div>
      </div>
    </div>

<!-- The Compound Interest Modal-->
    <div class="modal fade" id="openCI" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="tim-icons icon-simple-remove"></i>
            </button>
            <h5 class="modal-title" id="myModalLabel">Open an Account with Compound Interest</h5>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Enter Information</h4>
                </div>
                <div class="card-body">
                  <form id="RangeValidation" class="form-horizontal">
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Initial Deposit:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="0" oninput="validity.valid||(value='');" name="ci_princ" size="12" placeholder="1000" v-model="ci_princ">
                          <!-- <span class="form-text">A block of help text that breaks onto a new line.</span> -->
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Monthly Contributions:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="0" oninput="validity.valid||(value='');" name="ci_monthly" size="12" placeholder="250" v-model="ci_monthly">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Interest Rate:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="0" oninput="validity.valid||(value='');" name="ci_rate" size="12" placeholder="8" v-model="ci_rate">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Years of Loan:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="0" oninput="validity.valid||(value='');" name="ci_rate" size="12" placeholder="30" v-model="ci_years">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button class="btn btn-primary animation-on-hover" rel="tooltip" data-original-title="To the moon!" data-placement="bottom" data-dismiss="modal" v-on:click="ci_account(), resumeClock(), startTimer()">Submit</button>
          </div>
        </div>
      </div>
    </div>

<!-- The Real Estate Modal-->
    <div class="modal fade" id="buyHouse" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="tim-icons icon-simple-remove"></i>
            </button>
            <h5 class="modal-title" id="myModalLabel">Purchase Real Estate</h5>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Enter Information</h4>
                </div>
                <div class="card-body">
                  <form id="RangeValidation" class="form-horizontal">
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Down Payment:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="0" oninput="validity.valid||(value='');" id="home_money_down" placeholder="40000" v-model="home_money_down">
                          <!-- <span class="form-text">A block of help text that breaks onto a new line.</span> -->
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Amount of Money Borrowed:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="0" oninput="validity.valid||(value='');" id="home_principal" placeholder="200000" v-model="home_principal">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Interest Rate:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="0" oninput="validity.valid||(value='');" id="home_interest" placeholder="4" v-model="home_interest">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 col-form-label">Years of Loan:</label>
                      <div class="col-sm-10">
                        <div class="form-group">
                          <input class="form-control" type="number" min="0" oninput="validity.valid||(value='');" id="home_years" placeholder="30" v-model="home_years">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button class="btn btn-primary animation-on-hover" rel="tooltip" data-original-title="To the moon!" data-placement="bottom" data-dismiss="modal" v-on:click="createRealEstate(), resumeClock(), startTimer()">Submit</button>
          </div>
        </div>
      </div>
    </div>

<!-- end modal-->
    <div class="modal fade bd-example-modal-lg" id="endModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Congrats! You are retired!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="col-md-12 mr-auto">
            <div class="card card-chart card-chart-pie">
              <div class="card-header">
                <h5 class="card-category">Your Portfolio</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <div class="chart-area">
                      <canvas id="PieChartGradient"></canvas>
                    </div>
                  </div>
                  <div class="col-6">
                    <h4 class="card-title"><i class="tim-icons  icon-single-02 text-warning "></i> <span id="retired_net_worth"></span></h4>
                    <p class="category">Your Net Worth</p>
                  </div>
                </div>
              </div>
            </div>
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
  var col_bill_amount = 0;
  var col_bills_rate_remainder = 0;
  var monthly_bills = 0;
  var ca

  var save_rate = 0;
  var save_amount = (monthly_income*save_rate);
  var save_account = 0;
  var save_rate = "";
  var save_total_cont = 0;

  var stocks_rate = 0;
  var stocks_amount = (monthly_income*stocks_rate);
  var stocks_account = 0;
  var stock_market_rate = 0;
  var stocks_initial = 0;
  var stocks_monthly = 0;

  var crypto_rate = 0;
  var crypto_amount = 0;
  var crypto_account = 0;
  var crypto_market_rate = 0;
  var crypto_initial = 0;
  var crypto_monthly = 0;
  var crypto_value = 0;
  var sim_stock = 50;
  var sim_stock_amount = 0;
  var stocks_holding = 0;

  var sim_coin = 1;
  var sim_coin_bag = 0;
  var sim_coin_amount = 0;

  var car_value = 0;
  var car_money_down = 0;
  var car_principal = 0;
  var car_interest = 0;
  var car_years = 0;
  var car_terms = 0;
  var car_payments = 0;

  var car_pay_b4_i = 0;
  var car_total_payments = 0;
  var car_total_interest = 0;
  var x = 0;

  var home_value = 0;
  var home_equity = 0;
  var property_tax = 0;
  var home_money_down = 0;
  var home_principal = 0;
  var home_interest = 0;
  var home_years = 0;
  var home_terms = 0;
  var home_payments = 0;
  var home_pay_b4_i = 0;
  var home_total_payments = 0;
  var home_total_interest = 0;
  var home_x = 0;
  var property = {};
  //var properties = [];

  var check_account = 1000;
  var check_amount = 0;

  var i = "";
  var ci_months = "";
  var ci_princ = "";
  var ci_monthly = "";
  var ci_rate = ""; 
  var ci_years = "";
  var ci_total_cont = "";


  var income_tax = 0.08;
  var inflation = 0;
  var net_worth = "";

  var arrWealth = [];
  var arrSavings = [];
  var arrStocks = [];
  var arrCI = [];
  var arrCrypto = [];
  var arrBalance = [];
  var arrCar = [];
  var arrCarLoan = [];
  var arrRealEstate = [];

  var count = -1;
  var rate = .4;
  var product = 0;
  var year = 2006;
  var age = 17;
  var x = 0;
  var month = "";
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var state = 0;  // 0 = idle, 1 = running, 2 = paused, 3= resumed
  var speed = 175;

export default {

  name: 'ExampleModal',
  data() {
    return {
      timer: null,
      income: null,
      income_tax: null,
      income_tax: .08,
      check_account: 500,
      monthly_bills: null,
      home_principal: null,
      propertyObj: [],
      properties: [],
      speed:null,
      payments: 0,
      car_value: 0,
      car_principal: 0,
      arrWealth: [],
      arrSavings: [],
      arrCI: [],
      arrCrypto: [],
      stock_market_rate: null,
      save_amount: null,
      stocks_monthly: null,
        };
      },

  created: function() {

    },

    mounted() {
      $('#startModal').modal({backdrop: 'static', keyboard: false}, 'show');
    },

    methods: {

      // var properties = [
      //   {
      //     home_years: 2000,
      //     home_principal: 450
      //   },
      //   {
      //     home_years: 1000,
      //     home_principal: 890
      //   }
      // ]
      // properties.forEach((singleproperty) => {
      //   return singleproperty.home_principal * 5
      // })

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
        var that = this
        console.log("THIS IS THE STARTING TIMER",state)
          clearInterval(that.timer);
          if (state == 1) {
            that.timer = setInterval(() => {
              counter()
            }, speed)
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
              document.getElementById("car_payments").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(car_payments);
              document.getElementById("ci_princ").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ci_princ);
              document.getElementById("ci_total_cont").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(ci_total_cont);
              document.getElementById("save_total_cont").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(save_total_cont);
              document.getElementById("net_worth").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(net_worth);
              document.getElementById("retired_net_worth").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(net_worth);

              // document.getElementById("home_terms").innerHTML = home_terms;
              // document.getElementById("home_value").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(home_value);
              // document.getElementById("home_principal").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(home_principal);
              // document.getElementById("mortgage").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(home_payments);
              // document.getElementById("crypto_account").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(crypto_account); 
              document.getElementById("monthly_income").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(monthly_income);
              document.getElementById("stock_market_rate").innerHTML = new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(stock_market_rate);
              document.getElementById("save_amount").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(save_amount);
              document.getElementById("sim_coin").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(sim_coin);
              document.getElementById("crypto_value").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(crypto_value);
              document.getElementById("sim_coin_bag").innerHTML = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(sim_coin_bag);
              document.getElementById("crypto_rate").innerHTML = new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(crypto_rate);
              document.getElementById("sim_stock").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(sim_stock);
              document.getElementById("stocks_holding").innerHTML = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(stocks_holding);
              document.getElementById("income_tax").innerHTML = new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(income_tax);


              // document.getElementById("object").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(propertyObj.home_equity);
              // document.getElementById("inflation").innerHTML = parseFloat(inflation*100).toFixed(2)+"%";
              console.log(++count);


              if (count == 0){
              // when January hits
                oneMonth();
                oneYear();
              } else if (count < 11){
                oneMonth();
              } else if (count == 11) {
              // resetting month count to month 1
                oneMonth();
                count = -1
              };

              if (car_terms > 0) {
                car_terms -= 1;
                car_principal = (car_principal - car_pay_b4_i);
              }
            };

            function oneYear() {
              console.log("this is one year");
              year += 1;
              age += 1;

              if (car_value > 3000) {
                car_value *= .91
              }

              if (age == 18) {
                income = 9725
              } else if (age == 19) {
                income = 15062
                monthly_bills *= 1.55
              } else if (age == 20) {
                income = 18513
                monthly_bills *= 1.23
              } else if (age == 21) {
                income = 20712
                monthly_bills *= 1.12
              } else if (age == 22) {
                income = 24447
                monthly_bills *= 1.18
              } else if (age == 23) {
                income = 29814
                monthly_bills *= 1.22
              } else if (age == 24) {
                income = 33164
                monthly_bills *= 1.11
              } else if (age == 25) {
                income = 41461
                monthly_bills *= 1.25
              } else if (age == 26) {
                income = 43945
                monthly_bills *= 1.06
              } else if (age == 27) {
                income = 48376
                monthly_bills *= 1.10
              } else if (age == 28) {
                income = 47399
              } else if (age == 29) {
                income = 51638
                monthly_bills *= 1.06
              } else if (age == 30) {
                income = 52706
              } else if (age == 31) {
                income = 59068
                monthly_bills *= 1.12
              } else if (age == 32) {
                income = 58708
              } else if (age == 33) {
                income = 59082
              } else if (age == 34) {
                income = 60506
              } else if (age == 35) {
                income = 66320
                monthly_bills *= 1.12
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
                monthly_bills *= 1.12
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
                that.pauseClock()
                // clearInterval(this.timer);
                // state = 0
                endModal();
              }

              save_account += (save_account*.01)

              if (age % 1 === 0) {
                arrWealth.push(parseInt(net_worth));
                arrSavings.push(parseInt(save_account));
                arrStocks.push(parseInt(stocks_account));
                arrCI.push(parseInt(ci_princ));
                arrCrypto.push(parseInt(crypto_account));
                arrCar.push(parseInt(car_value));
                arrCarLoan.push(parseInt(car_principal));

                chartWealth();
                // console.log("$$$$$$$$$$$$$$$$this is arrinvesting",arrInvesting)
                // console.log("$$$$$$$$$$$$$$$$this is arrsavings",arrSavings)
                // console.log("$$$$$$$$$$$$$$$$this is arrCI",arrCI)
                // console.log("$$$$$$$$$$$$$$$$this is arrCrypto",arrCrypto)
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

              stock_market_rate = Math.floor(Math.random() * 1200) + 1;
              stock_market_rate = (stock_market_rate/10000);
              sim_stock = sim_stock + (sim_stock*stock_market_rate);

              colorChange();


              // home_appreciation = Math.floor(Math.random() * 7) + 1;
              // console.log("this is the home appreciation rate:", home_appreciation)

              inflation = Math.floor(Math.random() * 4) + 1;
              inflation = (inflation/100);
              stocks_account = stocks_account + (stocks_account*stock_market_rate);

              if( that.properties ) {
               that.properties.forEach(propertyObj => {
                  propertyObj.home_value *= 1.08;
                  propertyObj.home_equity *= 1.08;
                })
              } 
            };

            function oneMonth() {
              month = (months[count])
              monthly_income = income/12
              // console.log("this is monthly income", monthly_income);
              // console.log("this is monthly bills", monthly_bills);
              // if (car_terms > 0) {
              //   car_terms -= 1
              //   console.log(car_payments)
              // }

              
             

              crypto_account += crypto_monthly;

              if (sim_coin < 25) {
                crypto_rate = (Math.floor(Math.random() * 3500) - 1500)/10000;
              // crypto rate randomly chosen between -15% - +20%
              } else if (sim_coin >= 25 && sim_coin < 50){
                crypto_rate = (Math.floor(Math.random() * 2500) - 1000)/10000;
                // crypto rate randomly chosen between -10% - +15%
              } else if (sim_coin >= 50 && sim_coin < 75){
                crypto_rate = (Math.floor(Math.random() * 2000) - 1000)/10000;
                // crypto rate randomly chosen between -10% - +10%
              } else if (sim_coin >= 75 && sim_coin < 100){
                crypto_rate = (Math.floor(Math.random() * 1000) - 250)/10000;
                // crypto rate randomly chosen between -2.5% - +5%
              } else if (sim_coin >= 100 && sim_coin < 150){
                crypto_rate = (Math.floor(Math.random() * 500) - 200)/10000;
                // crypto rate randomly chosen between -2% - +3%
              } else if (sim_coin >= 150){
                crypto_rate = (Math.floor(Math.random() * 400) - 200)/10000;
                // crypto rate randomly chosen between -2% - +2%
              }
              console.log("----------------this is the crypto rate", crypto_rate)
              sim_coin = sim_coin + (sim_coin*crypto_rate)
              crypto_account = crypto_account + (crypto_rate*crypto_account)

              sim_coin_bag += (crypto_monthly/sim_coin)
              crypto_value = (sim_coin_bag*sim_coin)

              stocks_holding += (stocks_monthly/sim_stock)
              stocks_account = (stocks_holding*sim_stock)

              
              // console.log("----------------this is the crypto rate", crypto_rate)
              // crypto_account = crypto_account*crypto_market_rate;
              // console.log("----------------this is the crypto account", crypto_account)


              console.log("this is income tax", income_tax)
              monthly_income *= (1 - income_tax);
              console.log("this is monthly income after tax", monthly_income);
              // monthly_income = monthly_income - monthly_bills - ci_monthly - car_payments - crypto_monthly;

              if (count > 6 && count < 11) {
                col_bills_rate = Math.floor(Math.random() * (1100 - 800 + 1)) + 800;
                col_bills_rate = (col_bills_rate/1000);
                // COL between 80% - 100% August, September, October
                console.log("!@#$!@#$!@#$ this is the col_bills_rate", col_bills_rate)
              } else if (count == 10 || count == 11 ) {
                col_bills_rate = Math.floor(Math.random() * (1400 - 1200 + 1)) + 1200;
                col_bills_rate = (col_bills_rate/1000);
                // COL between 120% - 140% November, December
                console.log("!@#$!@#$!@#$ this is the col_bills_rate", col_bills_rate)
              } else {
                col_bills_rate = Math.floor(Math.random() * (1000 - 800 + 1)) + 800;
                col_bills_rate = (col_bills_rate/1000);
                // COL betwen 90% - 100% January, February, March, April, May, June, July
                console.log("!@#$!@#$!@#$ this is the col_bills_rate", col_bills_rate)
              }
              
              if (col_bills_rate > 1) {
                col_bills_rate_remainder = col_bills_rate - 1;
                col_bills_rate = 1;
                check_account -= (monthly_income*col_bills_rate_remainder);
                col_bills_rate = 0;
                monthly_income = 0;
              } else {
                monthly_income -= (col_bills_rate*monthly_income)
              }

              if (monthly_income == 0) {
                check_account -= save_amount;
                check_account -= ci_monthly;
                check_account -= car_payments;
                check_account -= stocks_monthly;
                check_account -= crypto_monthly;

              }


              console.log("++++++++this is net income after COL", monthly_income);


              save_amount = monthly_income*save_rate
              console.log("++++++++this is save amount", save_amount);
              stocks_account += stocks_monthly;
              monthly_income -= (save_amount + stocks_amount)
              console.log("++++++++this is net income after save++++++++++++", monthly_income);

              check_account += monthly_income
              save_account += save_amount
              save_total_cont += save_amount
              stocks_account += stocks_monthly;
              net_worth = stocks_account +  check_account + save_account + ci_princ + crypto_value
              console.log("++++++++this is net income after save", monthly_income);
              // having trouble adding crypto and ci
              console.log("this is net_worth", net_worth);

              if (i <= ci_months) {
                ci_total_cont += ci_monthly
                ci_princ += ci_monthly;
                ci_princ += (ci_princ * (ci_rate / 12));
                i += 1;
                // console.log(ci_princ);
                // console.log(i);
                // console.log(ci_months);
              };


              // propertyObj.home_value += (propertyObj.home_value * .03)

              // properties.forEach((singlepropertyObj) => {
              //   return propertyObj.home_years -1
              // });


              if( that.properties ) {
               that.properties.forEach(propertyObj => {
                  propertyObj.princip -= propertyObj.home_mortgage;
                  propertyObj.home_equity += propertyObj.home_mortgage
                })
              } 


              // console.log(ci_princ.toFixed(2)); //69636.12
             };

            function chartWealth() {

              var chart_labels = ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65',];

              var ctx = document.getElementById("chartBig1").getContext('2d');

              var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

              gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
              gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
              gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
              var config = {
                type: 'line',
                data: {
                  labels: chart_labels,
                  datasets: [{
                    label: "Net Wealth",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#d346b1',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#d346b1',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#d346b1',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: arrWealth,                  
                  },
                  {
                    label: "Savings",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#0d6efd',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#0d6efd',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#0d6efd',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: arrSavings,
                  
                  },
                  {
                    label: "Compound Interest",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#6f42c1',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#6f42c1',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#6f42c1',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: arrCI,
                  
                  },
                  {
                    label: "Stocks",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#ffc107',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#ffc107',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#ffc107',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: arrStocks,
                  
                  },
                  {
                    label: "Crypto",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#0dcaf0',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#0dcaf0',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#0dcaf0',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: arrCrypto,
                  
                  },
                  {
                    label: "Real Estate",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#198754',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#198754',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#198754',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: arrRealEstate,
                  
                  },
                  {
                    label: "Car Value",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#dc3545',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#dc3545',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#dc3545',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: arrCar,
                  
                  },
                  {
                    label: "Car Loan",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#fd7e14',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#fd7e14',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#fd7e14',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: arrCarLoan,
                  },
                  ]
                },
                options: gradientChartOptionsConfigurationWithTooltipPurple
              };
              var myChartData = new Chart(ctx, config);
              $("#0").click(function() {
                var data = myChartData.config.data;
                data.datasets[0].data = chart_data;
                data.labels = chart_labels;
                myChartData.update();
              });
              $("#1").click(function() {
                var chart_data = arrSavings;
                var data = myChartData.config.data;
                data.datasets[0].data = chart_data;
                data.labels = chart_labels;
                myChartData.update();
              });
              $("#2").click(function() {
                var chart_data = arrCI;
                var data = myChartData.config.data;
                data.datasets[0].data = chart_data;
                data.labels = chart_labels;
                myChartData.update();
              });

              $("#3").click(function() {
                var chart_data = arrCI;
                var data = myChartData.config.data;
                data.datasets[0].data = chart_data;
                data.labels = chart_labels;
                myChartData.update();
              });
              $("#4").click(function() {
                var chart_data = arrCrypto;
                var data = myChartData.config.data;
                data.datasets[0].data = chart_data;
                data.labels = chart_labels;
                myChartData.update();
              });
              $("#5").click(function() {
                var chart_data = arrCrypto;
                var data = myChartData.config.data;
                data.datasets[0].data = chart_data;
                data.labels = chart_labels;
                myChartData.update();
              });
            };



          function endModal() {

              $('#endModal').modal('show');

              arrBalance.push(parseInt(check_account), parseInt(save_account), parseInt(ci_princ), parseInt(stocks_account), parseInt(crypto_account))

              var ctx = document.getElementById("PieChartGradient").getContext("2d");

              var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                  labels: ["Checking Account", "Savings Account", "Compound Interest Account", "Stocks Portfolio", "Crypto Portfolio"],
                  datasets: [{
                    label: "Emails",
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    backgroundColor: ['#0081a7', '#00afb9', '#fdfcdc', '#fed9b7', '#f07167'],
                    borderWidth: 0,
                    data: arrBalance,
                  }]
                },
                options: {
                  cutoutPercentage: 70,
                  legend: {

                    display: false
                  },

                  tooltips: {
                    backgroundColor: '#f5f5f5',
                    titleFontColor: '#333',
                    bodyFontColor: '#666',
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                  },

                  scales: {
                    yAxes: [{
                      display: 0,
                      ticks: {
                        display: false
                      },
                      gridLines: {
                        drawBorder: false,
                        zeroLineColor: "transparent",
                        color: 'rgba(255,255,255,0.05)'
                      }

                    }],

                    xAxes: [{
                      display: 0,
                      barPercentage: 1.6,
                      gridLines: {
                        drawBorder: false,
                        color: 'rgba(255,255,255,0.1)',
                        zeroLineColor: "transparent"
                      },
                      ticks: {
                        display: false,
                      }
                    }]
                  },
                }
              });
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

      openStocks(){
        $('#stocksModal').modal({backdrop: 'static', keyboard: false}, 'show');
      },

      openCrypto(){
        $('#cryptoModal').modal({backdrop: 'static', keyboard: false}, 'show');
      },

      createRealEstate() {
        var home_money_down = this.home_money_down;
        var home_principal = this.home_principal;
        var home_interest = (this.home_interest/100)/12;
        var home_years = this.home_years;
        var home_terms = this.home_years * 12;
        var home_value = this.home_money_down + this.home_principal;
        var home_equity = this.home_money_down

              // Now compute the monthly payment figure, using esoteric math.
        x = Math.pow(1 + home_interest, home_terms);
        var home_mortgage = (home_principal*x*home_interest)/(x-1);
        console.log("this is home mortgage", home_mortgage)
        console.log("this is home mortgage", home_equity)
        // Check that the result is a finite number. If so, display the results.
        if (!isNaN(home_mortgage) && 
            (home_mortgage != Number.POSITIVE_INFINITY) &&
            (home_mortgage != Number.NEGATIVE_INFINITY)) {
            console.log("this is car home_principal", home_principal);
            console.log("this is car home_interest", home_interest);
            console.log("this is car home_mortgage", home_mortgage);
            home_mortgage = Math.round(home_mortgage*100)/100;
          }

        console.log("this is home mortgage", home_mortgage)
        // console.log("this is home principal", home_principal)
        home_equity = home_money_down
        var propertyObj = {
          home_value: parseInt(home_value),
          home_money_down: parseInt(home_money_down),
          home_principal: parseInt(home_principal),
          home_interest: parseInt(home_interest),
          home_years: parseInt(home_years),
          home_equity: parseInt(home_equity),
          home_terms: parseInt(home_terms),
          home_mortgage: parseInt(home_mortgage),
        }

        //propertyObj.home_years -= 1

        this.properties.push(propertyObj);
        console.log("THIS IS THE PROPERTY", this.properties)

        },

      car_loan() {
        car_money_down = parseInt(this.car_money_down);
        car_principal = parseInt(this.car_principal);
        car_interest = (parseInt(this.car_interest)/100) /12;
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

        check_account -= car_money_down
      },

      returnStart() {
        console.log("This is income:", this.save_rate, this.monthly_bills)
        console.log("** this is income:", this.income, "**"),
        income = this.income;
        if (isNaN(save_rate)) {
          alert("Must input numbers");
          return false;
        }

        if (isNaN(monthly_bills)) {
          alert("Must input numbers");
          return false;
        }

        monthly_bills = parseInt(this.monthly_bills);
        save_rate = parseInt(this.save_rate) || 0;
        save_rate = (parseInt(this.save_rate)/100);
      },

      cryptoAccount() {
        crypto_initial = this.crypto_initial;
        crypto_monthly = this.crypto_monthly;
        console.log("this is the initial crypto dep", crypto_initial);
        console.log("this is the crypto monthly", crypto_monthly);
        console.log("++++++++++++ this is the crypto_account", crypto_account);

        sim_coin_amount = crypto_initial/sim_coin
        console.log("this is the amount of coins purchased", sim_coin_amount)

        crypto_account += sim_coin_amount

        check_account -= crypto_initial;
        crypto_account += crypto_initial;
      },

      stocksAccount() {
        stocks_initial = this.stocks_initial;
        stocks_monthly = this.stocks_monthly;
        console.log("this is the initial stocks dep", stocks_initial);
        console.log("this is the stocks monthly", stocks_monthly);
        console.log("++++++++++++ this is the stocks_account", stocks_account);

        sim_stock_amount = stocks_initial/sim_stock
        console.log("this is the amount of coins purchased", sim_stock_amount)

        stocks_account += sim_stock_amount

        check_account -= stocks_initial;
        stocks_account += stocks_initial;
      },

      ci_account() {
        console.log("This is CI:", this.ci_princ, this.ci_rate, this.ci_years, this.ci_monthly);

        ci_princ = parseInt(this.ci_princ); // start deposit
        ci_rate = parseInt(this.ci_rate) / 100; // monthly deposit (need plus it every year)
        ci_years = parseInt(this.ci_years); // term years
        ci_monthly = parseInt(this.ci_monthly); // monthly deposit (need plus it every year)
        ci_months = (ci_years * 12); //10 years of monthly contributions
        ci_total_cont = ci_princ

        check_account -= ci_princ
        i = 1
      },
    }
  }

    $(document).ready(function() {
      $().ready(function() {
        $sidebar = $('.sidebar');
        $navbar = $('.navbar');
        $main_panel = $('.main-panel');

        $full_page = $('.full-page');

        $sidebar_responsive = $('body > .navbar-collapse');
        sidebar_mini_active = true;
        white_color = false;

        window_width = $(window).width();

        fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();



        $('.fixed-plugin a').click(function(event) {
          if ($(this).hasClass('switch-trigger')) {
            if (event.stopPropagation) {
              event.stopPropagation();
            } else if (window.event) {
              window.event.cancelBubble = true;
            }
          }
        });

        $('.fixed-plugin .background-color span').click(function() {
          $(this).siblings().removeClass('active');
          $(this).addClass('active');

          var new_color = $(this).data('color');

          if ($sidebar.length != 0) {
            $sidebar.attr('data', new_color);
          }

          if ($main_panel.length != 0) {
            $main_panel.attr('data', new_color);
          }

          if ($full_page.length != 0) {
            $full_page.attr('filter-color', new_color);
          }

          if ($sidebar_responsive.length != 0) {
            $sidebar_responsive.attr('data', new_color);
          }
        });

        $('.switch-sidebar-mini input').on("switchChange.bootstrapSwitch", function() {
          var $btn = $(this);

          if (sidebar_mini_active == true) {
            $('body').removeClass('sidebar-mini');
            sidebar_mini_active = false;
            blackDashboard.showSidebarMessage('Sidebar mini deactivated...');
          } else {
            $('body').addClass('sidebar-mini');
            sidebar_mini_active = true;
            blackDashboard.showSidebarMessage('Sidebar mini activated...');
          }

          // we simulate the window Resize so the charts will get updated in realtime.
          var simulateWindowResize = setInterval(function() {
            window.dispatchEvent(new Event('resize'));
          }, 180);

          // we stop the simulation of Window Resize after the animations are completed
          setTimeout(function() {
            clearInterval(simulateWindowResize);
          }, 1000);
        });

        $('.switch-change-color input').on("switchChange.bootstrapSwitch", function() {
          var $btn = $(this);

          if (white_color == true) {

            $('body').addClass('change-background');
            setTimeout(function() {
              $('body').removeClass('change-background');
              $('body').removeClass('white-content');
            }, 900);
            white_color = false;
          } else {

            $('body').addClass('change-background');
            setTimeout(function() {
              $('body').removeClass('change-background');
              $('body').addClass('white-content');
            }, 900);

            white_color = true;
          }

        });

        $('.light-badge').click(function() {
          $('body').addClass('white-content');
        });

        $('.dark-badge').click(function() {
          $('body').removeClass('white-content');
        });
      });
    });
    $(document).ready(function() {
      // Javascript method's body can be found in assets/js/demos.js
      demo.initDashboardPageCharts();
      demo.initVectorMap();

    });

    function setFormValidation(id) {
      $(id).validate({
        highlight: function(element) {
          $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
          $(element).closest('.form-check').removeClass('has-success').addClass('has-danger');
        },
        success: function(element) {
          $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
          $(element).closest('.form-check').removeClass('has-danger').addClass('has-success');
        },
        errorPlacement: function(error, element) {
          $(element).closest('.form-group').append(error);
        },
      });


    };

    function colorChange() {
        console.log("THIS IS THE COLOR CHANGING TO RED AND GREEN AND RED AND GREEN")
        if (stock_market_rate > 0) {
          document.getElementById("stock_market_rate").style.color = '#2dce89 !important';
        } else if (stock_market_rate < 0) {
          document.getElementById("stock_market_rate").style.color = '#f5365c !important';
        }
      };

    $(document).ready(function() {

      setFormValidation('#RangeValidation');

    });
</script>

<!-- date management -->
<!-- moment.js -->
<!-- start with a counter associate to month -->

