//http://www.createjs.com/#!/EaselJS

var stage = new createjs.Stage("graphics");
var circle = new createjs.Shape();

var Graphics = {
	init: function() {
		this.drawCircle();
	},

	drawCircle: function(){
		
		circle.graphics.beginFill("red").drawCircle(0, 0, 50);
		circle.x = 100;
		circle.y = 100;
		stage.addChild(circle);

		stage.update();
	},

	updateCircle: function(y){
		stage.removeChild(circle);
		
		circle = new createjs.Shape();
		circle.graphics.beginFill("red").drawCircle(0, 0, y);
		circle.x = 100;
		circle.y = y;
		stage.addChild(circle);


		circle.alpha = y/100;

		stage.update();
	}
}

Graphics.init();


