const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  const existingIndex = carCollection.indexOf(carBrand);

  if (existingIndex === -1) {

    carCollection.push(carBrand);
    return `new car collection is: ${carCollection.join(", ")}.`;
  } else {

    const position = existingIndex + 1;
    return `${carBrand} already exists in position ${position} of the car collection.`;
  }
}

console.log(carCollection)