let f = x => 3 * x + 7;
let g = x => 8 * x + 5;
let i = (x,y) => x * x - y * y;
let j = (x,y,z) => x + y + z;

let run_test = (values, func) => {
    values.forEach(element => {
        console.log(func(element));
    });
}

run_test([1,2,3], f)
run_test([1,2,3], g)
run_test([(1,2),(2,4),(5,6)], i)
run_test([1,2,3], j)

