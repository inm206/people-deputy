<template>
  <tr>
    <td :id="'name' + index">{{ employee.name }}</td>
    <td :id="'location' + index">{{ employee.location }}</td>
    <td :id="'email' + index">{{ employee.email }}</td>
    <td :id="'status' + index">{{ employee.status }}</td>
    <td>
      <button
        type="button"
        class="btn btn-outline-dark btn-sm"
        data-toggle="modal"
        data-target="#employeeModal"
        v-on:click="$emit('update',employee);"
        :id="'view' + index"
      >View</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "RowComponent",
  props: {
    employee: Object,
    index: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
