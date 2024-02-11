'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';
//let globalActiveHabbitId;

/* page */
const page = {
	menu: document.querySelector('.menu__list'),
	//header: {
	//	h1: document.querySelector('.h1'),
	//	progressPercent: document.querySelector('.progress__percent'),
	//	progressCoverBar: document.querySelector('.progress__cover-bar'),
	//},
	//content: {
	//	daysContainer: document.getElementById('days'),
	//	nextDay: document.querySelector('.habbit__day')
	//},
	//popup: {
	//	index: document.getElementById('add-habbit-popup'),
	//	iconField: document.querySelector('.popup__form input[name="icon"]')
	//}
}
/* utils */
function loadData() {
	const habbitsString = localStorage.getItem(HABBIT_KEY);
	const habbitArray = JSON.parse(habbitsString);
	if (Array.isArray(habbitArray)) {
		habbits = habbitArray;
	}
}
function saveData() {
	localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

/* render */
function rerenderMenu(activeHabbit) {
	if (!activeHabbit) {
		return;
	}
	for (const habbit of habbits) {
		const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
		if (!existed) {
			const element = document.createElement('li');
			element.setAttribute('menu-habbit-id', habbit.id);
			element.classList.add('menu__list-item');
			element.addEventListener('click', () => rerender(habbit.id));
			element.innerHTML = `
			<button  class="menu__list-item-link">
			<img src="./img/${habbit.icon}.svg" alt="${habbit.name}" />
			</button>`;
			if (activeHabbit.id === habbit.id) {
				element.classList.add('menu__list-item--active');
			}
			page.menu.appendChild(element);
			continue;
		}
		if (activeHabbit.id === habbit.id) {
			existed.classList.add('menu__list-item--active');
		} else {
			existed.classList.remove('menu__list-item--active');
		}
	}
}

function rerender(activeHabbitId) {
	const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
	rerenderMenu(activeHabbit);
}


/* init */
(() => {
	loadData();
})()
