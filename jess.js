/*Exercise 1*/
function formatText(str) {
    return str.trim().toLowerCase();
  }
  console.log(formatText("Lorem IPSUM."));

/*Exercise 2*/

const formatText1 = (str) => str.trim().toLowerCase();

console.log(formatText1("Lorem IPSUM.")); 

/*Exercise 3*/

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

const fourSports = ['football', 'basketball', 'golf', 'baseball'];


forEach(fourSports, console.log);

/*Exercise 4*/

const minArray = [1, 2, 3, 4, 5];
minArray.forEach(function(value) {
    
  console.log(value);
});

/*Exercise 5*/

const tallArray = [1, 2, 3, 4, 5];
const tripleNums = tallArray.map(function(tall) {
    return tall * 3;
});

console.log(tripleNums);

/*Exercise 6*/

const nums = [1, 2, 3, 4, 5];

function logOddNumbers(arr) {
    const oddNumbers = arr.filter(function(num) {
        return num % 2 !== 0; 
    });

    console.log(oddNumbers);
}

logOddNumbers(nums);
