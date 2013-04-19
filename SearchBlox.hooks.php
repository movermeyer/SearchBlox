<?php
/**
 * Hooks for SearchBlox extension
 *
 * @file
 * @ingroup Extensions
 */

class SearchBloxHooks {
  
  public static function onSpecialSearchNoResults( $term ) {
    
    global $wgOut;
    $wgOut->addModules( 'ext.SearchBlox.query.init' );
    return true;
  }

  public static function onSpecialSearchResults( $term, &$titleMatches, &$textMatches ){
    $hits = $textMatches->numRows();
    
    if ($hits && $hits <= 10){
      global $wgOut;
      $wgOut->addModules( 'ext.SearchBlox.query.init' );
    }
    return true;
  }

  public static function resourceLoaderGetConfigVars( &$vars ) {  
    global $wgSearchBloxOrganizationName, $wgSearchBloxOrganizationWebsite, $wgSearchBloxHost, $wgSearchBloxServletUrl, $wgSearchBloxFrontendUrl;
    
    $vars['wgSearchBloxOrganizationName'] = $wgSearchBloxOrganizationName;
    $vars['wgSearchBloxOrganizationWebsite'] = $wgSearchBloxOrganizationWebsite;
    $vars['wgSearchBloxHost'] = $wgSearchBloxHost;
    $vars['wgSearchBloxServletUrl'] = $wgSearchBloxServletUrl;    
    $vars['wgSearchBloxFrontendUrl'] = $wgSearchBloxFrontendUrl; 

    return true;
  }

}
