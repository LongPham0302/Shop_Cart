<template>
  <div id="app">
    <div class="container">
      <!-- TITLE : START -->
      <div class="page-header">
        <notify :class="{ show: loading }" />

        <cart-title></cart-title>
      </div>
      <!-- TITLE : END -->

      <div class="row">
        <!-- LIST PRODUCT : START -->
        <product-list></product-list>
        <!-- LIST PRODUCT : END -->
        <!-- CART : START -->
        <cart-wrapper></cart-wrapper>
        <!-- CART : END -->
      </div>
    </div>
    <notifications group="foo" position="bottom right" />
  </div>
</template>

<script>
import CartTitle from "./components/CartTitle.vue";
import ProductList from "./components/ProductList.vue";
import CartWrapper from "./components/CartWarpper.vue";
import Notify from "./components/Notify.vue";
import { mapState } from "vuex";
export default {
  name: "app",
  components: {
    CartTitle,
    ProductList,
    CartWrapper,
    Notify
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["loading"])
  }
};
</script>

<style>
  .notifications {
    padding-right: 10x;
    padding-bottom: 10px;
  }
</style>
