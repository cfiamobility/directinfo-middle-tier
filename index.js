const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("DirectInfo Server");
});

app.use("/users", require("./routes/users.js"));

app.listen(3000, () => {
	console.log("Server is up and listening on 3000");
});
