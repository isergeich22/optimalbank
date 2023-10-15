const filterDepartments = (departments, params) => {
  const corelation = {
    vipZone: 'VIP Зона ',
    vipOffice: 'VIP Офис ',
    ramp: 'Пандус ',
    person: 'Обслуживание инвалидов по зрению ',
    juridical: 'Обслуживание юридических лиц ',
    Prime: 'Prime ',
  };

  return departments.filter((department) => {
    const special = department.special;
    let vars = Object.keys(special)
      .filter((el) => special[el])
      .map((el) => corelation[el]);

    return params.every((param) => vars.includes(param));
  });
};

export default filterDepartments;
