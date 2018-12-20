<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody v-if="cartSaleItems && cartSaleItems.length > 0" >
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{robot.cost | currency('$')}}
          </td>
        </tr>
      </tbody>
    </table>
  <h2 class="sale-items">You saved money on these robots</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody v-if="cart && cart.length > 0" >
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{robot.cost | currency('$')}}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
//import currencyFilter from '../shared/currency-filter';
export default {
  name: 'Cart',
  /*
  Moved this filter globally (main.js)
  filters: {
    currency: currencyFilter,
  },
  */
  computed: {
    cart(){
      // Although you cant mutate the store directly
      // direct reads can be done like this
      return this.$store.state.robots.cart;
    },
    cartSaleItems() {
      // Here we use a 'getter' to pull data from the store,
      // before namespacing store modules -> return this.$store.getters.cartSaleItems;
      return this.$store.getters['robots/cartSaleItems'];
    }
  }
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }
  .sale-items{
    margin-top: 50px;
    font-size: 18px;
    color: red;
  }
</style>
