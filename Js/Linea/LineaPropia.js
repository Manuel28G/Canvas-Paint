function setPixel(ctx, x,y, rgb)
{

    ctx.fillStyle = rgb;
    ctx.fillRect( x, y,2, 2 );
}

 
function PuntoMedioLinea(p1,p2,rgb){
	ctx=context;
	dx=p2.x-p1.x;
	dy=p2.y-p1.y;
	 if (dy < 0) { 
		dy = -dy; 
		stepy = -1; 
	  	} 
     else
    	stepy = 1;
		
	  if (dx < 0) {  
   	   	  dx = -dx;
		  stepx = -1; 
 		    } 
	  else 
 		   stepx = 1;
	   
    x=p1.x;
	y=p1.y;
	if(dx>dy)
	  dibujar(ctx,dy,dx,y,x,stepy,stepx,rgb,p2.x,false);
	else
	  dibujar(ctx,dx,dy,x,y,stepx,stepy,rgb,p2.y,true);
}

function dibujar(ctx,d1,d2,p1,p2,step1,step2,rgb,x1,Positivo){
	
	 p = 2*d1 - d2;
    incE = 2*d1;
    incNE = 2*(d1-d2);
    while (p2 != x1){
		  p2 = p2 + step2;
		  if (p < 0){
			p = p + incE;
		  }
		  else {
			p1 = p1 + step1;
			p = p + incNE;
		  }
		  if(Positivo)
		    setPixel(ctx,p1,p2,rgb);
		  else
		     setPixel(ctx,p2,p1,rgb);
     }
}