<template>
    <div>
        <h1>
            <i18n path="home"/>
        </h1>
        <div>{{count}}</div>
        <el-button @click="add()">增加</el-button>
        <el-button @click="minus()">减少</el-button>
    </div>
</template>

<script>

  import {ADD, MINUS} from "../store/mutation-types";
  import {mapState} from "vuex";

  export default {
    name: 'Home',
    computed: mapState({
      count: state => state.computed.count
    }),
    methods: {
      add() {
        console.log(this.$store.state.computed.count);
        this.$store.commit(ADD, 1)
      },
      minus() {
        this.$store.commit(MINUS, 2)
      }
    },
    components: {}
  }
</script>

<style scoped>
</style>
