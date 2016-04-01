 function ElipsePropia(x1,y1,Cateto,he,Color){
	context.fillStyle = Color;
	a=Cateto/2;
	b=he/2;
	a2=Math.pow(a,2);
	b2=Math.pow(b,2);
	x= 0; 
	y= b; 
	d1 = b2 + a2 * (-b +1/4); 
	console.log(x+","+y);
	context.fillRect( x1+x, y1+y, 1, 1 );
	context.fillRect( x1+x, y1-y, 1, 1 );
	context.fillRect( x1-x, y1+y, 1, 1 );
	context.fillRect( x1-x, y1-y, 1, 1 );
	
	while (a2 * (y-1/2)>b2 * (x+1)) {
		if (d1 < 0){  
			d1 = d1 + b2 * (2*x + 3); 
			}
		else{
			d1= d1 + b2*(2*x+3) + a2*(-2*y+2) ;
			y = y - 1 ;
		}
		x= x + 1;
		console.log(x+","+y); 
			context.fillRect( x1+x, y1+y, 1, 1 );
			context.fillRect( x1+x, y1-y, 1, 1 );
			context.fillRect( x1-x, y1+y, 1, 1 );
			context.fillRect( x1-x, y1-y, 1, 1 );
	}
	d2 = b2 * Math.pow((x+1/2), 2) + a2 * Math.pow((y-1),2) - (a2*b2);
	// Región 2
	while (y>0){ 
		if (d2 < 0){ 
			d2 = d2 + b2*(2*x+2) + a2*(-2*y+3);
			x= x + 1;
		}
		else{
			d2 = d2 + a2 * (-2*y + 3) ;
		}
		y = y - 1 ;
		console.log(x+","+y); 
		context.fillRect( x1+x, y1+y, 1, 1 );
		context.fillRect( x1+x, y1-y, 1, 1 );
		context.fillRect( x1-x, y1+y, 1, 1 );
		context.fillRect( x1-x, y1-y, 1, 1 );
	}
	 
 }
 
 
 function ElipseHTML5(centerX,centerY,Cateto,he,Color){
	width=Cateto;
	height=he;
	context.beginPath();
  
	context.moveTo(centerX, centerY - height/2); 
  
  context.bezierCurveTo(
    centerX + width/2, centerY - height/2, 
    centerX + width/2, centerY + height/2, 
    centerX, centerY + height/2); 

  context.bezierCurveTo(
    centerX - width/2, centerY + height/2, 
    centerX - width/2, centerY - height/2, 
    centerX, centerY - height/2); 
	context.strokeStyle =Color;
	context.stroke();
	context.closePath();
 }
 