<template>
    <div>
        <NavBar
                class="nav-bar"
                title="来发表情吧"
                @click-right="pushSearch">
            <Icon name="search" slot="right"/>
        </NavBar>
        <Tabs  class="my-tab" swipeable sticky>
            <Tab v-for="item in category.list" :key="item.objectId" :title="item.name">
                <PackageList :category-id="item.objectId"/>
            </Tab>
        </Tabs>
        <router-view></router-view>
    </div>
</template>

<script>
  import {NavBar, Icon, Tab, Tabs} from 'vant';
  import {mapActions, mapState} from 'vuex';
  import {GET_CATEGORIES} from "../store/mutation-types";
  import PackageList from "../components/PackageList";

  export default {
    mounted: async function () {
      this.getCategories();
    },
    computed: mapState(['category']),
    methods: {
      ...mapActions([GET_CATEGORIES]),
      pushSearch: function () {
        this.$router.push('/search');
      }
    },
    components: {
      NavBar,
      Icon,
      Tabs,
      Tab,
      PackageList
    }
  }
</script>

<style scoped>

</style>
