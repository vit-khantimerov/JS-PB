for (let i in arr) {
  try {
    console.log("arrayFill(", arr[i], ") >> ");
    console.log(arrayFill(arr[i][0], arr[i][1]), N);
  } catch (error) {
    console.log(error.message);
  }
}