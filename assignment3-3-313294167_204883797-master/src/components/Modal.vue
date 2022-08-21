<template>
  <div id="modal">
    <form ref="form">
      <!-- recipe title -->
      <b-form-group id="title" label-cols-sm="4" label-cols-lg="3" content-cols-sm content-cols-lg="7"
        label="Title:" label-for="input-title" invalid-feedback="Title is required">
          <b-form-input id="input-title" v-model="$v.form.title.$model" :state="validateState('title')"></b-form-input>
      </b-form-group>

      <!-- prep minutes -->
      <b-form-group id="minutes" label-cols-sm="4" label-cols-lg="3" content-cols-sm content-cols-lg="7"
        description="enter minutes" label="Prep time:" label-for="input-minutes" invalid-feedback="Time is required">
          <b-form-input id="input-minutes" v-model="$v.form.minutes.$model" :state="validateState('minutes')"></b-form-input>
      </b-form-group>

      <!-- servings amount -->
      <b-form-group id="makesServes" label-cols-sm="4" label-cols-lg="3" content-cols-sm content-cols-lg="7"
        description="enter servings" label="Serves:" label-for="input-servings" invalid-feedback="Servings amount is required">
          <b-form-input id="input-servings" v-model="$v.form.servings.$model" :state="validateState('servings')"></b-form-input>
      </b-form-group>

      <!-- ingredients -->  
      <b-form-group id="ingredients" label="Add ingredients one at a time:" invalid-feedback="Ingredients can't be empty">
        <IngredientField ref="ingredientFields" v-for="(IngredientField, index) in formIngredients" :key="index" :is="IngredientField"/>
      </b-form-group>
      <button type="button" class="btn--link recipes-form__add" @click="addIngredient()">+ Add another ingredient</button>

      <!-- steps --> 
      <b-form-group id="steps" label="Add instructions one at a time:" invalid-feedback="Instructions can't be empty">
        <InstructionField ref="instructionFields" v-for="(InstructionField, index) in formInstructions" :key="index" :is="InstructionField"
          :stepCount="index + 1" />
      </b-form-group>
      <button type="button" class="btn--link recipes-form__add" @click="addStep()">+ Add another step</button>

      <!-- image -->        
      <b-form-group id="image" label="Add Image:" label-for="imageSrc">
        <file-select id="imageSrc" v-model="file" :state="validateState('image')"></file-select>
      </b-form-group>

      <!-- vegan, vegeterian and gluten free -->   
      <b-form-group id="input-group-vegan" label-cols-sm="3" label="vegan" label-for="vegan" invalid-feedback="Please select if the recipe is vegan">
        <b-form-select v-model="form.vegan" :options="vegan" :state="validateState('vegan')"></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-vegetarian" label-cols-sm="3" label="vegetarian" label-for="vegetarian" invalid-feedback="Please select if the recipe is vegetarian">
        <b-form-select v-model="form.vegetarian" :options="vegetarian" :state="validateState('vegetarian')"></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-gluten" label-cols-sm="3" label="gluten free" label-for="gluten free" invalid-feedback="Please select if the recipe is gluten free">
        <b-form-select v-model="form.glutenFree" :options="gluten" :state="validateState('glutenFree')"></b-form-select>
      </b-form-group>
    </form>

    <modal-footer> 
      <button type="button" class="btn btn-primary" @click="addRecipe">Create</button>
    </modal-footer>
  </div>
</template>

<script>

import { required, integer, minValue } from "vuelidate/lib/validators";
import IngredientField from "./IngredientField.vue";
import InstructionField from "./InstructionField.vue";
import FileSelect from './FileSelect.vue'

