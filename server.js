'use strict';
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.port || 9000;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/view/index.html'));
});

module.exports = {
	start: async () => {
		try {
			await app.listen(PORT, () => {
				console.log(`\nphone server running on port ::: ${PORT}\n`);
				console.log('*** OPTIONS *** \n', `URI at ${process.env.IP_ADDR}:${PORT}`);
			});
		} catch (err) {
			console.log(err);
		}
	},

	stop: () => {
		app.close();
	},
}
