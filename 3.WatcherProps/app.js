// Section 01
let vm01 = new Vue({
  el: "#section-01",
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

// Section 02
let vm02 = new Vue({
  el: "#section-02",
  data() {
    return {
      inputData: "",
      resultData: ""
    };
  },
  watch: {
    inputData(newValue, oldValue) {
      if (newValue.length > 0) {
        this.resultData = `"${newValue}" 를 입력하였습니다.`;
      } else {
        this.resultData = "입력한 내용을 전부 지웠습니다.";
      }
    }
  }
});
