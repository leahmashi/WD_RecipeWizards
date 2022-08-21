<template>
  <div class="container" id="mainPage">
    <div class="column" id="left">
      <h1 class="title">Explore this recipes</h1>
      <RecipePreviewList title="Random Recipes" class="RandomRecipes"/>
      <button v-on:click="getRandom">Accio 3 new recipes</button>
    </div>
    <div class="column" id="right">
      <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to view this</router-link>
      <div v-if="!$root.store.username"> <RecipePreviewList title="Last Viewed Recipes" :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }"
      disabled></RecipePreviewList></div>
      <div v-else><LastViewedRecipes title="Last Viewed Recipes" :class="{
        lastViewed: true,
        center: true
      }"
      ></LastViewedRecipes></div>
    </div>
  </div>
</template>

<script>

import RecipePreviewList from "../components/RecipePreviewList";
import LastViewedRecipes from "../components/LastViewedRecipes";

export default {
  name: "MainPage",
  components: {
    RecipePreviewList,
    LastViewedRecipes
  },
    mounted() {
        this.getRandom();
        
    },

  methods:
  {
    getRandom() {
     this.$root.$emit("randomRecipes")
    }

  }
};

</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}

.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

.column
{
	width: 50%;
	text-align: center;
}

#left {
  float: left;
}

#right {
  float: right;
}

h1 {
    font-size: 2.5rem;
    padding-top: 5%;
}

#mainPage {
    background-image: url("../assets/main-background.png");
    min-width: 100vw !important;
    height: 93vh;
    margin: 0 auto;
    background-size: cover;
    color: white;
}
</style>
