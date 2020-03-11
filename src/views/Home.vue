<template>
  <article>
    <search-bar></search-bar>
    <div class="home">
      <ul class="list list__single">
        <li
          :key="item.id"
          class="list__item list__item--single"
          v-for="item in getText"
        >{{ item.text }}</li>
      </ul>
      <ul class="list list__double">
        <li
          :key="item.id"
          class="list__item list__item--double"
          v-for="(item, index) in getRank"
        >
          <p class="list__rank letter">
            <span>{{index}}</span>
          </p>
          <h5 class="letter">{{item.name}}</h5>
          <h6 class="letter">{{item.score}}</h6>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import SearchBar from "../components/SearchBar";
export default {
  name: "Home",
  components: {
    SearchBar
  },
  computed: {
    getText() {
      return this.$store.state.jokes;
    },
    getRank() {
      return this.$store.state.rank;
    }
  }
};
</script>
