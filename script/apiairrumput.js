const startAdventureButton = document.getElementById("startAdventureButton");
const welcomeDescription = document.getElementById("welcomeDescription");
const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeContainer = document.getElementById("welcomeContainer");
const gameInstruction = document.getElementById("gameInstruction");
const fireAttackButton = document.getElementById("fireAttackButton");
const waterAttackButton = document.getElementById("waterAttackButton");
const grassAttackButton = document.getElementById("grassAttackButton");
const physicalAttackButton = document.getElementById("physicalAttackButton");
const yourHPContainer = document.getElementById("yourHPContainer");
const yourHP = document.getElementById("yourHP");
const enemyHPContainer = document.getElementById("enemyHPContainer");
const enemyHP = document.getElementById("enemyHP");
const duelResultContainer = document.getElementById("duelResultContainer");
const duelResultText = document.getElementById("duelResultText");
const duelResultSuperEffective = document.getElementById("duelResultSuperEffective");
const duelResultNotEffective = document.getElementById("duelResultNotEffective");
const duelResultNormallyEffective = document.getElementById("duelResultNormallyEffective");
const fireAttackCount = document.getElementById("fireAttackCount");
const waterAttackCount = document.getElementById("waterAttackCount");
const grassAttackCount = document.getElementById("grassAttackCount");
const physicalAttackCount = document.getElementById("physicalAttackCount");
const totalRoundCount = document.getElementById("totalRoundCount");
const enemyPokemonContainer = document.getElementById("enemyPokemonContainer");
const yourPokemonContainer = document.getElementById("yourPokemonContainer");
const elementEnemy = document.getElementById("elementEnemy");
const elementYou = document.getElementById("elementYou");
const enemyPokemon = document.getElementById("enemyPokemon");
const yourPokemon = document.getElementById("yourPokemon");
const superEffectiveSound = document.getElementById("superEffectiveSound");
const NotEffectiveSound = document.getElementById("NotEffectiveSound");
const playAgainButton = document.getElementById("playAgainButton");
const battleSong = document.getElementById("battleSong");
const victorySong = document.getElementById("victorySong");
const defeatedSong = document.getElementById('defeatedSong');
const tieSong = document.getElementById('tieSong');
const opening = document.getElementById('opening');
const characterSelectionContainer = document.getElementById('characterSelectionContainer');
const chooseCharacterButton = document.getElementById('chooseCharacterButton');
const characterDisplayContainer = document.getElementById('characterDisplayContainer');
const yourName = document.getElementById('yourName');
const enemyName = document.getElementById('enemyName');
const gameStory = document.getElementById('gameStory');
const chooseCharacterText = document.getElementById('chooseCharacterText');
const generationList = document.getElementById('generationList');
const charactersClass = document.getElementsByClassName('character');

var roundCounter = 0;

var fireAttackCounter = 0;
var waterAttackCounter = 0;
var grassAttackCounter = 0;
var physicalAttackCounter = 0;

var superEffectiveContainer =0;
var normallyEffectiveContainer = 0;
var notEffectiveContainer = 0;

let chosenEnemy;

const pokemonGenerationArray = 
[
    {
        'RedBlue':{
            fire:'charmander',
            water:'squirtle',
            grass:'bulbasaur'
        }
    },
    {
        'GoldSilver':{
            fire:'cyndaquil',
            water:'totodile',
            grass:'chikorita'
        }
    },
    {
        'RubySapphire':{
            fire:'torchic',
            water:'mudkip',
            grass:'treecko'
        }
    },
    {
        'DiamondPearl':{
            fire:'chimchar',
            water:'piplup',
            grass:'turtwig'
        }
    },
    {
        'BlackWhite':{
            fire:'tepig',
            water:'oshawott',
            grass:'snivy'
        }
    },
    {
        'XY':{
            fire:'fennekin',
            water:'froakie',
            grass:'chespin'
        }
    },
    {
        'SunMoon':{
            fire:'litten',
            water:'popplio',
            grass:'rowlet'
        }
    },
    {
        'SwordShield':{
            fire:'scorbunny',
            water:'sobble',
            grass:'grookey'
        }
    }
    ,
    {
        'ScarletViolet':{
            fire:'fuecoco',
            water:'quaxly',
            grass:'sprigatito'
        }
    }
]


let randomGenObj = pokemonGenerationArray[Math.floor(Math.random() * pokemonGenerationArray.length)];
let pokemons = Object.values(Object.values(randomGenObj)[0]);
let gameVersion = pokemonGenerationArray.map(genObj => Object.keys(genObj)[0]);

