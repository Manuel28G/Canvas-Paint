function RectanguloHtml(pStart,pEnd,rgb){
	ctx=context;
	ctx.lineWidth=2;
	ctx.strokeRect(pStart.x,pStart.y,pEnd.x,pEnd.y);
	ctx.strokeStyle=rgb;
}