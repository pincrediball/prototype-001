
(function() {
  /**
  * @typedef {Phaser.Types.Core.GameConfig}
  */
  const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 400,
    height: 600,
    physics: {
      default: 'matter',
      matter: {
        // gravity: { x: 0, y: 1.5 },
        timing: {
          timeScale: 1, // for slow-mo if needed
        },
        setBounds: {
          x: 5,
          y: 5,
          width: 390,
          height: 590,

        },
        debug: {
          showAngleIndicator: true,
          showCollisions: true,
          showBody: true,
          showVelocity: true,
        },
      },
    },
    scene: {
      preload,
      create,
      update,
    },
  };

  function preload() {
    this.load.image('backplate', 'assets/backplate.png');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('outerBox', 'assets/outer-box.png');
    
  }

  let ball;

  function create() {
    this.add.image(200, 300, 'backplate');

    this.matter.add
      .image(200, 596, "outerBox", null, { isStatic: true })
      .setBounce(0.3)
      .setScale(100, 1)
      ;

      this.matter.add
        .image(380, 100, "outerBox", null, { isStatic: true })
        .setScale(15, 1)
      .setBounce(0.3)
      .setAngle(60)
        ;
  
        this.matter.add
          .image(397, 475, "outerBox", null, { isStatic: true })
          .setScale(140, 1)
      .setBounce(0.3)
      .setAngle(90)
          ;

    ball = this.matter.add
      .image(385, 250, 'ball', null, { density: 0.01 })
      .setCircle(8)
      .setBounce(0.3)
      ;
  }

  function update() {
    
  }

  const game = new Phaser.Game(config);

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("plunge").addEventListener("click", () => {
      ball.setVelocity(0, -24);
    });
    document.getElementById("reset").addEventListener("click", () => {
      ball.setPosition(385, 250);
      ball.setVelocity(0, 0);
    });
  });

}());