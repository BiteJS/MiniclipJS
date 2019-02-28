"use strict";

import * as utils from '../utils.js';
import Player, * as player from './player.js';


const table = document.createElement('table');
const root = document.getElementById('root');

var players = [];

const playHtml = `<section class="main-container">
        </section>`;


const getInfosFromApi = () => {
    console.log(utils);

    utils.httpGetAsync('https://apidev.gameblr.gg/homePageData', extractInfosFromData);

}

var extractInfosFromData = (data) => {
    //console.log(JSON.parse(data));
    let dataParse = JSON.parse(data);

    for (let element of dataParse.players) {
        let player = new Player(element.photoUrl, element.name, element.region, 100);
        //let player1 = new Player(12, 'tt','ets', 100);
        players.push(player);
    }

   let mainContainer = document.getElementsByClassName('main-container');

    mainContainer[0].removeChild(document.getElementById('start_button'));

    generatePlayers();
    //console.log(players);
    
}

const generatePlayers = () => {
    for (let element of players) {

            const tr = document.createElement('tr');
            table.appendChild(tr);

            for (let key in element) {
                let text;
                const td = document.createElement('td');
                if (key === "photo"){
                    let img = document.createElement('img');
                    img.setAttribute('src', element[key])
                    img.setAttribute('class', 'player-img')
                    td.appendChild(img);
                }else{
                    text = document.createTextNode(element[key]);
                    td.appendChild(text);
                }
                tr.appendChild(td);
                
            }
        root.appendChild(table);
    }
}

export {
    playHtml,
    getInfosFromApi
};