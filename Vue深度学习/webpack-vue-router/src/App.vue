<template>
    <div><h1>这是App组件</h1>
        <router-link to="/account">Account</router-link>
        <router-link to="/goods_list">GoodsList</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>

<style scoped>

</style>
