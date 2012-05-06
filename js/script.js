/* This file is used to replace several seperate .js files */

// Add a class of .current to links pointing to the current page
$(function(){

    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        $('ul.nav li a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('current');
            }
        });

});
