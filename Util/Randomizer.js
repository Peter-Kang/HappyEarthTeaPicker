function RandomlySelectTeaFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const resultObject = array[randomIndex];
  resultObject.title = JSON.stringify(resultObject.title).replaceAll('"', "");
  //log for info purposes
  console.info(randomIndex, resultObject.title);
  return resultObject;
}
