	var x="";
	function GetSelectedFigure(){
			$("#Figures").children("button").each(function(e){
				if($(this).css("background-color").indexOf('255, 165, 0')>-1){
					x=$(this).attr("id");
					return(x);
				}
			});
			return(x);
	}
	$(document).ready(function(){
		$(".Figure").click(function(){
			$(".Figure").css("backgroundColor","");
			$(this).css("backgroundColor","orange");
			if($(this).attr("id")=="Bezier"){
				$("#BezierMessage").show();
			}
			else{
				$("#BezierMessage").hide();
			}
			if($(this).attr("id")=="Triangulo"){
				$("#FigureMessage").show();
			}
			else{
				$("#FigureMessage").hide();
			}
			
		});
		
	});