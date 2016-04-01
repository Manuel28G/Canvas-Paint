
		function GetSelectedCombo(){
			if($(".Combo option:selected").val()=="NULO"){
				alert("debe seleccionar un algoritmo");
				return "NULO";
			}
			return($(".Combo option:selected").val());
		}