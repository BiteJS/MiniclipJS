"use strict";

import * as utils from '../utils.js';
import Player, * as player from './player.js';


const table = document.createElement('table');
const root = document.getElementById('root');
const para = document.createElement("p");

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
    conteur();
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
                    img.setAttribute('src', element[key]);
                    img.setAttribute('class', 'player-img');
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