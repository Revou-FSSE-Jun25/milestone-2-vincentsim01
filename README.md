[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/pUNCiVii)


# 🎮 Revofun

Revofun is a small collection of fun, browser-based games built with **HTML, CSS, and JavaScript**.  
The project hosts **three games** — each with its own Indonesian-inspired twist — along with a clean, mobile-friendly homepage.

- Website can be accessed: https://revofunvincent.netlify.app/

---

## ✨ Features

### 🏠 Homepage
- Responsive header with mobile-friendly navigation  
- Hero banner section  
- "Word from CEO" message  
- Section with **existing clients**  
- Simple **contact form**  

### 🎲 Games
Revofun includes three unique games:

1. **⚡ Magic Duel (Clicker Game)**  
   - A reimagined clicker game featuring **Harris Poettra**, a young wizard, battling against the evil wizard **Koklemot**.  
   - Instead of a static button, a **thunder-shaped arrow** (created using CSS clip-path) grows in width when you click the *Sim Salabim* button.  
   - Harris’s thunder bar grows with clicks, while Koklemot’s bar shrinks automatically using `setInterval`.  
   - Difficulty increases with the **Magic Duel level** — intervals shrink based on a rational function progression (1/1, 1/2, 1/3, 1/4, ...).  
   - Victory occurs when Harris’s thunder bar reaches 100% or Koklemot’s reaches 0.  
   - On victory, a **popup animation with Avada Kedavra (Hogwarts Legacy clip)** appears to reward the player.  
   - A **summary popup** shows the total number of clicks made.  
   - Built with **CSS Grid**, **Google Fonts**, and images from **Freepik**.

2. **🃏Kata-Kata Mutiara (Memory Card Game)**  
   - A cultural twist on the memory card game where instead of matching icons or logos, you match **Indonesian wisdom phrases (kata mutiara)**.  
   - The game board is divided into **two rows**:  
     - **Row 1** shows the **first phrase**  
     - **Row 2** shows the **second phrase**  
   - Gameplay mechanics:  
     - The game pulls from a **nested array** where each sub-array contains two items: `[firstPhrase, secondPhrase]`.  
     - Each card is assigned an `id` (based on the sub-array index) and stored in a **dataset**.  
     - Cards initially display `"?"`. When flipped, they reveal their phrase.  
     - If a player selects two cards but they don’t match, a short `setTimeout` flips them back to `"?"`.  
     - Players **cannot select two cards from the same row** — if they try, it won’t count as a match and both will flip back.  
     - A successful match (same `id` across Row 1 & Row 2) adds the `match` CSS class, turning the background **green**.  

   - Extra polish:  
     - **CSS keyframes** for smooth card flip animations  
     - **Sound effects** for flip, selection, and matching  
     - **Countdown timer** using `setInterval`.  

   - Win/Lose Conditions:  
     - Players must match **5 pairs** of wisdom phrases before the countdown hits **0**.  
     - On winning, a **popup appears** to congratulate the player.  
     - On losing (time runs out), a popup informs the player.  
     - In both cases, players can **restart the game**, resetting the timer and board. 

3. **🔥🌊🌱 Duel Api Air Rumput (Fire–Water–Grass Duel)**  
   - A Pokémon-inspired twist on the classic **Rock, Paper, Scissors** game.  
   - Based on the three basic starter elements from Pokémon: **Fire**, **Water**, and **Grass**.  

   - **Introduction Sequence**  
     - After clicking "Start", the game shows an **intro scene** to welcome the player.  
     - Intro text smoothly disappears using `setTimeout` + CSS keyframe animation (translate upward + fade out).  
     - Next, the **character selection screen** appears.  

   - **Character Selection**  
     - Players can choose a **starter Pokémon** from any generation (Red/Blue up to Scarlet/Violet).  
     - Pokémon are stored in a **nested array** by generation and type:  
       ```js
       [
         { generation: "Red/Blue", starters: { fire: "Charmander", water: "Squirtle", grass: "Bulbasaur" } },
         { generation: "Gold/Silver", starters: { fire: "Cyndaquil", water: "Totodile", grass: "Chikorita" } },
         ...
       ]
       ```  
     - Using `map` and object keys, the system dynamically extracts and displays the selected Pokémon.  

   - **Battle Phase**  
     - Once a starter is chosen, the duel begins against a **random opponent Pokémon** (picked from the opponent array).  
     - Player and opponent characters are shown with their **names and images** using template literals and `innerHTML`.  
     - Player has **4 move buttons**: 🔥 Fire, 🌊 Water, 🌱 Grass, and 👊 Physical.  

   - **Battle Logic**  
     - Opponent selects a move randomly.  
     - Damage rules:  
       - Fire 🔥 beats Grass 🌱 → Player deals **20 damage**, receives **5 damage**.  
       - Grass 🌱 beats Water 🌊 → Player deals **20 damage**, receives **5 damage**.  
       - Water 🌊 beats Fire 🔥 → Player deals **20 damage**, receives **5 damage**.  
       - Same element → Both deal **10 damage**.  
       - Physical 👊 vs Physical 👊 → Both deal **3 damage**.  
     - Implementation uses `addEventListener`, `if-else` conditions, `innerHTML`, `textContent`, arrays, `forEach`, `map`, and `classList`.  
     - A **command log** (bottom panel) updates each turn using `setTimeout` to simulate timed battle messages.  

   - **End Game**  
     - Battle continues until one character’s HP reaches **0**.  
     - A **popup summary table** appears showing:  
       - Number of attacks by type  
       - Count of **super effective**, **effective**, and **physical** hits  
     - Player can **retry**, pick a new Pokémon, and restart the game.

---

RevoU Second Assignment/
│
├── asset/ # Images, videos, or other assets
│
├── css/ # Stylesheets
│ ├── apiairrumput.css
│ ├── katamutiara.css
│ └── style.css
│
├── script/ # JavaScript files
│ ├── apiairrumput.js
│ ├── katamutiara.js
│ ├── magicduelscript.js
│ └── script.js
│
├── apiairrumput.html # API Air Rumput game
├── katamutiara.html # Kata Mutiara page
├── magicduel.html # Magic Duel game
├── index.html # Main landing page
│
└── README.md # Project documentation

## 🛠️ Tech Stack
- **HTML5** – structure  
- **CSS3** – styling, responsive design, clip-path effects  
- **JavaScript (Vanilla)** – game logic, interactions, dynamic updates  
- **Google Fonts** – typography  
- **Freepik Assets** – images and illustrations  




## Next Step
- Conversion to typescript
- Add leaderboard
- Next level for Api-Air-Rumput

--- 