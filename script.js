// Define grid
const grid = document.querySelector('#grid');

let cr = 2; // number of columns and rown

// Create columns
const column = document.createElement('div')
column.classList.add('column');
column.setAttribute('id', 'c1')

/*
// Create boxes
const box = document.createElement('div')
box.classList.add('box')
*/

// Append number of colums to grid
for(c= 2; c<= cr + 1 ; c++) {
  grid.appendChild(column.cloneNode())
  column.setAttribute('id', 'c' + c)
}

for(c= 1; c<= cr; c++) {
  const columns = document.getElementById('c'+ c)
  const box = document.createElement('div')
  box.classList.add('box')
  box.setAttribute('id', 'c' + c + 'r' + 1)
  for(r = 2; r <= cr + 1 ; r++) {
    columns.appendChild(box.cloneNode())
    box.setAttribute('id', 'c' + c + 'r' + r)
  }
}
