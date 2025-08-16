const firstKataMutiara = document.getElementById("firstKataMutiara");
const secondKataMutiara = document.getElementById("secondKataMutiara");
// item[Object.keys(item)[0]][0]
// item[Object.keys(item)[0]][1]
const kataMutiara = [
    { 1 : ["Kamu memang seperti lempeng bumi", "bergeser sedikit saja sudah mengguncang hatiku"] },
    { 2 : ["Selain ada garuda di dadaku", "di dadaku juga selalu ada kamu."] },
    { 3 : ["Lebih baik menjadi pahlawan", "daripada pacaran tapi jadi selingkuhan"] },
    { 4 : ["Menjaga Bumi butuh kekuatan", "Tapi menjagamu butuh pemasukan"] },
    { 5 : ["Aku memilih untuk menantang bahaya", "tetapi kamu memilih pria yang lebih kaya"] },
    { 6 : ["Berbukalah dengan keluarga", "Karena yang manis belum tentu mau diajak berkeluarga"] },
    { 7 : ["Ga masalah kalau kamu ga pilih aku", "memang enggak semua orang seleranya bagus"] },
    { 8 : ["Lebih baik gaji besar asal halal", "daripada gaji kecil tapi halal"] },
    { 9 : ["Gajian itu kayak mantan ya", "bisanya cuma lewat doang"] },
    { 10 : ["Hidup itu seperti roda", "kadang di atas, kadang di bawah"] },
    { 11 : ["Kenapa zombie kalo nyerang ramai-ramai?", "Kalau sendirian bukan zombie, tapi zomblo"] },
    { 12 : ["Cinta adalah pengorbanan", "tapi kalau pengorbanan mulu sih namanya penderitaan"]},
    { 13 : ["Aku rela ikut lomba lari keliling dunia", "asalkan engkau yang menjadi garis finishnya."]},
    { 14 : ["Hari Minggu itu weekend","tapi kalau cinta aku ke kamu tuh will never end."]},
    { 15 : ["Napasku kok sesak ya?", "Karena separuh nafasku ada di kamu"]},
    { 16 : ["Ikan apa yang bikin baper?", "Ikan stop loving you."]}
]


function shuffleArray(array) {
    const shuffled = [...array]; // Make a copy so the original array is not changed

    for (let i = shuffled.length - 1; i > 0; i--) {  
        // i goes from the last index down to 1
        const j = Math.floor(Math.random() * (i + 1)); 
        // Pick a random index between 0 and i (inclusive)

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        // Swap element at i with element at j
    }
    return shuffled; // Return the shuffled array
}

function shuffleArray2(array) { // Make a copy so the original array is not changed
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
}

function selectRandomPairs(data, count = 6) {
    const shuffled = shuffleArray(data); // Shuffle the array
    return shuffled.slice(0, count);     // Take the first `count` items
}

let randomKataMutiara = shuffleArray(kataMutiara);

let randomKataFive = selectRandomPairs(randomKataMutiara, 6);

let firstKataArray = [];
let secondKataArray = [];
let shuffledfirstKataArray;
let shuffledsecondKataArray;
let firstCard = null;
let secondCard = null;


 function createBoard() {
            // firstKataMutiara.innerHTML = "";
            // secondKataMutiara.innerHTML = "";

            randomKataFive.forEach((item) => {
                // firstKataArray.push(item[Object.keys(item)[0]][0]);
                // shuffledfirstKataArray = shuffleArray(firstKataArray);
                // secondKataArray.push(item[Object.keys(item)[0]][1]);
                // shuffledsecondKataArray = shuffleArray(secondKataArray);
                const card1 = document.createElement("div");
                card1.classList.add("card");
                card1.classList.add("m-3");
                card1.textContent = item[Object.keys(item)[0]][0];
                card1.dataset.id = item[Object.keys(item)[0]];
                card1.addEventListener("click", flipCard);
                firstKataMutiara.appendChild(card1);

                const card2 = document.createElement("div");
                card2.classList.add("card");
                card2.classList.add("m-3");
                card2.textContent = item[Object.keys(item)[0]][1];
                card2.dataset.id = item[Object.keys(item)[0]];
                card2.addEventListener("click", flipCard);
                secondKataMutiara.appendChild(card2);
            });

            const divs = Array.from(firstKataMutiara.children);
            let shuffleddivs = shuffleArray2(divs)
            shuffleddivs.forEach(div => firstKataMutiara.appendChild(div)); 

            const divs2 = Array.from(secondKataMutiara.children);
            let shuffleddivs2 = shuffleArray2(divs2)
            shuffleddivs2.forEach(div => secondKataMutiara.appendChild(div));  
    }

    // function randomizeDiv(){
    //         const divs = Array.from(firstKataMutiara.querySelectorAll('.card'));
    //         let shuffleddivs = shuffleArray2(divs)
    //         shuffleddivs.forEach(div => firstKataMutiara.appendChild(div)); 

    //         const divs2 = Array.from(secondKataMutiara.querySelectorAll('.card'));
    //         let shuffleddivs2 = shuffleArray2(divs2)
    //         shuffleddivs2.forEach(div => secondKataMutiara.appendChild(div));       
    // }

    // randomizeDiv();



    // const cardClassElement = document.getElementsByClassName("card");
    // for(let i=cardClassElement.length-1; i>=0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1)); 
    // }

    function flipCard() {
        if (!firstCard) {
            firstCard = this;
        } else {
            secondCard = this;
            checkMatch();
        }

    }

    //     function flipCard() {
    //   if (lockBoard || this.classList.contains("flipped")) return;

    //   this.textContent = this.dataset.symbol;
    //   this.classList.add("flipped");

    //   if (!firstCard) {
    //     firstCard = this;
    //   } else {
    //     secondCard = this;
    //     checkMatch();
    //   }
    // }

        function checkMatch() {
            if (firstCard.dataset.id === secondCard.dataset.id) {
                firstCard.classList.add("matched");
                secondCard.classList.add("matched");
                resetTurn();
            } else {
                setTimeout(() => {
                // firstCard.textContent = "";
                // secondCard.textContent = "";
                // firstCard.classList.remove("flipped");
                // secondCard.classList.remove("flipped");
                resetTurn();
                }, 1000);
            }
        }

        function resetTurn() {
            [firstCard, secondCard] = [null, null];
            //   lockBoard = false;

            // Check win
            if (document.querySelectorAll(".matched").length === randomKataFive.length*2) {
                setTimeout(() => alert("🎉 You Win!"), 500);
            }
        }

    createBoard();

// randomKataFive.map((item) => {
//     firstKataMutiara.innerHTML += `
//         <div class="text-gray-700 w-[15%] h-[30vh] border border-black">
//             "${item[Object.keys(item)[0]][0]}"
//         </div>
//     `;
//     secondKataMutiara.innerHTML += `
//         <div class="text-gray-700 w-[15%] h-[30vh] border border-black">
//             "${item[Object.keys(item)[0]][1]}"
//         </div>
//     `;
// })




