<template>
  <div class="container" id="searchPage">
    <h1 id="title" style="text-align: center;">Search</h1>

    <div id="leftCol">
      <b-button v-b-toggle.collapse-1 variant="primary">Filter</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <b-button v-b-toggle.collapse-1-inner size="sm">Cuisines</b-button>
          <b-collapse id="collapse-1-inner" class="mt-2">
            <b-card>
              <div v-for="cuisine in allCuisines" v-bind:key="cuisine" v-bind:value="cuisine" @input="insertCuisine(cuisine)">
                <input type="checkbox">
                <label :for="cuisine">{{cuisine}}</label>
              </div>
            </b-card>
          </b-collapse>
        </b-card>
        <b-card>
          <b-button v-b-toggle.collapse-2-inner size="sm">Diets</b-button>
          <b-collapse id="collapse-2-inner" class="mt-2">
            <b-card>
              <div v-for="diet in allDiets" v-bind:key="diet" v-bind:value="diet" @input="insertDiet(diet)">
                <input type="checkbox">
                <label :for="diet">{{diet}}</label>
              </div>
            </b-card>
          </b-collapse>
        </b-card>
        <b-card>
          <b-button v-b-toggle.collapse-3-inner size="sm">Intolerances</b-button>
          <b-collapse id="collapse-3-inner" class="mt-2">
            <b-card>
              <div v-for="intolerance in allIntolerances" v-bind:key="intolerance" v-bind:value="intolerance" @input="insertIntolerance(intolerance)">
                <input type="checkbox">
                <label :for="intolerance">{{intolerance}}</label>
              </div>
            </b-card>
          </b-collapse>
        </b-card>
        
      </b-collapse>
    </div>

    <div id="rightCol">
      <div id="form">
        <b-form @submit.prevent="onSearch" @reset.prevent="onReset">
          <!-- search param -->
          <b-form-group id="input-group-search"  label-cols-sm="3" label="search parameter:" label-for="search">
            <b-form-input id="search" v-model="$v.form.search.$model" type="text" :state="validateState('search')"></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.search.required">Search parameter is required</b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.search.alpha">Search parameter should be only letters</b-form-invalid-feedback>
          </b-form-group>

          <!-- select result amount -->
          <b-form-group id="input-group-number" label-cols-sm="3" label="number of results:" label-for="numberOfSearch" 
            invalid-feedback="Options are only 5/10/15">
            <b-form-select id="numberOfSearch" v-model="$v.form.numberOfSearch.$model" :options="numberOfSearch" 
              :state="validateState('numberOfSearch')"></b-form-select>
          </b-form-group>
          
          <!-- select search by recipe name/food type -->
          <b-form-group id="input-group-searchBy" label-cols-sm="3" label="search by:" label-for="searchBy" 
            invalid-feedback="Please choose search type: recipe name/food type">
            <b-form-select id="searchBy" v-model="$v.form.searchBy.$model" :options="searchBy" 
              :state="validateState('searchBy')"></b-form-select>
          </b-form-group>

          <b-button type="reset" variant="danger">Reset</b-button>
          <b-button type="submit" variant="primary" style="width:250px;" class="ml-5 w-75">Search</b-button>
        </b-form>
      </div>

    </div>


      <li v-for="r in this.$root.store.lastSearched" :key="r.id">
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
</template>

<script>
import {
  required,
  alpha,
} from "vuelidate/lib/validators";
import RecipePreviewList from "../components/RecipePreviewList.vue";
import RecipePreview from "../components/RecipePreview.vue";
import cuisines from "../assets/cuisines";
import diets from "../assets/diets";
import intolerances from "../assets/intolerances";

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
          { value: "foodType", text: 'food type' },
          { value: "recipeName", text: 'recipe name' },
        ],
      errors: [],
      validated: false,
      recipes: [],
      searchHistory: [],
      searchHistoryExists: false,
      allCuisines: [],
      allDiets: [],
      allIntolerances: [],
      cuisines: [],
      diets: [],
      intolerances: [],
    };
  },
  mounted() {
    this.allCuisines.push(...cuisines);
    this.allDiets.push(...diets);
    this.allIntolerances.push(...intolerances);
  },
  validations: {
    form: {
      search: {
        required,
        isValid() {
          const regex = /^[a-zA-Z\s]*$/;
          if (regex.test(this.form.search)) {
            return true;
          }
          return flase;
        }
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
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Search() {
      let cuisineParam = this.cuisines.join(",");
      let dietParam = this.diets.join(",");
      let intoleranceParam = this.intolerances.join(",");

      try {
        const url = this.$root.store.server_domain + "/recipes/search";
        console.log(url)
        const response = await this.axios.get(url,
        {  
          numberOfSearch: this.form.numberOfSearch,
          search: this.form.search,
          cuisine: cuisineParam,
          diet: dietParam,
          intolerance: intoleranceParam,
        });

        const recipes = response.data.results;
        this.recipes = [];
        this.recipes.push(...recipes);
        console.log(this.recipes);
        this.$root.store.lastSearched = this.recipes;

      //   if (this.form.searchBy=='foodType') {
      //     var filter='food';
      //     const url= this.$root.store.server_domain + "/recipes/search/" + filter + "/" + this.form.search;
      //     const response = await this.axios.get(url);
      //     const recipes = response.data;
      //     this.recipes = [];
      //     this.recipes.push(...recipes);
      //     this.recipes=this.recipes.slice(0,this.form.numberOfSearch)
      //     console.log(this.recipes)
      //     this.$root.store.lastSearched = this.recipes
      //   }
      //   else {
      //     var filter='recipe';
      //     const url=this.$root.store.server_domain + "/recipes/search/" + filter + "/" + this.form.search;
      //     const response = await this.axios.get(url);
      //     const recipes = response.data.results;
      //     this.recipes = [];
      //     this.recipes.push(...recipes);
      //     this.recipes = this.recipes.slice(0,this.form.numberOfSearch)
      //     console.log(this.recipes)
      //     this.$root.store.lastSearched = this.recipes
      //   }
        
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
      
    },
    onSearch() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
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
    },
    insertCuisine(cuisine) {
      if (this.cuisines.includes(cuisine)) {
        let index = this.cuisines.indexOf(cuisine);
        this.cuisines.splice(index, 1);
      }
      else {
        this.cuisines.push(cuisine);
      }
    },
    insertDiet(diet) {
      if (this.diets.includes(diet)) {
        let index = this.diets.indexOf(diet);
        this.diets.splice(index, 1);
      }
      else {
        this.diets.push(diet);
      }
    },
    insertIntolerance(intolerance) {
      if (this.intolerances.includes(intolerance)) {
        let index = this.intolerances.indexOf(intolerance);
        this.intolerances.splice(index, 1);
      }
      else {
        this.intolerances.push(intolerance);
      }
    }
  }
};
</script>

<style>
#leftCol {
  float: left;
  padding-left: 5%;
}

#rightCol {
    float: right;
    width: 60vw;
    padding-right: 15%;
    padding-top: 5%;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

div#collapse-1 {
    width: 20vw;
    height: 70vh !important;
    overflow-y: auto;
}

.btn-primary {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    /* font-weight: 500; */
}

input#search, select {
    width: 45vw !important;
}

#searchPage {
  background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url("../assets/search-background.jpg");
  height: 93vh;
  margin: 0;
  padding: 1rem;
  background-size: cover;
  min-width: 100vw;
}

#title {
  font-size: 2.5rem;
  padding-top: 2%;
  font-weight: 800;
}

label {
    font-weight: 600;
}
</style>