const Multiples = (mult, m, n) => {
    for(let i = 1; i <=n; i++){
        mult.push(m*i)
    }
    return mult
}

console.log(Multiples([], 89608, 597))