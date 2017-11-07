
$('.glyphicon-info-sign').each(function() {
    $(this).qtip({
        content: {
            text: function(event, api) {
                $.ajax({
                    url: $(this).attr('data-wikki'), // URL to the JSON file
                    type: 'GET', // POST or GET
                    dataType: 'json', // Tell it we're retrieving JSON
                    data: {
                        id: $(this).attr('id') // Pass through the ID of the current element matched by '.selector'
                    }
                })
                .then(function (msg) {
                    var obj = msg.query.pages;
                    var ob = Object.keys(obj)[0];
                    var content =  obj[ob]["extract"] + ' Source: <strong>Wikipedia</strong>';

                    api.set('content.text', content);
                }, function(xhr, status, error) {
                    // Upon failure... set the tooltip content to the status and error value
                    api.set('content.text', status + ': ' + error);
                });

                return 'Loading...'; // Set some initial loading text
            }
        },
        position: {
            my: 'bottom right',
            at: 'top left'
        },
        style: { classes: 'qtip-tipped'
        },hide:{ //moved hide to here,
        delay:500, //give a small delay to allow the user to mouse over it.
        fixed:true
      }
    });
});

/* +++++++++   START POPUP    ++++++++++++++++ */

    $(function() {
        //----- OPEN
        $('[data-popup-open]').on('click', function(e)  {
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
     
            e.preventDefault();
        });
     
        //----- CLOSE
        $('[data-popup-close]').on('click', function(e)  {
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
     
            e.preventDefault();
        });
    });

$(".modal").on("hidden.bs.modal", function(){
    $(".modal-body1").html("");
});

