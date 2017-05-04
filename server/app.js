// requires
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var path = require( 'path' );
// require routers
var index = require( './modules/index' );
var other = require( './modules/other' );
// globals
var port = 3333;

//uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/', index );
app.use( '/other', other );

// spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
}); // end server up
