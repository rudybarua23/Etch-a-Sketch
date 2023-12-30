document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('grid-container');
    const changeSizeButton = document.getElementById('changeSize');
    let numSquares = 16 * 16;
    var clear = document.getElementById('clear');

    function createGrid(size) {
        container.innerHTML = '';
        numSquares = size * size
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //sets the columns to size and divides container evenly
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`; //sets the rows to size and divides container evenly
        for (let i = 0;i < numSquares;i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }

    container.addEventListener('mousemove', function(e) {
        if (e.buttons === 1) {  //makes sure the left mouse button is clicked 
            if (e.target.classList.contains('square')) {
                e.target.style.backgroundColor = 'black';
            }
        }
    })

    changeSizeButton.addEventListener('click', function() {
        var input = window.prompt('Enter the size of the grid (Up to 100x100): ');
        var size = parseInt(input);
        if (!isNaN(size) && size > 0 && size <= 100) {
            createGrid(size);
        } else {
            alert('Please enter a positive number less than or equal to 100.');
        }
    })

    clear.addEventListener('click',function() {
        const squares = container.getElementsByClassName('square');
        for (let square of squares) {
            square.style.backgroundColor = '#f0f0f0';
        }
    })

    createGrid(16);
});

