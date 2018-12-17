<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <!-- just seeing some alternative router-view syntax, were binding the the route's name instead -->
            <!-- of just providing a string that represents the path -->
            <!-- The exact prop being passed to router-link is so that our .router-link-active class matches exactly -->
            <!-- router-link also accepts an 'active-class' prop that will override .router-link-active -->
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
            <img class="logo" src="./assets/build-a-bot-logo.png" />
            Build-A-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact>
            Build
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>
<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>
<style scoped>
/* This (below) is called the deep selector, although the styles are scoped I can style child components like this */
.content >>> .robot-name{
  color: green;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link{
  text-decoration: none;
  color: inherit;
}
/* built in by vue and vue router */
.router-link-active{
  color: green;
}
</style>
