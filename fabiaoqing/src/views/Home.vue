<template>
    <div>
        <NavBar
                class="nav-bar"
                title="来发表情吧"
                @click-right="pushSearch">
            <Icon name="search" slot="right"/>
        </NavBar>
        <Tabs>
            <Tab v-for="item in category.list" :key="item.objectId" :title="item.name">
                你好
            </Tab>
        </Tabs>
        <router-view></router-view>
    </div>
</template>

<script>
  import {NavBar, Icon, Tab, Tabs} from 'vant';
  import {mapActions, mapState} from 'vuex';

  export default {
    mounted: function () {
      this.getCategories();
    },
    computed: mapState(['category']),
    methods: {
      ...mapActions(['getCategories']),
      pushSearch: function () {
        this.$router.push('/search');
      }
    },
    components: {
      NavBar,
      Icon,
      Tabs,
      Tab
    }
  }
</script>

<style scoped>

</style>
