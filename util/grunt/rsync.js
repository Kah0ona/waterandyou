// -------------------------------------
// Grunt RSYNC way of deploying
// -------------------------------------

module.exports = {
	deploy: {
		files: "dist/htdocs/",
		options: {
			host: "vps7689.xlshosting.net",
			port: "1023",
			user: "waterandyou",
			remoteBase: "/home/waterandyou/htdocs"
		}
	}
};

