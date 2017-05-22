(function() {

	$(document).ready(function() {

		function ServiceScene() {

			// init controller
			var controller = new ScrollMagic.Controller();

			// create a scene
			var optionScene = {
				triggerElement: "#services"
			    ,reverse : false
			    //,duration: 100
			};
			var scene = new ScrollMagic.Scene(optionScene)
			  // trigger a TweenMax.to tween
			 //.setTween(".service-item", 0.5, {opacity: 1, immediateRender: false, scale: 1})
			 .setTween(TweenMax.fromTo([".service-item"], 0.5,
						{opacity: 0,scale :0.8},
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
                ServiceScene();

				},1000);
			}

		}

	});

})();