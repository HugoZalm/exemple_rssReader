$(function(){
	
	var rssurl_algemeen = "http://www.nu.nl/feeds/rss/algemeen.rss";
	var rssurl_sport = "http://www.nu.nl/feeds/rss/sport.rss";
	var rssurl_economie = "http://www.nu.nl/feeds/rss/economie.rss";
	var rssurl_internet = "http://www.nu.nl/feeds/rss/internet.rss";
	var rssurl_achterklap = "http://www.nu.nl/feeds/rss/achterklap.rss";

	//** ScreenLayout
	$('#buttons').append(HZ.makeButton('globe','Algemeen'));
	$('#Algemeen').click(function(){ changeRss(rssurl_algemeen); });
	$('#buttons').append(HZ.makeButton('layers','Sport'));
	$('#Sport').click(function(){ changeRss(rssurl_sport); });
	$('#buttons').append(HZ.makeButton('services','Economie'));
	$('#Economie').click(function(){ changeRss(rssurl_economie); });
	$('#buttons').append(HZ.makeButton('support','Internet'));
	$('#Internet').click(function(){ changeRss(rssurl_internet); });
	$('#buttons').append(HZ.makeButton('compass','Achterklap'));
	$('#Achterklap').click(function(){ changeRss(rssurl_achterklap); });
	
	//** Content
	makeContent(rssurl_algemeen);
	
});	

function makeContent(rssurl) {
	$.when($.ajax(rssurl)).then(function(data){
		var feed = HZ.processRss(data);
		var $html = HZ.showRss(feed);
		$('#content').append($html);
	});
}
	
function changeRss(newrssurl){
	$('#content').empty();
	makeContent(newrssurl);
}
