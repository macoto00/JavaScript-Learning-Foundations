setTimeout(() => {
    console.log('apple'); // prints after one second
  }, 1000);
  console.log('pear'); // prints first

  const timeoutId = setTimeout(() => {
    console.log('Yeeey!'); // not going to run
  }, 1000);
  
  clearTimeout(timeoutId);

  const printing = () => {
    console.log(1);
    setTimeout(() => {
      console.log(2);
    }, 1000);
    setTimeout(() => {
      console.log(3);
    }, 0);
    console.log(4);
  };
  printing();
  
  // Output is 1, 4, 3, 2