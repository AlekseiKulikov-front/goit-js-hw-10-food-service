import cards from './templates/cards.hbs';


import menu from './menu.json';




const menuList = document.querySelector('.js-menu');


const markupCard = createMenu(menu);
//console.log(markupCard);

menuList.insertAdjacentHTML('afterbegin', markupCard);

function createMenu(menu) {
    return cards(menu);
};


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };



const body = document.querySelector('body');
//console.log(body);
body.classList.add(Theme.LIGHT);


const checkbox = document.querySelector('.theme-switch__toggle');
//console.log(checkbox);


checkbox.addEventListener('change', onSelectThemes);


function onSelectThemes(event) {
    if (checkbox.checked) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        const darkTheme = body.getAttribute('class');
        //console.log(darkTheme);
        
        localStorage.setItem('theme', darkTheme);
        //console.log(localStorage.getItem('theme'));
    }
    else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        const lightTheme = body.getAttribute('class');
        //console.log(lightTheme);
        
        localStorage.setItem('theme', lightTheme);
    }

}


const switchMarker = document.querySelector('.theme-switch__marker');
//console.log(switchMarker);

if (localStorage.getItem('theme') === 'dark-theme') {
    checkbox.setAttribute('checked', 'true');
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);

    switchMarker.style.transition = 'none';
}