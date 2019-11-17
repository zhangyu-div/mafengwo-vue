<template>
  <div id="app">
      <keep-alive :exclude="/(Detail|(Biji)|(Login)|(logins)|(register)|(Searchs))/">
        <router-view></router-view>
      </keep-alive> 
  </div>
</template>

<style lang="scss">
    
</style>
