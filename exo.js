const e1 = (data, k) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (data[i] + data[j] == k && data[i] !== data[j]) {
        return true;
      }
    }
  }
  return false;
};
console.log("Exo 1");
console.log("[10, 15, 3, 7], k = 17");
console.log(e1([10, 15, 3, 7], 17));
console.log("[1, 8, 10, 21], k = 19");
console.log(e1([1, 8, 10, 21], 19));


const e2 = (data) => {
  let view = 0;
  for (let i = 0; i < data.length; i++) {
    let getview = 1;
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] <= data[j]) {
        getview = 0;
      }
    }
    view += getview;
  }
  return view;
};
console.log("");
console.log("Exo 2");
console.log("Est [3, 7, 8, 3, 6, 1] Ouest");
console.log(e2([3, 7, 8, 3, 6, 1]));
console.log("Est [1, 4, 5, 8] Ouest");
console.log(e2([1, 4, 5, 8]));
console.log("Est [6, 5, 4, 3, 2, 1] Ouest");
console.log(e2([6, 5, 4, 3, 2, 1]));

const e3 = (data, k) => {
  let pos = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] + data[pos] == k && data[i] !== data[pos]) {
      return true;
    }
    if (i === data.length - 1) {
      i = pos;
      pos++;
    }
  }
  return false;
};
console.log("");
console.log("Exo 3");
console.log("[10, 15, 3, 7], k = 17");
console.log(e3([10, 15, 3, 7], 17));
console.log("[1, 8, 10, 21], k = 19");
console.log(e3([1, 8, 10, 21], 19));
