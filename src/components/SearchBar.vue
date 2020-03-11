<template>
  <form class="m-form">
    <label class="m-form__label" for="inputdata">
      <input
        id="input-data"
        class="m-form__input"
        list="input-list"
        name="inputData"
        placeholder="請輸入關鍵字"
        type="text"
        :value="val"
        @keyup="handleInput"
      />
      <datalist
        id="input-list"
        class="m-form__datalist"
        v-if="sliceText.length"
      >
        <option
          :key="item.index"
          v-for="item in sliceText"
        >{{item.text}}</option>
      </datalist>
    </label>
    <button 
    class="m-form__btn"
    @click="handleClick"
    >送出</button>
  </form>
</template>
<script>
export default {
  name: "searchBar",
  data() {
    return { val: "" };
  },
  computed: {
    getText() {
      if (this.val) {
        return this.$store.state.jokes.filter(val => {
          return val.text.includes(this.val);
        });
      } else {
        return [];
      }
    },
    sliceText() {
      if (this.getText.length) {
        return this.getText.map(val => {
          let index = val.text.search(this.val);
          let startIndex = index - 5 < 0 ? 0 : index - 5;
          let endIndex = index + 5 > val.text.length - 1 ? val.text.length - 1 : index + 5;
          let newObj = {
            ...val,
            text: val.text.slice(startIndex, endIndex)
          };
          return newObj;
        });
      } else {
        return [];
      }
    }
  },
  methods: {
    handleInput(e) {
      this.val = e.target.value;
    },
    handleClick(e){
        e.preventDefault();
        this.$store.commit('setKeyWord', {text: this.val});
        this.$router.push('/result');
    }
  }
};
</script>