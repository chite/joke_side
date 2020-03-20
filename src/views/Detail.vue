<template>
  <article class="letter">
    <section class="letter__head">
      <div class="letter__head--l">
        <h4 class="letter__title">
          {{getSpecificData.main}}
          <span class="letter__btn">
            收件匣&nbsp;
            <font-awesome-icon icon="times" />
          </span>
        </h4>
      </div>
      <div class="letter__iconGroup">
        <font-awesome-icon icon="print" />
        <font-awesome-icon icon="external-link-square-alt" />
      </div>
    </section>
    <section class="letter__main">
      <aside class="letter__aside">
        <div class="letter__photocontainer">
          <div
            :style="{backgroundImage: 'url('+ selfPt +')'}"
            class="icon"
          ></div>
        </div>
      </aside>
      <div class="letter__body">
          <p class="letter__object">{{getSpecificData.object}}</p>
          <p class="letter__content">{{getSpecificData.content}}</p>
      </div>
    </section>
  </article>
</template>
<script>
import selfPt from '../assets/unnamed2.png';
export default {
  name: "Detail",
  computed: {
    getSpecificData() {
      const pointer = this.$store.state.specific;
      return this.$store.state[pointer[0]][pointer[1]];
    }
  },
  data(){
      return {
          selfPt
      }
  }
};
</script>