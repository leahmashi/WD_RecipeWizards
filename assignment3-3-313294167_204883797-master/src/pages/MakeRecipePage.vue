<template>
  <div>
    <b-button v-b-modal.modal-add-recipe>Add New Recipe</b-button>
    <b-modal v-model="modalShow" id="modal-add-recipe" title="BootstrapVue">
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
