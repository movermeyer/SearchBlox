SearchBlox Mediawiki Extension
==========

A Mediawiki extension that queries a SearchBlox server when there < 10 matches for a query.

This extension is NOT official and is in no way affiliated or endorsed by SearchBlox. 
See SearchBlox's site at http://searchblox.com.

## Requirements
* Mediawiki 1.18+
* A SearchBlox 7+ server (With CORS enabled for the domain of your Wikimedia installation)

## Quick Start
Create the directory extension/SearchBlox in you Mediawiki installation.
Download the repository into extensions/SearchBlox/

Modify LocalSettings.php and add the following lines at the bottom of the file:


    require_once( "$IP/extensions/SearchBlox/SearchBlox.php" );

    $wgSearchBloxOrganizationName = "Example Inc."; #Name of the organization running the SearchBlox server

    $wgSearchBloxOrganizationWebsite = "http://example.com"; #URL of the orgnization's main website

    $wgSearchBloxHost = "http://searchblox.example.com"; #Host of the SearchBlox Server

    $wgSearchBloxServletUrl = "http://searchblox.example.com/searchblox/servlet/SearchServlet"; #URL to launch queries against

    $wgSearchBloxFrontendUrl = "http://searchblox.example.com/searchblox/plugin/index.html"; #URL to direct users to for more results

Make sure to modify the $wg* lines above to reflect your deployment.

## Usage
Your Mediawiki instance will now automatically query the SearchBlox server in cases where < 10 "Page text matches" results were found.
The first 10 matches found by SearchBlox will be presented in the search results page.
