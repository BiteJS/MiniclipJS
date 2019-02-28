"use strict";

import * as utils from '../utils.js';
import Player, * as player from './player.js';


const table = document.createElement('table');
const root = document.getElementById('root');
const para = document.createElement("p");

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
    conteur();
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

// Set the date we're counting down to
var conteur = () => {
    para.setAttribute('id','demo');
    root.appendChild(para);
    var countDownDate = new Date();
    countDownDate.setSeconds(countDownDate.getSeconds() + 30)

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var milliseconde = Math.floor((distance % (1000 )));


        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = seconds + "s " + milliseconde  ;

    }, 1);
    runPromiseCountDown();
}
var runPromiseCountDown = () => {
    var promise1 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('foo');
        }, 30000);
    });

    promise1.then(function(value) {
        console.log(value);
        // expected output: "foo"
    });
}

export {
    playHtml,
    getInfosFromApi
};