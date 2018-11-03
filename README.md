# HACK POMPY

A game made at HackPompy2018.

The idea of the game is you are an organiser of HackPompy2018 and you have to help maintain the satisfaction of the people all by yourself

## Implementation

The game starts off in main.js

### The screen system

The game works using a screen system, where a screen is a different stage of the game

For example the first screen is the playScreen, which is found in screens/playScreen.js. This acts as the main menu of the game. After the game is clicked, the game begins (for now) in the development screen.

Each screen is implemented as a class, of which must have 3 functions:

`init` which sets up event listens for the screen. This is not done in constructor as just before this the event listeners are completly reset.

`update` where the updates happen eg move objects

`redraw` where any objects within the screen are redrawn

These are called once per frame in main.js. in the `loop` function, which acts as the main game loop of the game.

The screens are also being passed in a function into their init function, `switchScreen`.

This function allows the screens to switch to other screens. All they need to do is pass in a number, of which are defined in the `lib.js` file:

```js
//Screen IDs
const PLAY_SCREEN = 0;
const REGISTR_SCREEN = 1;
const PRESENT_SCREEN = 2;
const DEV_SCREEN = 3;
```

The different screens can be seen here:

#### playScreen

The main menu of the game

#### presentationScreen

The stage where the competition is being introduced to the competitors. Here the player must deliver coffee to the people at the presentation.


#### developementScreen: 

The stage where people are programming their hacks. Here the player must register players, serve food and drink, and order food and drink at local stores.