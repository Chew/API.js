var body = new explorer.window()
.title('That really quotes my API')
.resize(300, 300).body.html(`
	<center>
		<h1>That really quotes my API</h1>
		<button style="font-size:20px;width:100px;height:40px;">More plz</button>
		<br><br>
		<a style="font-size:10px;" href="https://github.com/Chewsterchew/API" target="_blank">Chewsterchew on GitHub</a>
	</center>
`);

body.find('button').click(function() {
	$.getJSON('http://api.chew.pro/trbmb', function(data) {
		body.find('h1').text(data[0]);
	});
});