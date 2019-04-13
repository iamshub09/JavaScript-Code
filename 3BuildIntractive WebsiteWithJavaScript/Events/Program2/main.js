// Add the code you want to test below:
//Fetch ID's
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let margo = document.getElementById('margo');

// Function Created 
let open = function() {
  margo.style.display = 'block';
  close.style.display = 'block';
  
};

let hide = function() {
  margo.style.display = 'none';
  close.style.display = 'none';
};
let textChange = function() {
  view.innerHTML = 'Hello, World!';
}
let textReturn = function() {
  view.innerHTML = 'View';
}

// Adding events in DOM elements 
//Way - 1
view.addEventListener('click',() => {
  open(); 
  textChange();});

//Way-2
close.onclick = hide;
close.addEventListener('click', textReturn);