var HZ = (function() {
	return {
		readRSS: function() {
			var rssurl = "http://www.nu.nl/feeds/rss/algemeen.rss";
			$.get(rssurl, function(data){				
				var $xml = $(data);
				$xml.find('item').each(function() {
					var $this = $(this);
					item = {
						title: $this.find('title').text(),
						link: $this.find('link').text(),
						description: $this.find('description').text(),
						pubDate: $this.find('pubDate').text(),
						author: $this.find('author').text()
					};
				});
				return item;
			});
		},
		test: function() {
			return "test geslaagd";
		}
	}
}());