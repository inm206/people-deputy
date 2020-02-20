import { shallowMount, mount } from '@vue/test-utils'
import NavComponent from '@/components/NavComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import RowComponent from '@/components/RowComponent.vue'
import SearchFilterComponent from '@/components/SearchFilterComponent.vue'
import TableComponent from '@/components/TableComponent.vue'

describe('NavComponent.vue', () => {
  it('renders props.msg as title when passed', () => {
    const msg = 'People'
    const wrapper = shallowMount(NavComponent, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('ModalComponent.vue', () => {
  it('renders employee details when passed', () => {
    const selectedEmployee = {
      name: "Alanna Phaih",
      location: "Downtown",
      email: "alanna.p@gmail.com",
      status: "Employed",
      address: "3785 Depaul Dr",
      dob: "1992-07-05",
      image: "https://randomuser.me/api/portraits/women/96.jpg"
    }
    const wrapper = shallowMount(ModalComponent, {
      propsData: { selectedEmployee }
    })
    expect(wrapper.find("#employeeName").text()).toMatch(selectedEmployee.name)
    expect(wrapper.find("#employeeStatus").text()).toMatch(selectedEmployee.status)
  })
})

describe('PaginationComponent.vue', () => {
  const currentPages = [1, 2, 3, 4]
  const currentPage = 1
  const wrapper = shallowMount(PaginationComponent, {
    propsData: { currentPages, currentPage }
  })
  it('renders correct number of passed pages', () => {
    expect(wrapper.findAll('.page-item').wrappers.length).toBe(currentPages.length + 3)
  }),
  it('emits update on next page button click', () => {
    // suppress console.error for this test
    const originalError = console.error;
    console.error = jest.fn();

    const nextPageButton = wrapper.find('#nextPageButton')
    nextPageButton.trigger('click')
    expect(wrapper.emitted()).toBeTruthy()

    // restore console.error
    console.error = originalError;
  })
})

describe('RowComponent.vue', () => {
  const employee = {
    name: "Alanna Phaih",
    location: "Downtown",
    email: "alanna.p@gmail.com",
    status: "Employed",
    address: "3785 Depaul Dr",
    dob: "1992-07-05",
    image: "https://randomuser.me/api/portraits/women/96.jpg"
  }
  const index = 1
  const wrapper = shallowMount(RowComponent, {
    propsData: { employee, index }
  })
  it('renders employee details when passed', () => {
    expect(wrapper.find("#name1").text()).toMatch(employee.name)
    expect(wrapper.find("#location1").text()).toMatch(employee.location)
    expect(wrapper.find("#email1").text()).toMatch(employee.email)
    expect(wrapper.find("#status1").text()).toMatch(employee.status)
  }),
  it('emits update on view button click', () => {
    const viewButton = wrapper.find('#view1')
    viewButton.trigger('click')
    expect(wrapper.emitted()).toBeTruthy()
  })
})

describe('SearchFilterComponent.vue', () => {
  const locations = ['Downtown', 'Uptown', 'West']
  const statuses = ['Employed', 'Discarded']
  const wrapper = shallowMount(SearchFilterComponent, {
    propsData: { locations, statuses }
  })
  it('renders correct number of buttons for passed locations and statuses', () => {
    expect(wrapper.findAll('button').wrappers.length).toBe(locations.length + statuses.length + 1)
  }),
  it('emits update on location filter button click', () => {
    // suppress console.error for this test
    const originalError = console.error;
    console.error = jest.fn();

    const viewButton = wrapper.find('#Downtown')
    viewButton.trigger('click')
    expect(wrapper.emitted()).toBeTruthy()
    
    // restore console.error
    console.error = originalError;
  }),
  it('emits update on status filter button click', () => {
    // suppress console.error for this test
    const originalError = console.error;
    console.error = jest.fn();

    const viewButton = wrapper.find('#Employed')
    viewButton.trigger('click')
    expect(wrapper.emitted()).toBeTruthy()
    
    // restore console.error
    console.error = originalError;
  }),
  it('emits update on key up in search box', () => {
    const searchBox = wrapper.find('input')
    searchBox.trigger('keyup')
    expect(wrapper.emitted()).toBeTruthy()
  })
})

describe('TableComponent.vue', () => {
  const displayedPeople = [
    {
      name: "Alanna Phaih",
      location: "Downtown",
      email: "alanna.p@gmail.com",
      status: "Employed",
      address: "3785 Depaul Dr",
      dob: "1992-07-05",
      image: "https://randomuser.me/api/portraits/women/96.jpg"
    },
    {
      name: "Alfie Krute",
      location: "West",
      email: "ak3000@hotmail.com",
      status: "Discarded",
      address: "259 Johnson St",
      dob: "1987-11-08",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "John Doe",
      location: "Downtown",
      email: "j.doe@rando.com",
      status: "Employed",
      address: "368 Victoria Dr",
      dob: "1990-05-05",
      image: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      name: "Jane Harriet",
      location: "Downtown",
      email: "jharriet.p@gmail.com",
      status: "Discarded",
      address: "3 George Dr",
      dob: "1995-02-03",
      image: "https://randomuser.me/api/portraits/women/21.jpg"
    }]
  const wrapper = mount(TableComponent, {
    propsData: { displayedPeople }
  })
  it('renders correct number of rows for passed people', () => {
    expect(wrapper.findAll('tr').wrappers.length).toBe(displayedPeople.length + 1)
  }),
  it('emits update on view button click', () => {
    const viewButton = wrapper.find('#view1')
    viewButton.trigger('click')
    expect(wrapper.emitted()).toBeTruthy()
  })
})
