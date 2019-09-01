<template>
    <div>
        <form action="/">
            <VSearch
                    v-model="keyword"
                    placeholder="请输入搜索关键词"
                    show-action
                    @search="onSearch"
                    @cancel="onCancel"
            />
        </form>
        <PullRefresh v-model="refreshing" @refresh="onRefresh">
            <List
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <Cell
                        v-for="item in list"
                        :key="item"
                        :title="item"
                />
            </List>
        </PullRefresh>
    </div>
</template>

<script>
  import {List, Cell, PullRefresh, Search as VSearch} from 'vant';

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
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.refreshing = false;
        }, 500);
      },
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      },
      onSearch() {
        console.log(this.keyword);
      },
      onCancel() {
        this.$router.back();
      },
    },
    components: {
      List,
      Cell,
      PullRefresh,
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

    .nav-search {
        color: red;
    }
</style>
