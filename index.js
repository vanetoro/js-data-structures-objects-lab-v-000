// // Write your solution in this file!
//
// const driver = {};
//
// function updateDriverWithKeyAndValue(obj,key,value){
//     let newDriver = {...obj};
//
//       return newDriver[key] = value;
//
// }
//
// function destructivelyUpdateDriverWithKeyAndValue(obj,key, value){
//   return obj[key] = value;
// }
//
//
// function deleteFromDriverByKey(driver, key){
//   let newDriver = {..obj};
//   delete newDriver[key];
// }
//
//
// function destructivelyDeleteFromDriverByKey(driver,ley){
//   return   delete newDriver[key]
//
//
// }
//  const driver = {}
//
//  function DriverWithKeyAndValue(driver, key, value){
//     const newDriver = { ...driver };
//
//     newDriver[key]= value;
//
//     return newDriver;
//
//  }

const driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey (driver, key) {
  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey (driver, key) {
  delete driver[key];

  return driver;
}
