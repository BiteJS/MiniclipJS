"use strict";

class Player {
    constructor(photo, pseudo, region, lifepoint) {
        this.photo = photo;
        this.pseudo = pseudo;
        this.region = region;
        this.lifepoint = lifepoint;
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