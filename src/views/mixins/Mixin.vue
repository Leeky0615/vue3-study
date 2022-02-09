<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="i" v-for="(product, i) in productList">
        <td>{{ product.product_name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.delivery_price }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import ApiMixin from '@/api';

export default {
  mixins: [ApiMixin],
  data() {
    return {
      productList: []
    };
  },
  async mounted() {
    this.productList = await this.$callAPI("https://1735282e-d117-49bd-9183-43fb166971be.mock.pstmn.io/list", "get");
    console.log(this.productList);
  }
}
</script>