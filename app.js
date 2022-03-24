const app = Vue.createApp({
  data() {
    return {
      firstText: '',
      secondText: '',
      secondTextConfirmed: '',
    };
  },
  methods: {
    showAlert() {
      alert('Hello!');
    },
    saveFirstInput(event) {
      this.firstText = event.target.value;
    },
    saveSecondInput(event) {
      this.secondText = event.target.value;
    },
    saveSubmittedText() {
      this.secondTextConfirmed = this.secondText;
    },
  },
});

app.mount('#assignment');
