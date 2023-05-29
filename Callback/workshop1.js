function callback() {
    console.log('This is executed once the button is clicked');
  };
  
  let button = document.querySelector('button');
  
  button.onclick = callback;