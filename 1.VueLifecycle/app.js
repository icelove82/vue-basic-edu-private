// Section 01
let vm01 = new Vue({
  el: "#section-01",
  data() {
    return {
      data: 1
    };
  },
  beforeCreate() {
    console.log("0. Event => ::beforeCreate");
  },
  created() {
    console.log("1. Event => ::created");
  },
  beforeMount() {
    console.log("2. Event => ::beforeMount");
  },
  mounted() {
    console.log("3. Event => ::mounted");
  },
  beforeUpdate() {
    console.log("Event => ::beforeUpdate");
  },
  updated() {
    console.log("Event => ::updated");
  }
});
