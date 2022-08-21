<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item><router-link :to="{ name: 'main' }">&nbsp;Main&nbsp;</router-link></b-nav-item>
          <b-nav-item><router-link :to="{ name: 'search' }">&nbsp;Search&nbsp;</router-link></b-nav-item>
          <b-nav-item><router-link :to="{ name: 'newRecipe' }">&nbsp;Add Recipe&nbsp;</router-link></b-nav-item>
          <b-nav-item><router-link :to="{ name: 'about' }">&nbsp;About Us&nbsp;</router-link></b-nav-item>
        
          <b-navbar-nav class="ml-auto">
            <span v-if="!$root.store.username" id="guest">
              <b-nav-item-dropdown text="Guest" right>
                <b-dropdown-item>
                  <router-link :to="{ name: 'register' }" id="registerLink">Register</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                  <router-link :to="{ name: 'login' }" id="loginLink">Login</router-link>
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </span>
            <span v-else id="user">
              <b-nav-item-dropdown text="Personal">
                <b-dropdown-item>
                  <router-link :to="{ name: 'favorites' }" id="favoritesLink">Favorites</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                  <router-link :to="{ name: 'private' }" id="privateLink">Private</router-link>
                </b-dropdown-item>
                <b-dropdown-item>
                  <router-link :to="{ name: 'family' }" id="familyLink">Family</router-link>
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown right>
                <template #button-content>
                  {{ $root.store.username }}
                </template>
                <b-dropdown-item>
                  <button @click="Logout">Logout</button>
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </span>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-navbar>
      
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
    async Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      try{
      const response = await this.axios.post(
          this.$root.store.server_domain +"/Logout",)
      }
      catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
}};
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

#nav a:not(#registerLink, #loginLink, #favoritesLink, #privateLink, #familyLink) {
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
    max-height: 92vh;
    min-height: 92vh;
    margin: 0 auto;
}

#user {
  display: flex;
}

#guest {
  float: right;
}

ul.dropdown-menu.show {
    background: green;
}

</style>
