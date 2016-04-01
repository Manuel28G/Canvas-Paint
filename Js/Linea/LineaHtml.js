function Linea(X,Y,rgb){
ctx=context;

		ctx.lineWidth=2;
		ctx.beginPath();
		ctx.moveTo(Y.x,Y.y);//primer punto de la linea
		ctx.lineTo(X.x,X.y); //segundo punto de la linea
		ctx.strokeStyle=rgb;
		ctx.stroke();
	}
	