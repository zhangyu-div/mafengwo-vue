<template>
  <div id="app">
      <keep-alive :exclude="/(Detail|(Biji))/">
        <router-view></router-view>
      </keep-alive> 
  </div>
</template>

<style lang="scss">
    
</style>
