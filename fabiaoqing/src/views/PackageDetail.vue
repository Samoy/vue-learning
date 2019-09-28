<template>
    <div>
        <NavBar
                title="表情包详情"
                left-arrow
                fixed
                @click-left="$router.back()">
        </NavBar>
        <h3>{{$route.params.name}}</h3>
        <div @click="onImageClick(packages.detail, index)" v-for="(item,index) in packages.detail" :key="item.objectId">
            <img width="90%" :alt="item.name" :src="item.url">
        </div>
    </div>
</template>

<script>
  import {NavBar, ImagePreview} from 'vant';
  import {mapActions, mapState} from 'vuex';
  import {GET_PACKAGE_DETAIL} from "../store/mutation-types";

  //FIXME:返回上页时，页面会刷新，本不应该刷新
  export default {
    name: "PackageDetail",
    mounted() {
      this.getPackageDetail({packageId: this.$route.params.objectId});
    },
    methods: {
      ...mapActions([GET_PACKAGE_DETAIL]),
      onImageClick(list, index) {
        ImagePreview(list.map(item => item.url), index)
      }
    },
    computed: mapState(['packages']),
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>
