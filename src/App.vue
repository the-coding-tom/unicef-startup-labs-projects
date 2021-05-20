<template>
  <div>
    <Header />
    <div style="margin-top: 30px; display: flex; flex-direction: column">
      <div
        style="
          max-width: 1160px;
          background-color: white;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        "
      >
        <p
          style="padding: 16px; font-size: 20px; margin: 0px; font-weight: 600"
        >
          Recommended for you
        </p>
        <div style="padding: 10px; margin-top: -10px">
          <div
            v-for="product in products"
            :key="product.id"
            style="display: inline-block; padding: 6px"
          >
            <div
              style="
                width: 170px;
                background-color: white;
                display: inline-block;
              "
            >
              <img
                :src="product.imageUrl"
                style="height: 170px; width: 100%; object-fit: cover"
              />
              <div style="margin-top: 10px; color: #282828">
                <span>{{ product.name }}</span>
              </div>
              <div style="margin-top: 6px; font-weight: 600">
                <span>GHc {{ product.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
//import ProductItem from "./components/ProductItem.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      products: [],
    };
  },
  components: {
    Header,
    //ProductItem,
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/v1/products")
      .then((data) => {
        this.products = data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
