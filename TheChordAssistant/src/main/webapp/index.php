<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>TheChordAssistant &#183; Menú</title>
	<!-- CSS -->
	<link rel="stylesheet" href="./css/index.css">
	<!-- JS -->
	<script>
		function redirectAsistente() {
			window.location.href = "./assistant.html";
		}

		function redirectForo() {
			window.location.href = "./forum.html";
		}
	</script>
</head>

<body>
	<div class="circles">
		<div class="circle circle-3"></div>
		<div class="circle circle-2"></div>
		<div class="circle circle-1"></div>
	</div>

	<div class="content">
		<h1>The Chord Assistant</h1>
		<p id="desc">¡APRENDE A TOCAR ACORDES!</p>
		<div class="buttons">
			<button class="btn" onclick="redirectAsistente()">INICIAR ASISTENTE</button>
			<button class="btn" onclick="redirectForo()">FORO DE DISCUSIÓN</button>
		</div>
	</div>

	<div class="stripes">
		<div class="stripe stripe-1"></div>
		<div class="stripe stripe-2"></div>
		<div class="stripe stripe-3"></div>
		<div class="stripe stripe-4"></div>
	</div>
</body>

</html>