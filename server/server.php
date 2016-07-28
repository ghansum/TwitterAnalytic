<?php

	require_once('TwitterAPIExchange.php');

	$url = $_GET["url"];
	$screen_name = $_GET["screen_name"];

	$settings = array(
	    'oauth_access_token' => "758731115079151621-HCAA6GWtjFpaFV5S0m3rBD5nAQcvNeq",
	    'oauth_access_token_secret' => "0upOsLJForHHhRfFvnKW5B8KPYORj98KCy9phmQjzPtxq",
	    'consumer_key' => "8zbHU2hLMRwebaiSWb6Lv1bj1",
	    'consumer_secret' => "XUEFNgAuwvkYZYMRT2emoGXXFY2ayPCXS7oyXEcIOJL3zoHcFe"
	);

	if ($url == 'info')
		$url = 'https://api.twitter.com/1.1/users/show.json';
	else
		$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

	$getfield = 'count=1000&screen_name='.$screen_name;
	$requestMethod = 'GET';

	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	    ->buildOauth($url, $requestMethod)
	    ->performRequest();