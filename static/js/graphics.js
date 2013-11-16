//http://paperjs.org/
var graphicsArr = new Array();
var volumeText;
var statusText;
var xMargin = 5;
var yMargin = 20;


var Graphics = {
	init: function() {		
		var canvas = document.getElementById('graphics');		
		paper.setup(canvas);

		this.createText();		
	},

	createText: function(){
		statusText = new paper.PointText({
			point: [xMargin,yMargin],
			justification: 'left',
			fontSize: 13,
			fillColor: 'white'
		});
		statusText.content = "Hands: 0, Pointables: 0";

		volumeText = new paper.PointText({
			point: [xMargin,35],
			justification: 'left',
			fontSize: 13,
			fillColor: 'white'
		});
		volumeText.content = "Volume: 0";

		
	},

	updateVolume: function(txt){
		volumeText.content = txt;
	},

	updateStatus: function(txt){
		statusText.content = txt;
	},

	createShape: function(id,x){
		/*
		graphicsArr[id] = new paper.Path.Circle({
			center: [x*100, 50],
			radius: 35
		});
		*/

		graphicsArr[id] = new paper.Path.Rectangle([(x*100)+xMargin, 50], [90, 90]);

		graphicsArr[id]["text"] = new paper.PointText({
			point: [(x*100)+xMargin,170],
			justification: 'left',
			fontSize: 13,
			fillColor: 'white'
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


