"use strict";

import * as utils from '../utils.js';
import Player, * as player from './player.js';


const table = document.createElement('table');
const root = document.getElementById('root');

var players = {};

const playHtml = `<section class="main-container">
        </section>`;


const getInfosFromApi = () => {
    console.log(utils);

    utils.httpGetAsync('https://apidev.gameblr.gg/homePageData', extractInfosFromData);

};

var extractInfosFromData = (data) => {
    //console.log(JSON.parse(data));
    let dataParse = JSON.parse(data);
    
    
    for (let element of dataParse.players) {
        let player = new Player(element.photoUrl, element.name, element.region, 100);
        //let player1 = new Player(12, 'tt','ets', 100);
       players[element.lolesportsId] = player;
    }

    console.log(players);
    

   let mainContainer = document.getElementsByClassName('main-container');

    mainContainer[0].removeChild(document.getElementById('start_button'));

    generatePlayers();    
};

var generatePlayers = () => {
    for (let pKey in players) {

        const tr = document.createElement('tr');
        table.appendChild(tr);

        for (let key in players[pKey]) {
            let text;
            let td = document.createElement('td');
            if (key === "photo"){
                let img = document.createElement('img');
                img.setAttribute('src', players[pKey][key]);
                img.setAttribute('class', 'player-img');
                td.appendChild(img);
            }else{
                text = document.createTextNode(players[pKey][key]);
                td.appendChild(text);
            }
            tr.appendChild(td);
        }
        let btnTd = createChooseBtnTd(pKey);
        tr.appendChild(btnTd);
    }

        root.appendChild(table);
};


var createChooseBtnTd = (pKey) => {
        let btnTd = document.createElement('td');
        let btn = document.createElement('button');

        btn.onclick = () => {
            saveUserId(pKey);
            // window.history.pushState('', 'Fight', '/fight');
            // startGeneratingPage();
        }
        let btnTxt = document.createTextNode('Choose');
        btn.appendChild(btnTxt);
        btn.setAttribute('class', 'btn btn-success');
        btnTd.appendChild(btn);

        return btnTd;
};

var saveUserId = (userId) => {

    let localStorage = window.localStorage;

    localStorage.setItem('chosenPlayer', JSON.stringify(players[userId]));    
};

export {
    playHtml,
    getInfosFromApi
};