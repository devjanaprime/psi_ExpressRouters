// index router for in class express routers lecture
// requires
var express = require( 'express' );
// our router to export
var router = express.Router();
var path = require( 'path' );

// setting routes to GET, PUT, POST, DELETE as needed
router.get( '/', function( req, res ){
  console.log( 'base url hit in index.js router' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); //end router

// don't 4get to export
module.exports = router;
