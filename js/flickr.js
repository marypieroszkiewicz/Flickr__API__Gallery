(function(document, window) {
   'use strict';

   var apiKey = '00b2973e2b624885b4974c2af90a9ec1';
   var apiURL = 'https://api.flickr.com/services/rest/';

   function searchText(parameters) {
		var requestParameters = Utility.extend(parameters, {
			method: 'flickr.photos.search',
			api_key: apiKey,
			format: 'json'
		});

		var script = document.createElement('script');
		script.src = Utility.buildUrl(apiURL, requestParameters);
		console.log(script.src);
		document.head.appendChild(script);
		document.head.removeChild(script);
	}

   function buildThumbnailUrl(photo) {
		return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
		'/' + photo.id + '_' + photo.secret + '_q.jpg';
   }

   function buildPhotoUrl(photo) {
		return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
        '/' + photo.id + '_' + photo.secret + '.jpg';
	}

   function buildPhotoLargeUrl(photo) {
		return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
		'/' + photo.id + '_' + photo.secret + '_b.jpg';
	}
	
	//This method is used to merge parameters passed by a caller.
	window.Flickr = Utility.extend(window.Flickr || {}, {
		buildThumbnailUrl: buildThumbnailUrl,
		buildPhotoUrl: buildPhotoUrl,
		buildPhotoLargeUrl: buildPhotoLargeUrl,
		searchText: searchText
	});
})(document, window);