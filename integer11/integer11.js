let son = Number(prompt("Ikki xonali son kiriting"))
let qoldiq = son%10;
let dastlabkiRaqam = (son-qoldiq)/10;12
let kopaytma = dastlabkiRaqam*qoldiq;
let yigindi = dastlabkiRaqam+qoldiq;
console.log(`yi'gindisi ${yigindi} ga teng va ko'paytmasi ${kopaytma} ga teng`);