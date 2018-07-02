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
    <router-view  class="center" name="ccc" />
    <router-view  class="center" name="bb" />

    <router-view  class="center" />
  </div>
</template>

<script>
export default {
  name: 'App',
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
  ul li {
    list-style: none;
    display: inline;
  }
  .is_active {
    background: red;
  }
  .aaa{
    background: green;
  }
  .center{
    font-size:30px;

  }
</style>
