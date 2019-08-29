<template>
    <div>
        <PullRefresh v-model="refreshing" @refresh="onRefresh">
            <List v-model="loading"
                  :immediate-check="flag"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoadMore">
                <CellGroup v-for="item in list" :key="item.objectId">
                    <div class="list-title" slot="title">
                        {{item.name}}
                        <div class="list-count">{{item.count}}个表情</div>
                    </div>
                    <Cell>
                        <div slot="default">
                            <div class="list-images">
                                <VanImage fit="cover"
                                          @click="onClickImage(item.list,index)"
                                          class="list-image" v-for="(image,index) in item.list" :key="image.objectId"
                                          :src="image.url"/>
                            </div>
                        </div>
                    </Cell>
                </CellGroup>
            </List>
        </PullRefresh>
    </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import {GET_PACKAGES} from "../store/mutation-types";
  import {PullRefresh, List, CellGroup, Cell, Image as VanImage, ImagePreview} from 'vant';

  //FIXME:切换页面时，List会滚动到顶部
  export default {
    name: "PackageList",
    data: function () {
      return {
        list: [],
        loading: false,
        finished: false,
        refreshing: false,
        page: 1,
        flag: false
      }
    },
    mounted: async function () {
      this.getPackageList()
    },
    props: {
      categoryId: String
    },
    methods: {
      ...mapActions([GET_PACKAGES]),
      onClickImage(list, index) {
        ImagePreview(list.map(item => item.url), index)
      },
      async getPackageList() {
        await this.getPackages({
          categoryId: this.categoryId,
          page: this.page
        });
        let list = this.$store.state.packages.list;
        if (this.refreshing) {
          this.list = list;
        } else {
          this.list = this.list.concat(list);
        }
        this.loading = false;
        this.refreshing = false;
        if (!list || list.length === 0) {
          this.finished = true;
        }
      },
      onRefresh() {
        this.page = 1;
        this.getPackageList();
      },
      onLoadMore() {
        this.page++;
        this.getPackageList();
      }
    },
    components: {
      List,
      Cell,
      VanImage,
      CellGroup,
      PullRefresh
    }
  }
</script>

<style scoped>
    .list-title {
        text-align: left;
        color: #000000;
    }

    .list-count {
        color: #ccc;
        display: inline-block;
        float: right;
        text-align: right;
        font-size: 12px;
    }

    .list-images {
        width: 100%;
        height: 100px;
    }

    .list-image {
        width: calc(calc(100% - 32px) / 3);
        height: 100px;
        padding: 0 4px 0 4px;
    }
</style>
