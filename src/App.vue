<template>
  <div class="container" id="app">
    <NavComponent msg="People" />
    <br />
    <h3>People</h3>
    <br />
    <SearchFilterComponent
      :locations="locations"
      :statuses="statuses"
      @updateSearch="searchQuery = $event;"
      @updateLoc="filteredLocation = $event;"
      @updateStat="filteredStatus = $event;"
      @pageOne="currentPage = $event;"
    />
    <br />
    <br />
    <div class="card">
      <div class="card-body">
        <TableComponent
          :displayedPeople="displayedPeople"
          :selectedEmployee="selectedEmployee"
          @update="selectedEmployee = $event;"
        />
      </div>
    </div>
    <br />
    <PaginationComponent
      :currentPages="currentPages"
      :currentPage="currentPage"
      @update="currentPage = $event;"
    />
    <ModalComponent :selectedEmployee="selectedEmployee" />
  </div>
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
import TableComponent from "./components/TableComponent.vue";
import ModalComponent from "./components/ModalComponent.vue";
import PaginationComponent from "./components/PaginationComponent.vue";
import SearchFilterComponent from "./components/SearchFilterComponent.vue";

export default {
  name: "App",
  components: {
    NavComponent,
    SearchFilterComponent,
    TableComponent,
    ModalComponent,
    PaginationComponent
  },
  data() {
    return {
      employees: [
        { name: "Joona Karvonen", location: "Downtown", email: "joona.karvonen@example.com", status: "Discarded", address: "4399 Myllypuronkatu", dob: "1967-01-31", image: "https://randomuser.me/api/portraits/men/69.jpg", id: "1" },
        { name: "Annabelle French", location: "West", email: "annabelle.french@example.com", status: "Employed", address: "3855 Balmoral St", dob: "1964-03-10", image: "https://randomuser.me/api/portraits/women/62.jpg", id: "2" },
        { name: "رهام مرادی", location: "Uptown", email: "rhm.mrdy@example.com", status: "Employed", address: "7597 پاسداران", dob: "1987-11-10", image: "https://randomuser.me/api/portraits/men/34.jpg", id: "3" },
        { name: "Vicki Stone", location: "Downtown", email: "vicki.stone@example.com", status: "Employed", address: "3900 Dane St", dob: "1949-03-14", image: "https://randomuser.me/api/portraits/women/27.jpg", id: "4" },
        { name: "Gönül Israel", location: "West", email: "gonul.israel@example.com", status: "Employed", address: "6458 Kirchgasse", dob: "1993-10-20", image: "https://randomuser.me/api/portraits/women/31.jpg", id: "5" },
        { name: "Jenny Rusch", location: "West", email: "jenny.rusch@example.com", status: "Employed", address: "1876 Fliederweg", dob: "1974-01-04", image: "https://randomuser.me/api/portraits/women/32.jpg", id: "6" },
        { name: "Maya Wong", location: "East", email: "maya.wong@example.com", status: "Discarded", address: "2864 Concession Road 23", dob: "1969-12-04", image: "https://randomuser.me/api/portraits/women/63.jpg", id: "7" },
        { name: "Karl Heinz Kollmann", location: "Downtown", email: "karlheinz.kollmann@example.com", status: "Employed", address: "4365 Tulpenweg", dob: "1994-07-22", image: "https://randomuser.me/api/portraits/men/79.jpg", id: "8" },
        { name: "Juan Warmenhoven", location: "Downtown", email: "juan.warmenhoven@example.com", status: "Leave", address: "3206 Goudenkalf", dob: "1963-05-22", image: "https://randomuser.me/api/portraits/men/72.jpg", id: "9" },
        { name: "Lana Zwiers", location: "Uptown", email: "lana.zwiers@example.com", status: "Discarded", address: "3482 Graskamp", dob: "1979-07-16", image: "https://randomuser.me/api/portraits/women/50.jpg", id: "10" },
        { name: "Layla Edwards", location: "East", email: "layla.edwards@example.com", status: "Discarded", address: "3790 Tweed Street", dob: "1966-12-30", image: "https://randomuser.me/api/portraits/women/1.jpg", id: "11" },
        { name: "Clarence Martinez", location: "West", email: "clarence.martinez@example.com", status: "Leave", address: "4671 Crockett St", dob: "1972-07-24", image: "https://randomuser.me/api/portraits/men/45.jpg", id: "12" },
        { name: "Giray Gümüşpala", location: "East", email: "giray.gumuspala@example.com", status: "Leave", address: "8381 Filistin Cd", dob: "1996-03-01", image: "https://randomuser.me/api/portraits/men/27.jpg", id: "13" },
        { name: "Aatu Lehtinen", location: "Uptown", email: "aatu.lehtinen@example.com", status: "Discarded", address: "3731 Reijolankatu", dob: "1974-07-11", image: "https://randomuser.me/api/portraits/men/49.jpg", id: "14" },
        { name: "Dylan Da Silva", location: "West", email: "dylan.dasilva@example.com", status: "Employed", address: "3049 Rue du Bât-D'Argent", dob: "1972-08-20", image: "https://randomuser.me/api/portraits/men/5.jpg", id: "15" },
        { name: "سینا كامياران", location: "Downtown", email: "syn.kmyrn@example.com", status: "Leave", address: "4809 پارک 17 شهریور", dob: "1955-03-20", image: "https://randomuser.me/api/portraits/men/38.jpg", id: "16" },
        { name: "Janet Payne", location: "Uptown", email: "janet.payne@example.com", status: "Discarded", address: "2938 George Street", dob: "1974-04-15", image: "https://randomuser.me/api/portraits/women/49.jpg", id: "17" },
        { name: "Wisal Hillen", location: "Downtown", email: "wisal.hillen@example.com", status: "Leave", address: "927 Kniplaan", dob: "1955-07-16", image: "https://randomuser.me/api/portraits/women/61.jpg", id: "18" },
        { name: "Jacob Lavigne", location: "Downtown", email: "jacob.lavigne@example.com", status: "Discarded", address: "8331 Regent Ave", dob: "1964-08-06", image: "https://randomuser.me/api/portraits/men/94.jpg", id: "19" },
        { name: "Elsa Markert", location: "Downtown", email: "elsa.markert@example.com", status: "Leave", address: "8105 Neue Straße", dob: "1954-07-15", image: "https://randomuser.me/api/portraits/women/68.jpg", id: "20" },
        { name: "Danny Johnson", location: "East", email: "danny.johnson@example.com", status: "Leave", address: "1000 Manor Road", dob: "1978-10-17", image: "https://randomuser.me/api/portraits/men/55.jpg", id: "21" },
        { name: "Mustafa Örge", location: "Downtown", email: "mustafa.orge@example.com", status: "Employed", address: "9974 Necatibey Cd", dob: "1998-08-18", image: "https://randomuser.me/api/portraits/men/29.jpg", id: "22" },
        { name: "Bella Lervåg", location: "Downtown", email: "bella.lervag@example.com", status: "Employed", address: "3263 Nordlitoppen", dob: "1959-01-12", image: "https://randomuser.me/api/portraits/women/30.jpg", id: "23" },
        { name: "Dale Daniels", location: "West", email: "dale.daniels@example.com", status: "Employed", address: "7841 Rochestown Road", dob: "1984-04-07", image: "https://randomuser.me/api/portraits/men/83.jpg", id: "24" },
        { name: "آیلین سهيلي راد", location: "West", email: "aylyn.shylyrd@example.com", status: "Leave", address: "6416 ستارخان", dob: "1985-12-27", image: "https://randomuser.me/api/portraits/women/65.jpg", id: "25" },
        { name: "Sharon Martinez", location: "West", email: "sharon.martinez@example.com", status: "Discarded", address: "4767 Mill Lane", dob: "1972-07-29", image: "https://randomuser.me/api/portraits/women/84.jpg", id: "26" },
        { name: "Roswita Schädlich", location: "Uptown", email: "roswita.schadlich@example.com", status: "Employed", address: "7363 Fliederweg", dob: "1992-12-13", image: "https://randomuser.me/api/portraits/women/33.jpg", id: "27" },
        { name: "Karoline Blum", location: "Downtown", email: "karoline.blum@example.com", status: "Employed", address: "7469 Fasanenweg", dob: "1945-01-31", image: "https://randomuser.me/api/portraits/women/4.jpg", id: "28" },
        { name: "Consulino da Cruz", location: "West", email: "consulino.dacruz@example.com", status: "Employed", address: "926 Avenida Brasil ", dob: "1948-09-14", image: "https://randomuser.me/api/portraits/men/26.jpg", id: "29" },
        { name: "Ilse Gerken", location: "West", email: "ilse.gerken@example.com", status: "Employed", address: "7838 Mittelweg", dob: "1956-03-20", image: "https://randomuser.me/api/portraits/women/96.jpg", id: "30" },
        { name: "Jon Hart", location: "West", email: "jon.hart@example.com", status: "Discarded", address: "521 Daisy Dr", dob: "1958-12-04", image: "https://randomuser.me/api/portraits/men/3.jpg", id: "31" },
        { name: "Katrine Mortensen", location: "Uptown", email: "katrine.mortensen@example.com", status: "Leave", address: "7665 Damgårdsvej", dob: "1980-12-04", image: "https://randomuser.me/api/portraits/women/40.jpg", id: "32" },
        { name: "Lena Faure", location: "Downtown", email: "lena.faure@example.com", status: "Leave", address: "6956 Rue Bossuet", dob: "1986-06-15", image: "https://randomuser.me/api/portraits/women/30.jpg", id: "33" },
        { name: "Idalina de Souza", location: "East", email: "idalina.desouza@example.com", status: "Employed", address: "9951 Rua São Jorge ", dob: "1994-10-08", image: "https://randomuser.me/api/portraits/women/60.jpg", id: "34" },
        { name: "Micheal Morales", location: "West", email: "micheal.morales@example.com", status: "Discarded", address: "3622 Alexander Road", dob: "1970-05-28", image: "https://randomuser.me/api/portraits/men/64.jpg", id: "35" },
        { name: "Angèle Joly", location: "East", email: "angele.joly@example.com", status: "Discarded", address: "2394 Rue de L'Abbé-De-L'Épée", dob: "1963-09-25", image: "https://randomuser.me/api/portraits/women/38.jpg", id: "36" },
        { name: "Terry Powell", location: "West", email: "terry.powell@example.com", status: "Leave", address: "8007 Alexander Road", dob: "1954-07-11", image: "https://randomuser.me/api/portraits/men/16.jpg", id: "37" },
        { name: "Marco Cortes", location: "Uptown", email: "marco.cortes@example.com", status: "Leave", address: "1378 Calle Nebrija", dob: "1983-07-18", image: "https://randomuser.me/api/portraits/men/28.jpg", id: "38" },
        { name: "Claudirene Pires", location: "West", email: "claudirene.pires@example.com", status: "Employed", address: "1408 Beco dos Namorados", dob: "1955-06-17", image: "https://randomuser.me/api/portraits/women/95.jpg", id: "39" },
        { name: "Penny Allen", location: "Uptown", email: "penny.allen@example.com", status: "Employed", address: "7957 W Dallas St", dob: "1998-08-09", image: "https://randomuser.me/api/portraits/women/40.jpg", id: "40" },
        { name: "Catherine Henderson", location: "Downtown", email: "catherine.henderson@example.com", status: "Employed", address: "1685 Rochestown Road", dob: "1975-03-09", image: "https://randomuser.me/api/portraits/women/21.jpg", id: "41" },
        { name: "Arani Jesus", location: "East", email: "arani.jesus@example.com", status: "Employed", address: "213 Rua São Luiz ", dob: "1957-12-08", image: "https://randomuser.me/api/portraits/women/3.jpg", id: "42" },
        { name: "Oliver Marie", location: "Downtown", email: "oliver.marie@example.com", status: "Employed", address: "6429 Place de L'Europe", dob: "1989-03-06", image: "https://randomuser.me/api/portraits/men/0.jpg", id: "43" },
        { name: "Nanna Andersen", location: "West", email: "nanna.andersen@example.com", status: "Discarded", address: "4367 Niels Bohrs Vej", dob: "1994-09-04", image: "https://randomuser.me/api/portraits/women/22.jpg", id: "44" },
        { name: "Jonathan Ray", location: "West", email: "jonathan.ray@example.com", status: "Employed", address: "6428 Timber Wolf Trail", dob: "1991-11-16", image: "https://randomuser.me/api/portraits/men/79.jpg", id: "45" }
      ],
      selectedEmployee: {},
      searchQuery: "",
      filteredLocation: "",
      filteredStatus: "",
      currentPage: 1,
      peoplePerPage: 10,
      pages: []
    };
  },
  computed: {
    // Used to keep track of current list of people and handle individual and multiple filters
    currentPeople() {
      if (this.filteredLocation === this.filteredStatus) {
        return this.employees;
      } else if (this.filteredLocation !== "" && this.filteredStatus === "") {
        return this.filterLocation;
      } else if (this.filteredLocation === "" && this.filteredStatus !== "") {
        return this.filterStatus;
      } else {
        // Return intersection of both filter arrays
        return this.filterLocation.filter(x => this.filterStatus.includes(x));
      }
    },

    // Used to handle search functionality
    peopleSearch() {
      if (this.searchQuery !== "") {
        return this.currentPeople.filter(employee => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(q => employee.name.toLowerCase().includes(q));
        });
      } else {
        return this.currentPeople;
      }
    },

    // Used to get list of locations for filter dropdown
    locations() {
      return [...new Set(this.employees.map(employee => employee.location))];
    },

    // Used to get list of statuses for filter dropdown
    statuses() {
      return [...new Set(this.employees.map(employee => employee.status))];
    },

    // Used to get employees matching filtered location
    filterLocation() {
      return this.employees.filter(
        employee => employee.location === this.filteredLocation
      );
    },

    // Used to get employees matching filtered status
    filterStatus() {
      return this.employees.filter(
        employee => employee.status === this.filteredStatus
      );
    },

    // Used to display the current people for the current page
    displayedPeople() {
      return this.paginate(this.peopleSearch);
    },

    // Used to get the correct number of pages
    numOfPages() {
      if (this.searchQuery === '') {
        return Math.ceil(this.currentPeople.length / this.peoplePerPage);
      } else {
        return Math.ceil(this.displayedPeople.length / this.peoplePerPage);
      }
    },

    // Used to show the correct number of pages
    currentPages() {
      let pages = [];
      for (let i = 1; i <= this.numOfPages; i++) {
        pages.push(i);
      }
      return pages;
    }
  },

  methods: {
    // Sets the employee for the modal
    setSelectedEmployee(employee) {
      this.selectedEmployee = employee;
    },

    paginate(people) {
      let from = this.currentPage * this.peoplePerPage - this.peoplePerPage;
      let to = this.currentPage * this.peoplePerPage;
      return people.slice(from, to);
    }
  },

  mounted() {
    let currentPage = document.getElementById(this.currentPage);
    currentPage.classList.add("active");
  },
};
</script>

<style>
#app {
  margin-top: 60px;
}
.card-body {
  min-height: 41rem;
}
</style>
