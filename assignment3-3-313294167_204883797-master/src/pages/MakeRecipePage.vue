<template>
  <div>
    <b-button v-b-modal.modal-add-recipe>Add New Recipe</b-button>
    <b-modal scrollable hide-footer v-model="modalShow" id="modal-add-recipe" title="Add New Recipe">
      <div>
        <Modal/>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { BModal, VBModal } from 'bootstrap-vue'
import Modal from "../components/Modal.vue" 

export default {
  name: "MakeRecipePage",
  data() {
      return {
        modalShow: true
      }
  },
  components: { 
    BModal, Modal 
  },
  directives: { 
    'b-modal': VBModal 
  },
};
</script>

<style>

.modal-dialog.modal-md.modal-dialog-scrollable {
    min-width: max-content;
}

div#modal-add-recipe___BV_modal_content_ {
    background-image: url("../assets/marble-background.jpg");
    background-size: cover;
}

</style>
