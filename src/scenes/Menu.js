class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    
    preload() {
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.mp3');
      this.load.audio('sfx_explosion', './assets/explosion38.mp3');
      this.load.audio('sfx_cow_sound', './assets/cow_sound.mp3');
      this.load.audio('sfx_rocket', './assets/rocket_shot.mp3');
    }

    create() {
      let menuCongif = {
        fontFamily: 'Courier',
        fontSize: '28px',
        backgroundColor: "#F3B141",
        color: '#843605',
        align: 'right',
        padding: {
          top: 5,
          bottom: 5,
        },
        fixeWidth: 0
      }

      //show meny text
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, "ROCKET PATROL", menuCongif).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2 , "USE <- -> arrows to move & (F) to fire", menuCongif).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, "Press <- for Novice or -> for Expert", menuCongif).setOrigin(0.5);

      // define keys
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // easy mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // hard mode
        game.settings = {
          spaceshipSpeed: 4,
          gameTimer: 45000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
    }
    
  }