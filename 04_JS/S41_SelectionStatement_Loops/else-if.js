function findDesignation(exp) {
  if (exp >= 0 && exp <= 2) {
    console.log("Junior Dev");
  } else if (exp > 2 && exp <= 5) {
    console.log("Senior Dev");
  } else if (exp > 5 && exp <= 7) {
    console.log("TL");
  } else if (exp > 7 && exp <= 9) {
    console.log("PM");
  } else if (exp > 9) {
    console.log("SA");
  } else {
    console.log("Add Valid Exp");
  }
}

findDesignation(4.5); // Senior Dev
