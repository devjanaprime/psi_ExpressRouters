var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );

router.get( '/', function( req, res ){
  console.log( '/other get hit in other.js' );
  res.sendFile( path.resolve( 'public/views/other.html' ) );
}); // end get /other

module.exports = router;
