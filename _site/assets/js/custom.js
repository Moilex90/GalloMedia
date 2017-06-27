(function() {

	$(document).ready(function() {

	  function GalloScene(rootId,itemEl,speed,initialScale) {

	    // init controller
		var controller = new ScrollMagic.Controller();
		var GalloTweens = [];
		var incDelay = 0;

		GalloTweens.push(TweenMax.fromTo(itemEl.rootClass, speed, {opacity: 0}, {opacity: 1}));
		itemEl.elements.forEach(function(element, index, array) {

		    //console.log(element);
		    if(index === 0) {

			GalloTweens.push(TweenMax.fromTo(element, speed,
				{opacity: 0, scale : initialScale},{opacity: 1,scale :1}));

		    } else {

			GalloTweens.push(TweenMax.fromTo(element, speed,
				{opacity: 0,scale : initialScale},{opacity: 1,scale : 1, delay: incDelay}));

		    }

		    incDelay += 0.25;

		});

		/*var testTweenStatic = [
		        TweenMax.fromTo(itemEl.root, speed, {opacity: 0}, {opacity: 1}),
		        TweenMax.fromTo(itemEl.elements[0], speed,
		            {opacity: 0, scale : initialScale}, {opacity: 1, scale :1}),
		        TweenMax.fromTo(itemEl.elements[1], speed,
					{opacity: 0, scale : initialScale}, {opacity: 1, scale :1, delay: 0.25}),
		        TweenMax.fromTo(itemEl.elements[2], speed,
		            {opacity: 0, scale : initialScale}, {opacity: 1, scale : 1, delay: 0.5}),
		        TweenMax.fromTo(itemEl.elements[3], speed,
		            {opacity: 0,scale : initialScale}, {opacity: 1,scale :1, delay: 0.75})
		];*/

		 // build tween
		 var animate = new TimelineMax().add(GalloTweens);
		 // create a scene
		 var optionScene = {
            triggerElement: rootId,reverse : false
            //,duration: 100
         };
         var scene = new ScrollMagic.Scene(optionScene)
         // trigger a TweenMax.to tween
         .setTween(animate)
		  // add indicators (requires plugin)
		 //.addIndicators({name: "Service indicators - "})
	 	// assign the scene to the controller
	 	 .addTo(controller);

	}

		document.onreadystatechange = function () {

	        var state = document.readyState
            if (state == 'complete') {

			setTimeout(function() {

                    var elServices = {
                        rootId : "#services",
                        rootClass : ".service-item",
                        elements : [".service-item-1",".service-item-2",".service-item-3",".service-item-4"]
                    };

                    var elTeam = {
                        rootId : "#team",
                        rootClass : ".team-item",
                        elements : [".team-item-1",".team-item-2",".team-item-3",".team-item-4"]
                    };

                    var elGallo = [{gl :elServices}, {gl :elTeam}];
                    document.getElementById('interactive');
                    document.getElementById('load').style.opacity = 1;
                    document.getElementById('load').style.visibility = "hidden";

                    elGallo.forEach(function(element, index, array) {

                        $(element.gl.rootId).each(function(index,value) {

                           GalloScene(element.gl.rootId,element.gl,0.5,0.8);

                        });

                    });

				},1000);
			}

		}

	});

})();