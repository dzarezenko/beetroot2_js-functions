const BASE_URL = "http://mysite.com";

function firstFunction() {
  document.write("My 1st function");
}

function kvadrat(n) {
  return n * n;
}

/*let kvadrat = (n) => {
  return n * n;
}*/

/*document.write(kvadrat(3));

let a = 12;
let m = kvadrat(a);
console.log(m);*/

function sum_kvad(n) {
  //return [n + n, n * n];
  return {
    sum: n + n,
    kvad: n * n
  }
}

let result = sum_kvad(12);
console.log(result);

/*let f = firstFunction();
console.log(f);*/
