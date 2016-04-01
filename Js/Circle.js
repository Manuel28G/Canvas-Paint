	function ReturnRadius(x1,x2,y1,y2){
		d=Math.sqrt( Math.pow((x2-=x1),2) + Math.pow((y2-=y1),2) );
		r=d/2;
		return r;
	}
	function ReturnCenter(x1,x2,y1,y2){
		Xnueva=(x1 + x2) /2; 
		Ynueva=(y1 + y2)/2; 
		return [Xnueva,Ynueva];
	}
	function DrawHTML5Circle(centerX,centerY,radius,color){
		context.beginPath();
		context.globalCompositeOperation="source-over";
		console.log("x="+centerX+" y="+centerY+" rad="+radius);
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
		context.closePath();
		context.strokeStyle = color;
		context.stroke();
		
	}

	function DrawCircleMediumPoint(x1,y1,r,color){
		x=0;
		y=r;
		context.globalCompositeOperation="source-over";
		context.fillStyle = color;
		p=1-r;
		context.fillRect( x1+x, y1+y, 1, 1 );
		context.fillRect( x1+x, y1-y, 1, 1 );
		context.fillRect( x1-x, y1+y, 1, 1 );
		context.fillRect( x1-x, y1-y, 1, 1 );
		context.fillRect( x1+y, y1+x, 1, 1 );
		context.fillRect( x1+y, y1-x, 1, 1 );
		context.fillRect( x1-y, y1+x, 1, 1 );
		context.fillRect( x1-y, y1-x, 1, 1 );
		while (x<y){
			if(p<0){
				p=p+2*x+1;
			}
			else{
				y=y-1;
				p=p+2*(x-y)+1;
			}
			x=x+1;
			context.fillRect( x1+x, y1+y, 1, 1 );
			context.fillRect( x1+x, y1-y, 1, 1 );
			context.fillRect( x1-x, y1+y, 1, 1 );
			context.fillRect( x1-x, y1-y, 1, 1 );
			context.fillRect( x1+y, y1+x, 1, 1 );
			context.fillRect( x1+y, y1-x, 1, 1 );
			context.fillRect( x1-y, y1+x, 1, 1 );
			context.fillRect( x1-y, y1-x, 1, 1 );
		}
	}