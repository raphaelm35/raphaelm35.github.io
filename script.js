// Setting today's date
const today = new Date ();
//Setting first day of coding date
const firstDay = new Date('11/17/2022');
// calculating the difference between th two in milliseconds
let difference = today.getTime() - firstDay.getTime();
// passing the result in days
let differenceInDays = (difference / 86400000);
// finally calaculting the number of lines coded with my daily average and truncing the decimals
let linesCodedThusFar = Math.trunc(differenceInDays * 542);
console.log(linesCodedThusFar);

document.getElementById('number').innerHTML = linesCodedThusFar;