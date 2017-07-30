var xPos = [-36, -13.5, 8.5, 25, 43, 43.1, 43.2, 78, 75, 14.5, -11.5, -74, -76, -75.5, -5.5];
var yPos = [-71.5, -73, -71, -50, -38, -13.5, -2.5, 15, 37, 71, 71, 35, 13.5, -17.5, -6];
var personLeft = 6;
var personFound = 0;
var versteckenStarted = false;
var versteckenVisible = false;

// https://stackoverflow.com/questions/18417728/get-the-array-index-of-duplicates
Array.prototype.getDuplicates = function () {
    var duplicates = {};
    for (var i = 0; i < this.length; i++) {
        if(duplicates.hasOwnProperty(this[i])) {
            duplicates[this[i]].push(i);
        } else if (this.lastIndexOf(this[i]) !== i) {
            duplicates[this[i]] = [i];
        }
    }
    return duplicates;
};

var HideAndSeekEntity = document.querySelector('#HideAndSeek');
$('#hideAndSeekTrigger').on('click', function beginCake() {
  if(versteckenStarted == false && versteckenVisible == false) {
      versteckenStarted = true;
      versteckenVisible = true;

      AFRAME.utils.entity.setComponentProperty(HideAndSeekEntity, 'visible', true);
      document.querySelector("#containerPolizistGame" + ' > a-sound' ).emit("Spielaufruf");
      document.querySelector("#containerPolizistGame" + ' > a-animation' ).emit("Spielaufruf");
      $('#counterPerson').css("display", "initial");

      var people = document.querySelectorAll('.HaSperson');
      var peopleArray = [];

      for(var i=0; i<people.length; i++){
          var posX = people[i].getAttribute('position');
          var indexPos = xPos.indexOf(posX);
          xPos.splice(indexPos);
          yPos.splice(indexPos);

          peopleArray.push(people[i].getAttribute('position').x);
          console.log("POSX: " + posX.x);
          console.log(xPos);
      }

      var dub = peopleArray.getDuplicates();
      var dubObjKeys = Object.keys(dub);
      console.log(dub);
      console.log(dubObjKeys.length);

      var positionDublicated = [];

      dubObjKeys.forEach(function(i){
          var dubObj = dub[i];

          for(var t=0;t<dubObj.length;t++) {
              positionDublicated.push(dubObj[t]);
          }
      });
      console.log(positionDublicated);

      // set new position to dublicate person
      // iterate over keys
      for(var k=0; k<positionDublicated.length; k++){
          var newIndexPosition = Math.floor(Math.random() * xPos.length);
          var dublicateFigure = people[positionDublicated[k]];
          dublicateFigure.setAttribute('position', {x: xPos[newIndexPosition], y: 1, z: yPos[newIndexPosition]});
          // remove used position
          xPos.splice(newIndexPosition);
          yPos.splice(newIndexPosition);
      }
    }
    else if (versteckenStarted == true && versteckenVisible == true) {
      AFRAME.utils.entity.setComponentProperty(HideAndSeekEntity, 'visible', false);
      $('#counterPerson').css("display", "none");
      versteckenVisible = false;
    }

    else {
      AFRAME.utils.entity.setComponentProperty(HideAndSeekEntity, 'visible', true);
      $('#counterPerson').css("display", "initial");
      versteckenVisible = true;
    }
});

updateCounterPerson();

/**
 * Main method of the game
 * updateCounterPerson(): Overlay in the bottom right corner
 * won(): Hide overlays and set game entity back to visible: false to make determination of game state possible
 */
$('.HaSperson').on('click', function(el){
    $("#" + el.currentTarget.id).remove();
    personLeft--;
    personFound++;
    updateCounterPerson();

    if(personLeft === 0){
        won();
        $('#counterPerson').css("display", "none");
    }
});

function updateCounterPerson() {
    $('#counterPerson #counterPersonFound').text(personFound);
    $('#counterPerson #counterPersonLeft').text(personLeft);
}

function won(){
    $('#HaSwon').css("display", "initial");
    setTimeout(function(){ $('#HaSwon').fadeOut(1500); }, 2000);
    AFRAME.utils.entity.setComponentProperty(HideAndSeekEntity, 'visible', false);
}
