const container = document.querySelector('.container');
// Change background color
function changeBgColor(min, max) {
	const body = document.querySelector('body');
	const randomRGB = () => Math.floor(Math.random() * (max - min) + min);
	const r = randomRGB();
	const g = randomRGB();
	const b = randomRGB();
	const r1 = randomRGB();
	const g1 = randomRGB();
	const b1 = randomRGB();
	body.style.background = `linear-gradient(320deg,
        rgba(${r}, ${g}, ${b}, 1) 20%,
        rgba(${r1}, ${g1}, ${b1}, 1) 40%)`;
}
// Changing background every 10 seconds
setInterval(() => changeBgColor(50, 150), 10000);

// Create grid 16 x 16 grid rows/cols
function getRows(rows = 16, cols = 16) {
	container.style.setProperty('--grid-rows', rows);
	container.style.setProperty('--grid-cols', cols);

	for (let c = 0; c < rows * cols; c++) {
		let cell = document.createElement('div');
		container.appendChild(cell).className = 'grid-item';
	}
}
getRows();

// Checks if the class contains grid item and allows you to draw

//  Changing grid size
const input = document.querySelector('input');
const btn = document.querySelector('#btn');

// set up hover effects based on what they click
const rainbow = document.querySelector('.rainbow');
const opaque = document.querySelector('.opaque');
const grid = document.querySelectorAll('.grid-item');
const clear = document.querySelector('.clear');

Array.from(grid);

grid.forEach(item => {
	item.addEventListener('mouseover', () => {
		item.style.backgroundColor = `#111`;
	});
});

function getHoverState() {
	// Getting default state if they don't click a button
	grid.forEach(item => {
		item.addEventListener('mouseover', () => {
			item.style.backgroundColor = `#111`;
		});
	});

	// Getting rainbow colors if they click the rainbow button
	rainbow.onclick = () => {
		rainbowColors(50, 150);
	};

	opaque.onclick = () => {
		transparent();
	};

	clear.onclick = () => {
		clearGrid();
	};
}

function rainbowColors(min, max) {
	grid.forEach(item => {
		const r = Math.floor(Math.random() * (max - min) + min);
		const g = Math.floor(Math.random() * (max - min) + min);
		const b = Math.floor(Math.random() * (max - min) + min);
		item.addEventListener('mouseover', () => {
			item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
		});
	});
}

function transparent(max, min) {
	grid.forEach(item => {
		item.addEventListener('mouseover', () => {
			item.style.backgroundColor = `transparent`;
		});
	});
}

function clearGrid() {
	grid.forEach(item => {
		item.style.backgroundColor = 'transparent'; // or any other default color you want
	});
}

getHoverState();

btn.onclick = () => {
	getRows(input.value, input.value);
	getHoverState();
};
