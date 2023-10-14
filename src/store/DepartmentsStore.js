import { makeObservable, observable, action } from 'mobx';

class DepartmentStore {
  departments = [];

  constructor() {
    makeObservable(this, {
      departments: observable,
      setDepartments: action,
    });
  }

  setDepartments(departments) {
    this.departments = departments;

    /* example of using
(async () => {
      console.log('fetching');
      try {
        const departmentsData = await useFetchDepartments();
        console.log(departmentsData);
        departmentStore.setDepartments(departmentsData);
      } catch (error) {
        console.error(error);
      }
    })()
    */
  }
}

const departmentStore = new DepartmentStore();
export default departmentStore;
