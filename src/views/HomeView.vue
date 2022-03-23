<template>
  <body>
  <div class="home">
      <div class="navbar-minimize-fixed">
        <button class="minimize-sidebar btn btn-link btn-just-icon">
          <i class="tim-icons icon-align-center visible-on-sidebar-regular text-muted"></i>
          <i class="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted"></i>
        </button>
      </div>
      <div class="sidebar" data-color="blue">
        <!--
          Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red"
      -->
        <div class="sidebar-wrapper">
          <div class="logo">
            <a href="javascript:void(0)" class="simple-text logo-mini">
              CT
            </a>
            <a href="javascript:void(0)" class="simple-text logo-normal">
              Creative Tim
            </a>
          </div>
          <ul class="nav">
            <li class="active">
              <a href="../examples/dashboard.html">
                <i class="tim-icons icon-chart-pie-36"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a data-toggle="collapse" href="#pagesExamples">
                <i class="tim-icons icon-image-02"></i>
                <p>
                  Pages
                  <b class="caret"></b>
                </p>
              </a>
              <div class="collapse" id="pagesExamples">
                <ul class="nav">
                  <li>
                    <a href="../examples/pages/pricing.html">
                      <span class="sidebar-mini-icon">P</span>
                      <span class="sidebar-normal"> Pricing </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/pages/rtl.html">
                      <span class="sidebar-mini-icon">RS</span>
                      <span class="sidebar-normal"> RTL Support </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/pages/timeline.html">
                      <span class="sidebar-mini-icon">T</span>
                      <span class="sidebar-normal"> Timeline </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/pages/login.html">
                      <span class="sidebar-mini-icon">L</span>
                      <span class="sidebar-normal"> Login </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/pages/register.html">
                      <span class="sidebar-mini-icon">R</span>
                      <span class="sidebar-normal"> Register </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/pages/lock.html">
                      <span class="sidebar-mini-icon">LS</span>
                      <span class="sidebar-normal"> Lock Screen </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/pages/user.html">
                      <span class="sidebar-mini-icon">UP</span>
                      <span class="sidebar-normal"> User Profile </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#componentsExamples">
                <i class="tim-icons icon-molecule-40"></i>
                <p>
                  Components
                  <b class="caret"></b>
                </p>
              </a>
              <div class="collapse" id="componentsExamples">
                <ul class="nav">
                  <li>
                    <a data-toggle="collapse" aria-expanded="false" href="#multicollapse">
                      <span class="sidebar-mini-icon">MLT</span>
                      <span class="sidebar-normal"> Multi Level Collapse
                        <b class="caret"></b>
                      </span>
                    </a>
                    <div class="collapse" id="multicollapse">
                      <ul class="nav">
                        <li>
                          <a>
                            <span class="sidebar-mini-icon">E</span>
                            <span class="sidebar-normal"> Example </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="../examples/components/buttons.html">
                      <span class="sidebar-mini-icon">B</span>
                      <span class="sidebar-normal"> Buttons </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/components/grid.html">
                      <span class="sidebar-mini-icon">G</span>
                      <span class="sidebar-normal"> Grid System </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/components/panels.html">
                      <span class="sidebar-mini-icon">P</span>
                      <span class="sidebar-normal"> Panels </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/components/sweet-alert.html">
                      <span class="sidebar-mini-icon">SA</span>
                      <span class="sidebar-normal"> Sweet Alert </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/components/notifications.html">
                      <span class="sidebar-mini-icon">N</span>
                      <span class="sidebar-normal"> Notifications </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/components/icons.html">
                      <span class="sidebar-mini-icon">I</span>
                      <span class="sidebar-normal"> Icons </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/components/typography.html">
                      <span class="sidebar-mini-icon">T</span>
                      <span class="sidebar-normal"> Typography </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#formsExamples">
                <i class="tim-icons icon-notes"></i>
                <p>
                  Forms
                  <b class="caret"></b>
                </p>
              </a>
              <div class="collapse" id="formsExamples">
                <ul class="nav">
                  <li>
                    <a href="../examples/forms/regular.html">
                      <span class="sidebar-mini-icon">RF</span>
                      <span class="sidebar-normal"> Regular Forms </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/forms/extended.html">
                      <span class="sidebar-mini-icon">EF</span>
                      <span class="sidebar-normal"> Extended Forms </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/forms/validation.html">
                      <span class="sidebar-mini-icon">V</span>
                      <span class="sidebar-normal"> Validation Forms </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/forms/wizard.html">
                      <span class="sidebar-mini-icon">W</span>
                      <span class="sidebar-normal"> Wizard </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#tablesExamples">
                <i class="tim-icons icon-puzzle-10"></i>
                <p>
                  Tables
                  <b class="caret"></b>
                </p>
              </a>
              <div class="collapse" id="tablesExamples">
                <ul class="nav">
                  <li>
                    <a href="../examples/tables/regular.html">
                      <span class="sidebar-mini-icon">RT</span>
                      <span class="sidebar-normal"> Regular Tables </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/tables/extended.html">
                      <span class="sidebar-mini-icon">ET</span>
                      <span class="sidebar-normal"> Extended Tables </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/tables/datatables.net.html">
                      <span class="sidebar-mini-icon">DT</span>
                      <span class="sidebar-normal"> DataTables.net </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#mapsExamples">
                <i class="tim-icons icon-pin"></i>
                <p>
                  Maps
                  <b class="caret"></b>
                </p>
              </a>
              <div class="collapse" id="mapsExamples">
                <ul class="nav">
                  <li>
                    <a href="../examples/maps/google.html">
                      <span class="sidebar-mini-icon">GM</span>
                      <span class="sidebar-normal"> Google Maps </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/maps/fullscreen.html">
                      <span class="sidebar-mini-icon">FM</span>
                      <span class="sidebar-normal"> Full Screen Map </span>
                    </a>
                  </li>
                  <li>
                    <a href="../examples/maps/vector.html">
                      <span class="sidebar-mini-icon">VM</span>
                      <span class="sidebar-normal"> Vector Map </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="../examples/widgets.html">
                <i class="tim-icons icon-settings"></i>
                <p>Widgets</p>
              </a>
            </li>
            <li>
              <a href="../examples/charts.html">
                <i class="tim-icons icon-chart-bar-32"></i>
                <p>Charts</p>
              </a>
            </li>
            <li>
              <a href="../examples/calendar.html">
                <i class="tim-icons icon-time-alarm"></i>
                <p>Calendar</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-panel">
      <div class="content">
        <div class="row">
          <div class="col-12">
            <div class="card card-chart">
              <div class="card-header">
                <div class="row">
                  <div class="col-sm-6 text-left">
                    <h5 class="card-category">Total Shipments</h5>
                    <h2 class="card-title">Performance</h2>
                  </div>
                  <div class="col-sm-6">
                    <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                      <label class="btn btn-sm btn-primary btn-simple active" id="0">
                        <input type="radio" name="options" checked>
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Accounts</span>
                        <span class="d-block d-sm-none">
                          <i class="tim-icons icon-single-02"></i>
                        </span>
                      </label>
                      <label class="btn btn-sm btn-primary btn-simple" id="1">
                        <input type="radio" class="d-none d-sm-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Purchases</span>
                        <span class="d-block d-sm-none">
                          <i class="tim-icons icon-gift-2"></i>
                        </span>
                      </label>
                      <label class="btn btn-sm btn-primary btn-simple" id="2">
                        <input type="radio" class="d-none" name="options">
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Sessions</span>
                        <span class="d-block d-sm-none">
                          <i class="tim-icons icon-tap-02"></i>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="chart-area">
                  <canvas id="chartBig1"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="info-icon text-center icon-warning">
                      <i class="tim-icons icon-chat-33"></i>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Month</p>
                      <h1 class="card-title"><span id="month"></span></h1>
                    </div>
                  </div>s
                </div>
              </div>
              <div class="card-footer">
                <hr>
                <div class="stats">
                  <i class="tim-icons icon-refresh-01"></i> Update Now
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="info-icon text-center icon-primary">
                      <i class="tim-icons icon-shape-star"></i>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Followers</p>
                      <h3 class="card-title">+45k</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <hr>
                <div class="stats">
                  <i class="tim-icons icon-sound-wave"></i> Last Research
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
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
                      <p class="card-category">Users</p>
                      <h3 class="card-title">150,000</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <hr>
                <div class="stats">
                  <i class="tim-icons icon-trophy"></i> Customers feedback
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card card-stats">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="info-icon text-center icon-danger">
                      <i class="tim-icons icon-molecule-40"></i>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Errors</p>
                      <h3 class="card-title">12</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <hr>
                <div class="stats">
                  <i class="tim-icons icon-watch-time"></i> In the last hours
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Total Shipments</h5>
                <h3 class="card-title"><i class="tim-icons icon-bell-55 text-primary"></i> 763,215</h3>
              </div>
              <div class="card-body">
                <div class="chart-area">
                  <canvas id="chartLinePurple"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Daily Sales</h5>
                <h3 class="card-title"><i class="tim-icons icon-delivery-fast text-info"></i> 3,500€</h3>
              </div>
              <div class="card-body">
                <div class="chart-area">
                  <canvas id="CountryChart"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Completed Tasks</h5>
                <h3 class="card-title"><i class="tim-icons icon-send text-success"></i> 12,100K</h3>
              </div>
              <div class="card-body">
                <div class="chart-area">
                  <canvas id="chartLineGreen"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-5">
            <div class="card card-tasks">
              <div class="card-header">
                <h6 class="title d-inline">Tasks(5)</h6>
                <p class="card-category d-inline">today</p>
                <div class="dropdown">
                  <button type="button" class="btn btn-link dropdown-toggle btn-icon" data-toggle="dropdown">
                    <i class="tim-icons icon-settings-gear-63"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#pablo">Action</a>
                    <a class="dropdown-item" href="#pablo">Another action</a>
                    <a class="dropdown-item" href="#pablo">Something else</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-full-width table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="form-check-input" type="checkbox" value="">
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p class="title">Update the Documentation</p>
                          <p class="text-muted">Dwuamish Head, Seattle, WA 8:47 AM</p>
                        </td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="" class="btn btn-link" data-original-title="Edit Task">
                            <i class="tim-icons icon-pencil"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="form-check-input" type="checkbox" value="" checked="">
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p class="title">GDPR Compliance</p>
                          <p class="text-muted">The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.</p>
                        </td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="" class="btn btn-link" data-original-title="Edit Task">
                            <i class="tim-icons icon-pencil"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="form-check-input" type="checkbox" value="">
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p class="title">Solve the issues</p>
                          <p class="text-muted">Fifty percent of all respondents said they would be more likely to shop at a company </p>
                        </td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="" class="btn btn-link" data-original-title="Edit Task">
                            <i class="tim-icons icon-pencil"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="form-check-input" type="checkbox" value="">
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p class="title">Release v2.0.0</p>
                          <p class="text-muted">Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM</p>
                        </td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="" class="btn btn-link" data-original-title="Edit Task">
                            <i class="tim-icons icon-pencil"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="form-check-input" type="checkbox" value="">
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p class="title">Export the processed files</p>
                          <p class="text-muted">The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs. </p>
                        </td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="" class="btn btn-link" data-original-title="Edit Task">
                            <i class="tim-icons icon-pencil"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="form-check-input" type="checkbox" value="">
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <p class="title">Arival at export process</p>
                          <p class="text-muted">Capitol Hill, Seattle, WA 12:34 AM</p>
                        </td>
                        <td class="td-actions text-right">
                          <button type="button" rel="tooltip" title="" class="btn btn-link" data-original-title="Edit Task">
                            <i class="tim-icons icon-pencil"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="card">
              <div class="card-header">
                <div class="tools float-right">
                  <div class="dropdown">
                    <button type="button" class="btn btn-link dropdown-toggle btn-icon" data-toggle="dropdown">
                      <i class="tim-icons icon-settings-gear-63"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#pablo">Action</a>
                      <a class="dropdown-item" href="#pablo">Another action</a>
                      <a class="dropdown-item" href="#pablo">Something else</a>
                      <a class="dropdown-item text-danger" href="#pablo">Remove Data</a>
                    </div>
                  </div>
                </div>
                <h5 class="card-title">Management Table</h5>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class="text-primary">
                      <tr>
                        <th class="text-center">
                          #
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Job Position
                        </th>
                        <th>
                          Milestone
                        </th>
                        <th class="text-right">
                          Salary
                        </th>
                        <th class="text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">
                          <div class="photo">
                            <!-- <img src="../assets/img/tania.jpg" alt="photo"> -->
                          </div>
                        </td>
                        <td>
                          Tania Mike
                        </td>
                        <td>
                          Develop
                        </td>
                        <td class="text-center">
                          <div class="progress-container progress-sm">
                            <div class="progress">
                              <span class="progress-value">25%</span>
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                            </div>
                          </div>
                        </td>
                        <td class="text-right">
                          € 99,225
                        </td>
                        <td class="text-right">
                          <button type="button" rel="tooltip" class="btn btn-success btn-link btn-icon btn-sm btn-simple" data-original-title="Tooltip on top" title="Refresh">
                            <i class="tim-icons icon-refresh-01"></i>
                          </button>
                          <button type="button" rel="tooltip" class="btn btn-danger btn-link btn-icon btn-sm btn-simple" data-original-title="Tooltip on top" title="Delete">
                            <i class="tim-icons icon-simple-remove"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <div class="photo">
                            <!-- <img src="../assets/img/robi.jpg" alt="photo"> -->
                          </div>
                        </td>
                        <td>
                          John Doe
                        </td>
                        <td>
                          CEO
                        </td>
                        <td class="text-center">
                          <div class="progress-container progress-sm">
                            <div class="progress">
                              <span class="progress-value">77%</span>
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 77%;"></div>
                            </div>
                          </div>
                        </td>
                        <td class="text-right">
                          € 89,241
                        </td>
                        <td class="text-right">
                          <button type="button" rel="tooltip" class="btn btn-success btn-link btn-sm btn-icon btn-simple" data-original-title="Tooltip on top" title="Refresh">
                            <i class="tim-icons icon-refresh-01"></i>
                          </button>
                          <button type="button" rel="tooltip" class="btn btn-danger btn-link btn-sm btn-icon btn-simple" data-original-title="Tooltip on top" title="Delete">
                            <i class="tim-icons icon-simple-remove"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <div class="photo">
                            <!-- <img src="../assets/img/lora.jpg" alt="photo"> -->
                          </div>
                        </td>
                        <td>
                          Alexa Mike
                        </td>
                        <td>
                          Design
                        </td>
                        <td class="text-center">
                          <div class="progress-container progress-sm">
                            <div class="progress">
                              <span class="progress-value">41%</span>
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 41%;"></div>
                            </div>
                          </div>
                        </td>
                        <td class="text-right">
                          € 92,144
                        </td>
                        <td class="text-right">
                          <button type="button" rel="tooltip" class="btn btn-success btn-link btn-icon btn-sm btn-simple" data-original-title="Tooltip on top" title="Refresh">
                            <i class="tim-icons icon-refresh-01"></i>
                          </button>
                          <button type="button" rel="tooltip" class="btn btn-danger btn-link btn-icon btn-sm btn-simple" data-original-title="Tooltip on top" title="Delete">
                            <i class="tim-icons icon-simple-remove"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <div class="photo">
                            <!-- <img src="../assets/img/jana.jpg" alt="photo"> -->
                          </div>
                        </td>
                        <td>
                          Jana Monday
                        </td>
                        <td>
                          Marketing
                        </td>
                        <td class="text-center">
                          <div class="progress-container progress-sm">
                            <div class="progress">
                              <span class="progress-value">50%</span>
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
                            </div>
                          </div>
                        </td>
                        <td class="text-right">
                          € 49,990
                        </td>
                        <td class="text-right">
                          <button type="button" rel="tooltip" class="btn btn-success btn-link btn-sm btn-icon" data-original-title="Tooltip on top" title="Refresh">
                            <i class="tim-icons icon-refresh-01"></i>
                          </button>
                          <button type="button" rel="tooltip" class="btn btn-danger btn-link btn-sm btn-icon" data-original-title="Tooltip on top" title="Delete">
                            <i class="tim-icons icon-simple-remove"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <div class="photo">
                            <!-- <img src="../assets/img/mike.jpg" alt="photo"> -->
                          </div>
                        </td>
                        <td>
                          Paul Dickens
                        </td>
                        <td>
                          Develop
                        </td>
                        <td class="text-center">
                          <div class="progress-container progress-sm">
                            <div class="progress">
                              <span class="progress-value">100%</span>
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="text-right">
                          € 69,201
                        </td>
                        <td class="text-right">
                          <button type="button" rel="tooltip" class="btn btn-success btn-link btn-sm  btn-icon" data-original-title="Tooltip on top" title="Refresh">
                            <i class="tim-icons icon-refresh-01"></i>
                          </button>
                          <button type="button" rel="tooltip" class="btn btn-danger btn-link btn-sm btn-icon" data-original-title="Tooltip on top" title="Delete">
                            <i class="tim-icons icon-simple-remove"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <div class="photo">
                            <!-- <img src="../assets/img/emilyz.jpg" alt="photo"> -->
                          </div>
                        </td>
                        <td>
                          Manuela Rico
                        </td>
                        <td>
                          Manager
                        </td>
                        <td class="text-center">
                          <div class="progress-container progress-sm">
                            <div class="progress">
                              <span class="progress-value">15%</span>
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 15%;"></div>
                            </div>
                          </div>
                        </td>
                        <td class="text-right">
                          € 99,201
                        </td>
                        <td class="text-right">
                          <button type="button" rel="tooltip" class="btn btn-success btn-link btn-sm btn-icon" data-original-title="Tooltip on top" title="Refresh">
                            <i class="tim-icons icon-refresh-01"></i>
                          </button>
                          <button type="button" rel="tooltip" class="btn btn-danger btn-link btn-sm btn-icon" data-original-title="Tooltip on top" title="Delete">
                            <i class="tim-icons icon-simple-remove"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Global Sales by Top Locations</h4>
                <p class="card-category">All products that were shipped</p>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="table-responsive">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>
                              <div class="flag">
                                <!-- <img src="../assets/img/US.png" alt="flag"> -->
                              </div>
                            </td>
                            <td>USA</td>
                            <td class="text-right">
                              2.920
                            </td>
                            <td class="text-right">
                              53.23%
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="flag">
                                <!-- <img src="../assets/img/DE.png" alt="flag"> -->
                              </div>
                            </td>
                            <td>Germany</td>
                            <td class="text-right">
                              1.300
                            </td>
                            <td class="text-right">
                              20.43%
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="flag">
                                <!-- <img src="../assets/img/AU.png" alt="flag"> -->
                              </div>
                            </td>
                            <td>Australia</td>
                            <td class="text-right">
                              760
                            </td>
                            <td class="text-right">
                              10.35%
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="flag">
                                <!-- <img src="../assets/img/GB.png" alt="flag"> -->
                              </div>
                            </td>
                            <td>United Kingdom</td>
                            <td class="text-right">
                              690
                            </td>
                            <td class="text-right">
                              7.87%
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="flag">
                                <!-- <img src="../assets/img/RO.png" alt="flag"> -->
                              </div>
                            </td>
                            <td>Romania</td>
                            <td class="text-right">
                              600
                            </td>
                            <td class="text-right">
                              5.94%
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="flag">
                                <!-- <img src="../assets/img/BR.png" alt="flag"> -->
                              </div>
                            </td>
                            <td>Brasil</td>
                            <td class="text-right">
                              550
                            </td>
                            <td class="text-right">
                              4.34%
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-md-6 ml-auto mr-auto">
                    <div id="worldMap" style="height: 300px;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
