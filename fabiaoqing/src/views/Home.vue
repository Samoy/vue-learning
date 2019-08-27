<template>
    <div>
        <van-nav-bar
                class="nav-bar"
                title="来发表情吧"
                @click-right="onClickRight">
            <van-icon name="search" slot="right"/>
        </van-nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    methods: {
      onClickRight() {
        this.$router.push('/search');
      }
    }
  }
</script>

<style scoped>

</style>
