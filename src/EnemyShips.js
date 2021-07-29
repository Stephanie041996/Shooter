/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable max-classes-per-file */
import Entity from './Entities';

export class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprLaserEnemy0');
    this.body.velocity.y = 200;
  }
}
// export class ChaserShip extends Entity {
//     constructor(scene, x, y) {
//       super(scene, x, y, "sprEnemy1", "ChaserShip");
//       this.body.velocity.y = Phaser.Math.Between(50, 100);
//     }
//   }

export class GunShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy0', 'GunShip');
    this.play('sprEnemy0');

    this.body.velocity.y = Phaser.Math.Between(50, 100);

    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback() {
        const laser = new EnemyLaser(
          this.scene,
          this.x,
          this.y,
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true,
    });
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}
export class CarrierShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy2', 'CarrierShip');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.play('sprEnemy2');
  }
}
