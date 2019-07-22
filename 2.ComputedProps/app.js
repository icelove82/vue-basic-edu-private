// Section 01
let vm01 = new Vue({
  el: "#section-01",
  data() {
    return {
      firstName: "윤",
      lastName: "명훈"
    };
  }
});

// Section 02
let vm02 = new Vue({
  el: "#section-02",
  data() {
    return {
      firstName: "윤",
      lastName: "명훈"
    };
  },
  computed: {
    fullName() {
      return this.firstName + this.lastName;
    }
  }
});

// Section 03
let vm03 = new Vue({
  el: "#section-03",
  data() {
    return {
      animals: [
        { name: "냥이", age: 1, type: "cat" },
        { name: "멍이", age: 2, type: "dog" },
        { name: "꿀꿀이", age: 3, type: "pig" }
      ]
    };
  },
  computed: {
    onlyCats() {
      return this.animals.filter(item => {
        return item.type === "cat";
      });
    }
  }
});
