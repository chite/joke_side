<template>
  <ul class="m-body__list">
    <li
      :key="index"
      @click="handleClick(index)"
      class="m-body__item"
      v-for="(item, index) in getList"
    >
      <div class="m-body__checkbox m-body__checkbox--light"></div>
      <font-awesome-icon :icon="['far', 'star']" />
      <span class="m-body__name">{{item.object}}</span>
      <span class="m-body__title">{{item.main}}</span>
      <span class="m-body__content">-{{item.content}}</span>
      <div class="m-body__float">
        <div class="m-body__icontainer">
          <div
            :style="{backgroundImage: 'url('+ downloadIcon +')'}"
            class="icon"
          ></div>
        </div>
        <div class="m-body__icontainer">
          <div
            :style="{backgroundImage: 'url('+ garbageIcon +')'}"
            class="icon"
          ></div>
        </div>
        <div class="m-body__icontainer">
          <div
            :style="{backgroundImage: 'url('+ mailIcon +')'}"
            class="icon"
          ></div>
        </div>
        <div class="m-body__icontainer">
          <div
            :style="{backgroundImage: 'url('+ timeIcon +')'}"
            class="icon"
          ></div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import Download from "../assets/box.png";
import Garbage from "../assets/garbagecan.png";
import Mail from "../assets/all.png";
import Time from "../assets/delay.png";
export default {
  props: {
    category: String
  },
  computed: {
    getList() {
      return this.$store.state[this.category];
    }
  },
  data() {
    return {
      downloadIcon: Download,
      garbageIcon: Garbage,
      mailIcon: Mail,
      timeIcon: Time
    };
  },
  methods: {
    handleClick(index) {
      console.log(this.category, index);
      this.$store.commit("chooseData", {
        category: this.category,
        index
      });
      this.$router.push('/detail').catch(()=>{})
    }
  }
};
</script>