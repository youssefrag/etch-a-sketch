function createGrid(cr) {

  // Define grid
  const grid = document.createElement('div');
  grid.setAttribute('id', "grid")

  content.appendChild(grid)

  // Create columns
  const column = document.createElement('div')
  column.classList.add('column');
  column.setAttribute('id', 'c1')

  // Append number of colums to grid
  for(c= 2; c<= cr + 1 ; c++) {
    grid.appendChild(column.cloneNode())
    column.setAttribute('id', 'c' + c)
  }

  for(c= 1; c<= cr; c++) {
    const columns = document.getElementById('c'+ c)
    const box = document.createElement('div')

    // Create box elements
    box.classList.add('box')
    box.setAttribute('id', 'c' + c + 'r' + 1)

    // Add box elements to columns
    for(r = 2; r <= cr + 1 ; r++) {
      columns.appendChild(box.cloneNode())
      box.setAttribute('id', 'c' + c + 'r' + r)
    }
  }

  

}

function removeExistingGrid() {
  // Define grid
  const grid = document.querySelector('#grid');

  const content = document.getElementById('content')

  content.removeChild(grid);
}

const defaultCr = 16;

createGrid(defaultCr)

// Define box elements
const boxes = document.querySelectorAll('.box');


// Default button functionality
const defaultBtn = document.getElementById('defaultBtn')
defaultBtn.addEventListener('click', () => {
  boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
      box.style['background-color'] = 'black'
    })
  })
})

// Erase button functionality
const eraseBtn = document.getElementById('eraseBtn')
eraseBtn.addEventListener('click', () => {
  boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
      box.style['background-color'] = 'white'
    })
  })
})

// Rainbow button functionality
function get_random_color() 
{
    let color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}


const rainbowBtn = document.getElementById('rainbowBtn')
rainbowBtn.addEventListener('click', () => {
  boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
      box.style['background-color'] = get_random_color()
    })
  })
})

const clearBtn = document.getElementById('clearBtn')
clearBtn.addEventListener('click', () => {
  boxes.forEach((box) => {
    box.style['background-color'] = 'white'
  })
})

let slider = document.getElementById("myRange")

let output = document.getElementById("value")

output.innerHTML = slider.value;

slider.oninput = function() {
  boxes.forEach((box) => {
    box.style['background-color'] = 'white'
  })

  const newCr = this.value;

  removeExistingGrid()

  createGrid(newCr);

  output.innerHTML = this.value;
} 