<!--     <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
    <button v-on:click="speedUp()">Speed Up</button>
    <button v-on:click="speedDown()">Slow Down</button> -->
    <!-- <div style="background-color: #1a1e34;"> -->
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
    </div>
      <button v-on:click="buyCar(), pauseClock()">Buy Car</button>
      <br>
      <button v-on:click="openCI(), pauseClock()">Compound Interest</button>
      <br>
      <button v-on:click="openRE(), pauseClock()">Buy Real Estate</button>
  <!-- </div> -->

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
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="returnStart(), resumeClock(), startTimer()">Submit</button>
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
  var home_equity = "";
  var property_tax = "";
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
  var properties = {};
  var property = {};

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

            if (count == 0){
            // when January hits
              console.log("testing");
              oneYear();
            } else if (count == 11) {
            // resetting month count to month 1
              count = -1
            };

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

            // home_appreciation = Math.floor(Math.random() * 7) + 1;
            // console.log("this is the home appreciation rate:", home_appreciation)

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


        function real_estate(ev) {
          ev.preventDefault();
          var property = {
            // home_money_down: document.getElementById('money_down').value,
            // home_principal: document.getElementById('home_principal').value,
            // home_interest: document.getElementById('home_interest').value,
            // home_years: document.getElementById('home_years').value,
        home_money_down: parseInt(this.home_money_down),
        home_principal: parseInt(this.home_principal),
        home_interest: parseInt(this.home_interest) / 100 / 12,
        home_years: parseInt(this.home_years),
        home_terms: (home_years * 12),
        home_pay_b4_i: (home_principal/home_terms),

          }

          properties.push(property);
          console.log("**********************", property);
          console.log("**********************", properties);

          };
  



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
        home_equity = home_money_down
 
      },
    },
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
</script>

<!-- date management -->
<!-- moment.js -->
<!-- start with a counter associate to month -->
