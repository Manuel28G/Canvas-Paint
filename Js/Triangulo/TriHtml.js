   function TrianguloHtml(p1,p2,rgb){
	 ctx=context;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y); //primer punto marcado fijo
	ctx.lineTo(p2.x+(p2.x-p1.x), p1.y); //punto dictado en el mismo eje del primer click y a la altura  
    ctx.lineTo(p2.x,p2.y);  //punto "debajo" del cursor el cual determinara el tipo y tamaño del triangulo
    ctx.lineTo(p1.x, p1.y);  //recta que regresa nuevamente al punto del primer click 
    ctx.strokeStyle=rgb;
	ctx.stroke();}
	
	
	function TrianguloMejorado(p1,p2,rgb){
    ctx=context;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y); //primer punto marcado fijo
	//ctx.lineTo(p3.x, p3.y); //punto dictado en el mismo eje del primer click y a la altura  
    ctx.lineTo(p2.x,p2.y);  //punto "debajo" del cursor el cual determinara el tipo y tamaño del triangulo
    ctx.lineTo(p1.x, p1.y);  //recta que regresa nuevamente al punto del primer click 
    ctx.strokeStyle=rgb;
	ctx.stroke();
	}