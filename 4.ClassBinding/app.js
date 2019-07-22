// Section 01
let vm01 = new Vue({
  el: "#section-01",
  data() {
    return {
      isActive: true
    };
  }
});

// Section 02
let vm02 = new Vue({
  el: "#section-02",
  data() {
    return {
      classObject: {
        active: true,
        danger: true
      }
    };
  }
});
