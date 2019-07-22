// Section 01
let vm01 = new Vue({
  el: "#section-01",
  data() {
    return {
      inputData: ""
    };
  },
  watch: {
    inputData() {
      alert("입력 발생하였습니다.");
    }
  }
});

// Section 02
let vm02 = new Vue({
  el: "#section-02",
  data() {
    return {
      inputData: ""
    };
  },
  watch: {
    inputData(newValue, oldValue) {
      let alertMsg = "입력전: " + oldValue + " / " + "입력후: " + newValue;
      alert(alertMsg);
    }
  }
});
