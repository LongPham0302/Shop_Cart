<template>
  <tbody id="my-cart-body">
    <!-- CART BODY -->
    <template v-if="items.length">
      <cart-body-item
        v-for="(item, index) in items"
        :key="item.product.id"
        :item="item"
        :index="index + 1"
      />
    </template>
    <th v-else colspan="6">{{ NOTI_EMPTY_PRODUCT }}</th>
  </tbody>
</template>
<script>
import CartBodyItem from "./CartBodyItem.vue";
import { mapState } from "vuex";
import { NOTI_EMPTY_PRODUCT } from "../constants/config";
export default {
  name: "cart-body-table",
  data() {
    return {
      NOTI_EMPTY_PRODUCT
    };
  },
  components: {
    CartBodyItem
  },
  computed: {
    ...mapState({ items: state => state.carts.listCart })
  }
};
</script>
