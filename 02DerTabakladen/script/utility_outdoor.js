/* außen */

var entity = document.querySelector('#camera');
var cameraForTrigger = document.querySelector('#camera');
var games = ["#cakeGame", "#HideAndSeek", "#memoryGame"];
var gameActive;

/**
 * Check game status to prevent starting multiple games
 * param: array position of game in games[]
 * return: false - if other game is running
 */
function checkGameStatus(curr) {
    var gamesWOcurr = games.filter(function(e){return e !== curr;});
    for(var i = 0; i<gamesWOcurr.length; i++){
        var status = document.querySelector(gamesWOcurr[i]).getAttribute('visible');
        if(status){
            console.log("another game is already running");
            return false;
        }
    }
}
$("#iconAussen").on("clickableFound", function triggericonaussen() {
	  document.querySelector("#tabakladenTUERa" + '> a-animation').emit("clickableFound");
});

$("#iconAussen").on("clickableClick", function triggericonaussenclick() {
	  document.querySelector("#tabakladenTUERa" + '> a-animation').emit("clickableClick");
});

/** Trigger points to move across the outside area */

$('#triggerTafel').on('click', function triggerBaeume() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'position', {x: 3, y: 14, z: 20});
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'rotation', {x: 0, y: 90, z: 0});
});

$('#triggerBaeckerei').on('click', function triggerBaeckerei() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'position', {x: 0, y: 14, z: -70});
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'rotation', {x: 0, y: 0.00, z: 0});
});

$('#triggerTabakladenDefault').on('click', function triggerTabakladenDefault() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'position', {x: 0.00, y: 14, z: 40});
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'rotation', {x: 0, y: 0, z: 0});
});

$('#triggerTeppichladen').on('click', function triggerTeppichladen() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'position', {x: -75, y: 14, z: 6});
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'rotation', {x: 0, y: 0, z: 0});
});

$('#triggerTeppichladenxBaeckerei').on('click', function triggerTeppichladenxBaeckerei(){
    'use strict';
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'position', {x: -100, y: 14, z: -65});
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'rotation', {x: 0, y: 0.00, z: 0});
});

$('#triggerBaeumeV2').on('click', function triggerBaeumeV2(){
    'use strict';
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'position', {x: 49, y: 14, z: -40});
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'rotation', {x: 0, y: 0.00, z: 0});
});

$('#triggerBaeumexTabakladen').on('click', function triggerBaeumexTabakladen(){
    'use strict';
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'position', {x: 57, y: 14, z: 84});
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'rotation', {x: 0, y: 0.00, z: 0});
});

$('#triggerTabakladenxTeppichladen').on('click', function triggerTabakladenxTeppichladen(){
    'use strict';
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'position', {x: -60, y: 14, z: 84});
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'rotation', {x: 0, y: 0.00, z: 0});
    console.log(entity);
    console.log(entity.getAttribute('position'));
});

$('#triggerTisch').on('click', function triggerTisch(){
    'use strict';
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'position', {x: -30, y: 14, z: 6});
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'rotation', {x: 0, y: 0.00, z: 0});
});

$('#triggerHinterBaeume').on('click', function triggerHinterBaeume(){
    'use strict';
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'position', {x: 110, y: 14, z: 20});
    AFRAME.utils.entity.setComponentProperty(cameraForTrigger, 'rotation', {x: 0, y: 0.00, z: 0});
});

/** Toggle functions to show or hide informational text boxes*/

var textbox = document.querySelector('#textbox');
var infobox = document.querySelector('#infobox');
var specialsbox = document.querySelector('#specialsbox');
var textboxMain = document.querySelector('#textboxMain');

$(function(){
    setTimeout(function(){
        AFRAME.utils.entity.setComponentProperty(textboxMain, 'visible', false);
    }, 60000);
});

$('#closeTextbox').on('click', function() {
    AFRAME.utils.entity.setComponentProperty(textbox, 'visible', false);
});

$('#closeTextboxMain').on('click', function() {
    AFRAME.utils.entity.setComponentProperty(textboxMain, 'visible', false);
});

$('#openTextbox').on('click', function() {
    AFRAME.utils.entity.setComponentProperty(textboxMain, 'visible', true);
});

$('#buttonErklaerungen').on('click', function() {
    AFRAME.utils.entity.setComponentProperty(textboxMain, 'visible', false);
    AFRAME.utils.entity.setComponentProperty(textbox, 'visible', true);
});

$('#buttonBack').on('click', function() {
    AFRAME.utils.entity.setComponentProperty(textbox, 'visible', false);
    AFRAME.utils.entity.setComponentProperty(textboxMain, 'visible', true);
});


$('#toggleSpecials').on('click', function() {
    var here = $(this);
    console.log(here);
    AFRAME.utils.entity.setComponentProperty(infobox, 'visible', false);
    AFRAME.utils.entity.setComponentProperty(specialsbox, 'visible', true);
});

$('#toggleInfo').on('click', function() {
    var here = $(this);
    console.log(here);
    AFRAME.utils.entity.setComponentProperty(infobox, 'visible', true);
    AFRAME.utils.entity.setComponentProperty(specialsbox, 'visible', false);
});



var cakeEntity = document.querySelector('#cakeGame');
$('#cakeTrigger').on('click', function beginCake() {
    if(gameActive === '#cakeGame'){
        AFRAME.utils.entity.setComponentProperty(cakeEntity, 'visible', false);
        $('#counterKuchen').css("display", "none");
        gameActive = '';
    } else {
        if(checkGameStatus(games[0])!==false && $('.Minispiel_Kuchen').length !== 0){
            AFRAME.utils.entity.setComponentProperty(cakeEntity, 'visible', true);
            document.querySelector("#containerJungeGame" + ' > a-sound' ).emit("Spielaufruf");
            document.querySelector("#containerJungeGame" + ' > a-animation' ).emit("Spielaufruf");
            $('#counterKuchen').css("display", "initial");
            gameActive = '#cakeGame';
        }   
    }
});

var HideAndSeekEntity = document.querySelector('#HideAndSeek');
$('#hideAndSeekTrigger').on('click', function beginHideAndSeek() {
    if(gameActive === '#HideAndSeek'){
        AFRAME.utils.entity.setComponentProperty(HideAndSeekEntity, 'visible', false);
        $('#counterPerson').css("display", "none");
        gameActive = '';
    } else {
        if(checkGameStatus(games[1])!==false && personLeft !== 0){
            AFRAME.utils.entity.setComponentProperty(HideAndSeekEntity, 'visible', true);
            document.querySelector("#containerPolizistGame" + ' > a-sound' ).emit("Spielaufruf");
            document.querySelector("#containerPolizistGame" + ' > a-animation' ).emit("Spielaufruf");
            $('#counterPerson').css("display", "initial");
            gameActive = '#HideAndSeek';
        }
    }
});

/** Trigger rain component already registered in entity.js */
$('#brunnen').on('click', function triggerBrunnen (){

    var attr = $('a-scene').attr('rain');
    if (attr) { //es hört auf zu regnen
        $('a-scene').removeAttr('rain');
    }
    else{ // es regnet
        $('a-scene').attr('rain', '');
        $('a-scene').play;
    }
});
