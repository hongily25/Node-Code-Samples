const http = require('http');
const events = require('events');

//Create New Event Emitter object
const eventEmitter = new events.EventEmitter();

//Create Event Handler
const helloWorldHandler = function() {
  console.log('Hello World!');
};

//Register Event
eventEmitter.on('helloWorld', helloWorldHandler);

//Emit Event
eventEmitter.emit('helloWorld');
