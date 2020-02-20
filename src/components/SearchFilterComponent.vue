<template>
  <form class="form-inline">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">
          <svg
            class="bi bi-search"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
      <input
        class="form-control mr-sm-2"
        type="search"
        v-on:keyup="$emit('updateSearch',searchQuery), $emit('pageOne',1);"
        v-model="searchQuery"
        placeholder="Search People..."
        aria-label="Search"
      />
    </div>
    <div class="dropdown">
      <button
        class="btn btn-outline-dark dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Filter</button>
      <div class="dropdown-menu">
        <span class="dropdown-item-text">
          <strong>Location:</strong>
        </span>
        <button
          type="button"
          class="dropdown-item"
          v-for="(location, index) in locations"
          v-bind:key="index"
          v-on:click="setFilteredLocation(location), $emit('updateLoc',filteredLocation), $emit('pageOne',1);"
          :id="location"
        >{{ location }}</button>
        <!-- <location-filter v-for="(location, index) in locations" v-bind:key="index" v-bind:location="location"></location-filter> -->
        <span class="dropdown-item-text">
          <strong>Status:</strong>
        </span>
        <button
          type="button"
          class="dropdown-item"
          v-for="(status, index) in statuses"
          v-bind:key="'stat'+index"
          v-on:click="setFilteredStatus(status), $emit('updateStat',filteredStatus), $emit('pageOne',1);"
          :id="status"
        >{{ status }}</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchFilterComponent",
  props: {
    locations: Array,
    statuses: Array
  },
  data () {
      return {
        filteredLocation: '',
        filteredStatus: '',
        searchQuery: ''
      }
  },
  methods: {
      setFilteredLocation(location) {
      let button = document.getElementById(location);
      let filterIndicator = document.getElementById("dropdownMenuButton");

      // Case: No current filter
      if (this.filteredLocation === "") {
        // Update visual state to show active filter
        button.classList.add("active");
        filterIndicator.classList.remove("btn-outline-dark");
        filterIndicator.classList.add("btn-success");

        // Update current filter variable
        this.filteredLocation = location;
      } else if (this.filteredLocation === location) {
        // Case: Click on current filter, so deactivate it
        // Update visual state to show active filter
        button.classList.remove("active");
        if (this.filteredStatus === "") {
          // Check if there is an active status filter, update filter button state if not
          filterIndicator.classList.remove("btn-success");
          filterIndicator.classList.add("btn-outline-dark");
        }
        this.filteredLocation = "";
      } else {
        // Case: Currently active location filter, swap to selected option
        let previous = document.getElementById(this.filteredLocation);

        // Update visual state to show active filter
        previous.classList.remove("active");
        button.classList.add("active");

        // Update current filter variable
        this.filteredLocation = location;
      }
    },

    setFilteredStatus(status) {
      let button = document.getElementById(status);
      let filterIndicator = document.getElementById("dropdownMenuButton");

      // Case: No current filter
      if (this.filteredStatus === "") {
        // Update visual state to show active filter
        button.classList.add("active");
        filterIndicator.classList.remove("btn-outline-dark");
        filterIndicator.classList.add("btn-success");
        
        // Update current filter variable
        this.filteredStatus = status;
      } else if (this.filteredStatus === status) {
        // Case: Click on current filter, so deactivate it
        // Update visual state to show active filter
        button.classList.remove("active");
        if (this.filteredLocation === "") {
          filterIndicator.classList.remove("btn-success");
          filterIndicator.classList.add("btn-outline-dark");
        }
        this.filteredStatus = "";
      } else {
        // Case: Currently active location filter, swap to selected option
        let previous = document.getElementById(this.filteredStatus);

        // Update visual state to show active filter
        previous.classList.remove("active");
        button.classList.add("active");

        // Update current filter variable
        this.filteredStatus = status;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
