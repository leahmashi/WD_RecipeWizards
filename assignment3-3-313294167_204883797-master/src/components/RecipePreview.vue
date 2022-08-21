<template>
<div>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview" 
  >
   <!-- <ruter-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview" v-if="recipe_viewed" style="color: purple"
  > -->
    <div>
      <b-card 
        v-bind:title= "recipe.title"
        v-bind:img-src= "recipe.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
      <b-card-text>
        {{ recipe.readyInMinutes }} minutes &#9200; <br>
        {{ recipe.aggregateLikes }} likes &#128077;
      </b-card-text>
      </b-card>
    </div>
  </router-link>
  <button v-on:click="addToFavorites">❤</button>
  <!-- <router-link 
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  >
  <! <router-link 
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview" v-else style="color: blue"
  > -->
    <!-- <div>
      <b-card
        v-bind:title= "recipe.title"
        v-bind:img-src= "recipe.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
      <b-card-text>
        {{ recipe.readyInMinutes }} minutes &#9200; <br>
        {{ recipe.aggregateLikes }} likes &#128077;
      </b-card-text>
      </b-card>
    </div>
  </router-link>  -->
</div>
</template>

<script>
export default {
  name: "RecipePreview",
  mounted() {
    
    this.axios.get(this.recipe.image).then(() => {
      this.image_load = true;
    });
  },
  data() {
    return {
      image_load: false,
      // TODO: recipe_viewed: this.recipe.viewed,
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
   methods:{ 
      async addToFavorites() {
        const url = this.$root.store.server_domain + "/users/favorites"
        try {
            const response = await this.axios.post(
              url,
              {
                user_name: this.$root.store.username,
                recipe_id: this.recipe.id
              }
            );
        }
        catch (error) {
          console.log(error);
        }
      }
   }


};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}

.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}

.card-title {
    margin-bottom: .75rem;
    font-size: 1rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 0.5rem;
}

</style>
