<template>
    <div>
        <form action="/">
            <VSearch
                    v-model="keyword"
                    placeholder="请输入搜索关键词"
                    sticky
                    show-action
                    @search="onSearch"
                    @cancel="onCancel"
            />
        </form>
        <PackageList ref="packageList" :keyword="keyword"/>
    </div>
</template>

<script>
  import {Search as VSearch} from 'vant';
  import PackageList from "../components/PackageList";

  export default {
    name: "Search",
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        refreshing: false,
        keyword: ""
      };
    },
    methods: {
      onSearch() {
        this.$refs.packageList.onRefresh();
      },
      onCancel() {
        this.$router.back();
      },
    },
    components: {
      PackageList,
      VSearch
    }
  }
</script>

<style scoped>
    .nav-bar {
        display: flex;
        width: 100%;
        flex: 1;
        flex-direction: row;
        align-items: center;
        padding: 8px;
    }
</style>
