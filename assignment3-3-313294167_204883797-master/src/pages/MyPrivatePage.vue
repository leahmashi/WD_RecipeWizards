<template>
  <div class="container" id="mainPage">
    <div class="column" id="left">
      <h1 class="title">Explore this recipes</h1>
      <RecipePreviewList title="Private Recipes" class="PrivateRecipes center"/>
    </div>
  </div>
</template>

<script>

import RecipePreviewList from "../components/RecipePreviewList";
export default {
  name: "MyPrivatePage",
  components: {
    RecipePreviewList
  },
  mounted() {
    this.getPrivate();
  },
  methods:
  {
    getPrivate() {
     this.$root.$emit("private")
    }
  }
};

</script>