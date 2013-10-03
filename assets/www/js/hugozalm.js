var HZ = (function($) {
	my = {};

	my.test = function() {
		return "test geslaagd";
	};

	my.processRss = function(data) {
		var answer = {title: "", description: "", items: []};
		var $xml = $(data);
		answer.title = $xml.find('channel > title').text();
		answer.description = $xml.find('channel > description').text();
		$xml.find('item').each(function() {
			var $this = $(this);
			item = {
				title: $this.find('title').text(),
				link: $this.find('link').text(),
				description: $this.find('description').text(),
				pubDate: $this.find('pubDate').text(),
				author: $this.find('author').text()
			};
			answer.items.push(item);
		});
		return answer;
	};

	my.showRss = function(feed){
		var $html = '';
		$html += '<div id="channelTitle" class="channelTitle">' + feed.title + '</div>';
		$html += '<div id="channelDescription" class="channelDescription">' + feed.description + '</div>';
		for (i=0; i<feed.items.length; i++) {
			$html += '<div id=item"' + i + ' " class="feedItem">';
			$html += '<div class="feedTitle"><a href="'+feed.items[i].link+'">'+feed.items[i].title + "</a></div>";
			$html += '<div class="feedInfo">'+feed.items[i].author + " (" + feed.items[i].pubDate + ")</div>";
			$html += '<div class="feedDescription">'+feed.items[i].description + "</div>";
			$html += '</div>';
		};
		return $html;
	};
	
	my.makeButton1 = function(img,name) {
		$html = '';
		$html += '<img id="'+name+'" src="img/'+img+'.png" alt="'+name+'" class="button">';
		return $html;
	};

	my.makeButton = function(img,name) {
		$html = '';
		$html += '<img id="'+name+'" src="img/'+img+'.png" alt="'+name+'" class="button">';
		return $html;
	};
	
	return my;
}(jQuery));
