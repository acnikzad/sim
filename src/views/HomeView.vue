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
        <input type="text" v-model="income"/>
      </form>
      <h1>The Month is <span id="month"></span></h1>
      <h1>The Year is <span id="year"></span></h1>
      <p>Your income is {{income}} per year</p>
      <h1>Your savings account is $<span id="savings"></span></h1>

  </div>
</template>

<script>

var moment = require('moment');
var no
var income = 35000;

var save_rate = .05;
var save_account = 0;

var count = -1;
var rate = .4;
var product = 0;
var year = 1987;
var x = 0;
var month = "";
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default {
  name: 'ExampleModal',
  data: function() {
    return {
      // months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      // month: "Feb",
      // year: "",
      // x:0,

        };
      },
  created: function() {
    // this.interval = setInterval(() => this.startHere(), 1000);
    //   console.log("run", this);
      // var timeoutID = setTimeout(bye, 3000);
      // console.log('hello');
      // clearTimeout(timeoutID);
      // function bye() {
      //   console.log('goodbye');
      // }

      var intId = setInterval(counter, 1000);
      function counter() {
        document.getElementById("month").innerHTML = month;
        document.getElementById("year").innerHTML = year;
        console.log(++count);
        console.log(year);
        month = (months[count])
        if (count == 11) {
          count = -1
          year = year + 1
        }

        save_account = save_account + (income/12)*save_rate
        console.log(save_account);
        document.getElementById("savings").innerHTML = save_account;
      };


    },

    methods: {
      startHere() {
        console.log("x");
        while (x <= 11) {
          if (x <= 11) {
            month = (months[x]);
            console.log(month);
            (x++)
          }
        }
        // moment().add(1000000, 'milliseconds'); // a million milliseconds
      }, 
      // setTimeout(bye, 3000);
      // console.log('hello');
      // function bye() {
      //   console.log('goodbye');
      // }
    },
  }
</script>

<!-- date management -->
<!-- moment.js -->
<!-- start with a counter associate to month -->
