<template>
<nav>
  <router-link to="/store">Store</router-link> |
  <router-link to="/myproducts">My Products</router-link> |
  <router-link to="/">Add Product</router-link> |
  <router-link to="/">Log-in</router-link> |
  <router-link to="/">Register</router-link>
</nav>
<router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
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

.column {
  float: left;
  width: 50%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
