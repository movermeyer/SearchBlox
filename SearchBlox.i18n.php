<?php
/**
 * Internationalisation file for the SearchBlox extension.
 *
 * @file
 * @ingroup Extensions
 */

$messages = array();

/** English
 */
$messages['en'] = array(
	'searchblox-desc' => 'This extension adds SearchBlox results to the search results. Not official and is in no way affiliated or endorsed by SearchBlox.',
	'searchblox-i18n-welcome' => 'Welcome to the localization file of the SearchBlox extension.',
        'searchblox-results-header' => '$1 matches',
        'searchblox-loading' => 'Hang on! We\'re checking if $1 knows anything about $2.',
        'searchblox-results' => '$1 documents from $2 mention $3. Below are the first 10. To see the rest visit $4.',
        'searchblox-noresults' => '$1 knows nothing about $2',
        'searchblox-error' => 'Failed to fetch results from $1 due to an error.',
        'searchblox-timeout' => '$1 took too long to respond with results.',
        
);

/** Message documentation (Message documentation)
 */
$messages['qqq'] = array(
	'searchblox-desc' => '{{desc|name=SearchBlox|url=https://www.mediawiki.org/wiki/Extension:SearchBlox}}',
	'searchblox-i18n-welcome' => 'Used to greet the user when reading the .i18n.php file.',
        'searchblox-results-header' => 'The header to display for the results',        
        'searchblox-loading' => 'The message displayed while the results are being loaded. $1 = Organization name, $2 = query',
        'searchblox-results' => 'The message displayed once the results have been successfully retreived. $1 = # of results, $2 = Organization name, $3 = query $4 = link to organization\'s search page',
        'searchblox-noresults' => 'The message shown when there are no results. $1 = Organization name, $2 = query', 
        'searchblox-error' => 'The message shown in case of failure. $1 = Organization name.',
        'searchblox-timeout' => 'The message shown in case of timeout. $1 = Organization name.',

);

