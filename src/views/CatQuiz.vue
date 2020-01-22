<template>
  <div>
    <p>Frage {{currentNumber}}:</p>
    <p>{{currentQuestion.text}}</p>

    <div class="level" v-for="(answer,key) in currentQuestion.answers" :key="key">
      <div class="level-left">
        <div class="level-item">
          <p>{{answer.text}}</p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <b-checkbox></b-checkbox>
        </div>
      </div>
    </div>

    <b-button @click="nextQuestion">Click Me</b-button>
    <b-progress :value="10" size="is-large" show-value>1 out of 10</b-progress>
  </div>
</template>

<script>
export default {
  computed: {
    currentNumber() {
      const currentQuestionNumber = this.currentIdAsNumber + 1;
      return currentQuestionNumber;
    },
    currentIdAsNumber() {
      return Number.parseInt(this.currentId, 10);
    }
  },
  methods: {
    nextQuestion() {
      console.log(this.currentId);
      const nextId = this.currentIdAsNumber + 1;
      this.setQuestion(nextId);
    },
    setQuestion(id) {
      console.log(id);
      this.currentId = "" + id;
      this.currentQuestion = this.questions[this.currentId];
    }
  },
  data() {
    return {
      questions: {
        "0": {
          text: "Frage1",
          answers: {
            "0": {
              text: "Antwort1",
              valid: true
            },
            "1": {
              text: "Antwort2",
              valid: false
            },
            "2": {
              text: "Antwort3",
              valid: false
            },
            "3": {
              text: "Antwort4",
              valid: false
            }
          }
        },
        "1": {
          text: "Frage2",
          answers: {
            "0": {
              text: "aaa",
              valid: true
            },
            "1": {
              text: "bbb",
              valid: false
            },
            "2": {
              text: "ccc",
              valid: false
            },
            "3": {
              text: "ddd",
              valid: false
            }
          }
        }
      },
      currentQuestion: Object,
      currentId: String
    };
  },
  mounted() {
    this.setQuestion(0);
  }
};
</script>

<style>
</style>