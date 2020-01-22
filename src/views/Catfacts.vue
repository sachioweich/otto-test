<template>
  <div>
    <b-carousel :interval="interval">
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-${carousel.color}`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{carousel.text}}</h1>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
    <section class="section myfooter">
      <b-pagination
        :total="total"
        :current.sync="current"
        :range-before="2"
        :range-after="2"
        :per-page="perPage"
        order="is-centered"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
        @change="renderFacts"
      ></b-pagination>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      facts: [],
      total: 0,
      current: 0,
      perPage: 10,
      interval: 8500,
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" }
      ]
    };
  },
  methods: {
    async fetchFacts() {
      const facts = await axios.get("https://cat-fact.herokuapp.com/facts");
      //console.log(facts);
      this.facts = facts.data.all;
      this.total = this.facts.length;
      this.current = 1;

      // this.$buefy.notification.open("Clicked!!");
    },
    renderFacts(page) {
      //console.log("Page: ", page);
      const index = page - 1;
      const start = index * this.perPage;
      const end = start + this.perPage;

      const slides = this.facts.slice(start, end).map(s => ({
        id: s._id,
        text: s.text + "(" + s.type + ")",
        color: "primary"
      }));
      this.carousels = slides;
      //console.log(this.carousels);
    }
  },
  mounted: async function() {
    await this.fetchFacts();
    this.renderFacts(1);
  }
};
</script>

<style scoped lang="scss">
.myfooter {
  position: absolute;
  bottom: 0;
  height: auto;
  width: 100%;
}
</style>