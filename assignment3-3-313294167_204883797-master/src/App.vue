<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item><router-link :to="{ name: 'main' }">&nbsp;Main&nbsp;</router-link></b-nav-item>
          <b-nav-item><router-link :to="{ name: 'search' }">&nbsp;Search&nbsp;</router-link></b-nav-item>
          <b-nav-item><router-link :to="{ name: 'about' }">&nbsp;About Us&nbsp;</router-link></b-nav-item>
        </b-navbar-nav>
        {{ $root.store.username }}
        <b-navbar-nav class="ml-auto">
          <span v-if="!$root.store.username">
            <b-nav-item-dropdown toggle-class="nav-link-custom" text="Guest" right>
              <b-dropdown-item>
                <router-link :to="{ name: 'register' }" id="registerLink">Register</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link :to="{ name: 'login' }" id="loginLink">Login</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </span>
          <span v-else>
            {{ $root.store.username }}: <button @click="Logout">Logout</button>|
          </span>
        </b-navbar-nav>
    </div>
    <div id="routerView"><router-view /></div>
    <div id="footer">
      <p id="contactUs">Contact Us At: leahma@post.bgu.ac.il</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
}

#nav {
  margin: 0;
  width: 100%;
  height: 5vh;
}

#nav a:not(#registerLink, #loginLink) {
  font-weight: bold;
  color: white;
  padding-right: 10px;
  padding-left: 10px;
}

#nav a.router-link-exact-active {
  color: seagreen!important;
}

.navbar.navbar-dark.bg-dark, #footer {
  background-color: #ABDEBE!important;
}

#footer {
  height: 3vh;
}

#registerLink, #loginLink {
  color: black;
  font-weight: bold;
  padding-right: 8px;
  padding-left: 8px;
}

#routerView {
  min-height: 92vh;
}

</style>
