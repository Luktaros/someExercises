function* fibGenerator(){
  yield 0;
  yield 1;
  let fn = 0;
  let fn1 = 0;
  let fn2 = 1;

  while (true){
    fn = fn1 + fn2;
    yield fn;
    fn1 = fn2;
    fn2 = fn;
  }
}
