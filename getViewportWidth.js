/*! GetViewportWidth | Author: Tyson Matanich, 2012 | License: MIT */
(function (window) {
	window.getViewportWidth = function () {
		var width;
		var document = window.document;
		var documentElement = document.documentElement;
		if (window.innerWidth === undefined) {
			// IE6 & IE7 don't have window.innerWidth
			width = documentElement.clientWidth;
		}
		else if (window.innerWidth > documentElement.clientWidth) {
			// WebKit doesn't include scrollbars while calculating viewport width so we have to get fancy

			// Insert markup to test if a media query will match document.doumentElement.clientWidth
			var bodyElement = document.createElement("body");
			bodyElement.id = "vpw-test-b";
			bodyElement.style.cssText = "overflow:scroll";
			var divElement = document.createElement("div");
			divElement.id = "vpw-test-d";
			divElement.style.cssText = "position:absolute;top:-1000px";
			// Getting specific on the CSS selector so it won't get overridden easily
			divElement.innerHTML = "<style>@media(width:" + documentElement.clientWidth + "px){body#vpw-test-b div#vpw-test-d{width:7px!important}}</style>";
			bodyElement.appendChild(divElement);
			documentElement.insertBefore(bodyElement, document.head);

			if (divElement.offsetWidth == 7) {
				// Media query matches document.documentElement.clientWidth
				width = documentElement.clientWidth;
			}
			else {
				// Media query didn't match, use window.innerWidth
				width = window.innerWidth;
			}
			// Cleanup
			documentElement.removeChild(bodyElement);
		}
		else {
			// Default to use window.innerWidth
			width = window.innerWidth;
		}
		return width;
	};
})(this);