# ⚔️ WebBox: Anime Auto-Battler
![Version](https://img.shields.io/badge/Version-21.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

WebBox is a chaotic, high-performance 2D auto-battler and god-simulator. Spawn armies, build civilizations, grant elemental powers, and drop legendary anime characters into the battlefield to watch the chaos unfold.

### 👑 Developed by: Scourge/SFH/Falah
**Date:** April 23, 2026

---

## 🚀 Features

* **Massive 2D Battles:** Render hundreds of individual units clashing at 60 FPS.
* **Civilization System:** If left in peace (Wall Closed), units will automatically build houses to multiply, stone armories to craft weapons, and shrines to unlock magic.
* **Deep Class Mechanics:** * *Knights:* High HP cavalry with lances.
    * *Swappers:* Instant teleportation and hit combos.
    * *Shifters:* Instantly steal enemies' abilities and weapons.
    * *War Elephants:* Massive siege beasts that can be equipped with Cannons.
* **Legendary Anime Gods:** Drop Goku, Luffy, Gojo, or Naruto into the map. They fight as solo teams with screen-wiping ultimate abilities (Kamehameha, Hollow Purple, Kurama Summons).
* **Elemental Magic:** Manually smite units or grant them Fire, Ice, Light, or Wind powers.

---

## 🎮 How to Play

1.  **Clone or Download** this repository.
2.  Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari). No installation or server required!
3.  Select your **Team Color** from the sidebar.
4.  Click the canvas to **Spawn Units**.
5.  Toggle the **Wall** to OPEN to let the teams fight!

---

## 📁 File Structure

The project is modularized for clean development and easy feature expansion:

```text
/WebBox
│── index.html           # Main UI, Canvas, and Start Menu
│── style.css            # Styling for the sidebar and modals
│── README.md            # Project documentation
└── /js
    │── engine.js        # Core animation loop, physics, and input handling
    │── units.js         # Logic & rendering for basic classes and Anime Gods
    │── civilization.js  # Logic for buildings (Houses, Shrines, Armories)
    └── others.js        # Projectile physics (Arrows, Magic, Cannonballs)
