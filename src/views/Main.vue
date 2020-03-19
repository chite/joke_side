<template>
  <ul class="m-body__list">
    <li v-for="(item, index) in getList" :key="index" class="m-body__item">
      <div class="m-body__checkbox m-body__checkbox--light"></div>
      <font-awesome-icon :icon="['far', 'star']" />
      <span class="m-body__name">{{item.object}}</span>
      <span class="m-body__title">{{item.main}}</span>
      <span class="m-body__content">-{{item.content}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  computed: {
    getList() {
      return this.$store.state.receive;
    }
  }
};
</script>