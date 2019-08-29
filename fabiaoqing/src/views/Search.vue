<template>
    <div>
        <NavBar
                title="搜索"
                left-arrow
                @click-left="goBack">
        </NavBar>
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
  import {NavBar, List, Cell, PullRefresh} from 'vant';

  export default {
    name: "Search",
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        refreshing: false
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
      goBack() {
        this.$router.back()
      }
    },
    components: {
      NavBar,
      List,
      Cell,
      PullRefresh
    }
  }
</script>

<style scoped>

</style>
