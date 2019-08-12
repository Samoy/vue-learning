<template>
    <div>
        <h1>这是Account组件</h1>
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "Account"
  }
</script>
<!--lang属性表示css使用哪种css(less/scss等)语言-->
<style scoped lang="scss">
    body {
        div {
            font-style: italic;
        }
    }
</style>
