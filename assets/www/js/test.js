$(function(){

/*
	$('#getrss').change(function(){
		$html = "<p>Test</p>";
		for (i=0; i<feed.items.length; i++) {
			$html += "<p>";
			$html += feed.items[i].title + "</br>";
			$html += feed.items[i].link + "</br>";
			$html += feed.items[i].author + "</br>";
			$html += feed.items[i].pubDate + "</br>";
			$html += feed.items[i].description + "</br>";
			$html += "</p>";
		};
		$('#testScreen').append($html);
	});
*/	
	
	var rssurl = "http://www.nu.nl/feeds/rss/algemeen.rss";
	$.when($.ajax(rssurl)).then(function(data,textStatus, jqXHR){
		var feed = HZ.processRss(data);
		var $html = HZ.showRss(feed);
		//$html = "Test: Function started";
		$('#testScreen').append($html);		
	});

	
	
	
/*
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
*/
	
});
