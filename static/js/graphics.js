//http://paperjs.org/
var graphicsArr = new Array();



var Graphics = {
	init: function() {		
		var canvas = document.getElementById('graphics');		
		paper.setup(canvas);		
	},

	createShape: function(id,x){
		/*
		graphicsArr[id] = new paper.Path.Circle({
			center: [x*100, 50],
			radius: 35
		});
		*/

		graphicsArr[id] = new paper.Path.Rectangle([x*100, 20], [90, 90]);

		graphicsArr[id]["text"] = new paper.PointText({
			point: [x*100,150],
			justification: 'left',
			fontSize: 13,
			fillColor: 'black'
		});

		graphicsArr[id]["text"] .content = id;

		//graphicsArr[id].strokeColor = '#ff0000';
		graphicsArr[id].fillColor = 'blue';



		paper.view.draw();

		
		paper.view.onFrame = function(event) {			
			//graphicsArr[id].rotate(3);
			//graphicsArr[id].fillColor.hue += 1;
		}
		
	},

	updateColor: function(id,color){		
		if(graphicsArr[id]){
			graphicsArr[id].fillColor = color;			
		}		
	},

	resizeAll: function(scale){
		for (var id in graphicsArr) {
			//graphicsArr[id].fillColor.hue = scale;
			graphicsArr[id].fillColor.alpha = scale/100;			
		};		
	}
}

Graphics.init();


