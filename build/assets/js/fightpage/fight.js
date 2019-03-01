"use strict";

import * as play from '../playpage/play.js';

var localStorage = window.localStorage;
var players = {};

const fightHtml = `<section class="main-container">
    <div>
    </div> 
    </section>`;


var init = () => {
    players = JSON.parse(localStorage.getItem('players'));

    
};




export {
    fightHtml,
    init
};