let characterArray = [...pokemons];


pokemonGenerationArray.forEach((item) => {
    let newDiv = document.createElement('button');
    newDiv.textContent = Object.keys(item)[0];
    newDiv.classList = `text-white ml-3 mr-3 cursor-pointer hover:scale-110 active:scale-90 `;
    newDiv.id = `generation-${Object.keys(item)[0]}`;
    let newImg = document.createElement('img');
    newImg.src=`./asset/${Object.keys(item)[0]}.png`;
    newImg.classList='w-[80px] '
    newDiv.appendChild(newImg);
    generationList.appendChild(newDiv);
});

gameVersion.forEach((item)=>{
    let versionSelected = document.getElementById(`generation-${item}`);
    versionSelected.addEventListener('click', ()=>{
        const findVersion = Object.values(Object.values(pokemonGenerationArray.find(gen => gen[item]))[0]);
        console.log(Object.values(Object.values(pokemonGenerationArray.find(gen => gen[item]))[0]));
        characterArray = [...findVersion];
        DisplayCharacter(characterArray);

    });
});

const enemyArray = ['aang' , 'kakashi', 'brewmaster' ];
chooseCharacterButton.addEventListener('click', () => {
    characterSelectionContainer.classList.remove('hidden');
    DisplayCharacter(characterArray);
    opening.play();
    chooseCharacterText.classList.add('slowlyAppear');
    characterDisplayContainer.classList.add('slowlyAppear');
    generationList.classList.add('slowlyAppear');
    gameStory.classList.remove('hidden');
    gameStory.classList.add('starWarsText');


});


function DisplayCharacter(characterArray){
       characterDisplayContainer.innerHTML = '';
       characterArray.forEach((item) => {
        let newDiv = document.createElement('div');
        let newImg = document.createElement('img');
        newImg.src = `./asset/${item}.png`;
        newImg.alt = item;
        newImg.id = `${item}Character`;
        newImg.classList = `character cursor-pointer active:scale-90 active:border active:border-red-300 active:shadow-lg hover:scale-110 transition-transform duration-300 mx-auto ml-6 mr-6`;
        newImg.classList.add('w-34');
        let newbr = document.createElement('br');
        let newName = document.createElement('div');
        newName.textContent = item.charAt(0).toUpperCase() + item.slice(1);
        newName.classList = 'text-center text-white font-lexend mt-2 mb-4';
        newDiv.appendChild(newImg);
        newDiv.appendChild(newbr);
        newDiv.appendChild(newName);
        characterDisplayContainer.appendChild(newDiv);
        pokemons=[...characterArray];
})
       clickPokemon();
       
}

  function clickPokemon(){
        pokemons.forEach(pokemon => {
            let itemsCharacter = document.querySelectorAll(".character");

            itemsCharacter.forEach(item => {
                item.addEventListener("click", () => {
                // Remove selection from all
                itemsCharacter.forEach(i => i.classList.remove('selected'));
                // Add selection to clicked
                item.classList.add("selected");
                });
            });
            const pokemonCharacter = document.getElementById(`${pokemon}Character`);
            
            //update your pokemon avatar at the battle arena to the one that you selected
            pokemonCharacter.addEventListener('click', () => {
                yourPokemon.src = `./asset/${pokemon}.png`;
                yourName.textContent = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
                startAdventureButton.classList.remove('hidden');
            }); 
        });
  }


startAdventureButton.addEventListener("click", () => {
    //choose one random character from the enemy array
    chosenEnemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];
    enemyPokemon.src = `./asset/${chosenEnemy}.png`;
    enemyPokemon.classList.add('w-[18%]');
    enemyPokemon.classList.add('h-[18%]');

    //hide the introduction 
    gameStory.classList.add('hidden');
    gameStory.classList.remove('starWarsText');
    enemyName.textContent = chosenEnemy;
    characterSelectionContainer.classList.add('hidden');
    const duelContainer = document.getElementById("duelContainer");
    duelContainer.classList.remove("hidden");
    welcomeDescription.classList.add("hidden");
    startAdventureButton.classList.add("hidden");
    welcomeTitle.classList.add("hidden");
    welcomeContainer.classList.add("hidden");

    //give animation to your character and enemy character when the battle just start
    yourPokemon.classList.add('youMoveRight');
    enemyPokemon.classList.add('enemyMoveLeft');

    //remove moving keyframe for both you and enemy after 1 second
    setTimeout(()=>{
        yourPokemon.classList.remove('youMoveRight');
        enemyPokemon.classList.remove('enemyMoveLeft');
    }, 1000);
    opening.pause();
    battleSong.play();
});

