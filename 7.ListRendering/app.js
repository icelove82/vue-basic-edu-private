// Section 01
let vm01 = new Vue({
  el: "#section-01",
  data: {
    items: [
      { message: "List item 1" },
      { message: "List item 2" },
      { message: "List item 3" }
    ]
  }
});

// Section 02
let vm02 = new Vue({
  el: "#section-02",
  data: {
    parentMessage: "Parent",
    items: [
      { id: 0, message: "List item 1" },
      { id: 1, message: "List item 2" },
      { id: 2, message: "List item 3" }
    ]
  }
});
