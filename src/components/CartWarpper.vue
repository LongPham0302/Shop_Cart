<template>
  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
    <div class="panel panel-info">
      <div class="panel-heading"><h1 class="panel-title">Your Cart</h1></div>
      <div class="panel-body">
        <table class="table">
          <cart-header />

          <cart-body-table />

          <cart-footer />
        </table>
      </div>
    </div>
    <!-- <div class="alert alert-success" role="alert" id="mnotification">
      Updated <b>ivysaur</b>
    </div> -->
  </div>
</template>
<script>
import CartBodyTable from "./CartBodyTable.vue";
import CartHeader from "./CartHeader.vue";
import CartFooter from "./CartFooter.vue";
// import Notify from './Notify';
export default {
  name: "cart-wrapper",
  components: {
    CartBodyTable,
    CartHeader,
    CartFooter
  }
};
</script>