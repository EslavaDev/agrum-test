/**
 * Main application routes
 */
// const errors = require('../components/errors');

// Import Endpoints

const test = require('../api/events');



module.exports = (app) => {
  // Insert routes below
  app.use('/v1/events', test);


  // All undefined asset or api routes should return a 404
  //app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    //.get(errors[404]);
};