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
      <h1>The Month is <span id="attempt"></span></h1>

  </div>
</template>

<script>

var moment = require('moment');
var no
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
var income = "";
var count = -1;
var rate = .4;
var product = 0;
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

      var intId = setInterval(counter, 500);
      function counter() {
        document.getElementById("attempt").innerHTML = month;
        console.log(++count);
        month = (months[count])
        if (count == 11) {
          count = -1
        }
        // document.getElementById("attempt").innerHTML = month;
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
