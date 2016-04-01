	function GetSelectedColor(){
			return($("#ColorActual").css("backgroundColor"));
	}
	$(document).ready(function(){
		$(".Color").click(function(){
			var a=$(this).css("backgroundColor");
			$("#ColorActual").css("backgroundColor",a);
		});
			
	});