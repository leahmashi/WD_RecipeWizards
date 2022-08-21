<template>
  <div class="container" id="mainPage">
      <h1 class="title">My favorite recipes</h1>
      <RecipePreviewList title="Favorite Recipes" class="FavoriteRecipes center" />
    </div>
</template>

<script>

import RecipePreviewList from "../components/RecipePreviewList";
export default {
  name: "MyFavoritesPage",
  components: {
    RecipePreviewList
  },
  mounted() {
    this.getFavorites();
  },
  methods:
  {
    getFavorites() {
     this.$root.$emit("favorite")
    }
  }
};

</script>

<style>
h1 {
  padding-top: 5%;
}

.FavoriteRecipes.center.container {
    display: grid;
    grid-template-columns: max-content;
    overflow-x: auto;
    overflow-y: auto;
    height: 70vh !important;
}
</style>