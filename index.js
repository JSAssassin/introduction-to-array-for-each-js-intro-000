// Add your doToElementsInArray() function here:
function doToElementsInArray(callback){
  console.log(callback);

  Array.prototype.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(array) {

}

doToElementsInArray(changeCompletely);
