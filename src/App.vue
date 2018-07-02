<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <ul>
          <li>
            <router-link to="/"  exact tag="div">home</router-link>
          </li>

              <router-link to="/about" event="mouseover" tag="li" active-class="aaa">
                <i></i>
              <span> about</span>
              </router-link>

        <li>
          <router-link :to="{path:'/ts'}"> ts</router-link>
        </li>
        <li>
          <router-link :to="{path:'/user'}"> user</router-link>
        </li>
      </ul>
    </div>
    <!--<router-view  class="center" name="ccc" />-->
    <!--<router-view  class="center" name="bb" />-->

    <transition mode="out-in">
        <router-view  class="center" />
    </transition>
    {{$route.meta.chj}}
    <button @click="replace"> replace</button>
  </div>
</template>

<script>
export default {
  name: 'App',
    watch:{
      $route(to,from){
          console.log(to.meta);
      }
    },
    methods:{
      replace(){
          this.$router.replace('/user');
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: 10s;
}
  ul li {
    list-style: none;
    display: inline;
  }
  .is_active {
    background: red;
  }
  .v-leave{
    opacity: 1;
  }
  .v-leave-to{
    opacity: 0;
  }
  .v-leave-active{  //控制菜单过度效果
    transition: 20s;
  }
  .aaa{
    background: green;
  }
  .center{
    font-size:30px;

  }

</style>
