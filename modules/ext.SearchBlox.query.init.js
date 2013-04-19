/**
 * Initialize Welcome
 *
 * This file is part of the 'ext.SearchBlox.query.init' module,
 * which is enqueued for loading from SearchBloxHooks::onSpecialSearchNoResults() and SearchBloxHooks::onSpecialSearchResults()
 * in SearchBlox.hooks.php.
 */
( function ( mw, $ ) {
	// Let jQuery invoke the init method as soon as the document is ready
	// $(..) is short for $(document).ready(..).
	// See also api.jquery.com/jQuery and api.jquery.com/ready
	$( mw.libs.SearchBloxQuery.init );

}( mediaWiki, jQuery ) );
