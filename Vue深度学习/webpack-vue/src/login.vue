<template>
    <div>
        <h1>这是一个登录组件,使用.vue文件定义出来的---{{msg}}</h1>
    </div>
</template>

<script>
  export default {
    data: () => {
      return {
        msg: "123"
      }
    },
    methods: {
      show() {
        console.log('调用了login.vue中的show方法')
      }
    }
  }
</script>

<style scoped>

</style>
