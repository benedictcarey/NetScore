<!DOCTYPE html>
<html>
    <body>
        <h2>MaxScore.NetScore Example</h2>
		<input type=\"text\" id=\"txtbox\" value=\"1\">
        <button onclick=\"getPart()\">Part</button>
		<button onclick=ws.send(\"0\")>Stop</button><br>
		<p>Request a part by entering a number into the</p>
		<p>text box and clicking the Part button.</p>
		<p> Stop the score from reloading with the Stop button</p>
        <img id=\"image\"></<img>
        <script> 
var ws = new myPlaceholder
ws.binaryType = \"arraybuffer\"\;

ws.onopen = function() {
    alert(\"Opened\")\;
}\;

ws.onmessage = function (evt) { 
    var bytes = new Uint8Array(evt.data)\;
    var data = \"\"\;
    var len = bytes.byteLength\;
    for (var i = 0\; i < len\; ++i) {
    	data += String.fromCharCode(bytes[i])\;
    }
    var img = document.getElementById(\"image\")\;
    img.src = \"data:image/png\;base64\,\"+window.btoa(data)\;
}\;

var button = document.getElementById(\"button\");
button.onclick = function() {
ws.send(\"pbbutton play\")\;
}\;

function getPart() {
   // document.getElementById(\"txtbox\").value = \"2\"\;
   ws.send(\"0\")\;
	ws.send(document.getElementById(\"txtbox\").value)\;
}

</script>
</body>
</html>