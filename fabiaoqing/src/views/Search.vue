<template>
    <div>
        <NavBar
                title="搜索"
                left-arrow
                @click-left="goBack">
        </NavBar>
    </div>
</template>

<script>
  import {NavBar} from 'vant';

  export default {
    name: "Search",
    methods: {
      goBack() {
        this.$router.back()
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>
