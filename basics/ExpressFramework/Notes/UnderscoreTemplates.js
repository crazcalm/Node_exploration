/*
  The uinexpress hack works on Express 3X and 2X. I am using Express 4X. Just
learn Jade templates!
*/

/*
              Underscore Templates and uniexpress
              -----------------------------------

  You're already confortable using Underscore templates after reading Chapter 4,
so why not use them in Express? Fortunately, there's a Node module called
uinexpress, which makes it easy to enable Underscore templates in Express.
First install uniexpress and Underscore via NPM:

      npm install uinexpress
      npm install underscore

  Next open up app.js and modify the Express configuration. Add the following
lines beneath the // all environments line:

      app.engine('html', require('uinexpress')._express);
      app.set('view engine', 'html');

  And then comment out the line for Jade view engine:

      // app.set('view engine', "jade");

  Finally, restart your Express server to put the changes into effect.
*/
