<template>
  <tr>
    <th scope="row">{{ index }}</th>
    <td width="25%">{{ product.name }}</td>
    <td>{{ FormatPrice }}</td></td>
    <td>
      <input
       :value=" item.quantity "
       @blur="handelUpdate" type="number" value="1" min="1" />
    </td>
    <td>
      <strong>{{ FormatTotal }}</strong>
    </td>
    <td>
      <a @click.prevent="" class="label label-info update-cart-item" href="#" data-product=""
        >Update</a
      >
      <a @click.prevent="HandelDelete" class="label label-danger delete-cart-item" href="#" data-product=""
        >Delete</a
      >
    </td>
  </tr>
</template>
<script>
import { toCurrency, validateQuantity } from "./help";
import { mapActions, mapGetters } from "vuex";
import {
  NOTI_ACT_DELETE,
  NOTI_GREATER_THAN_ONE,
  NOTI_ACT_UPDATE
} from "../constants/config";
export default {
  name: "cart-body-item",
  props: {
    item: { type: Object, default: null },
    index: Number
  },
  computed: {
    ...mapGetters({ footIfor: "carts/footIfor" }),
    product() {
      return this.item.product;
    },
    FormatPrice() {
      return toCurrency(this.product.price, "USD", "right");
    },
    FormatTotal() {
      return toCurrency(
        this.product.price * this.item.quantity,
        "USD",
        "right"
      );
    }
  },
  methods: {
    ...mapActions({
      Delete: "carts/HandelDelete",
      setloading: "setloading",
      actUpdate: "carts/actUpdate"
    }),
    HandelDelete() {
      if (confirm("bạn muốn xóa sản phẩm này chứ ")) {
        this.Delete(this.item);
        this.$notify(NOTI_ACT_DELETE);
      }
    },
    handelUpdate(e) {
      let quantity = e.target.value;
      const check = validateQuantity(quantity);
      if (check) {
        let data = {
          cartUpdate: this.item,
          quantity: parseInt(quantity)
        };
        console.log("quantity đây", parseInt(quantity));
        this.actUpdate(data);
      } else {
        e.target.value = this.item.quantity;
        this.$notify(NOTI_GREATER_THAN_ONE);
      }
      this.setloading(true);
      setTimeout(() => {
        this.setloading(false);
        this.$notify(NOTI_ACT_UPDATE);
      }, 500);
    }
  }
};
</script>