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
 * constructor for a predator critte
 */
function Tiger () {
  
}

Tiger.prototype.act = function (view) {

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
