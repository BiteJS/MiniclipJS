"use strict";

import { type_check } from "../utils.js";

class Player {
    constructor(photo, pseudo, region, lifepoint) {

        // let tmp_check = { 
        //     'lifepoint' :  lifepoint,
        //     'photo' : photo,
        //     'pseudo' : pseudo,
        //     'region' : region
        // };

        // let checker = {
        //     type : "object",
        //     properties : {
        //         prop1 : {type: "number"},
        //         prop2 : {type: "string"},
        //         prop3 : {type: "string"},
        //         prop4 : {type: "string"}
        //     }
        // };

        if (type_check(photo, {type:"string"}) && (type_check(pseudo, {type:"string"} )) &&
         (type_check(region, {type:"string"} )) && (type_check(lifepoint, {type:"number"} ))){
            this.photo = photo;
            this.pseudo = pseudo;
            this.region = region;
            this.lifepoint = lifepoint;
        }else  {
            throw new Error('Invalid field');
        }


    }

    get getPhoto() {
        return this.photo();
    }

    get getPseudo() {
        return this.pseudo;
    }

    get getRegion() {
        return this.region;
    }

    get getLifepoint() {
        return this.lifepoint;
    }

    set setPhoto(photo) {
        this.photo = photo;
    }

    set setPseudo(pseudo) {
        this.pseudo = pseudo;
    }

    set setRegion(region) {
        this.region = region;
    }

    set setLifepoint(lifepoint) {
        this.lifepoint = lifepoint;
    }
}

export default Player;