const iconArray = ['fire.png', 'water.png', 'grass.png', 'physical.png'];

const enemyAttackArray = ["Fire", "Water", "Grass"];

let playerDamageThisTurn;

let enemyDamageThisTurn;

let enemyAttackThisTurn;

var yourHPValue = 100;

var enemyHPValue = 100;

//duel outcome
function resultCheck(){
    setTimeout(()=>{
            if(yourHPValue <= 0 && enemyHPValue > 0){
                battleSong.pause();
                battleSong.currentTime = 0;
                defeatedSong.play();
                gameInstruction.textContent = "You have been defeated!";
                duelResultContainer.classList.remove("hidden");
                duelResultText.textContent = "You lost the duel!";
                fireAttackCount.textContent = fireAttackCounter;
                waterAttackCount.textContent = waterAttackCounter;
                grassAttackCount.textContent = grassAttackCounter;
                physicalAttackCount.textContent = physicalAttackCounter;
                duelResultSuperEffective.textContent = superEffectiveContainer;
                duelResultNormallyEffective.textContent = normallyEffectiveContainer;
                duelResultNotEffective.textContent = notEffectiveContainer;
                totalRoundCount.textContent = roundCounter;
                return;
            }else if(yourHPValue > 0 && enemyHPValue <= 0){
                battleSong.pause();
                battleSong.currentTime = 0;
                victorySong.play();
                gameInstruction.textContent = "You won the duel!";
                duelResultContainer.classList.remove("hidden");
                duelResultText.textContent = "You won the duel!";
                fireAttackCount.textContent = fireAttackCounter;
                waterAttackCount.textContent = waterAttackCounter;
                grassAttackCount.textContent = grassAttackCounter;
                physicalAttackCount.textContent = physicalAttackCounter;
                duelResultSuperEffective.textContent = superEffectiveContainer;
                duelResultNormallyEffective.textContent = normallyEffectiveContainer;
                duelResultNotEffective.textContent = notEffectiveContainer;
                totalRoundCount.textContent = roundCounter;
                return;
            }else if(yourHPValue <= 0 && enemyHPValue <= 0){
                battleSong.pause();
                battleSong.currentTime = 0;
                tieSong.play();
                gameInstruction.textContent = "Both you and the enemy have been defeated!";
                duelResultContainer.classList.remove("hidden");
                duelResultText.textContent = "It's a draw!";
                fireAttackCount.textContent = fireAttackCounter;
                waterAttackCount.textContent = waterAttackCounter;
                grassAttackCount.textContent = grassAttackCounter;
                physicalAttackCount.textContent = physicalAttackCounter;
                duelResultSuperEffective.textContent = superEffectiveContainer;
                duelResultNormallyEffective.textContent = normallyEffectiveContainer;
                duelResultNotEffective.textContent = notEffectiveContainer;
                totalRoundCount.textContent = roundCounter;
                return;
            }
    },1000);

}


