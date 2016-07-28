<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8">
    <title>Twitter Dataviz</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <meta name="viewport" content="width=device-width, minimum-scale=1.0">
    <!-- styles -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
  </head>
  
  <body>
 
    <div class="fixed-div">
        <div class="col-md-12 text-center">
          <img src="media/Twitter_logo.png" height="50px">
        </div>
        <div class="form-group">
          <input type="screen_name" class="form-control input-lg" id="screen_name" placeholder="Twitter user Name">
        </div>

        <button class="btn btn-lg btn-block" id="submit-btn" >Get Data</button>
    </div>

    <div class="container main-container">
      <div class="row">
        <div class="col-md-10 col-md-offset-2 text-center hidden" id="user-info" style="min-height: 150px;">
          <img id="user-img" src="media/Twitter_logo.png" height="60px" class="img-circle" alt="user">
          <h3>FOLOWERS : <span id="followers"></span></h3>
          <h3>TWEETS : <span id="status"></span></h3>
        </div>
      </div>



      <div class="row">
        <div class="col-md-10 col-md-offset-2">
          <div id="tweets-per-month" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 col-md-offset-2">
          <div id="tweets-per-day" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 col-md-offset-2">
          <div id="tweets-per-hour" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 col-md-offset-2">
          <div id="devises" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
        </div>
        <div class="col-md-5">
          <div id="media" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
        </div>
      </div>
      <div class="row"></div>
    </div>

  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="https://code.highcharts.com/modules/exporting.js"></script>
  <script src="js/data.json"></script>
  <script src="js/theme.js"></script>
  <script src="js/index.js"></script>  
  </body>
</html>
