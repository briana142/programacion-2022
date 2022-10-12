<html>
<head>
<title>Arreglos</title>
</head>
<body>
<table border="1" id="tablagato">
</table>
</body>
<script>
//var ag =¨["X_1","0_2","x_3","X_4","0_5","x_6","X_7","0_8","x_9"];
var ag = ["Vocho","1990","https://i..jpg","Camaro","1965","https://w0.peakpx.chevrolet.jpg",7,8,9];
var linea = "";
var tablagato = document.getElementById("tablagato");
var au = 0;
tablagato.innerHTML = "";
for (let index = 0; index < 3; index++) {
linea = "<tr><td>" + ag[au + 0 ].toString() + "<tr><td>" + ag[au + 1 ].toString() + "<tr><td><img src="" + ag[au + 2 ].toString() + "" width=;
tablagato.innerHtml = tabla.innerHTML + linea
au = au + 3;
}
</script>
</html>
