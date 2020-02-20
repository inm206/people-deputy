<template>
  <div class="table-responsive table-borderless">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <RowComponent
          v-for="(employee, index) in displayedPeople"
          :employee="employee"
          :index="index"
          v-bind:key="index"
          
          @update="localSelectedEmployee = $event;"
          v-on:update="$emit('update',localSelectedEmployee);"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import RowComponent from "./RowComponent.vue";

export default {
  name: "TableComponent",
  components: {
    RowComponent
  },
  data () {
    return {
      localSelectedEmployee: {}
    }
  },
  props: {
    displayedPeople: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
