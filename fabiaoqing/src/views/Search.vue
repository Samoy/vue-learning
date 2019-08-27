<template>
    <div>
        <van-nav-bar
                title="搜索"
                left-arrow
                @click-left="goBack">
        </van-nav-bar>
    </div>
</template>

<script>
  export default {
    name: "Search",
    methods: {
      goBack() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

</style>
