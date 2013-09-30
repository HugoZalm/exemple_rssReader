$(function(){

	var rssurl = "http://www.nu.nl/feeds/rss/algemeen.rss";
	var feed = HZ.getRss(rssurl, function(){
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
	});
	
});