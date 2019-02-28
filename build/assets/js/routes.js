"use strict";

import * as home from './homepage/home.js';
import * as play from './playpage/play.js';

const startGeneratingPage = () => {
    let path = window.location.pathname;

    let routingFunc = routes[path];
    
    routingFunc();
}

const generateHomePage = () => {

    let root = document.getElementById('root');
    root.innerHTML = home.homeHtml;
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('Jouer'));
    
    button.onclick = () => {
        window.history.pushState('', 'Play', '/play');
        startGeneratingPage();
    }
     document.getElementsByClassName('main-container')[0].appendChild(button);
};

const generatePlayPage = () => {

    let root = document.getElementById('root');
    root.innerHTML = play.playHtml;
    let button = document.createElement('button');
    button.setAttribute("id", "start_button");
    button.appendChild(document.createTextNode('Commencer'));

    button.onclick = () => {
        play.getInfosFromApi();
        // window.history.pushState('', 'Play', '/play');
        // startGeneratingPage();
    }
    document.getElementsByClassName('main-container')[0].appendChild(button);
};

const routes = {
    '/': generateHomePage,
    '/play': generatePlayPage
}

export {
    routes,
    startGeneratingPage
};