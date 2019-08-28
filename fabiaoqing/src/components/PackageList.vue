<template>
    <div>
        <List>
            <Cell v-for="item in list" :key="item.objectId">
                <div slot="default">
                    {{item.name}}
                    <div class="list-count">{{item.count}}个表情</div>
                    <div class="list-images">
                        <VanImage fit="cover"
                                  @click="onClickImage(item.list,index)"
                                  class="list-image" v-for="(image,index) in item.list" :key="image.objectId"
                                  :src="image.url"/>
                    </div>
                </div>
            </Cell>
        </List>
    </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import {GET_PACKAGES} from "../store/mutation-types";
  import {List, Cell, Image as VanImage, ImagePreview} from 'vant';

  export default {
    name: "PackageList",
    data: function () {
      return {
        list: [],
        loading: false,
        finished: false
      }
    },
    mounted: async function () {
      await this.getPackages(this.categoryId);
      this.list = this.$store.state.packages.list;
    },
    props: {
      categoryId: String
    },
    methods: {
      ...mapActions([GET_PACKAGES]),
      onClickImage(list, index) {
        ImagePreview(list.map(item => item.url), index)
      }
    },
    components: {
      List,
      Cell,
      VanImage
    }
  }
</script>

<style scoped>
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
