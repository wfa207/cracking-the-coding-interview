'use strict';

let LinkedList = require('../utils/LinkedList');

function AnimalShelter() {
  this.order = 0;
  this.cats = new LinkedList();
  this.dogs = new LinkedList();
}

(function(objProto) {
  objProto.enqueue = function(data) {
    this.order++;
    data.order = this.order;
    if (data.type === 'D') { this.dogs.enqueue(data); }
    if (data.type === 'C') { this.cats.enqueue(data); }

    return this;
  };

  objProto.dequeueAny = function() {
    let dog = this.dogs.peek('head');
    let cat = this.cats.peek('head');
    if (!cat) { return this.dogs.dequeue(); }
    else if (!dog) { return this.cats.dequeue(); }
    else if (dog && cat && dog.data.order < cat.data.order) { return this.dogs.dequeue(); }
    else if (dog && cat && dog.data.order > cat.data.order) { return this.cats.dequeue(); }
    else { return null; }
  };

  objProto.dequeueDog = function() {
    return this.dogs.dequeue();
  };

  objProto.dequeueCat = function() {
    return this.cats.dequeue();
  };
})(AnimalShelter.prototype);

let thisShelter = new AnimalShelter();
thisShelter.enqueue({type: 'D', name: 'Frederick'}).enqueue({type: 'c', name: 'akuti'}).enqueue({type: 'D', name: 'Booger'}).enqueue({type: 'C', name: 'Piggy'}).enqueue({type: 'D', name: 'Daisy'}).enqueue({type: 'C', name: 'Sherman'})
console.log('After Dequeuing Dog: ', thisShelter);
console.log('Dequeued Any: ', thisShelter.dequeueAny());
// console.log('Dequeued Cat: ', thisShelter.dequeueCat());
// console.log('Dequeued Cat: ', thisShelter.dequeueCat());
