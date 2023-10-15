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
    console.log('setting departments', departments.length);
    console.log('setting departments', departments[0]);
    this.departments = departments;
    console.log('setted departments', departments.length);

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
