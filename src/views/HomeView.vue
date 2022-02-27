<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button> START </button>
  </div>
</template>

<script>

export default {
  name: 'ExampleModal',
  data: function() {
    return {
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"],
      month: "",
      year: ""

    };
  },
  created: function() {
    this.interval = setInterval(() => this.realTimeLocation(), 500);
      console.log("run");
    },


  methods: {
    // alertCreate() {
    //   console.log('creating alert...');
    //   $('#exampleModalCenter').modal('show');
    //   this.center = {lat:this.latitude, lng: this.longitude},
    //   this.zoom = 16;
    //   this.markers.push({position: {lat:this.latitude, lng:this.longitude}});
    //   console.log(this.markers);
    // },
    // alertIndex() {
    //   console.log('indexing alert...');
    //   this.center = {lat:this.latitude, lng: this.longitude},
    //   this.zoom = 16;
    //   this.markers.push({position: {lat:this.latitude, lng:this.longitude}});
    //   console.log(this.markers);
    // },
    // alertNeighbors() {
    //   console.log('alerting neighbors....');
    //   console.log(this.user);
    //   console.log(this.user["dogs"][0]["name"]);
    //   console.log(this.user["dogs"][0]["breed"]);
    //   console.log(this.user["dogs"][0]["color"]);
    //   var params = {
    //     dog_id: this.user["dogs"][0]["id"],
    //     user_id: this.user["id"],
    //     latitude: this.latitude,
    //     longitude: this.longitude,
    //     dog_name: this.user["dogs"][0]["name"],
    //     color: this.user["dogs"][0]["color"],
    //     breed: this.user["dogs"][0]["breed"],
    //     address: this.address,
    //     owner_name: this.user["first_name"],
    //     contact_number: this.user["phone_number"],
    //   };
    //   $('#exampleModalCenter').modal('hide');
    //   axios
    //     .post("/api/alerts", params)
    //     .catch(error => {
    //       this.errors = error.response.data.errors;
    //     });
    // },
    realTimeLocation() {

      console.log("x");
    }
  },

  };
</script>
