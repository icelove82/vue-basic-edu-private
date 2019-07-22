// Section 01
let vm01 = new Vue({
  el: "#section-01",
  data: {
    counter: 0
  }
});

// Section 02
let vm02 = new Vue({
  el: "#section-02",
  data() {
    return {
      items: [
        {
          title: "Design",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Code",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Video",
          due: "20th Dec 2018",
          status: "beta",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Forum",
          due: "20th Oct 2018",
          status: "alpa",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Adipisicing",
          due: "20th Oct 2018",
          status: "testing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Mollitia",
          due: "20th Oct 2018",
          status: "release",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Zxing",
          due: "20th Oct 2018",
          status: "ready",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
  },
  methods: {
    sort(param) {
      if (param == 0) {
        //alert("0");
        this.items.sort((a, b) => (a.title < b.title ? -1 : 1));
      } else {
        //alert("1");
        this.items.sort((a, b) => (a.title < b.title ? 1 : -1));
      }
    }
  }
});

// Section 03
let vm03 = new Vue({
  el: "#section-03",
  data() {
    return {
      placeholder01: "Press Enter",
      placeholder02: "Press Ctrl+Enter"
    };
  },
  methods: {
    submitEnter() {
      alert("Enter 키를 입력하였습니다.");
    },
    submitCtrlEnter() {
      alert("Ctrl + Enter 키를 입력하였습니다.");
    }
  }
});
