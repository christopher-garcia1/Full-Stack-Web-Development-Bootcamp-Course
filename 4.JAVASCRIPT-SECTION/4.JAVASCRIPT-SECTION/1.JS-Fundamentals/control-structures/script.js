let age = 15

if (age >= 16) {
  console.log('you can drive');
} else if (age >= 18) { 
  console.log('you are able to vote');
  
} else {
  console.log(' your too young to drive and vote');
} 

const day = 3
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday'
    break
  case 2:
    dayName = 'Tuesday'
    break
  case 3: 
    dayName = 'Wensday'
    console.log(`Today is ${dayName}`);
    break
  default:
    console.log('not monday');
    
    break;
}   



for (i = 1; i <=10; i++){
  console.log(i);
  
}