console.log('--------------- Leap Year ---------------')
function check_leap_year(leap_year) {
  var leap = new Date(leap_year, 1, 29).getDate() === 29
  if (leap) {
    console.log(leap_year + ' is a leap year')
  } else {
    console.log(leap_year + ' is not a leap year')
  }
}
check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(1945);
check_leap_year(null);
check_leap_year("Twenty Twenty");
check_leap_year(undefined);
check_leap_year(NaN);
check_leap_year(1750);