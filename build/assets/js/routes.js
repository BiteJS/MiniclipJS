"use strict";

import * as home from './homepage/home.js';
import * as play from './playpage/play.js';
import * as fight from './fightpage/fight.js';

const root = document.getElementById('root');

const startGeneratingPage = () => {
    let path = window.location.pathname;
    let routingFunc = routes[path];
    routingFunc();
};

const generateHomePage = () => {
    root.innerHTML = home.homeHtml;
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('Jouer'));

    button.onclick = () => {
        window.history.pushState('', 'Play', '/play');
        startGeneratingPage();
    };
    document.getElementsByClassName('main-container')[0].appendChild(button);
};

const generatePlayPage = () => {

    root.innerHTML = play.playHtml;
    let button = document.createElement('button');
    button.setAttribute("id", "start_button");
    button.appendChild(document.createTextNode('Commencer'));

    button.onclick = () => {
        play.getInfosFromApi();
        // window.history.pushState('', 'Play', '/play');
        // startGeneratingPage();
    };
    document.getElementsByClassName('main-container')[0].appendChild(button);
};

const generateFightPage = () => {
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    root.innerHTML = fight.fightHtml;
    fight.init();
};

const routes = {
    '/': generateHomePage,
    '/play': generatePlayPage,
    '/play/fight': generateFightPage
}

export {
    routes,
    startGeneratingPage
};