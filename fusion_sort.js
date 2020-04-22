let file = require("fs");

file.readFile(process.argv[2], "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);

  data = data.split(" ").map((data) => Number(data));

  const Sorting = (data) => {
    let run = 0;
    const sor = (left, right) => {
      let res = [];
      while (left.length && right.length) {
        if (left[0] <= right[0]) {
          res.push(left.shift());
        } else {
          res.push(right.shift());
        }
      }
      while (left.length) {
        res.push(left.shift());
      }
      while (right.length) {
        res.push(right.shift());
      }
      return res;
    };

    const sort = (data) => {
      run++;
      if (data.length < 2) {
        return data;
      }
      let middle = Math.floor(data.length / 2);
      let left = data.slice(0, middle);
      let right = data.slice(middle, data.length);
      return sor(sort(left), sort(right));
    };
    data = sort(data);
    return data;
  };

  copy = data.slice();
  console.log(Sorting(copy));
});
