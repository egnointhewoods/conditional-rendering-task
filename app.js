const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: "",
      isListVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    removeItem(index) {
      this.tasks.splice(index, 1);
    },
    toggleListVisibility() {
      this.isListVisible = !this.isListVisible;
    },
  },
});

app.mount("#assignment");
