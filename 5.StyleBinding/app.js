// Section 01
let vm01 = new Vue({
  el: "#section-01",
  data() {
    return {
      activeColor: "red",
      fontSize: 30
    };
  }
});

// Section 02
let vm02 = new Vue({
  el: "#section-02",
  data() {
    return {
      styleObject: {
        color: "blue",
        fontSize: "20px",
        fontStyle: "italic"
      }
    };
  }
});
