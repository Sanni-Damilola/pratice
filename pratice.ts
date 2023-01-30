const fun = (value: string) => {
  let alpha: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  alpha.forEach((el) => {
    if (el === value) {
      return "cool " + value;
    } else {
      return "not cool " + value;
    }
  });

  return value;
};

console.log(fun(" "));