function showDetails(title, pic1, pic2, pic3, place) {
    var Title = title.getAttribute("data-title");
    $(".modal-title").html(Title);

    var Pic1 = pic1.getAttribute("data-pic1");
    $("#picture").html('<img class="img-responsive" style="float: left; max-width: 35%; margin:0 2em 2em;" src="images/'+Pic1+'.jpg" alt="">');

    var Pic2 = pic2.getAttribute("data-pic2");
    $("#picture1").html('<img class="img-responsive" style="float: right; max-width: 35%; margin:0 2em 2em;" src="images/'+Pic2+'.jpg" alt="">');

    var Pic3 = pic3.getAttribute("data-pic3");
    $("#picture2").html('<img class="img-responsive" style="float: left; max-width: 35%; margin:0 2em 2em;" src="images/'+Pic3+'.jpg" alt="">');

    var Place = "";
    Place=place.getAttribute("data-place");


    if (Title =="Utah"){
        $("#title").html('Arches');
        $("#parkDescr").html('Visit Arches to discover a landscape of contrasting colors, land forms and textures unlike any other in the world. The park has over 2,000 natural stone arches, in addition to hundreds of soaring pinnacles, massive fins and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.'); 
        $("#parkDir").html('A red-rock wonderland');
        $("#title1").html('Bryce Canyon');
        $("#parkDescr1").html('There is no place like Bryce Canyon. Hoodoos (odd-shaped pillars of rock left standing from the forces of erosion) can be found on every continent, but here is the largest collection of hoodoos in the world! Descriptions fail. Photographs do not do it justice. Bring your sense of wonder and imagination when visiting Bryce Canyon National Park.'); 
        $("#parkDir1").html('A forest of stone');
        $("#title2").html('Zion');
        $("#parkDescr2").html('Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.'); 
        $("#parkDir2").html("Utah's First National Park");
    } else if(Title =="Arizona"){
        $("#title").html('Grand Canyon');
        $("#parkDescr").html('Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size The South Rim is open all year. '); 
        $("#parkDir").html('');
        $("#title1").html('Petrified Forest');
        $("#parkDescr1").html("Did you know that Petrified Forest is more spectacular than ever? While the park has all the wonders known for a century, there are many new adventures and discoveries to share. There are backcountry hikes into areas never open before such as Red Basin and little known areas like the Martha's Butte. There are new exhibits that bring the stories to life. Come rediscover Petrified Forest!"); 
        $("#parkDir1").html('A Place for Discovery');
        $("#title2").html('Glen Canyon');
        $("#parkDescr2").html('Encompassing over 1.25 million acres, Glen Canyon National Recreation Area offers unparalleled opportunities for water-based & backcountry recreation. The recreation area stretches for hundreds of miles from Lees Ferry in Arizona to the Orange Cliffs of southern Utah, encompassing scenic vistas, geologic wonders, and a vast panorama of human history.'); 
        $("#parkDir2").html("Lake Powell and so much more!");

    } else if(Title =="Highway 1 - the PCH"){
        $("#title").html('Channel Islands');
        $("#parkDescr").html('Channel Islands National Park encompasses five remarkable islands and their ocean environment, preserving and protecting a wealth of natural and cultural resources. Isolation over thousands of years has created unique animals, plants, and archeological resources found nowhere else on Earth and helped preserve a place where visitors can experience coastal southern California as it once was. '); 
        $("#parkDir").html('Close to the California Mainland...Yet Worlds Apart');
        $("#title1").html('Presidio and Golden Gate');
        $("#parkDescr1").html("For 218 years, the Presidio served as an army post for three nations. World and local events, from military campaigns to World Fairs and earthquakes, left their mark. Come enjoy the history and the natural beauty of the Presidio. Explore centuries of architecture. Reflect in a national cemetery. Walk along an historic airfield, through forests or to beaches, and admire spectacular vistas."); 
        $("#parkDir1").html('Experience a Diversity of Natural and Cultural History');
        $("#title2").html('Point Reyes');
        $("#parkDescr2").html('From its thunderous ocean breakers crashing against rocky headlands and expansive sand beaches to its open grasslands, brushy hillsides, and forested ridges, Point Reyes offers visitors over 1500 species of plants and animals to discover. Home to several cultures over thousands of years, the Seashore preserves a tapestry of stories and interactions of people. Point Reyes awaits your exploration.'); 
        $("#parkDir2").html("A Natural Sanctuary, A Human Haven");

        
    } else if(Title =="Wyoming and Montana"){
        $("#title").html('Grand Teton');
        $("#parkDescr").html('Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River or enjoy the serenity of this remarkable place.'); 
        $("#parkDir").html('Mountains of the Imagination');
        $("#title1").html('Bighorn Canyon');
        $("#parkDescr1").html('The vast, wild landscape of Bighorn Canyon National Recreation Area offers visitors unparalleled opportunities to immerse themselves in the natural world, and experience the wonders of this extraordinary place. With over 120,000 acres, one can find an astounding diversity in ecosystems, wildlife, and more than 10,000 years of human history to explore.'); 
        $("#parkDir1").html("Spectacular Views, Endless Opportunity");
        $("#title2").html('Yellowstone');
        $("#parkDescr2").html("Visit Yellowstone and experience the world's first national park. Marvel at a volcano’s hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures “for the benefit and enjoyment of the people."); 
        $("#parkDir2").html('Marvel. Explore. Discover.');
        
    } else if(Title =="South Dakota"){
        $("#title").html('Badlands');
        $("#parkDescr").html('The rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world’s richest fossil beds. Ancient mammals such as the rhino, horse, and saber-toothed cat once roamed here. The park’s 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today. '); 
        $("#parkDir").html('Good Times in the Badlands');
        $("#title1").html('Mount Rushmore');
        $("#parkDescr1").html("Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincoln, surrounded by the beauty of the Black Hills of South Dakota, tell the story of the birth, growth, development and preservation of this country. From the history of the first inhabitants to the diversity of America today, Mount Rushmore brings visitors face to face with the rich heritage we all share."); 
        $("#parkDir1").html('American History, Alive in Stone...');
        $("#title2").html('Wind Cave');
        $("#parkDescr2").html("Bison, elk, and other wildlife roam the rolling prairie grasslands and forested hillsides of one of America's oldest national parks. Below the remnant island of intact prairie sits Wind Cave, one of the longest and most complex caves in the world. Named for barometric winds at its entrance, this maze of passages is home to boxwork, a unique formation rarely found elsewhere."); 
        $("#parkDir2").html("A hidden world beneath the prairie");
        
    } else if(Title =="Eastern California"){
        $("#title").html('Sequoia and Kings Canyon');
        $("#parkDescr").html("This dramatic landscape testifies to nature's size, beauty, and diversity--huge mountains, rugged foothills, deep canyons, vast caverns, and the world's largest trees. These two parks lie side by side in the southern Sierra Nevada east of the San Joaquin Valley. Weather varies a lot by season and elevation, which ranges from 1,370' to 14,494'. "); 
        $("#parkDir").html('A Land of Giants');
        $("#title1").html('Death Valley');
        $("#parkDescr1").html('In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life survives in Death Valley.'); 
        $("#parkDir1").html('Hottest, Driest, and Lowest National Park');
        $("#title2").html('Yosemite');
        $("#parkDescr2").html('Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra.  First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.'); 
        $("#parkDir2").html("");
        
    } else if(Title =="Pennsylvania"){
        $("#title").html('Gettysburg');
        $("#parkDescr").html("The Battle of Gettysburg was a turning point in the Civil War, the Union victory that ended General Robert E. Lee's second and most ambitious invasion of the North. Often referred to as the 'High Water Mark of the Rebellion', Gettysburg was the Civil War's bloodiest battle and was also the inspiration for President Abraham Lincoln's immortal 'Gettysburg Address'."); 
        $("#parkDir").html('A New Birth of Freedom');
        $("#title1").html('Independence Hall');
        $("#parkDescr1").html("Goods, ideas, and people intermingled in early Philadelphia.  In this diverse city, a new republic was born.  The Declaration of Independence and U.S. Constitution were both debated and signed inside Independence Hall.  Nearby sits the Liberty Bell, an international symbol of liberty."); 
        $("#parkDir1").html('"We hold these Truths to be self-evident, that all Men are created equal..."');
        $("#title2").html('Valley Forge');
        $("#parkDescr2").html('Valley Forge was the site of the 1777-78 winter encampment of the Continental Army. The park commemorates the sacrifices and perseverance of the Revolutionary War generation and honors the ability of citizens to pull together and overcome adversity during extraordinary times!'); 
        $("#parkDir2").html("Determined to Persevere");
        
    }
}
$('a[data-coords]').each(function() {
    var elem = $(this);

    elem.qtip({
        content: {
            text: 'Loading map...',
            title: { button: true }
        },
        position: {
            my: 'top center',
            at: 'bottom center'
        },
        show: {
            event: 'click'
        },
        hide: {
            event: 'unfocus'
        },
        style: {
            classes: 'googlemap qtip-tipped',
            width: 300
        },
        events: {
            render : function(event, api) {
                var tooltip = $(this),

                // Setup the map container and append it to the tooltip
                container = $('<div style="width:300px; height:200px;"></div>')
                    .appendTo(api.elements.content.empty());

                // Temporarily show the tooltip so we don't get rendering bugs in GMaps
                tooltip.show();

                // Create map object as api attribute for later use
                api.map = new google.maps.Map(container[0], {
                    zoom: 8, // Close zoom!
                    mapTypeId: google.maps.MapTypeId.ROADMAP // Use the classic roadmap
                });

                // Hide the tooltip again now we're done
                tooltip.hide();
            },
            show: function(event, api) {
                // Grab the map reference and target
                var map = api.map,
                    target = api.elements.target,
                    coords, latlong, map, marker, info;

                // Parse coordinates of event target
                coords = api.elements.target.data('coords').split(',');

                // Setup lat/long coordinates
                latlong = new google.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1]));

                // Create marker at the new location and center map there
                marker = new google.maps.Marker({
                    position: latlong,
                    map: map,
                    title: target.attr('alt') // Use the alt attribute of the target for the marker title
                });
                map.setCenter(latlong);
            }
        }
    });
});

