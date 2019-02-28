"use strict";

import '../css/main.scss';

import * as home from './homepage/home.js';

var init = () => {
    generateHomePage();

};

var generateHomePage = () => {

    console.log(home.homeHtml);
    
    let root = document.getElementById('root');
    root.innerHTML = home.homeHtml;

};

init();