Function.prototype.inherits = function (parentClass) {
  // function Surrogate(){};
  // Surrogate.prototype = parentClass.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;

  this.prototype = Object.create(parentClass.prototype);
  this.prototype.constructor = this;

}

function MovingObject(speed) { 
  this.speed = speed;
}

function Ship(speed, name) {
  this.speed = speed;
  this.name = name;
 }
Ship.inherits(MovingObject);

function Asteroid(speed,size) {
  this.speed = speed;
  this.size = size;
 }
Asteroid.inherits(MovingObject);


MovingObject.prototype.fly = function() {
  console.log(`Flying at ${this.speed} miles per hour`);
};

Ship.prototype.report = function () {
  console.log(`${this.name} reporting for duty`);
};

Asteroid.prototype.crash = function () {
  console.log(`${this.size} asteroid crashing into earth`);
};