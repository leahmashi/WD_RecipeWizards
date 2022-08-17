<template>
  <form ref="form" @submit.stop.prevent="handleSubmit">


        <b-form-group
          label="Title"
          label-for="title-input"
          invalid-feedback="Title is required"
        >
          <b-form-input
            id="title-input"
            v-model="title"
            required
          ></b-form-input>
        </b-form-group>


        <b-form-group
          label="Likes"
          label-for="likes-input"
          invalid-feedback="Likes is required"
        >
          <b-form-input
            id="likes-input"
            v-model="likes"
            required
          ></b-form-input>
        </b-form-group>


        <b-form-group
          label="Minutes"
          label-for="minutes-input"
          invalid-feedback="Minutes is required"
        >
          <b-form-input
            id="minutes-input"
            v-model="minutes"
            required
          ></b-form-input>
        </b-form-group>


<!-- need to be array option -->        
        <b-form-group
          label="Steps"
          label-for="steps-input"
          invalid-feedback="Steps is required"
        >
          <b-form-input
            id="steps-input"
            v-model="steps"
            required
          ></b-form-input>
        </b-form-group>


<!-- need to be array option -->        
        <b-form-group
          label="Ingredients"
          label-for="ingredients-input"
          invalid-feedback="Ingredients is required"
        >
          <b-form-input
            id="ingredients-input"
            v-model="ingredients"
            required
          ></b-form-input>
        </b-form-group>


<!-- need to be link to image or upload img-->        
        <b-form-group
          label="Image"
          label-for="image-input"
          invalid-feedback="Image is required"
        >
          <b-form-input
            id="image-input"
            v-model="image"
            required
          ></b-form-input>
        </b-form-group>


      </form>
</template>

<script>
export default {
    name: "Modal",
}
</script>

<style>

</style>