<template>
  <router-view v-slot="{ Component,route }">
    <!-- 使用任何自定义过渡和回退,默认为`slide` -->
    <transition :name="route.meta.transition || 'slide'">
      <!-- 最多缓存10个，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉 -->
      <keep-alive :max="10">
        <component :is="Component" :key="route.path" v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>

    <transition :name="route.meta.transition || 'slide'">
      <component :is="Component" :key="route.path" v-if="!$route.meta.keepAlive" />
    </transition>
  </router-view>
</template>

<style lang="scss">
/*引入过渡动效*/
@import url('./assets/css/transition.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
  margin:0 !important;
}

</style>
