<template>
  <div id="app">
    <b-navbar toggleable="lg" fixed="top" class="navbar-north navbar-dark navbar-expand-lg shadow-lg">

      <div class="container-fluid" id="navbarNorthContainer">

        <div class="row no-gutters">

          <div class="col-lg-2">
            <header>
              <b-link to="/" class="logotype logotype-white" role="banner">Sweco</b-link>
            </header>
          </div>
        </div>
      </div>
    </b-navbar>
    <div id="router-view-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
//font-family: Avenir, Helvetica, Arial, sans-serif;
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*
We have wrapped the router-view and gave it a little top-margin so the content doesn't end up under the nav bar.
 */
#router-view-container {
  margin-top: 80px
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
