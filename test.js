let values = {
  chemo: '0',
  diagnosis_age: '60',
  idh_status: '0',
  radiotherapy: '0',
  sex: 'male',
  sx_duration: '60',
  sx_main: 'deficit',
  treatment: 'biopsy',
  tumor_location: 'cerebellum',
  tumor_side: 'left',
};

const setInt = (key, data) => {
  data[key] = parseInt(data[key]);
};
const setDummy = (key, data) => {
  data[`${key}_${data[key]}`] = 1;
  delete data[key];
};

setInt('diagnosis_age', values);
setInt('sx_duration', values);
setInt('chemo', values);
setInt('idh_status', values);

setDummy('sex', values);
setDummy('treatment', values);
setDummy('tumor_location', values);
setDummy('tumor_side', values);
setDummy('radiotherapy', values);
setDummy('sx_main', values);
console.log(JSON.stringify(values, null, 2));
