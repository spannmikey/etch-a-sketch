const container = document.querySelector('.container');

// Create grid with a specified size
function createGrid(rows, cols) {
	container.innerHTML = ''; // Clear the existing grid
	container.style.setProperty('--grid-rows', rows);
	container.style.setProperty('--grid-cols', cols);

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			let cell = document.createElement('div');
			cell.className = 'grid-item';
			cell.addEventListener('mouseover', draw);
			container.appendChild(cell);
		}
	}
}

// Initialize the grid
createGrid(16, 16);

// Set up drawing functions
let isDrawing = false;

function draw(event) {
	if (isDrawing) {
		event.target.style.backgroundColor = 'black';
	}
}

container.addEventListener('mousedown', () => (isDrawing = true));
container.addEventListener('mouseup', () => (isDrawing = false));

// Handle button clicks
const btn = document.querySelector('#btn');
const input = document.querySelector('input');
const rainbow = document.querySelector('.rainbow');
const opaque = document.querySelector('.opaque');
const clear = document.querySelector('.clear');

btn.addEventListener('click', () => {
	const newSize = parseInt(input.value);
	createGrid(newSize, newSize);
	getHoverState();
});

rainbow.addEventListener('click', () => {
	rainbowColors(50, 150);
});

opaque.addEventListener('click', () => {
	transparent();
});

clear.addEventListener('click', () => {
	clearGrid();
});

function getHoverState() {
	container.querySelectorAll('.grid-item').forEach(item => {
		item.addEventListener('mouseover', () => {
			item.style.backgroundColor = 'black';
		});
	});
}
// calling this so it defaults to black in beginning
getHoverState()

function rainbowColors(min, max) {
	container.querySelectorAll('.grid-item').forEach(item => {
		const r = Math.floor(Math.random() * (max - min) + min);
		const g = Math.floor(Math.random() * (max - min) + min);
		const b = Math.floor(Math.random() * (max - min) + min);
		item.addEventListener('mouseover', () => {
			item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
		});
	});
}

function transparent() {
	container.querySelectorAll('.grid-item').forEach(item => {
		item.addEventListener('mouseover', () => {
			item.style.backgroundColor = 'transparent';
		});
	});
}

function clearGrid() {
	container.querySelectorAll('.grid-item').forEach(item => {
		item.style.backgroundColor = 'transparent';
	});
}
