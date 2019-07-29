console.log('1\n2\n3\n4\n5\n6\n7\n8\n9\n10')

// let num = prompt('Enter a number?');
// num = parseInt(num)
// console.log(num)

// if(!num) {
//     num = 10
// }
// console.log(num + 10)

let response = prompt('What was your grade?');
let grade = parseInt(response);

if (grade){
    if(grade >= 70){
        console.log('You passed!')
    } else {
        console.log('You failed.')
    }
} else {
    console.log(response, 'is not a number.')
}




