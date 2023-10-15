const filterDepartments = (departments, filters) => {
  return departments.filter((department) => {
    let fields = Object.keys(department);
    for (let i = 0; i < fields.length; i++) {
      if (typeof department[fields[i]] === 'object') {
        fields.push(...Object.keys(fields[i]));
        for (let j = 0; j < Object.keys(department[fields[i]].length); j++) {
          fields.push(department[fields[i]][k]);
        }
      }
    }
    console.log(department);
    console.log('fields ', fields[i]);
  });
};

export default filterDepartments;
