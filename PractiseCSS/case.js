// // let game = "V";
// /*per >=60
// per greater than = 50, less than 60
// */
// var percentage = prompt("Enter the value");
// switch (percentage) {
//   case percentage >= 60:
//     console.log("First");
//     break;
//   case percentage >= 45 && percentage < 60:
//     console.log("second");
//     break;
//   case percentage >= 33 && percentage < 45:
//     console.log("third");
//     break;
//   default:
//     console.log("fail");
//     break;
// }

let days = prompt("Enter the Value");
switch (true) {
  case days == 1:
    console.log("Monday");
    break;
  case days == 2:
    console.log("tuesday");
    break;
  case days == 3:
    console.log("Wednesday");
    break;
  case days == 4:
    console.log("Thursday");
    break;
  case days == 5:
    console.log("Friday hai aaj");
    break;
  case days == 6:
    console.log("Saturday");
    break;
  case days == 7:
    console.log("sunday");
    break;
  default:
    console.log(
      "abhy pagal hai ky 1 weeks mai kitne hote hai din tujhe pata nhi jo 7 se aage no. dal rha raha hai"
    );
}
