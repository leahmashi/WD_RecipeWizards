<template>
  <div class="container"> 
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1 id="recipeTitle">{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
        <div id=recipesMarkings>
          <div class="col" v-if="recipe.vegan == true">
            <img src="../assets/veganIcon.jpg" width="15%" height="15%" />
          </div>
          <div class="col" v-if="recipe.vegetarian == true">
            <img src="../assets/vegetarianIcon.png" width="15%" height="15%" />
          </div>
          <div class="col" v-if="recipe.glutenFree == true">
            <img src="../assets/glutenFreeIcon.jpg" width="15%" height="15%" />
          </div>
          <div class="col" v-if="recipe.seen == true">
            <img src="../assets/seenIcon.png" width="15%" height="15%" />
          </div>
        </div>
      </div>
      <div class="recipe-body">
        <div>
          <div class="wrapper">
            <div class="wrapped">
              <div class="mb-3">
                <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
                <div>Likes: {{ recipe.aggregateLikes }} likes</div>
                <div>serves: {{ recipe.servings }}</div>
              </div>
              Ingredients:
              <ul>
                <li
                  v-for="(ingredient, index) in recipe.ingredients"
                  :key="index + '_' + ingredient.id"
                >
                  {{ ingredient[2] + " " + ingredient[1] + " " + ingredient[0] }}
                </li>
              </ul>
            </div>
            <div class="wrapped">
              Instructions:
              <ol>
                <li v-for="step in recipe.steps" :key="step.number">
                  {{ step }}
                </li>
              </ol>
            </div>
          </div>
          <button v-on:click="addToFavorites">Click here to add the recipe to your favorite recipes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
      isPersonal: false,
      recipeId: 0,
    };
  },
  async created() { //when recipe view page created 
    try {
      await this.checkIfPersonal(this.$route.params.recipeId, this.$root.store.username)
      if (this.isPersonal == true)
      {
        return;
      }
      let response;

      try {
        response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/" + this.$route.params.recipeId    
        );

        if (response.status !== 200) this.$router.replace("/NotFound");
      } 
      catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        id: id,
        title : title,
        readyInMinutes: readyInMinutes,
        image: image,
        aggregateLikes: aggregateLikes,
        vegan: vegan,
        vegetarian: vegetarian,
        glutenFree: glutenFree,
        viewed: seen,
        favorites: fav,
        ingredients: ingredients,
        servings: servings,
        steps: steps,
      } = response.data;

      console.log(response.data)

      let _recipe = {
        id,
        vegan,
        vegetarian,
        glutenFree,
        seen,
        fav,
        servings,
        steps,
        ingredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      };

      this.recipe = _recipe;
      this.recipeId = _recipe.id;

    } catch (error) {
      console.log(error);
    }
  },
  methods:{ 
    async addToFavorites() {
      const url = this.$root.store.server_domain + "/users/favorites"
      console.log(this.$root.store.username)
      console.log(this.$route.params.recipeId)
      try {
          const response = await this.axios.post(
            url,
            {
              user_name: this.$root.store.username,
              recipe_id: this.$route.params.recipeId
            }
          );
      }
      catch (error) {
        console.log(error);
      }
    },
    async checkIfPersonal(recipe_id) {
      const url = this.$root.store.server_domain + "/users/personal"
      console.log(recipe_id)
      try {
        const response = await this.axios.get(url);
        for (const recipe of response.data)
        {
          console.log("recipe", recipe);
          if (recipe.id == recipe_id)
          {
            this.isPersonal = true;
            this.recipe = recipe;
          }
        }
      }
      catch (error) {
        console.log(error);
      }
    },
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.col {
  width: 33.3%;
  float: left;
  text-align: center;
}
h1#recipeTitle {
    text-align: center;
}
#recipesMarkings {
  display: flex;
  align-items: center;
}
</style>
