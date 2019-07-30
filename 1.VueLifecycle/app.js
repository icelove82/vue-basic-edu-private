// Section 01
let vm01 = new Vue({
  el: "#section-01",
  data() {
    return {
      data: 1,
      msg: "hello"
    };
  },
  beforeCreate() {
    console.log("0. Lifecycle => ::beforeCreate");
  },
  created() {
    console.log("1. Lifecycle => ::created");
  },
  beforeMount() {
    console.log("2. Lifecycle => ::beforeMount");
  },
  mounted() {
    console.log("3. Lifecycle => ::mounted");
  },
  beforeUpdate() {
    if (this.msg === "hello") {
      this.msg = "Hello, World.";
    } else {
      this.msg = "Hi, World.";
    }
    console.log("Lifecycle => ::beforeUpdate");
  },
  updated() {
    console.log("Lifecycle => ::updated");
  }
});
