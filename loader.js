(function() {
    'use strict';

    // Polyfill
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }

    function TinyLoader(params) {
    	this.params = {
    		debug: false || params && params.debug,
    		imgPostLoadAttr: 'lazyload' || params && params.imgPostLoadAttr,
    		imgPostLoadSrc: 'data-src' || params && params.imgPostLoadSrc,
    	};
        this.debug = function() {
        	if (this.params.debug) console.debug(arguments);
        };
        this.load = function(filetype, targets) {
            var i, s;
            if (typeof targets === 'string') {
            	targets = [targets];
            } else if (!Array.isArray(targets)) {
            	console.warn('Loader.js: cannot load. Unsupported argument type:', typeof targets);
            	return;
            }
        	if (filetype === 'script') {
        		for (i = 0; i < targets.length; i++) {
        		    s = document.createElement('script');
        		    s.src = targets[i];
        		    document.body.appendChild(s);
        		}
        	} else if (filetype === 'style') {
        		for (i = 0; i < targets.length; i++) {
        		    s = document.createElement('link');
        		    s.rel = 'stylesheet';
        		    s.type = 'text/css';
        		    s.href = targets[i];
        		    document.head.appendChild(s);
        		}
        	}
        };
        this.js = this.load.bind(this, 'script');
        this.css = this.load.bind(this, 'style');

        this.lazyImages = function() {
        	var i,
        		imgs = document.querySelectorAll('[lazyload]');
        	for (i = 0; i < imgs.length; i++) {
        		imgs[i].src = imgs[i].getAttribute('data-src');
        	}
        };
    }
    window.TinyLoader = TinyLoader;
})();