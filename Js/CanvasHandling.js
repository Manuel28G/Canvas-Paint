var canvas;
var dragging;
var context;
var pStart;
var pEnd;
var FigureDrawing;
var Color;
var radius;
var point;
var arrayobjects;
var arrayother;
var point2;
var array;
var cat;
var he;
var arrayPointBezier;
var pBetween;
var TrClick;
var ArrayCl=[];
var d;
var aja;
function windowToCanvasCoord(canvas, x, y)
{
  var bbox = canvas.getBoundingClientRect();
  return {
		   x: x - bbox.left * (canvas.width / bbox.width),
		y: y - bbox.top * (canvas.height / bbox.height)
  };
}
function MouseDown(e){
			var Algoritmo=GetSelectedCombo();
			var Figura=GetSelectedFigure();
			Color=GetSelectedColor();
			dragging = !dragging;   //variable initialized on false
			pStart = windowToCanvasCoord(Canvas, e.clientX, e.clientY);
			pEnd = pStart;
			if(Algoritmo=='HTML5'){
				if(Figura=='Circulo'){
					radius=0;
					FigureDrawing="CirculoHTML5";
				}
				else if(Figura=='Elipse'){
					radius=0;
					FigureDrawing="ElipseHTML5";
				}
				else if(Figura=='Bezier'){
					alert("Enunciado especifica solo curva bezier propia");
					return;
				}	else 
				if(Figura=='Linea'){
					radius=0;
					FigureDrawing="LineaHTML5";
				}
					else 
				if(Figura=='Triangulo'){
					 var u=ArrayCl.length;
					 draggin=false;
					 ArrayCl[u]=pStart;
					
					 switch(u){

						 case 1:TrianguloMejorado( ArrayCl[u-1], ArrayCl[u],Color);break;
								   
						 case 2:TrianguloMejorado(ArrayCl[u-1],ArrayCl[u],Color); TrianguloMejorado(ArrayCl[u],ArrayCl[u-2],Color);break;
						 
						 
					 }
					 if(u==2){
						 console.log("Llenando:"+ArrayCl[0]+ArrayCl[1]+ArrayCl[2]);
						 TrClick=true;
						 FigureDrawing="TrianguloHTML5";
					   
						
					     }
					 
					 }
					 
				else if(Figura=='Rectangulo'){
					radius=0;
					FigureDrawing="RectanguloHTML5";
				}
				    
				else{
					return;
				}
			}
			else if(Algoritmo=='Propio'){
				if(Figura=='Circulo'){
					radius=0;
					FigureDrawing="CirculoPropio";
				}
				else if(Figura=='Elipse'){
					radius=0;
					FigureDrawing="ElipsePropia";
				}
				else if(Figura=='Bezier'){
					kk=[];
					kk[0]=pStart.x;
					kk[1]=pStart.y;
					arrayPointBezier.push(kk);
					FigureDrawing="BezierPropia";
					if(FigureDrawing=="BezierPropia"){
						context.clearRect(0, 0, canvas.width, canvas.height);
						DrawRestObjects();
						if(arrayPointBezier.length>1){
							var b = BezierPropia(arrayPointBezier);
							arrayoo=[];
							ww=500*arrayPointBezier.length;
							for (var t = 0; t <= ww; t++){
								context.fillStyle = Color;
								context.fillRect(b(t/ww)[0], b(t/ww)[1], 1, 1 );
							}
						}
					}
				}
				else
				if(Figura=='Triangulo'){
					
					 var u=ArrayCl.length;
					 dragging=false;
					  ArrayCl[u]=pStart;
					 switch(u){

						 case 1:PuntoMedioLinea( ArrayCl[u-1], ArrayCl[u],Color);d="II";break;
								   
						 case 2:PuntoMedioLinea(ArrayCl[u-1],ArrayCl[u],Color); PuntoMedioLinea(ArrayCl[u],ArrayCl[u-2],Color);break;
						 
						 
					 }
					 if(u==2){
						 console.log("Llenando:"+ArrayCl[0]+ArrayCl[1]+ArrayCl[2]);
						 TrClick=true;
						 FigureDrawing="TrianguloPropio";
					   
						
					 }
				}
				
				else
					if(Figura=='Linea'){
						radius=0;
						FigureDrawing="LineaPropia";
					}
				else
					if(Figura=='Rectangulo'){
					 var u=ArrayCl.length;
					 //dragging=false;
					 console.log("numero de click:"+u);
					 ArrayCl[2]=pEnd;
					  FigureDrawing="RectanguloPropio";
					 if(u==3){
						 console.log("Llenando:"+ArrayCl[0]+ArrayCl[1]+ArrayCl[2]);
						 TrClick=true;
						
					   
						
					 }
				}
				else{
					return;
				}
			}
}
function MouseUp(e){
	dragging=false;
	if(FigureDrawing=="CirculoPropio" ||FigureDrawing=="CirculoHTML5"){
		arrayother=[FigureDrawing,point,radius,Color];
	}
	if(FigureDrawing=="ElipseHTML5" || FigureDrawing=="ElipsePropia"){
		arrayother=[FigureDrawing,point,cat,he,Color];
	}
	if(FigureDrawing=="LineaPropia" ||FigureDrawing=="LineaHTML5"){
		arrayother=[FigureDrawing,pStart,pEnd,Color];
	}
	if(FigureDrawing=="RectanguloHTML5"){
		arrayother=[FigureDrawing,pStart,pEnd,Color];
	}
    if(FigureDrawing=="RectanguloPropio"){
		console.log("Up");
		ArrayCl[2]=windowToCanvasCoord(Canvas, e.clientX, e.clientY);;
	   ArrayCl[2].x=pEnd.x;
	   ArrayCl[2].y=pStart.y+90;
	   	aja=windowToCanvasCoord(Canvas, e.clientX, e.clientY);;
		aja.x=pStart.x;
		aja.y=pStart.y+100;
							
						 
	 console.log(pEnd);	
	 console.log(ArrayCl[2]);	
	 console.log(pStart);	
	 console.log(aja);
	   RectanguloPropio(pEnd,ArrayCl[2],Color,2);
 
	   RectanguloPropio(aja,ArrayCl[2],Color,3);
	   RectanguloPropio(aja,pStart,Color,4);
	   
	   console.log("Llenando:"+ArrayCl[0]+ArrayCl[1]+ArrayCl[2]);
	   ArrayCl[0]=pStart;
	   ArrayCl[1]=pEnd;
	   console.log("Llenando 2:"+ArrayCl[0]+ArrayCl[1]+ArrayCl[2]);
	   TrClick=true;
	}

if((FigureDrawing=="TrianguloPropio" ||FigureDrawing=="TrianguloHTML5" || FigureDrawing=="RectanguloPropio")&& TrClick){
	console.log("Entropor aca "+TrClick);
		arrayother=[FigureDrawing,ArrayCl[0],ArrayCl[1],ArrayCl[2],Color];
		 ArrayCl=[];
		 TrClick=false;
		 
	}

	if((FigureDrawing!="BezierPropia" && FigureDrawing!="")&&(ArrayCl.length==0)){
		console.log(arrayother);
		arrayobjects.push(arrayother);
		console.log(arrayobjects);
	}
	
}
function DrawRestObjects(){
	len=arrayobjects.length;
	counter=0;
	while(counter<len){
		
		array=arrayobjects[counter];
		console.log("objeto:"+array[0]);
		if(array==undefined){
			break;
		}
		if(array[0]=="CirculoHTML5"){
			array2=array[1];
			DrawHTML5Circle(array2[0],array2[1],array[2],array[3]);
		}
		if(array[0]=="CirculoPropio"){
			array2=array[1];
			DrawCircleMediumPoint(array2[0],array2[1],array[2],array[3]);
		}
		if(array[0]=="CirculoPropio"){
			array2=array[1];
			DrawCircleMediumPoint(array2[0],array2[1],array[2],array[3]);
		}
		if(array[0]=="ElipseHTML5"){
			array2=array[1];
			ElipseHTML5(array2[0],array2[1],array[2],array[3],array[4]);
		}
		if(array[0]=="ElipsePropia"){
			array2=array[1];
			ElipsePropia(array2[0],array2[1],array[2],array[3],array[4]);
		}
		if(array[0]=="ElipsePropia"){
			array2=array[1];
			ElipsePropia(array2[0],array2[1],array[2],array[3],array[4]);
		}
		if(array[0]=="BezierPropia"){
			if(array[1].length>1){
				console.log("Bezier");
				var b = BezierPropia(array[1]);
				arrayoo=[];
				ww=500*array[1].length;
				for (var t = 0; t <= ww; t++){
					context.fillStyle = Color;
					context.fillRect(b(t/ww)[0], b(t/ww)[1], 1, 1 );
				}
			}
		
		}
		if(array[0]=="LineaPropia"){
		    PuntoMedioLinea(array[1],array[2],array[3]);
		   }
		   
		 if(array[0]=="LineaHTML5"){
		    Linea(array[1],array[2],array[3]);
		   }
		  if(array[0]=="RectanguloHTML5"){
		    RectanguloHtml(array[1],array[2],array[3]);
		   }
		if(array[0]=="TrianguloPropio"){
		    PuntoMedioLinea(array[1],array[2],array[4]);
			PuntoMedioLinea(array[2],array[3],array[4]);
			PuntoMedioLinea(array[3],array[1],array[4]);
		   }
		 if(array[0]=="TrianguloHTML5"){
		    TrianguloMejorado(array[1],array[2],array[4]);
			TrianguloMejorado(array[2],array[3],array[4]);
			TrianguloMejorado(array[3],array[1],array[4]);
		   }
		 if(array[0]=="RectanguloPropio"){
			 //aja=windowToCanvasCoord(canvas, e.clientX, e.clientY);
		
			aja=array[1];
			//aja.x=array[1].x;
			aja.y=array[3].y;
		    var ne=aja;
		    RectanguloPropio(array[1],array[2],array[4],1);
			RectanguloPropio(array[2],array[3],array[4],2);
			RectanguloPropio(ne,array[3],array[4],3);
			RectanguloPropio(ne,array[1],array[4],4);
		   }
		
		
		counter=counter+1;
	}
}
function MouseMove(e){
  if (dragging)
  {
	
    context.clearRect(0, 0, canvas.width, canvas.height);
	DrawRestObjects();
    pEnd = windowToCanvasCoord(canvas, e.clientX, e.clientY);
    if(FigureDrawing=="CirculoHTML5"){
		radius=ReturnRadius(pStart.x,pEnd.x,pStart.y,pEnd.y);
		point=ReturnCenter(pStart.x,pEnd.x,pStart.y,pEnd.y);
		DrawHTML5Circle(point[0],point[1],radius,Color);
	}
	if(FigureDrawing=="CirculoPropio"){
			radius=ReturnRadius(pStart.x,pEnd.x,pStart.y,pEnd.y);
			
			point=ReturnCenter(pStart.x,pEnd.x,pStart.y,pEnd.y);
			DrawCircleMediumPoint(point[0],point[1],radius,Color);
	}
	if(FigureDrawing=="ElipseHTML5"){
			hip=ReturnRadius(pStart.x,pEnd.x,pStart.y,pEnd.y)*2;
			cat=ReturnRadius(pStart.x,pEnd.x,pEnd.y,pEnd.y)*2;
			he=Math.sqrt(Math.pow(hip,2)-Math.pow(cat,2));
			point=ReturnCenter(pStart.x,pEnd.x,pStart.y,pEnd.y);
			ElipseHTML5(point[0],point[1],cat,he,Color);
	}
	if(FigureDrawing=="ElipsePropia"){
			hip=ReturnRadius(pStart.x,pEnd.x,pStart.y,pEnd.y)*2;
			cat=ReturnRadius(pStart.x,pEnd.x,pEnd.y,pEnd.y)*2;
			he=Math.sqrt(Math.pow(hip,2)-Math.pow(cat,2));
			point=ReturnCenter(pStart.x,pEnd.x,pStart.y,pEnd.y);
			ElipsePropia(point[0],point[1],cat,he,Color);
	}
	if(FigureDrawing=="LineaPropia"){
			PuntoMedioLinea(pStart,pEnd,Color);
			
	}
	if(FigureDrawing=="LineaHTML5"){
			 Linea(pStart,pEnd,Color);
			
	}
	if(FigureDrawing=="RectanguloPropio"){
			 RectanguloPropio(pStart,pEnd,Color,1);
			
	}
	
	if(FigureDrawing=="RectanguloHTML5"){
			 RectanguloHtml(pStart,pEnd,Color);
			
	}
	
	
	
  }
}
function DobleClick(){
	dragging=false;
	if(FigureDrawing=="BezierPropia"){
		if(arrayPointBezier==undefined){
			return;
		}
		else{
			arrayobjects.push([FigureDrawing,arrayPointBezier]);
		}
		arrayPointBezier=[];
	}
}
$(document).ready(function(){
		arrayPointBezier=[];
		arrayobjects=[];
		FigureDrawing="";
		canvas = document.getElementById("Canvas");
		context=canvas.getContext("2d");
		canvas.addEventListener("mousedown", MouseDown);
		canvas.addEventListener("mouseup",MouseUp);
		canvas.addEventListener("mousemove", MouseMove);
		canvas.addEventListener("dblclick", DobleClick);
});

