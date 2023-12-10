let a = Number(prompt("3 xonali son kiriting"));
let b = Math.floor(a/100);
let c = Math.floor(a/10);
let d = c%10;
let e = a%100%10;
console.log(`${b+e+d}=yigindisi`)
console.log(`${b*e*d}=ko'paytmasi`)