'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';
/* page */
const page = {
    menu: document.querySelector('.menu__list')
}
/* utils */
function loadDate() {
    const habbitsString = localStorage.getItem(HABBIT_KEY);
    const habbitArray = JSON.parse(habbitsString);
    if (Array.isArray(habbitArray)) {
        habbits = habbitArray;
    }
};

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
            //создание
            const element = document.createElement('li');
            element.setAttribute('menu-habbit-id', habbit.id);
            element.classList.add('menu__list-item');
            element.innerHTML = `
            <button class="menu__list-item-link">
            <img src="/img/${habbit.icon}.svg" alt="${habbit.name}" />
            </button>`
            if (activeHabbit.id === habbit.id) {
                element.classList.add('menu__list-item--active');
            }
            page.menu.appendChild(element);
            continue;
        }
        if (activeHabbit.id === habbit.id) {
            existed.classList.add('menu__list-item--active');
        } else {
            existed.classList.remove('menu__list-item--active')
        }

    }
}
function rerender(activeHabbitId) {
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
    rerenderMenu(activeHabbit);
}


/* init */
(() => {
    loadDate();
})()
let currentYear = new Date().getFullYear();
console.log(currentYear)
const user = {
    name: 'Вася',
    born: 1993,
    age: function (currYear) {
        console.log(this)
        return currYear - this.born;
    }
}
console.log(user)
console.log(user.age(currentYear))
console.log(user)


