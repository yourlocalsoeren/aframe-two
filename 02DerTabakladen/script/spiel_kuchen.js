/* game logic*/
var counter = 0;
var skey = "theCakeIsALie";

$('.Minispiel_Kuchen').on('click', function(el){
    game(el);
    var cakeNR = "#" + el.currentTarget.id;
    $('.Minispiel_Kuchen' + cakeNR).remove();
});

$('.Minispiel_Zigarette').on('click', function(el){
    game(el);
});

function game(el) {    
    var sessionStorage = readSessionStorage(skey);
    var element = el;

    if(element.currentTarget.classList.contains('Minispiel_Kuchen')){
        counter++;
        updateCounter();
        setSessionStorage(skey, counter);
    }else{
        if(element.currentTarget.classList.contains("Minispiel_Zigarette")){
            $('#test').css("display", "none");
            gameLost();
        }
    }
};

/* generate entity to display counter */

$('#test #counter').text(counter);

/* read sessionstorage */
function readSessionStorage(key) {
    if(!sessionStorage.getItem(key)){
        return false;
    }
    else {return true};
}
/* set sessionstorage */
function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}

/* update counter */
function updateCounter() {
    $('#test #counter').text(counter);
}

function gameLost() {
    $('#lostCounter').html("Du hast " + counter + " Kuchen gesammelt!");
    $('#lost').css("display", "initial");
    $('.Minispiel_Kuchen').remove();
    $('.Minispiel_Zigarette').remove();
    setTimeout(function(){ $('#lost').fadeOut(1500) }, 2000);
}