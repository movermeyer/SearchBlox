<?php
/**
 * SearchBlox Search extension
 *
 * For more info see https://www.mediawiki.org/wiki/Extension:SearchBlox 
 *
 * @file
 * @ingroup Extensions
 * @author Michael Overmeyer, 2013
 * @license GNU General Public Licence 2.0
 */

$wgExtensionCredits['other'][] = array(
	'path' => __FILE__,
	'name' => 'SearchBlox Search',
	'author' => array(
		'Michael Overmeyer',
	),
	'version'  => '0.1.0',
	'url' => 'https://www.mediawiki.org/wiki/Extension:SearchBlox',
	'descriptionmsg' => 'searchblox-desc',
);

/* Setup */

$dir = dirname( __FILE__ );

// Register files
$wgAutoloadClasses['SearchBloxHooks'] = $dir . '/SearchBlox.hooks.php';
$wgExtensionMessagesFiles['SearchBlox'] = $dir . '/SearchBlox.i18n.php';
$wgExtensionMessagesFiles['SearchBloxAlias'] = $dir . '/SearchBlox.i18n.alias.php';

// Register hooks
$wgHooks['SpecialSearchNoResults'][] = 'SearchBloxHooks::onSpecialSearchNoResults';
$wgHooks['SpecialSearchResults'][] = 'SearchBloxHooks::onSpecialSearchResults';
$wgHooks['ResourceLoaderGetConfigVars'][] = 'SearchBloxHooks::resourceLoaderGetConfigVars';


// Register special pages

// Register modules
$wgResourceModules['ext.SearchBlox.query'] = array(
	'scripts' => array(
		'modules/ext.SearchBlox.query.js',
	),
	'styles' => array(
	),
	'messages' => array(
           'searchblox-results-header',
           'searchblox-loading',
           'searchblox-results',
           'searchblox-noresults',
           'searchblox-error',
           'searchblox-timeout',
           'size-gigabytes',
           'size-megabytes',
           'size-kilobytes',
           'size-bytes',
	),
	'dependencies' => array(
	),

        'configurations' => array(
           'wgSearchBloxHost',
        ),
	'localBasePath' => $dir,
        'remoteExtPath' => 'SearchBlox/',
);

$wgResourceModules['ext.SearchBlox.query.init'] = array(
        'scripts' => 'modules/ext.SearchBlox.query.init.js',
        'dependencies' => array(
                'ext.SearchBlox.query',
        ),

        'localBasePath' => $dir,
        'remoteExtPath' => 'SearchBlox/',
);


/* Configuration */

//Name of the organization
$wgSearchBloxOrganizationName = "Example Inc.";

//URL of the orgnization's main website
$wgSearchBloxOrganizationWebsite = "http://example.com";

//Host of the SearchBlox Server
$wgSearchBloxHost = "http://searchblox.example.com";

//URL to launch queries against 
$wgSearchBloxServletUrl = "http://searchblox.example.com/searchblox/servlet/SearchServlet";

//URL to direct users to for more results
$wgSearchBloxFrontendUrl = "http://searchblox.example.com/searchblox/plugin/index.html";
