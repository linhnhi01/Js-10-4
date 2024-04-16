const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', () => {
  console.log('Event occurred');
});

eventEmitter.emit('myEvent');