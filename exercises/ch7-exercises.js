/**
 * Exercise #1
 * Constructor for a smart plant eater
 */
function SmartPlantEater () {
  this.energy = 30;
  this.direction = 'e';
}

SmartPlantEater.prototype.act = function (view) {
  var space = view.find(' ');
  if (this.energy > 90 && space) {
    return {type: 'reproduce', direction: space};
  }
  var plants = view.findAll('*');
  if (plants.length > 1) {
    return {type: 'eat', direction: randomElement(plants)};
  }
  if (view.look(this.direction) !== ' ' && space) {
    this.direction = space;
  }
  return {type: 'move', direction: this.direction};
};

/**
 * Exercise #2
 * constructor for a predator critter
 */
function Tiger () {
  this.energy = 50;
  this.direction = 'n';
  this.recentHerbivores = 0;
  this.moves = 0;
}

Tiger.prototype.act = function (view) {
  this.moves += 1;
  if (this.moves >= 20) {
    this.recentHerbivores = 0;
    this.moves = 0;
  }
  var space = view.find(' ');
  if (this.energy > 50 && space) {
    return {type: 'reproduce', direction: space};
  }
  var herbivores = view.findAll('O');
  this.recentHerbivores += herbivores;
  if (herbivores.length && (this.recentHerbivores >= 2)) {
    return {type: 'eat', direction: randomElement(herbivores)};
  }
  if (view.look(this.direction) !== ' ' && space) {
    this.direction = space;
  }
  return {type: 'move', direction: this.direction};
};

/**
 * HELPER FUNCTION
 * returns a random element from the passed in array
 *
 * @param  {Array} array
 * @return {Element}
 */
function randomElement (array) {
  return array[Math.floor(Math.random() * array.length)];
}
