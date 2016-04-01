function RectanguloMejorado(p1,p2,p3,rgb,it){
ctx=context;
    ctx.beginPath();
	console.log("pa");
	console.log(p1);
	console.log(p2);
	console.log(p3);
	console.log(it);

	
  switch(it)
  {
	  case 1:    ctx.moveTo(p1.x, p1.y); //primer punto marcado fijo
	             ctx.lineTo(p2.x, p1.y); //punto dictado en el mismo eje del primer click y a la altura  
				 break;
	  
	  case 2: ctx.moveTo(p1.x, p1.y); //Aqui va el ultimo punto realizado
	         ctx.lineTo(p2.x,p1.y);
			ctx.lineTo(p2.x, p3.y);
			 ctx.lineTo(p1.x,p3.y);
			 ctx.lineTo(p1.x,p1.y);
			
				
			 //trazamos desde el punto aterior hasta el punto bajo el cursor
			  
			  
			   //aqui calculariamos la recta superior del rectangulo y retornamos al punto de origen
			   break;

  }

	
    ctx.strokeStyle = rgb;
	ctx.stroke();
	
	}
	//it es el numero de la iteracion esto con el fin de limitar al usuario en cada iteracion en movimientos verticales y horizontales
	function RectanguloPropio(p1,p2,rgb,it){
		
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
	console.log("i:"+it); 
	console.log(p1);
	console.log(p2);
	switch(it){
		
		
		case 1: //if(dx>dy)
				  dibujar(ctx,dy,dx,y,x,0,stepx,rgb,p2.x,false);
			/*	else
				  dibujar(ctx,dx,dy,x,y,stepx,0,rgb,p2.y,true);*/break;
		case 2:if(dx>dy)
				  dibujar(ctx,dy,dx,y,x,stepy,0,rgb,p2.x,false);
			    else
				  dibujar(ctx,dx,dy,x,y,0,stepy,rgb,p2.y,true); break;
		case 3:if(dx>dy)
				  dibujar(ctx,dy,dx,y,x,stepy,stepx,rgb,p2.x,false);
			    else
				  dibujar(ctx,dx,dy,x,y,stepx,stepy,rgb,p2.y,true); break;
				  
		case 4:if(dx>dy)
				  dibujar(ctx,dy,dx,y,x,stepy,stepx,rgb,p2.x,false);
			    else
				  dibujar(ctx,dx,dy,x,y,stepx,stepy,rgb,p2.y,true); break;
		
	}
	
     
	
	}