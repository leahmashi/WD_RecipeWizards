<template>
  <b-container>
    <h3>
      {{ title }}
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
const store = require("../store");

export default {
  name: "RecipePreviewList",
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
        this.$root.$on("randomRecipes", () => {
        this.updateRecipes();
        });

        this.$root.$on("favorite", () => {
        this.getFavorites();
        });

        this.$root.$on("private", () => {
        this.getPrivate();
        });

        this.$root.$on("family", () => {
        this.getFamily();
        });


  },

  
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          store.state.server_domain + "/recipes/random",
        );

        console.log(response.data);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },

    async getFavorites(){
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/favorites",
        );

        console.log(response.data);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
    async getPrivate(){
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/personal",
        );

        console.log(response.data);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },

    async getFamily(){
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/familyrecipes",
        );

        console.log(response);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },


  }
    
  
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
