// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({}, driver, {[key]: value} )
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key, value){
  driver[key] = value;

  return driver
}

function deleteFromDriverByKey(driver, key){
  newDriver= Object.assign({},driver)
  delete newDriver[key];
  return newDriver;
}


function destructivelyDeleteFromDriverByKey(driver,ley){
  delete driver[key]
  return driver
}
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
