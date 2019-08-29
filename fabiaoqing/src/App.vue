<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>

<script>
  import {Notify} from 'vant';
  window.onoffline = () => {
    Notify({type: 'danger', message: '网络不可用', duration: 0});
  };
  window.ononline = () => {
    Notify.clear();
  };
  export default {
    name: 'app',
    data: function () {
      return {
        transitionName: 'slide-right'
      }
    },
    watch: {
      '$route'(to, from) {
        let toDepth = to.path.split('/').length;
        let fromDepth = from.path.split('/').length;
        if (to.path === "/") {
          toDepth = 1;
        }
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .router-view {
        transition: all 300ms cubic-bezier(.55, 0, .1, 1);;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
    }

    .slide-left-enter, .slide-right-leave-active {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }

    .slide-left-leave-active, .slide-right-enter {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
</style>
