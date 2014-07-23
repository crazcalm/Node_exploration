/*
                        Events
                        ------

  As Node's website puts it, "Node.js uses an event-driven, non-blocking I/O
model." Events are clearly a big part of Node, and the platform provides some
useful techniques for setting up your own custom events. The main component for
events in Node is EventEmitter. Whenever you see an event handled with on(),
you're seeing the EventEmitter in action.

  You can use the EventEmitter to create your own custom events and handlers
throuoghout your app. First, include the events module, which is part of the
Node core

    var events = require('events');

  Next, create a new instance of EventEmitter:

    var em = new events.EventEmitter();

  Now, you can use the EventEmitter to handle two important tasks: creating an
event handler and emitting the actual event. First, create the event handler
using on():

      em.on('my-event', function(data){
        // What to do when this event fires
      });

  Then, you can trigger this handler by firing the actual event. To do so, use
emit():

  Using this technique, you can set up custom evetns and handlers throughout
your ap. For example, here's how to create an event that fires at every tick
of an interval:
*/

// include the events module
var events = require('events');

// create an instance of the EventEmitter
var em = new events.EventEmitter();

var counter = 0;

// emit the event every 5 seconds
var timer = setInterval(function(){
  em.emit("tick");
}, 5000);

// handle the event, logging either "Tick" or "Tock"
em.on('tick', function(){
  counter++;
  console.log(counter % 2? "Tick": "Tock");
});
