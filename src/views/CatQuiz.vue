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
          <b-checkbox v-model="currentAnswer[key]"></b-checkbox>
        </div>
      </div>
    </div>

    <b-button :disabled="isButtonDisabled" @click="nextQuestion">Click Me</b-button>
    <b-progress :value="10" size="is-large" show-value>1 out of 10</b-progress>
  </div>
</template>

<script>
import data from "../data";
export default {
  computed: {
    currentNumber() {
      const currentQuestionNumber = this.currentIdAsNumber + 1;
      return currentQuestionNumber;
    },
    currentIdAsNumber() {
      return Number.parseInt(this.currentId, 10);
    },
    isButtonDisabled() {
      const clickedAnswers = Object.values(this.currentAnswer);
      const trueAnswers = clickedAnswers.filter(a => a === true);
      if (trueAnswers.length === 1) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    nextQuestion() {
      //console.log(this.currentId);
      const nextId = this.currentIdAsNumber + 1;
      //console.log(JSON.stringify(this.currentAnswer));
      this.setQuestion(nextId);
    },
    setQuestion(id) {
      //console.log(id);
      this.currentId = "" + id;
      this.currentQuestion = this.questions[this.currentId];
      this.currentAnswer = {};
    }
  },
  data() {
    return {
      questions: data.questions,
      currentQuestion: Object,
      currentId: String,
      currentAnswer: Object
    };
  },
  mounted() {
    this.setQuestion(0);
  }
};
</script>

<style>
</style>