function saleHotdogs(n){
    if (n < 5){
        return 100 * n;
    } else if (n >= 5 && n <10){
        return 95 * n;
    } else {
        return 90 * n;
    }
}

console.log(saleHotdogs(1)); // 100
console.log(saleHotdogs(4)); // 400
console.log(saleHotdogs(5)); // 475
console.log(saleHotdogs(9)); // 855
console.log(saleHotdogs(10)); // 900
console.log(saleHotdogs(100)); // 9000