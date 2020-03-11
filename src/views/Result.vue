<template>
<article>
    <search-bar></search-bar>
    <ul class="list list__main" v-if="getKeyWord">
         <li
          :key="item.id"
          class="list__item list__item--single"
          v-for="item in getText"
        >{{ item.text }}</li>
    </ul>
</article>
</template>
<script>
import SearchBar from "../components/SearchBar";
export default {
  name: "Result",
  components: {
    SearchBar
  },
  computed: {
    getKeyWord(){
        return this.$store.state.keyword;
    },
    getText() {
        return this.$store.state.jokes.filter(val => {
          return val.text.includes(this.$store.state.keyword);
        })
    }
  }
};
</script>