//start the duel after clicking one of the element button
function duelStart(e){

    roundCounter++;

    //choose which element for enemy either fire, water or grass
    enemyAttackThisTurn = enemyAttackArray[Math.floor(Math.random() * enemyAttackArray.length)];

    //assign health bar
    yourHP.style.width = `${yourHPValue}%`;
    enemyHP.style.width = `${enemyHPValue}%`;

    //once one of the element button is selected all of the element buttons will be hidden for 3.5s
    fireAttackButton.classList.add('hidden');
    waterAttackButton.classList.add('hidden');
    grassAttackButton.classList.add('hidden');
    physicalAttackButton.classList.add('hidden');

    //remove pointer
    fireAttackButton.classList.remove('cursor-pointer');
    waterAttackButton.classList.remove('cursor-pointer');
    grassAttackButton.classList.remove('cursor-pointer');
    physicalAttackButton.classList.remove('cursor-pointer');

    fireAttackButton.classList.add('text-gray-100');
    waterAttackButton.classList.add('text-gray-100');
    grassAttackButton.classList.add('text-gray-100');
    physicalAttackButton.classList.add('text-gray-100');

    //if player choose fire button
    if(e.target.id === "fireAttackButton"){
        fireAttackCounter++;
        if(enemyAttackThisTurn === "Fire"){
            gameInstruction.textContent = "Enemy used Fire attack! It's a tie!";
            playerDamageThisTurn = 0;
            enemyDamageThisTurn = 0;
            setTimeout(() => {
                gameInstruction.textContent = `Both you and your opponent dealt ${playerDamageThisTurn} damage! It's normally effective`;
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = `${yourHPValue}%`;
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = `${enemyHPValue}%`;
                normallyEffectiveContainer++;
                elementYou.innerHTML = `<img src="./asset/fire.png" alt="Fire Icon">`;
                elementYou.classList.add('yourelementTie');
                elementEnemy.innerHTML = `<img src="./asset/fire.png" alt="Fire Icon">`;
                elementEnemy.classList.add('enemyelementTie');
                setTimeout(()=>{
                    NotEffectiveSound.play();
                },500);
                resultCheck()

            }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');
                
                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                elementYou.classList.remove('yourelementTie');
                elementEnemy.classList.remove('enemyelementTie');

                return;
            }, 2500);

        }else if(enemyAttackThisTurn === "Water"){
            gameInstruction.textContent = "Enemy used Water attack! Your attack loses!";
            playerDamageThisTurn = 0;
            enemyDamageThisTurn = 20;
            setTimeout(() => {
                gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = `${yourHPValue}%`;
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = `${enemyHPValue}%`;
                notEffectiveContainer++;
                elementYou.innerHTML = `<img src="./asset/fire.png" alt="Fire Icon">`;
                elementYou.classList.add('yourelementLose');
                elementEnemy.innerHTML = `<img src="./asset/water.png" alt="Water Icon">`;
                elementEnemy.classList.add('enemyelementWin');
                setTimeout(() => {
                    yourPokemon.classList.add('getHit');
                    superEffectiveSound.play();

                }, 600);
                resultCheck()
            }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');
                elementYou.classList.remove('yourelementLose');
                elementEnemy.classList.remove('enemyelementWin');
                yourPokemon.classList.remove('getHit');
                return;
            }, 2500);
        }else if(enemyAttackThisTurn === "Grass"){
            gameInstruction.textContent = "Enemy used Grass attack! Your attack wins!";
            playerDamageThisTurn = 20;
            enemyDamageThisTurn = 0;
            setTimeout(() => {
                gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                yourHPValue = yourHPValue - enemyDamageThisTurn;
                yourHP.style.width = `${yourHPValue}%`;
                enemyHPValue = enemyHPValue - playerDamageThisTurn;
                enemyHP.style.width = `${enemyHPValue}%`;
                superEffectiveContainer++;
                elementYou.innerHTML = `<img src="./asset/fire.png" alt="Fire Icon">`;
                elementYou.classList.add('yourelementWin');
                elementEnemy.innerHTML = `<img src="./asset/grass.png" alt="Grass Icon">`;
                elementEnemy.classList.add('enemyelementLose');
                setTimeout(() => {
                    enemyPokemon.classList.add('getHit');
                    superEffectiveSound.play();

                }, 600);
                resultCheck()
            }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                elementYou.classList.remove('yourelementWin');
                elementEnemy.classList.remove('enemyelementLose');
                enemyPokemon.classList.remove('getHit');
                return;
            }, 2500);
        }
    }
    //if player choose water button
    else if(e.target.id === "waterAttackButton"){
        waterAttackCounter++;
            if(enemyAttackThisTurn === "Fire"){
                gameInstruction.textContent = "Enemy used Fire attack! your attack wins!";
                playerDamageThisTurn = 20;
                enemyDamageThisTurn = 0;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    superEffectiveContainer++;
                    elementYou.innerHTML = `<img src="./asset/water.png" alt="Water Icon">`;
                    elementYou.classList.add('yourelementWin');
                    elementEnemy.innerHTML = `<img src="./asset/fire.png" alt="Fire Icon">`;
                    elementEnemy.classList.add('enemyelementLose');
                    setTimeout(() => {
                        enemyPokemon.classList.add('getHit');
                        superEffectiveSound.play();

                    }, 600);
                    resultCheck()
                }, 1000);
                setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                elementYou.classList.remove('yourelementWin');
                elementEnemy.classList.remove('enemyelementLose');
                enemyPokemon.classList.remove('getHit');
                return;
            }, 2500);
            }else if(enemyAttackThisTurn === "Water"){
                gameInstruction.textContent = "Enemy used Water attack! It's a tie!";
                playerDamageThisTurn = 0;
                enemyDamageThisTurn = 0;
                setTimeout(() => {
                    gameInstruction.textContent = `Both you and your opponent dealt ${playerDamageThisTurn} damage! It's normally effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    normallyEffectiveContainer++;

                    elementYou.innerHTML = `<img src="./asset/water.png" alt="Water Icon">`;
                    elementYou.classList.add('yourelementTie');
                    elementEnemy.innerHTML = `<img src="./asset/water.png" alt="Water Icon">`;
                    elementEnemy.classList.add('enemyelementTie');
                setTimeout(()=>{
                    NotEffectiveSound.play();
                },500);
                    resultCheck()
                }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');


                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                elementYou.classList.remove('yourelementTie');
                elementEnemy.classList.remove('enemyelementTie');
                return;
            }, 2500);
            }else if(enemyAttackThisTurn === "Grass"){
                gameInstruction.textContent = "Enemy used Grass attack! Your attack loses!";
                playerDamageThisTurn = 0;
                enemyDamageThisTurn = 20;
                setTimeout(() => {
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    elementYou.innerHTML = `<img src="./asset/water.png" alt="Water Icon">`;
                    elementYou.classList.add('yourelementLose');
                    elementEnemy.innerHTML = `<img src="./asset/grass.png" alt="Grass Icon">`;
                    elementEnemy.classList.add('enemyelementWin');
                setTimeout(() => {
                    yourPokemon.classList.add('getHit');
                    superEffectiveSound.play();

                }, 600);
                    notEffectiveContainer++;
                    resultCheck()
                }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');


                elementYou.classList.remove('yourelementLose');
                elementEnemy.classList.remove('enemyelementWin');
                yourPokemon.classList.remove('getHit');
                return;
            }, 2500);
            }
        }
    //if player choose grass button
    else if(e.target.id === "grassAttackButton"){
        grassAttackCounter++;
            if(enemyAttackThisTurn === "Fire"){
                gameInstruction.textContent = "Enemy used Fire attack! Your attack loses!";
                playerDamageThisTurn = 0;
                enemyDamageThisTurn = 20;
                setTimeout(() => {                
                    elementYou.innerHTML = "";
                    elementEnemy.innerHTML = "";
                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    notEffectiveContainer++;

                    elementYou.innerHTML = `<img src="./asset/grass.png" alt="Grass Icon">`;
                    elementYou.classList.add('yourelementLose');
                    elementEnemy.innerHTML = `<img src="./asset/fire.png" alt="Fire Icon">`;
                    elementEnemy.classList.add('enemyelementWin');
                setTimeout(() => {
                    yourPokemon.classList.add('getHit');
                    superEffectiveSound.play();

                }, 600);
                    resultCheck()
                }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');


                elementYou.classList.remove('yourelementLose');
                elementEnemy.classList.remove('enemyelementWin');
                yourPokemon.classList.remove('getHit');
                return;
            }, 2500);
            }else if(enemyAttackThisTurn === "Water"){
                gameInstruction.textContent = "Enemy used Water attack! Your attack wins!";
                playerDamageThisTurn = 20;
                enemyDamageThisTurn = 0;
                setTimeout(() => {

                    gameInstruction.textContent = `You dealt ${playerDamageThisTurn} damage but your opponent dealt ${enemyDamageThisTurn} damage! It's super effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    superEffectiveContainer++;
                    elementYou.innerHTML = `<img src="./asset/grass.png" alt="Grass Icon">`;
                    elementYou.classList.add('yourelementWin');
                    elementEnemy.innerHTML = `<img src="./asset/water.png" alt="Water Icon">`;
                    elementEnemy.classList.add('enemyelementLose');
                    setTimeout(() => {
                        enemyPokemon.classList.add('getHit');
                        superEffectiveSound.play();

                    }, 600);
                    resultCheck()
                }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                elementYou.classList.remove('yourelementWin');
                elementEnemy.classList.remove('enemyelementLose');
                enemyPokemon.classList.remove('getHit');
                return;
            }, 2500);
            }else if(enemyAttackThisTurn === "Grass"){
                gameInstruction.textContent = "Enemy used Grass attack! It's a tie!";
                playerDamageThisTurn = 0;
                enemyDamageThisTurn = 0;
                setTimeout(() => {
                    gameInstruction.textContent = `Both you and your opponent dealt ${playerDamageThisTurn} damage! It's normally effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    normallyEffectiveContainer++;

                    elementYou.innerHTML = `<img src="./asset/grass.png" alt="Grass Icon">`;
                    elementYou.classList.add('yourelementTie');
                    elementEnemy.innerHTML = `<img src="./asset/grass.png" alt="Grass Icon">`;
                    elementEnemy.classList.add('enemyelementTie');
        
                    setTimeout(()=>{
                        NotEffectiveSound.play();
                    },500);
                    resultCheck()
                }, 1000);
                setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                    gameInstruction.textContent = `Let's continue the duel`;

                    fireAttackButton.classList.remove('hidden');
                    waterAttackButton.classList.remove('hidden');
                    grassAttackButton.classList.remove('hidden');
                    physicalAttackButton.classList.remove('hidden');

                    fireAttackButton.classList.add('cursor-pointer');
                    waterAttackButton.classList.add('cursor-pointer');
                    grassAttackButton.classList.add('cursor-pointer');
                    physicalAttackButton.classList.add('cursor-pointer');

                    fireAttackButton.classList.remove('text-gray-100');
                    waterAttackButton.classList.remove('text-gray-100');
                    grassAttackButton.classList.remove('text-gray-100');
                    physicalAttackButton.classList.remove('text-gray-100');

                    elementYou.classList.remove('yourelementTie');
                    elementEnemy.classList.remove('enemyelementTie');
                    return;
                }, 2500);
            }
         }
    //if player choose physical button
     else if(e.target.id === "physicalAttackButton"){
            physicalAttackCounter++;
              gameInstruction.innerHTML = `Since you use physical enemy then also use physical!`;
                playerDamageThisTurn = Math.floor(Math.random()*21);
                enemyDamageThisTurn = Math.floor(Math.random()*21);
                setTimeout(() => {
                    gameInstruction.textContent = `you dealt ${playerDamageThisTurn} damage and your opponent dealt ${enemyDamageThisTurn}! It's okay effective!`;
                    yourHPValue = yourHPValue - enemyDamageThisTurn;
                    yourHP.style.width = `${yourHPValue}%`;
                    enemyHPValue = enemyHPValue - playerDamageThisTurn;
                    enemyHP.style.width = `${enemyHPValue}%`;
                    normallyEffectiveContainer++;
                    yourPokemon.classList.add('yourelementPhysical');
                    enemyPokemon.classList.add('enemyelementPhysical');
                setTimeout(()=>{
                    NotEffectiveSound.play();
                },500);
                    resultCheck()
                }, 1000);
            setTimeout(() => {
                elementYou.innerHTML = "";
                elementEnemy.innerHTML = "";
                gameInstruction.textContent = `Let's continue the duel`;

                yourPokemon.classList.remove('yourelementPhysical');

                enemyPokemon.classList.remove('enemyelementPhysical');

                fireAttackButton.classList.remove('hidden');
                waterAttackButton.classList.remove('hidden');
                grassAttackButton.classList.remove('hidden');
                physicalAttackButton.classList.remove('hidden');

                fireAttackButton.classList.add('cursor-pointer');
                waterAttackButton.classList.add('cursor-pointer');
                grassAttackButton.classList.add('cursor-pointer');
                physicalAttackButton.classList.add('cursor-pointer');

                fireAttackButton.classList.remove('text-gray-100');
                waterAttackButton.classList.remove('text-gray-100');
                grassAttackButton.classList.remove('text-gray-100');
                physicalAttackButton.classList.remove('text-gray-100');

                return;
            }, 2500);

        }


        //after duel end click this button to restart the game
        playAgainButton.addEventListener("click", ()=>{
                duelResultContainer.classList.add("hidden");

                //reset the song
                tieSong.pause();
                victorySong.pause();
                victorySong.currentTime = 0;
                defeatedSong.pause();
                battleSong.pause();
                battleSong.currentTime = 0;
                opening.play();
                opening.currentTime=0;

                //replenish health
                yourHPValue = 100;
                enemyHPValue = 100;
                yourHP.style.width = `${yourHPValue}%`;
                enemyHP.style.width = `${enemyHPValue}%`;

                //hide the duel container
                duelContainer.classList.add("hidden");
                startAdventureButton.classList.remove("hidden");
                welcomeContainer.classList.remove("hidden");

                //show the character select screen again
                DisplayCharacter(characterArray);
                characterSelectionContainer.classList.remove('hidden');
                chooseCharacterButton.classList.add('hidden');
        });


    }