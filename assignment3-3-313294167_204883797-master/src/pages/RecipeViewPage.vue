<template>
  <div> 
    <b-card 
      v-bind:img-src= "recipe.image" 
      img-alt="https://spoonacular.com/recipeImages/defualt-556x370.jpg"
      img-top
      tag="article"
    >
    <b-card-title class="text-center">{{recipe.title}}</b-card-title>
    <b-card-text>
      <div id=recipesMarkings class="text-center">
        <b-row align-h="center">
          <b-col cols="1" v-if="recipe.vegan === true"><img src="../assets/veganIcon.jpg" style="max-width: 15vw; max-height: 5vh;"/></b-col>
          <b-col cols="1" v-if="recipe.vegetarian === true"><img src="../assets/vegetarianIcon.png" style="max-width: 15vw; max-height: 5vh;"/></b-col>
          <b-col cols="1" v-if="recipe.glutenFree === true"><img src="../assets/glutenFreeIcon.jpg" style="max-width: 15vw; max-height: 5vh;"/></b-col>
          <b-col cols="1" v-if="recipe.seen === true"><img src="../assets/seenIcon.png" style="max-width: 15vw; max-height: 5vh;"/></b-col>
        </b-row>
      </div>
      <br>
      <b-container class="recipe-body">
        <b-col align-v="start">
          <b-row>Time: {{ recipe.readyInMinutes }} minutes</b-row>
          <b-row>Likes: {{ recipe.aggregateLikes }}</b-row>
          <b-row>serves: {{ recipe.servings }}</b-row>
        </b-col>
        <br>
        <b-row>
          <b-col> Ingredients:
            <ul>
              <li v-for="(ingredient, index) in recipe.ingredients"
                  :key="index + '_' + ingredient.id" 
              >
                  {{ ingredient[2] + " " + ingredient[1] + " " + ingredient[0] }}
              </li>
            </ul>
          </b-col>
          <b-col> Instructions:
            <ol>
              <li v-for="step in recipe.steps" :key="step.number">
                  {{ step }}
              </li>
            </ol>
          </b-col>
        </b-row>
        
      </b-container>
    </b-card-text>
    <div class="text-center">
      <button v-on:click="addToFavorites">❤ Add to favorites</button>
    </div>
    </b-card>

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
  async mounted() { //when recipe view page created 
    try {
      await this.checkIfPersonal(this.$route.params.recipeId, this.$root.store.username)
      if (this.isPersonal === true)
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
        console.log("error.response.status:", error.response.status);
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
          console.log(response);
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
  },
};
</script>

<style scoped>

.card-img-top {
    max-height: 20vh;
    object-fit: contain;
    padding-top: 2rem;
}

.card {
  margin-left: 2vw;
  margin-right: 2vw;
  position: inherit;
}

button {
  margin-bottom: 2rem;
}



</style>
