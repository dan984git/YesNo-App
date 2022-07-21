<template>
  <div class="Counter-Cont">
    <!-- GET NEW TITLE WITH PROPERTIES -->
    <h2>{{ customTitle }}</h2>
    <p>{{ counter }}<sup>2</sup> = {{ squareCounter }}</p>
    <p data-testid="counter">{{ counter }}</p>
    <div class="buttons-container">
      <button class="btnV" @click="decreaseCounter">-1</button>
      <button class="btnV" v-on:click="increaseCounter">+1</button>
    </div>
  </div>
</template>

<script>
export default {
  /********** RECEIVING THE PROPERTIES ***********/
  // props: ['title', 'start'],
  props: {
    title: String,
    start: {
      type: Number,
      default: 5,
      validator(value) {
        return value >= 0;
      },
      //required: true,
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter;
    },
    decreaseCounter() {
      this.counter--;
    },
    increaseCounter() {
      this.counter++;
    },
  },
  computed: {
    squareCounter() {
      return this.counter * this.counter;
    },
    customTitle() {
      // return this.title ? this.title : "Counter";
      /********** SET THE PROPERTIE ***********/
      return this.title || "Counter";
    },
  },
};
</script>

<style>
.Counter-Cont {
  color: aliceblue;
}
.btnV {
  border: 1px solid rgba(0, 0, 0, 0);
  width: 50px;
  margin: 0 5px;
  background-color: #64bb87;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

.btnV:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}

.Counter-Cont {
  position: relative;
  z-index: 99;
}
</style>