//https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=FuMERaI4chmBpTUdUojnNC3JhhNtUvFdU7zWD8FC
/*

Visit Yellowstone and experience the world's first national park. Marvel at a volcano's hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures 'for the benefit and enjoyment of the people.

Yellowstone National Park covers nearly 3,500 square miles in the northwest corner of Wyoming (3% of the park is in Montana and 1% is in Idaho). Yellowstone has five entrance stations, and several are closed to regular vehicles during winter. It takes many hours to drive between these entrances, so be sure to check the status of roads at the entrance you intend to use while planning your trip and before you arrive.


        document.getElementById('title').innerHTML ='Arches';
        document.getElementById('parkDescr').innerHTML ='Visit Arches to discover a landscape of contrasting colors, land forms and textures unlike any other in the world. The park has over 2,000 natural stone arches, in addition to hundreds of soaring pinnacles, massive fins and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.';
        document.getElementById('parkDir').innerHTML ='<b>Tag Line: </b> A red-rock wonderland';

        */


    // Modal Content
    /*
    $.ajax({
        url: "https://developer.nps.gov/api/v1/parks?parkCode="+Place,
        dataType: 'json',
        headers: {
        "Authorization": "FuMERaI4chmBpTUdUojnNC3JhhNtUvFdU7zWD8FC"
        },
        success: function(result){
          $("#title").html(result.data[0].fullName);
          $("#parkDescr").html(result.data[0].description);
          $("#parkDir").html('<b>Address: </b> '+result.data[0].directionsInfo);
          $("#title1").html(result.data[1].fullName);
          $("#parkDescr1").html(result.data[1].description);
          $("#parkDir1").html('<b>Address: </b> '+result.data[1].directionsInfo);
          $("#title2").html(result.data[2].fullName);
          $("#parkDescr2").html(result.data[2].description);
          $("#parkDir2").html('<b>Address: </b> '+result.data[2].directionsInfo);
          
        }       
    });*/

