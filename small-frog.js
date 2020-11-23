const FrogJmp = (X, Y, D) => {
  if (Y <= X) {
    return 0;
  }
  let firstJump = X + D;
  if (Y <= firstJump) {
    return 1;
  }
  let getDiff = Y - firstJump;
  let evaluate = Math.floor(getDiff / D);
  if (getDiff % D != 0) {
    return 1 + evaluate + 1;
  } else {
    return 1 + evaluate;
  }
};

let X = 10;
let Y = 10;
let D = 30;
console.log(FrogJmp(X, Y, D));
