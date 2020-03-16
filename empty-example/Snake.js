function Snake (){
	this.x = 60;
	this.y = 60;
	this.xspeed = 1;
	this.yspeed = 0;

	this.dir = function(x,y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	this.update = function() {
		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;
		
		this.x = constrain(this.x , 0 , width - scl);
		this.y = constrain(this.y , 0 , height - scl);
		
		
		if(this.x == 0 || this.y == 0 || this.x == width - scl || this.y == height - scl){
		alert("perdiste pa");
		}
		
	}

	this.show = function() {
		fill(255);
		rect(this.x, this.y, scl, scl); 
	}

	

}