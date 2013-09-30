var HZ = (function($) {
	my = {};

	my.test = function() {
		return "test geslaagd";
	};

	my.getRss = function(rssurl) {
$('#testScreen').append('<p>HZ.getRss: '+rssurl+'</p>');
		var answer = {items: []};
		item = {
				title: 'title',
				link: 'link',
				description: 'description',
				pubDate: 'pubDate',
				author: 'author'
			};
		answer.items.push(item);	// werkt goed tot hier
		$.ajax({
		    url: rssurl,
		    dataType: "xml",	// for debug options only
		    success: function(data) {
		    	// data komt ook goed binnen als tekst
				var $xml = $(data);
				$xml.find('item').each(function() {
					var $this = $(this);
$('#testScreen').append('<p>HZ.getRss(1): '+$this+'</p>');
					item = {
						title: $this.find('title').text(),
						link: $this.find('link').text(),
						description: $this.find('description').text(),
						pubDate: $this.find('pubDate').text(),
						author: $this.find('author').text()
					};
					answer.items.push(item);
				});
$('#testScreen').append('<p>HZ.getRss(2): '+answer.items.length+'</p>');
$html = "<p>Test</p>";
for (i=0; i<answer.items.length; i++) {
	$html += "<p>";
	$html += answer.items[i].title + "</br>";
	$html += answer.items[i].link + "</br>";
	$html += answer.items[i].author + "</br>";
	$html += answer.items[i].pubDate + "</br>";
	$html += answer.items[i].description + "</br>";
	$html += "</p>";
};
$('#testScreen').append($html);
			return answer;
		    }
		}).done(function() {
			return answer;
		});
	};

	return my;
}(jQuery));
