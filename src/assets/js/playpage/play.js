"use strict";

import * as utils from '../utils.js';

const playHtml = `<section class="main-container">
        </section>`;


const getInfosFromApi = () => {
    console.log(utils);

    utils.httpGetAsync('https://apidev.gameblr.gg/homePageData', extractInfosFromData)
    
}

var extractInfosFromData = (data) => {
    console.log(JSON.parse(data));
    
}

export {
    playHtml,
    getInfosFromApi
};