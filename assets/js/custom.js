(function() {

	$(document).ready(function() {

		function GalloScene(idEl,itemEl,speed,initialScale) {

			// init controller
			var controller = new ScrollMagic.Controller();

			// create a scene
			var optionScene = {
				triggerElement: idEl
			    ,reverse : false
			    //,duration: 100
			};
			var scene = new ScrollMagic.Scene(optionScene)
			  // trigger a TweenMax.to tween
			 //.setTween(".service-item", 0.5, {opacity: 1, immediateRender: false, scale: 1})
			 .setTween(TweenMax.fromTo(itemEl, speed,
						{opacity: 0,scale : initialScale},
						{opacity: 1,scale :1}))
			  // add indicators (requires plugin)
			 //.addIndicators({name: "Service indicators - "})
			  // assign the scene to the controller
			 .addTo(controller);

		}


		document.onreadystatechange = function () {

	        var state = document.readyState
            if (state == 'complete') {

			setTimeout(function() {

				document.getElementById('interactive');
                document.getElementById('load').style.opacity = 1;
                document.getElementById('load').style.visibility = "hidden";
                GalloScene("#services",".service-item",0.5,0.8);
                GalloScene("#team",".team-item",0.8,0.2);

				},1000);
			}

		}

	});

})();