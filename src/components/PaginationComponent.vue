<template>
  <nav aria-label="Pagination">
    <ul class="pagination justify-content-center">
      <li class="page-item" id="firstPage">
        <button
          class="page-link"
          id="firstPageButton"
          v-on:click="$emit('update',1)"
          tabindex="-1"
        >First Page</button>
      </li>
      <li class="page-item disabled" id="previousPage">
        <button
          class="page-link"
          id="prevPageButton"
          v-on:click="prevPage(), $emit('update',localCurrentPage)"
          tabindex="-1"
        >Previous Page</button>
      </li>
      <div
        v-for="(page, index) in currentPages.slice(currentPage - 1, currentPage + 2)"
        v-bind:key="index"
      >
        <li class="page-item" :id="page">
          <button class="page-link">{{ page }}</button>
        </li>
      </div>
      <li class="page-item" id="nextPage">
        <button
          class="page-link"
          id="nextPageButton"
          v-on:click="nextPage(), $emit('update',localCurrentPage)"
        >Next Page</button>
      </li>
      <li class="page-item" id="lastPage">
        <button
          class="page-link"
          id="lastPageButton"
          v-on:click="$emit('update',currentPages[currentPages.length-1])"
          tabindex="-1"
        >Last Page</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    currentPages: Array,
    currentPage: Number
  },
  data() {
    return {
      localCurrentPage: 1
    };
  },
  methods: {
    nextPage() {
      let nextButton = document.getElementById("nextPage");
      let prevButton = document.getElementById("previousPage");

      let lastPage = this.currentPages[this.currentPages.length - 1];

      if (prevButton.classList.contains("disabled")) {
        prevButton.classList.remove("disabled");
      }

      if (this.localCurrentPage < lastPage) {
        this.localCurrentPage += 1;
        if (this.localCurrentPage === lastPage) {
          nextButton.classList.add("disabled");
        }
      }
    },

    prevPage() {
      let nextButton = document.getElementById("nextPage");
      let prevButton = document.getElementById("previousPage");

      if (nextButton.classList.contains("disabled")) {
        nextButton.classList.remove("disabled");
      }

      if (this.localCurrentPage > 1) {
        this.localCurrentPage -= 1;
        if (this.localCurrentPage === 1) {
          prevButton.classList.add("disabled");
        }
      }
    }
  },
  updated() {
    // Handle button states on page change/update
    this.localCurrentPage = this.currentPage;
    let currentPage = document.getElementById(this.currentPage);
    let nextButton = document.getElementById("nextPage");
    let prevButton = document.getElementById("previousPage");
    currentPage.classList.add("active");

    let lastPage = this.currentPages[this.currentPages.length - 1];

    if (this.currentPage === 1 && !prevButton.classList.contains("disabled")) {
      prevButton.classList.add("disabled");
    }
    if (
      this.currentPage === lastPage &&
      !nextButton.classList.contains("disabled")
    ) {
      nextButton.classList.add("disabled");
    }
    if (
      this.currentPage === 1 &&
      nextButton.classList.contains("disabled") &&
      this.currentPages.length > 1
    ) {
      nextButton.classList.remove("disabled");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
