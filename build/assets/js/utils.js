"use strict";

const httpGetAsync = (theUrl, callback) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function type_check(data, conf) {

    // console.log(data);
    // console.log(conf);
    for (let key of Object.keys(conf)) {
        switch (key) {
            case 'type':
            case 'value':
            case 'enum':
                let newConf = {};
                newConf[key] = conf[key];
                if (!type_check_v2(data, newConf)) return false;
                break;
            case 'properties':
                for (let prop of Object.keys(conf[key])) {
                    if (data[prop] === undefined) return false;
                    if (!type_check(data[prop], conf[key][prop])) return false;
                }
                break;
        }
    }

    return true;
}

function type_check_v2(data, conf) {
    for (let key of Object.keys(conf)) {
        switch (key) {
            case 'type':
                if (!type_check_v1(data, conf[key])) return false;
                break;
            case 'value':
                if (JSON.stringify(data) !== JSON.stringify(conf[key])) return false;
                break;
            case 'enum':
                let valid = false;
                for (let value of conf[key]) {
                    valid = type_check_v2(data, {value});
                    if (valid) break;
                }
                if(!valid) return false;
        }
    }

    return true;
}


function type_check_v1(data, type) {
    switch(typeof data) {
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return type === typeof data;
        case "object":
            switch(type) {
                case "null":
                    return data === null;
                case "array":
                    return Array.isArray(data);
                default:
                    return data !== null && !Array.isArray(data);
            }

    }
    
    return false;
}

export {
    httpGetAsync,
    type_check,
    type_check_v2,
    type_check_v1
};

