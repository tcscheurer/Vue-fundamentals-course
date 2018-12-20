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
          <li class="nav-item cart">
            <router-link class="nav-link" to="/cart" exact>
            Cart
            </router-link>
            <div class="cart-items">
              {{cartLength}}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
    <aside class="aside">
      <router-view name="sidebar"></router-view>
    </aside>
    <main>
      <router-view />
    </main>
        </div>
  </div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';
// mapActions example in RobotBuilder

export default {
  name: 'app',
  computed: {
    // This is an example of the vuex mapState helper that will help pull in various peices of the state
    // basically now we will have 3 computed properties rootFoo, robotsFoo, someOtherFoo
    // also the second one is a little nicer syntax when using modules
    /*
    ...mapState({
      rootFoo: 'foo',
      robotsFoo: state => state.robots.foo,
      someOtherFoo: state => state.someOtherModule.foo
    }),
    ...mapState('someOtherModule' , { someOtherFoo: foo}); <- *NOTE* this syntax ONLY works with explicitly namespaced modules
    // you have to use first syntax or explicitly namespace modules, will not work by state default namespacing

    // mapGetters essentially works the same way as mapState
    ...mapGetters({
      rootGetterFoo: 'foo',
    })
    ...mapGetters('robots', {robotsGetterFoo: 'foo'})
    */
    cartLength(){
      return this.$store.state.robots.cart.length;
    }
  }
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
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
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
.container{
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside{
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.nav-item.cart{
  position: relative;
  margin-left: auto;
  border-right: none;
}
.cart-items{
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 10px;
  background-color: mediumseagreen;
}
</style>
