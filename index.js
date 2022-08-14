let a = [];
let o = {};
let s = "str";
let n = 1;

function fn(a1, a2, a3, a4) {
  console.log(a1.test);
  console.log(a2.test);
  console.log(a3.test);
  console.log(a4.test);
  a1.test = "test";
  a2.test = "test";
  a3.test = "test";
  a4.test = "test";
  console.log(a1.test);
  console.log(a2.test);
  console.log(a3.test);
  console.log(a4.test);
}

fn(a, o, s, n);
console.log(a.test);
console.log(o.test);
console.log(s.test);
console.log(n.test);
