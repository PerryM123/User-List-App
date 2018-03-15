<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div style="border: 1px solid; width: 200px; height: 200px;" class="well" data-number="divinguy" onclick="clickedOnMe()">
		<div>
			i have 5
		</div>
		<p>12</p>
	</div>
<script>
	var x = document.getElementsByClassName("well");
	function clickedOnMe() {
		var attrValue = x[0].getAttribute("data-number");
		console.log("data-number is: ");
		console.log(attrValue);
	}
</script>
</body>
</html>