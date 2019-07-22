// Section 01
let vm01 = new Vue({
  el: "#section-01",
  data() {
    return {
      msg: "Hello World"
    };
  }
  // data: {
  //   msg: "Hello World"
  // }
});

// Section 02
let vm02 = new Vue({
  el: "#section-02",
  data() {
    return {
      msg: "안녕하세요"
    };
  }
});

// Section 03
let vm03 = new Vue({
  el: "#section-03",
  data() {
    return {
      userData: {
        name: "윤명훈",
        gender: "M",
        age: 1982,
        organzation: "Zionex Inc."
      }
    };
  }
});
