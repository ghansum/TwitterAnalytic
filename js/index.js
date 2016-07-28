$(function () {

    // function to trigger request & parseJSON
    function getRequest(url, callback) {
        $.get(url, function(data) {
            data = $.parseJSON(data);
            callback(data);
        });
    }

    var tweets_month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // months
    var tweets_day = [0, 0, 0, 0, 0, 0, 0]; // days
    var tweets_hour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // hours
    var devises = [['IOS', 0], ['Android', 0], ['Autres', 0]]; //devises
    var media = [['Avec Media', 0] ,['Sans Media', 0]]; //media

    //on submit btn
    $('#submit-btn').click(function(e) {
        var sc_name = $('#screen_name').val();

        if (sc_name != '') {
            getRequest("server/server.php?url=info&screen_name="+sc_name, function(data) {
                console.log(data);
                if (data){
                    $('#user-img').attr('src', data.profile_image_url_https);
                    $('#followers').html(data.followers_count).css('color', data.profile_text_color);
                    $('#status').html(data.statuses_count).css('color', data.profile_text_color);
                    $('#user-info').removeClass('hidden');

                    get_status(sc_name);
                }
                else {
                    alert('Twitter Screen Name No valid !');
                }
            });         
        }
        else {
            alert('Verify Twitter ID & Screen name');
        }
    });

    function get_status(sc_name) {
        getRequest("server/server.php?url=tweets&screen_name="+sc_name, function(data) {
            if (data.length > 0){
                set_data(data);
            }
            else {
                alert('No tweets !');
            }
        });
    }

    function set_data(data) {
        var data_length = data.length;
        data.forEach(function (item, index, array) {
            var day = new Date(item.created_at).getDay(); //get tweet day
            var month = new Date(item.created_at).getMonth(); //get tweet day
            var hour = new Date(item.created_at).getHours(); //get tweet day
            tweets_month[month]++; //increment tweets count
            tweets_day[day]++; //increment tweets count
            tweets_hour[hour]++; //increment tweets count
            //fill devices array
            if(item.source.includes('iPhone')) {devises[0][1]++;} 
            else if(item.source.includes('Android')) {devises[1][1]++;} else {devises[2][1]++;}
            //fill media array
            if(item.entities.media) {media[0][1]++;} else {media[1][1]++;}
            //if last loop
            if (index == data_length-1) {draw_charts();}
        });
    }

    function draw_charts() {
        // Apply the theme
        Highcharts.setOptions(Highcharts.theme);

        $('#tweets-per-month').highcharts({
            title: {
                text: 'Nombre de Tweets par mois',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: api.twitter.com',
                x: -20
            },
            xAxis: {
                categories: ['Jan','Fév','Mar','Avr','Mai','Jun', 'Jul','Aoû','Sep','Oct','Nov','Déc']
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Nombre de Tweets'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tweets',
                data: tweets_month
            }]
        });

        $('#tweets-per-day').highcharts({
            title: {
                text: 'Nombre de Tweets par jour',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: api.twitter.com',
                x: -20
            },
            xAxis: {
                categories: ['Di','Lu','Ma','Me','Je','Ve','Sa']
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Nombre de Tweets'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tweets',
                data: tweets_day
            }]
        });

        $('#tweets-per-hour').highcharts({
            title: {
                text: 'Nombre de Tweets par heure',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: api.twitter.com',
                x: -20
            },
            xAxis: {
                categories: ['0h','1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h']
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Nombre de Tweets'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tweets',
                data: tweets_hour
            }]
        });

        $('#devises').highcharts({
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45
                }
            },
            title: {
                text: 'Devises used to tweet'
            },
            subtitle: {
                text: 'Source: api.twitter.com'
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 45
                }
            },
            series: [{
                name: 'Tweets',
                data: devises
            }]
        });

        $('#media').highcharts({
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45
                }
            },
            title: {
                text: 'Tweets avec/sans Media'
            },
            subtitle: {
                text: 'Source: api.twitter.com'
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 45
                }
            },
            series: [{
                name: 'Tweets',
                data: media
            }]
        });
    }

});