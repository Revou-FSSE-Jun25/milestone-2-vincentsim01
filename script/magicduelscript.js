const duelStartButton = document.getElementById('duelStartButton');
const magicDuelMechanism = document.getElementById('magicDuelMechanism');
const spellSpeed = document.getElementById('spellSpeed');

let magicMeter = document.getElementById('magicMeter');
const magicDuelLevel = document.getElementById('magicDuelLevel');
let abraKadabraButton = document.getElementById('abraKadabraButton');


const avadakedavra = document.getElementById('avadakedavra');

let magicMeterLeft = document.getElementById('magicMeterLeft');
let magicMeterRight = document.getElementById('magicMeterRight');

const magicDuelOutcomeContainer = document.getElementById('magicDuelOutcomeContainer');
const magicDuelOutcome = document.getElementById('magicDuelOutcome');
const magicDuelResult = document.getElementById('magicDuelResult');
const magicDuelMessage = document.getElementById('magicDuelMessage');
const magicDuelClickCount = document.getElementById('magicDuelClickCount');
const magicDuelOutcomeWinButton = document.getElementById('magicDuelOutcomeWinButton');
const magicDuelOutcomeLoseButton = document.getElementById('magicDuelOutcomeLoseButton');
const magicDuelOutcomeExitButton = document.getElementById('magicDuelOutcomeExitButton');
const harrisspell = document.getElementById('harrisspell');
const koklemotspellpower = document.getElementById('koklemotspellpower');

const hedwigTheme = document.getElementById('hedwigTheme');
const avadakedavrasound = document.getElementById('avadakedavrasound');

var duelLevelCounter = 1;
let clickCounter = 0;
let magicToken = 10;
let opponentMagicToken = 100-magicToken;

let intervalId = null;


        function startInterval() {
            // Clear existing interval before starting new
            if (intervalId) {
                clearInterval(intervalId);
            }

            //run a new interval that reduces Harris's magic token and increases koklemot's magic token
            intervalId = setInterval(() => {
                magicToken--;
                opponentMagicToken++;
                magicMeterLeft.style.width = magicToken + '%';
                magicMeterRight.style.width = opponentMagicToken + '%';
                if(magicToken<=0){
                        magicDuelOutcomeContainer.classList.remove('hidden');
                        magicDuelOutcome.classList.remove('hidden');
                        magicDuelResult.textContent = 'You lose!';
                        magicDuelMessage.textContent = 'Better luck next time!';
                        magicDuelClickCount.textContent = `You clicked ${clickCounter} times!`;
                        magicDuelOutcomeLoseButton.classList.remove('hidden');
                }
                //koklemot's spell casting speed increases following a rational function graph depending on the duel level
            }, 1000/duelLevelCounter);
    }


//click the duel button and start the duel
duelStartButton.addEventListener('click', () => { 
    hedwigTheme.play();
    magicDuelMechanism.classList.remove('hidden');
    duelStartButton.classList.add('hidden');
    harrisspell.classList.remove('hidden');
    koklemotspellpower.classList.remove('hidden');

    magicToken = 10;
    opponentMagicToken = 100-magicToken;
    magicDuelLevel.textContent = duelLevelCounter;
    magicMeterLeft.style.width = magicToken + '%';
    magicMeterRight.style.width = opponentMagicToken + '%';
    let spellspeed = 1 / duelLevelCounter;

    spellSpeed.textContent = `1 Spell every ${spellspeed.toFixed(2)} Seconds`;

    //start koklemot spellcasting
    startInterval();

    // let magicDuelLevelInt = Number(magicDuelLevel.textContent);

});

//Harris cast spell
abraKadabraButton.addEventListener('click', () => {
        magicToken += 5;
        opponentMagicToken -= 5;
        magicMeterLeft.style.width = magicToken + '%';
        magicMeterRight.style.width = opponentMagicToken + '%';
        clickCounter++;

        //if Harris win the round
        if(magicToken>=100){
                //show the victory pop up finishing attack
                avadakedavra.classList.remove('hidden');
                avadakedavrasound.play();

                //hide the victory pop up finishing attack after 2 seconds
                setTimeout(() => {
                    avadakedavra.classList.add('hidden');
                }, 2000);

                //hide the duel outcome container
                magicDuelOutcomeContainer.classList.remove('hidden');
                magicDuelOutcome.classList.remove('hidden');
                magicDuelResult.textContent = 'You win!';
                magicDuelMessage.textContent = 'Congratulations!';
                magicDuelClickCount.textContent = `You clicked ${clickCounter} times!`;
                magicDuelOutcomeWinButton.classList.remove('hidden');
                magicToken=1000000000;
            }   
        else if(magicToken>=98){

        }
    }); 

    //If Harris lose the round
    magicDuelOutcomeLoseButton.addEventListener('click', () => {
        magicDuelOutcomeContainer.classList.add('hidden');
        magicDuelOutcome.classList.add('hidden');
        magicDuelResult.textContent = '';
        magicDuelMessage.textContent = '';
        magicDuelClickCount.textContent = '';
        magicDuelOutcomeWinButton.classList.add('hidden');
        magicDuelOutcomeLoseButton.classList.add('hidden');

        //reset the magic token
        magicToken = 10;
        opponentMagicToken = 100 - magicToken;
        magicMeterLeft.style.width = magicToken + '%';
        magicMeterRight.style.width = opponentMagicToken + '%';
    });

    //If Harris win the round
    magicDuelOutcomeWinButton.addEventListener('click', () => {
        magicDuelOutcomeContainer.classList.add('hidden');
        magicDuelOutcome.classList.add('hidden');
        magicDuelResult.textContent = '';
        magicDuelMessage.textContent = '';
        magicDuelClickCount.textContent = '';
        magicDuelOutcomeWinButton.classList.add('hidden');
        magicDuelOutcomeLoseButton.classList.add('hidden');

        //reset the magictoken
        magicToken = 10;
        opponentMagicToken = 100 - magicToken;

        //go to the next level
        duelLevelCounter = duelLevelCounter + 1;
        magicDuelLevel.textContent = duelLevelCounter;

        //increase Koklemot spell speed
        let spellspeed = 1 / duelLevelCounter;
        spellSpeed.textContent = `1 Spell every ${spellspeed.toFixed(2)} seconds`;
        startInterval();
    
    });

        //Exit from the game
        magicDuelOutcomeExitButton.addEventListener('click', () => {
        magicDuelOutcomeContainer.classList.add('hidden');
        magicDuelOutcome.classList.add('hidden');
        magicDuelResult.textContent = '';
        magicDuelMessage.textContent = '';
        magicDuelClickCount.textContent = '';
        harrisspell.classList.add('hidden');
        koklemotspellpower.classList.add('hidden');
        magicDuelOutcomeWinButton.classList.add('hidden');
        magicDuelOutcomeLoseButton.classList.add('hidden');

        magicMeterLeft.style.width = magicToken + '%';
        magicMeterRight.style.width = opponentMagicToken + '%';

        //hide the duel container
        magicDuelMechanism.classList.add('hidden');
        duelStartButton.classList.remove('hidden');

        duelLevelCounter = 1;  // reset level dengan jelas
        magicDuelLevel.textContent = duelLevelCounter;
        spellSpeed.textContent = duelLevelCounter;
        clearInterval(intervalId);
        clickCounter=0;

    });

