const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      isNinja: false,
    };
  },
  methods: {
    increaseCounter() {
      if (this.counter === 99) {
        this.counter = 0;
      } else {
        this.counter++;
        this.isNinja = true;
      }
    },
    resetCounter() {
      this.counter = 0;
      this.isNinja = false;
    },
    increaseBlockWidth() {
      const block = this.$refs.ninjaArea;
      block.style.width = this.counter + "vw";
    },
    handleKeyDown(keyPressed) {
      if (keyPressed.key === "Enter") {
        this.increaseCounter();
        this.increaseBlockWidth();
      }
    },
  },
}).mount("#app");
