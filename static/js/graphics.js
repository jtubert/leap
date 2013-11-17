//http://paperjs.org/
var graphicsArr = new Array();
var volumeText;
var statusText;
var xMargin = 5;
var yMargin = 20;
var gRadius = 150;
var dtr = Math.PI/180;	
var xOffset = 200;
var yOffset = 200;


var Graphics = {
	init: function() {		
		var canvas = document.getElementById('graphics');		
		paper.setup(canvas);
		xOffset = window.innerWidth/3;

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
		
		var a = x*Math.floor(360/6);
		
		var angle = (a*dtr);
		var x = (gRadius*Math.cos(angle));
		var y = (gRadius*Math.sin(angle));
		

		/*
		graphicsArr[id] = new paper.Path.Circle({
			center: [x*200, y+200],
			radius: 25
		});
		*/


		graphicsArr[id] = new paper.Path.Rectangle([x+xOffset, y+yOffset], [40, 40]);

		graphicsArr[id]["angle"] = a;

		graphicsArr[id]["text"] = new paper.PointText({
			point: [x+xOffset,y+yOffset],
			justification: 'left',
			fontSize: 13,
			fillColor: 'white'
		});

		graphicsArr[id]["text"].content = id;

		//graphicsArr[id].strokeColor = '#ff0000';
		graphicsArr[id].fillColor = 'blue';



		paper.view.draw();

		
		paper.view.onFrame = function(event) {			
			//graphicsArr[id].rotate(3);
			graphicsArr[id].fillColor.hue += 1;

			
			graphicsArr[id]["angle"]+=1;
			var angle = (graphicsArr[id]["angle"]*dtr);
			var x = (gRadius*Math.cos(angle));
			var y = (gRadius*Math.sin(angle));

			graphicsArr[id].position = [x+xOffset,y+yOffset];
			graphicsArr[id]["text"].position = [x+xOffset,y+yOffset+40];
		}
		
	},

	updateColor: function(id,color){		
		if(graphicsArr[id]){
			graphicsArr[id].fillColor = color;			
		}		
	},

	updateScale: function(id,scale){		
		if(graphicsArr[id]){
			graphicsArr[id].scale(scale);			
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


