// Write your solution in this file!
<<<<<<< HEAD
let driver;
function updateDriverWithKeyAndValue(obj,key,value){
    let newDriver = {...obj};

      return newDriver[key] = value;

}

function destructivelyUpdateDriverWithKeyAndValue(obj,key, value){
  return obj[key] = value;
}


function deleteFromDriverByKey(driver, key){
  let newDriver = {..obj};
  delete newDriver[key];
}


function destructivelyDeleteFromDriverByKey(driver,ley){
  return   delete newDriver[key]


}
=======
 const driver = {}
 
 function DriverWithKeyAndValue(driver, key, value){
    const newDriver = { ...driver };
    
    newDriver[key]= value;
    
    return newDriver;
   
 }
 
 
>>>>>>> 8564f746bf0a441d5ecf7b45d67c90874ee7d983
