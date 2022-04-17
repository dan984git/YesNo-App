<template>
  <div>
    <img v-if="img" class="bg" :src="img" alt="bg">
    <div class="bg-dark"></div>

    <div class="indecition-container">
      <input
        v-model="question"
        type="text"
        placeholder="Hazme un pregunta :D"
      />
      <p>Recuerda terminar con un signo de interrogación (?)</p>

      <div v-if="isValidQuestion">
        <h2>{{ question }}</h2>
        <h1>{{ answer }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: null,
      answer: null,
      img: null,
      isValidQuestion: false,
    };
  },
  methods: {
    async getAnswer() {
      this.answer = ".... Pensando";

      const { answer, image } = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );

      this.answer = answer.toUpperCase();
      this.img = image;
    },
  },
  watch: {
    question(value, oldValue) {
      this.isValidQuestion = false;

      if (!value.includes("?")) return;

      
      this.isValidQuestion = true;

      this.getAnswer();
    },
  },
};
</script>

<style scoped>
.bg {
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}
.indecition-container p {
  margin-top: 5px;
  font-size: 16px;
  color: rgb(206, 206, 206);
}

.indecition-container {
  position: relative;
  z-index: 99;
}

input {
  width: 350px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>