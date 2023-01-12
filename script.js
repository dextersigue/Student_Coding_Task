'use strict';

/* 1. create an Array students, insert four times , which should be objects and have three 
properties: name, score1, score2, with the following values

a. John, 47, 46
b. bob, 23, 24
c. nick, 40, 35
d. alex, 44, 45
*/

/* 2. Suppose that, students have chance to get different degrees of diploma, like A,B,C,D,E 
and those degrees are relevant to the following passing limits 91, 81, 71, 61, 51,
according to that, create two arrays for passing limits and for degrees */

/* 3. Create function which will calculate total score (score1 + score2) for each student.*/

/* 4. Create a function and used in it for loops, else if statements and whatever need, 
in order to figure out, which student has passed an exam and what kind of degree he has got.*/

/* 5. Display the Final result in console*/

//number 1 task
let students = [
  {
    name: 'john',
    score1: 47,
    score2: 46,
  },
  {
    name: 'bob',
    score1: 23,
    score2: 24,
  },
  {
    name: 'nick',
    score1: 40,
    score2: 35,
  },
  {
    name: 'alex',
    score1: 44,
    score2: 45,
  },
];

//number 2 task
let scores = [91, 81, 71, 61, 51];
const degrees = ['A', 'B', 'C', 'D', 'E'];

//number 3 task
function calcSum(score1, score2) {
  const sum = score1 + score2;
  return sum;
}

//number 4 task
function calcFinal() {
  for (let i = 0; i < students.length; i++) {
    students[i].sum = calcSum(students[i].score1, students[i].score2);
   
    if (students[i].sum >= 51) {
      console.log(students[i].name + ' Passed final exam succesfully');

      for(let resultScore = 0; resultScore < scores.length; resultScore++){
        if(students[i].sum >= scores[resultScore]){
            console.log('He has ' + 
                        students[i].sum + 
                        ' Points and he got diploma with degree ' + 
                        degrees[resultScore]);  
            console.log('----------------');
        break;
        }
      }

    } else {
        console.log(students[i].name + ' got ' + students[i].sum + ' points, has failed and has to try next year');
        console.log('----------------');
    }
  }
}

calcFinal();

//console.log('----------------');
//number 5 task
//display the final result in console

/*
//sample relate to task
for(let i = 100; i < 105; i++){
    
    for(let x = 0; x < 10; x++){
        console.log(x)
    }

    console.log(i)
}
*/

