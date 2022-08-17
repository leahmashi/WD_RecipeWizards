<template>
  <div class="container" id="searchPage">
    <h1 class="title">Search</h1>
    <div id="form">
      <b-form @submit.prevent="onSearch" @reset.prevent="onReset">
        <b-form-group
          id="input-group-search"
          label-cols-sm="3"
          label="search:"
          label-for="search"
        >
          <b-form-input
            id="search"
            v-model="$v.form.search.$model"
            type="text"
            :state="validateState('search')"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.search.required">
            Search is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.search.alpha">
            search should be only letters
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-number"
          label-cols-sm="3"
          label="number of results:"
          label-for="numberOfSearch"
        >
          <b-form-select
            id="numberOfSearch"
            v-model="$v.form.numberOfSearch.$model"
            :options="numberOfSearch"
            :state="validateState('numberOfSearch')"
          ></b-form-select>
        </b-form-group>


          <b-form-group
          id="input-group-searchBy"
          label-cols-sm="3"
          label="search by:"
          label-for="searchBy"
        >
          <b-form-select
            id="searchBy"
            v-model="$v.form.searchBy.$model"
            :options="searchBy"
            :state="validateState('searchBy')"
          ></b-form-select>
        </b-form-group>

        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button type="submit" variant="primary" style="width:250px;" class="ml-5 w-75">Search</b-button>
      </b-form>

      <li v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      <b-alert
        class="mt-2"
        v-if="form.submitError"
        variant="warning"
        dismissible
        show
      >
        Search failed: {{ form.submitError }}
      </b-alert>
    </div>
    <div id="searchResults">
    <!-- <div v-if="searchHistoryExists">
       <li v-for="recipe in this.$root.store.lastSearched" :key="recipe.id">
        <RecipePreview class="recipePreview" :recipe2="recipe" />
    </div> -->
</div>
  </div>
</template>

<script>
import {
  required,
  alpha,
} from "vuelidate/lib/validators";
import RecipePreviewList from "../components/RecipePreviewList.vue";
import RecipePreview from "../components/RecipePreview.vue";

export default {
  name: "Search",
    components: {
    // RecipePreviewList,
    RecipePreview
  },
  data() {
    return {
      form: {
        search: "",
        numberOfSearch: "5",
        searchBy: "",
        submitError: undefined
      },
      numberOfSearch: [
          { value: "5", text: '5' },
          { value: "10", text: '10' },
          { value: "15", text: '15' }
        ],
      searchBy: [
          { value: "foodname", text: 'food name' },
          { value: "recipename", text: 'recipe name' },
        ],
      errors: [],
      validated: false,
      recipes: [],
      searchHistory: [],
      searchHistoryExists: false
    };
  },
  mounted() {
     this.getHistory(); 
  },
  validations: {
    form: {
      search: {
        required,
        alpha
      },

      numberOfSearch: {
        required   
      },

      searchBy: {
        required
      },

    }
  },

  methods: {
    getHistory() {
      console.log(this.$root.store.lastSearched) 
      if (this.$root.store.username) {
        this.searchHistory = this.$root.store.lastSearched; 
        if (this.searchHistory != [])
        {
          this.searchHistoryExists = true;
        }
      }
    }, 
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Search() {
      try {
        console.log(this.form.search)//query
        console.log(this.form.searchBy)//filter
        console.log(this.form.numberOfSearch)//number of returns
        if(this.form.searchBy=='foodname'){
          var filter='food';
          const url= this.$root.store.server_domain + "/recipes/search/" + filter + "/" + this.form.search;
          const response = await this.axios.get(url);
          const recipes = response.data;
          this.recipes = [];
          this.recipes.push(...recipes);
          this.recipes=this.recipes.slice(0,3)
          console.log(this.recipes)
          // this.$root.store.lastSearched = [];
          // this.$root.store.lastSearched.push(...recipes); 
          this.$root.store.lastSearched = this.recipes
        }
        else{
          var filter='recipe';
          const url=this.$root.store.server_domain + "/recipes/search/" + filter + "/" + this.form.search;
          const response = await this.axios.get(url);
          const recipes = response.data.results;
          this.recipes = [];
          this.recipes.push(...recipes);
          this.recipes = this.recipes.slice(0,3)
          // this.recipes = this.recipes.slice(0,this.form.numberOfSearch)
          console.log(this.recipes)
          this.$root.store.lastSearched = this.recipes
          // this.$root.store.lastSearched = [];
          // this.$root.store.lastSearched.push(...recipes); 
        }

        // console.log(this.$root.store.lastSearched)
        // this.$root.store.lastSearched = [];
        // this.$root.store.lastSearched.push(...recipes); 
        // console.log(this.$root.store.lastSearched)
        
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
      
    },
    onSearch() {
      // console.log("search method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("search method go");
      this.Search();
    },
    onReset() {
      this.form = {
        search: "",
        numberOfSearch: "5",
        searchBy: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>

