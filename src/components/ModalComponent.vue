<template>
  <div
    class="modal fade"
    id="employeeModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="employeeModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">Employee</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-sm-4 center">
                <img :src="selectedEmployee.image" alt="Employee avatar" />
                <br />
                <br />
                <h3 id="employeeName">{{ selectedEmployee.name }}</h3>
                <h5 id="employeeStatus">{{ selectedEmployee.status }}</h5>
              </div>
              <div class="col-sm-8">
                <form>
                  <div class="form-group">
                    <label for="addressInput">Address</label>
                    <input
                      type="text"
                      v-model="selectedEmployee.address"
                      class="form-control"
                      id="addressInput"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      v-model="selectedEmployee.email"
                      class="form-control"
                      id="emailInput"
                    />
                  </div>
                  <div class="form-group">
                    <label for="locationInput">Location</label>
                    <input
                      type="text"
                      v-model="selectedEmployee.location"
                      class="form-control"
                      id="locationInput"
                    />
                  </div>
                  <div class="form-group">
                    <label for="locationInput">Date of Birth</label>
                    <input
                      type="date"
                      v-model="selectedEmployee.dob"
                      class="form-control"
                      id="birthdayInput"
                    />
                  </div>
                  <button type="button" data-dismiss="modal" class="btn btn-primary">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    selectedEmployee: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  border-radius: 50%;
}

.center {
  text-align: center;
}
</style>
