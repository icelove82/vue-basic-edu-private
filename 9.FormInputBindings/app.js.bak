// Section 01
let vm01 = new Vue({
  el: "#section-01",
  data() {
    return {
      message: ""
    };
  },
  watch: {
    message(newValue, oldValue) {
      if (newValue.indexOf("zionex") >= 0) {
        alert("zionex 라는 문구를 입력 되었습니다.");
      }
    }
  }
});

// Section 02
let vm02 = new Vue({
  el: "#section-02",
  data() {
    return {
      inputValue01: "",
      inputValue02: "",
      placeholder01: "Press Enter",
      placeholder02: "Press Ctrl+Enter"
    };
  },
  methods: {
    submitEnter() {
      if (this.inputValue01.length > 0) {
        alert("Enter 키를 입력하였습니다.");
      }
    },
    submitCtrlEnter() {
      if (this.inputValue02.length > 0) {
        alert("Ctrl + Enter 키를 입력하였습니다.");
      }
    }
  }
});