export default {
    name: "Modal",
    data() {
      return {
        form: {
          title : "",
          minutes: "",
          image: "",
          vegan: "",
          vegetarian: "",
          glutenFree: "",
          steps: [],
          ingredients: [],
          servings: "",
          submitError: undefined,
        },
        vegan: [
            { value: 1, text: 'yes' },
            { value: 0, text: 'no' },
        ],
        vegetarian: [
          { value: 1, text: 'yes' },
          { value: 0, text: 'no' },
        ],
        gluten: [
          { value: 1, text: 'yes' },
          { value: 0, text: 'no' },
        ],
        formIngredients: [IngredientField],
        formInstructions: [InstructionField],
        file: null,
      };
    },
    components: {
      IngredientField, 
      InstructionField,
      FileSelect
    },
    validations: {
      form: {
        title: {
          required,
        },
        minutes: {
          required,
          integer, 
          minValue: minValue(1)
        },
        servings: {
          required,
          integer,
          minValue: minValue(1)
        },
        vegetarian: {
          required,
        },
        vegan: {
          required,
        },
        glutenFree: {
          required,
        },
        image: { 
          isValid() {
            if (this.file == null) {
              this.form.image="https://spoonacular.com/recipeImages/defualt-556x370.jpg"
              console.log(this.form.image)
              return true;
            }
            else {
              const imageRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
              if (imageRegex.test(this.file.name))
              {
                this.form.image = this.file.name;
                let formImageField = document.getElementById("image");
                let errorDiv = document.getElementById('errorDiv');
                if (errorDiv != null) {
                  formImageField.removeChild(errorDiv);
                }
                return true;
              }
              let formImageField = document.getElementById("image");
              let errorDiv = document.createElement('span');
              errorDiv.setAttribute('style', 'color: red; width: 100%; margin-top: .25rem; font-size: 80%;');
              errorDiv.setAttribute('id', 'errorDiv');
              formImageField.appendChild(errorDiv);
              errorDiv = document.getElementById('errorDiv');
              errorDiv.innerText = "unsupported image file"
              return false;
            }
          }
        }
      }
    },
    methods: {
      async addRecipe() {
        // checking form fields 
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          console.log("addRecipe: in error")
          return;
        }
        // if all detalis filled
        this.updateSteps();
        this.updateIngredients();
        try {
          console.log(this.form.image)
          const response = await this.axios.post(
            this.$root.store.server_domain + "/users/personal",
            {
              title: this.form.title,
              readyInMinutes: this.form.minutes,
              image: this.form.image,
              vegan: this.form.vegan,
              vegetarian: this.form.vegetarian,
              glutenFree: this.form.glutenFree,
              instructions: this.form.steps,
              ingredients: this.form.ingredients,
              servings: this.form.servings
            }
          );
          console.log("response", response)
        } 
        catch (err) {
          console.log(err.response);
          this.form.submitError = err.response.data.message;
        }
      }, 
      validateState(param) {
        const { $dirty, $error } = this.$v.form[param];
        return $dirty ? !$error : null;
      },
      addIngredient() {
        this.formIngredients.push(IngredientField)
      },
      addStep() {
        this.formInstructions.push(InstructionField);
      },
      updateSteps() {
        for (const step of this.$refs.instructionFields)
        {
          let body = step.getBody();
          this.form.steps.push(body)
        }
      },
      updateIngredients() {
        for (const ingredient of this.$refs.ingredientFields) {
          let body = ingredient.getBody();
          this.form.ingredients.push(body);
        }
      }
    }
  }

</script>

<style>

input#Size {
  width: 20%;
}

.form-text.text-muted {
  margin: 0;
}

div#title {
  padding-bottom: 7px;
}

.btn--link {
    background: transparent;
    padding: 0;
    border: none;
    outline: none;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
    display: inline;
}

.recipes-form__add {
    margin-top: 0;
    color: #909090;
    margin-bottom: 1rem;
}

.newStepClass {
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.formIngredientQty {
  width: 15%;
}

.recipes-form__measure {
    flex-grow: 1;
}

.css-1juasd6-container {
    margin-top: 7px;
    position: relative;
}

.css-1dn068x {
    height: 16px;
    padding: 0px 5px;
    position: absolute;
    top: -10px;
    left: 7px;
}

.css-fv9yoq {
    background-color: rgb(250, 250, 250);
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14.3 7.5' width='14.3' height='7.5'%3E%3Cpath d='M13.8.5L7.1 7 .5.5' fill='none' stroke='%23444' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: calc(100% - 16px) center;
    width: 100%;
    height: 45px;
    border: 1px solid rgb(234, 234, 234);
    outline: none;
    padding: 10px 46px 10px 12px;
    color: rgb(68, 68, 68);
    font-size: 16px;
    font-family: inherit;
    border-radius: 1px;
    appearance: none;
}

.recipes-form__fieldset {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-grow: 1;
}

span.css-1j7byy8 {
    font-size: smaller;
}

button, input {
    overflow: visible;
    height: 45px;
    border: 1px solid #ced4da;
    margin-left: 5px;
}

input#qty00 {
    margin-right: 5px;
}

span.css-znp1na {
    font-size: smaller;
    position: absolute;
    padding-left: 7px;
    margin-top: -28px;
}

.btn-primary {
    color: #fff;
    background-color: #2ea169;
    border-color: #2ea169;
    margin: 5px;
}

.file-select>.select-button[data-v-27bfe202] {
    padding: 1rem;
    color: #fff;
    background-color: #2ea169;
    border-radius: .3rem;
    text-align: center;
    font-weight: 450;
}

</style>