var HZview = (function($) {
	my = {};

	my.test = function() {
		return "test geslaagd";
	};

	my.showRss = function(feed){
		var $html = '';
		$html += '<div id="channelTitle" class="HZ_channelTitle">' + feed.title + '</div>';
		$html += '<div id="channelDescription" class="HZ_channelDescription">' + feed.description + '</div>';
		for (i=0; i<feed.items.length; i++) {
			$html += '<div id=item"' + i + ' " class="HZ_feedItem">';
			$html += '<div class="HZ_feeditemTitle"><a href="'+feed.items[i].link+'">'+feed.items[i].title + "</a></div>";
			$html += '<div class="HZ_feeditemInfo">'+feed.items[i].author + " (" + feed.items[i].pubDate + ")</div>";
			$html += '<div class="HZ_feeditemDescription">'+feed.items[i].description + "</div>";
			$html += '</div>';
		};
		return $html;
	};
	
	my.makeButton1 = function(img,name) {
		$html = '';
		$html += '<img id="'+name+'" src="img/'+img+'.png" alt="'+name+'" class="HZ_button">';
		return $html;
	};

	my.makeButton = function(img,name) {
		$html = '';
		$html += '<img id="'+name+'" src="img/'+img+'.png" alt="'+name+'" class="HZ_button">';
		return $html;
	};
	
	return my;
}(jQuery));
