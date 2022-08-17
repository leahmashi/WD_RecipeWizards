<template>
  <div class="container" id="mainPage">
    <div class="column" id="left">
      <h1 class="title">Explore this recipes</h1>
      <RecipePreviewList title="Family Recipes" class="FamilyRecipes center" />

    </div>

  </div>
</template>

<script>

import RecipePreviewList from "../components/RecipePreviewList";
export default {
  name: "MyFamilyPage",
  components: {
    RecipePreviewList
  },
  mounted() {
    this.getFamily();
  },
  methods:
  {
    getFamily() {
     this.$root.$emit("family")
    }
  }
};

</script>