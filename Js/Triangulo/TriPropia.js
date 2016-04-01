function TrianguloLinea(p1,p2,rgb){
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
