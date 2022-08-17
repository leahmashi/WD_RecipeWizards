<template>
  <div class="container" id="mainPage">
    <div class="column" id="left">
      <h1 class="title">Explore this recipes</h1>
      <RecipePreviewList title="Favorite Recipes" class="FavoriteRecipes center" />

    </div>

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