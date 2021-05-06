const express = require("express");
const fs = require("fs");

const html = fs.readFileSync("cool.html");

const app = express();

app.get("/", (req, res) => {
	res.type("html").send(html);
});

app.get("/stuff", (req, res) => {
	res.send([
		{ cool: 1, nice: "Dope" },
		{ cool: 2, nice: " as" },
		{ cool: 3, nice: " hell!" },
	]);
});

const port = 8080;
app.listen(port, () => {
	console.log(`API started on port ${port}`);
});
