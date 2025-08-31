function sumrec(n){
    if (n <= 1) {
        return n;
    }
      return n + sumrec(n-1);
}


let result = sumrec(5);
console.log(result);