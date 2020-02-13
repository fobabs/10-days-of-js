function getDayName(dateString) {
  let dayName;
  // Write your code here
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  dayName = dayNames[new Date(dateString).getDay()];
  return dayName;
}

console.log(getDayName(12-12-2015));