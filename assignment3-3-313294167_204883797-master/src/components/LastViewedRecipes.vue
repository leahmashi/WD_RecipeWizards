<template>
  <b-container>
    <h1>
      {{ title }}
      <slot></slot>
    </h1>
    <b-row id="recipesPreview">
      <b-col class="recipeView" v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
const store = require("../store");

export default {
  name: "LastViewedRecipes",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
  },

  data() {
    return {
      recipes: []
    };
  },
  mounted() {
      this.LastViewed();
  },

  methods: {

    async LastViewed()
    {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/lastViewed",
        );

        console.log(response);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
    
  
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
#recipesPreview {
  width: 50vw;
}
.recipeView {
  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
  padding: 0;
}
h1 {
    font-size: 2.5rem;
    padding-top: 5%;
}
</style>
