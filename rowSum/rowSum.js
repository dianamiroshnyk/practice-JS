do{
    check = 0;
    var lim1 = prompt("Введіть перше число (lim1): ", '');
    if (lim1.replace (/\d/g, '').length)
        alert ('Введіть тільки цифри');
    else{
        lim1 = Number(lim1);
        check = 1;
    }
} while (check == 0);

do{
    check = 0;
    var lim2 = prompt("Введіть друге число (lim2): ", '');
    if (lim2.replace (/\d/g, '').length)
        alert ('Введіть тільки цифри');
    else{
        lim2 = Number(lim2);
        check = 1;
    }
} while(check == 0);

function rowSum(lim1, lim2){
    if (lim1 === lim2){
        return lim1;
    } else{
        return lim1 + rowSum(lim1 + 1, lim2);
    }  
}

function loopFor(lim1, lim2){
    let sum1 = 0;
    for(lim1; lim1 <= lim2; lim1++){
        sum1 += lim1;
    }
    return sum1;
}

function loopWhile(lim1, lim2){
    let sum2 = 0;
    while (lim1 <= lim2){
        sum2 += lim1;
        lim1++;
    }
    return sum2;
}

const sum1 = loopFor(lim1, lim2);
const sum2 = loopWhile(lim1, lim2);
const sum3 = rowSum(lim1, lim2);

console.log("Результат обчислення через цикл for: " + sum1);
console.log("Результат обчислення через цикл while: " + sum2);
console.log("Результат обчислення через функцію: " + sum3);
