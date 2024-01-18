// isprime func
function isPrime(num) {
    let flag = true;
        for(let i = 2; i <= num; i++) {
          if(num%i == 0 && i!==1 && i!=num) {
            flag = false
            break;
          }
        }
    return flag
 }

 let arr = [];
 // split by division
function split(num) {
    for(let i = 2; i <= num; i++) {
        for(let j = 2; j <= num; j++) {
            if(i * j === num) {
              isPrime(i) && isPrime(j) ? arr.push(num) : ''
            }
          }
    }
}

// iterate numbers ininterval
for(let i = 150; i <= 200; i++) {
        split(i)
}
console.log(new Set(arr)) // deduplication
