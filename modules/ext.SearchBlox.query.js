/**
 * JavaScript for Query in SearchBlox.
 */

( function ( mw, $ ) {
	
	query = {
		init: function () {
      searchbar = document.getElementById("searchText");
      var keyword = searchbar.getAttribute("value");
      
      var organization_name = mw.config.get('wgSearchBloxOrganizationName');
      var organization_site = mw.config.get('wgSearchBloxOrganizationWebsite');
      var bold_keyword = "<b>"+keyword+"</b>";
      var organization_link = "<a href=\""+organization_site+"\">"+organization_name+"</a>";

      var div = document.getElementsByClassName("searchresults")[0];
      
      var header = document.createElement("h2");
      header.innerHTML = "<span class=\"mw-headline\">"+mw.message('searchblox-results-header', organization_name)+"</span>"
      div.appendChild(header);
      
      var loading_message = document.createElement("p");
      loading_message.id = "loading_message";
      loading_message.innerHTML = mw.message('searchblox-loading', organization_link, bold_keyword);
      div.appendChild(loading_message);
      
      var results_list = document.createElement("ul");
      results_list.id = "results_list";
      results_list.setAttribute("class", "mw-search-results");
      div.appendChild(results_list);
      
			query.querySearchBlox(keyword);
		},
    
    querySearchBlox: function(keyword) {
      var search_servlet_url = mw.config.get('wgSearchBloxServletUrl');
      var frontend_url = mw.config.get('wgSearchBloxFrontendUrl');
      
      var organization_name = mw.config.get('wgSearchBloxOrganizationName');
      var organization_site = mw.config.get('wgSearchBloxOrganizationWebsite');
      var bold_keyword = "<b>"+keyword+"</b>";
      var organization_link = "<a href=\""+organization_site+"\">"+organization_name+"</a>";
      
      var query_url = search_servlet_url+"?query="+keyword+"&xsl=xml";
      var xhr = query.createCORSRequest('GET', query_url);
      if (xhr){
          var message = document.getElementById("loading_message");
          xhr.onload = function(){
            xmlDoc=xhr.responseXML;
            var numResults = xmlDoc.getElementsByTagName("results")[0].getAttribute('hits');
            if (numResults != 0){
            
              message.innerHTML = mw.message('searchblox-results', numResults, organization_link, bold_keyword, "<a href="+frontend_url+"?query="+keyword+">their search site</a>");
              
              var results=xmlDoc.getElementsByTagName("results")[0].childNodes;
              var ul = document.getElementById("results_list");
              for (i=0;i<results.length;i++){
                var result = results[i];
                var url = result.getElementsByTagName("url")[0].childNodes[0].nodeValue;
                var score = result.getElementsByTagName("score")[0].childNodes[0].nodeValue;
                var title = result.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                var size = result.getElementsByTagName("size")[0].childNodes[0].nodeValue;
                var match = result.getElementsByTagName("context")[0];
                var li = document.createElement("li");
                
                var li_header_div = document.createElement("div");
                li_header_div.setAttribute("class", "mw-search-result-heading");
                li_header_div.innerHTML = "<a href=\""+url+"\">"+title+"</a>";
                li.appendChild(li_header_div);
                
                var li_match_div = document.createElement("div");
                li_match_div.setAttribute("class", "searchresult");
                li_match_div.innerHTML = query.createMatchString(match);
                li.appendChild(li_match_div);
                
                var li_footer_div = document.createElement("div");
                li_footer_div.setAttribute("class", "mw-search-result-data");
                li_footer_div.innerHTML = query.formatSize(size)+" "+url;
                li.appendChild(li_footer_div);
                
                
                ul.appendChild(li);
              }
            }
            else {
              message.innerHTML = mw.message('searchblox-noresults', organization_link, bold_keyword);
            }
          };
          xhr.onerror = function(){
            message.innerHTML = mw.message('searchblox-error', organization_link);
          }
          xhr.ontimeout = function(){
            message.innerHTML = mw.message('searchblox-timeout', organization_link);
          }
          xhr.send();
      }
    },
    
    createCORSRequest: function(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        // CORS not supported.
        xhr = null;
      }
      return xhr;
    },

    createMatchString: function(context){
      var result = "";
      for (j=0;j<context.childNodes.length;j++){
        if (context.childNodes[j].nodeType == 1){ //ELEMENT_NODE
          result = result+"<b>"+context.childNodes[j].childNodes[0].nodeValue+"</b>";
        }
        else if (context.childNodes[j].nodeType == 3){ //TEXT_NODE
          result = result+context.childNodes[j].nodeValue;
        }
      }
      return result;
    },
    
    formatSize: function($size){
      var $round = 0;
      if ( $size > 1024 ) {
        $size = $size / 1024;
        if ( $size > 1024 ) {
          $size = $size / 1024;
          // For MB and bigger two decimal places are smarter
          $round = 2;
          if ( $size > 1024 ) {
            $size = $size / 1024;
            $msg = mw.message('size-gigabytes');
          } else {
            $msg = mw.message('size-megabytes');
          }
        } else {
          $msg = mw.message('size-kilobytes');
        }
      } else {
        $msg = mw.message('size-bytes');
      }
      $size = $size.toFixed($round);
      var result = String($msg).replace("$1", $size);
      return result;
    }
    
	};

	mw.libs.SearchBloxQuery = query;

}( mediaWiki, jQuery ) );

