<template>
  <div class="container" id="mainPage">
    <div class="column" id="left">
      <h1 class="title">Explore this recipes</h1>
      <RecipePreviewList title="Random Recipes" class="RandomRecipes center" />
      <button v-on:click="getRandom">Accio 3 new recipes</button>

    </div>
    <div class="column" id="right">
      <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to view this</router-link>
      {{ !$root.store.username }}
      <RecipePreviewList
        title="Last Viewed Recipes"
        :class="{
          RandomRecipes: true,
          blur: !$root.store.username,
          center: true
        }"
        disabled
      ></RecipePreviewList>
    </div>
  </div>
</template>

<script>

import RecipePreviewList from "../components/RecipePreviewList";
export default {
  name: "MainPage",
  components: {
    RecipePreviewList
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

</style>
