<?php

	require_once('TwitterAPIExchange.php');

	$url = $_GET["url"];
	$screen_name = $_GET["screen_name"];

	$settings = array(
	    'oauth_access_token' => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	    'oauth_access_token_secret' => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	    'consumer_key' => "XXXXXXXXXXXXXXXXXXXXXX",
	    'consumer_secret' => "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
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