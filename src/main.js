let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
  }
  let game = new Phaser.Game(config);

  // set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
//Rayna Li, Rooster,6/29/2021, 8h
//Point Breakdown:
//20,Finishing the Tutorial +
//60,Redesign the game's artwork, UI, and sound to change its theme/aesthetic
//20,Create new artwork for all of the in-game assets 