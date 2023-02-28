console.log('--------------- Month Numbers ---------------')
function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`Day of the week is ${monthNumber}: January`)
      //  console.log("Monday is the start day of the week");
      break
    case 2:
      console.log(`Month of the year is ${monthNumber}: February`)
      break
    case 3:
      console.log(`Month of the year is ${monthNumber}: March`)
      break
    case 4:
      console.log(`Month of the year is ${monthNumber}: April`)
      break
    case 5:
      console.log(`Month of the year is ${monthNumber}: May`)
      break
    case 6:
      console.log(`Month of the year is ${monthNumber}: June`)
      break
    case 7:
      console.log(`Month of the year is ${monthNumber}: July`)
      break
    case 8:
      console.log(`Month of the year is ${monthNumber}: August`)
      break
    case 9:
      console.log(`Month of the year is ${monthNumber}: September`)
      break
    case 10:
      console.log(`Month of the year is ${monthNumber}: October`)
      break
    case 11:
      console.log(`Month of the year is ${monthNumber}: November`)
      break
    case 12:
      console.log(`Month of the year is ${monthNumber}: December`)
      break
    default:
      console.log(`Invalid month : ${monthNumber}`)
      break
  }
  console.log(`End of Switch case for ${monthNumber}`)
}
monthOfYear(2) // 1 to 7, invalid
monthOfYear(5)
monthOfYear(12)
monthOfYear(15)
monthOfYear(100)
// monthOfYear(null)
// monthOfYear(undefined)
