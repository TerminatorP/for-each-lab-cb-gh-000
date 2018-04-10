function iterativeLog(array) {
  array.forEach((el,i) => console.log(`${index}: ${element}`));
}

function iterate(callback) {
  let arrFriends = ['Kenny', 'Nebi'];
  arrFriends.forEach(callback);
  return arrFriends;
}
function doToArray(array, callback) {
  array.forEach(callback);
}