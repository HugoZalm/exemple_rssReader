var HZmodule = (function($) {
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

	return my;
}(jQuery));
