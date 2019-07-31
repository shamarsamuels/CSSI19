const CountToN = x => {
    let index = 1;
    let count = 1;
    
    while(index <= x){
        console.log(index);
        count += index;
        index++;
    }

    console.log(`Total Sum ${count}`)
}

const CountToN_string_method = x => {
    let index = 1;
    let count = 1;
    let str = '';

    while(index <= x){
        count += index;
        str += index + '\n'
        index++;
    }

    console.log(str);
    console.log(`Total Sum ${count}`)
}

const get_number = () => {
    while(true){
        let response = parseInt(prompt('Please Enter a Number?'));
        if(response){
          return response  
        }
    }
}

const f = () => {
    let num = get_number();
    console.log(num + 10);
}


