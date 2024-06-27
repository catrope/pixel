module.exports = {
	id: 'MediaWiki',
	asyncCaptureLimit: 4,
	asyncCompareLimit: 25,
	engine: 'puppeteer',
	engineOptions: {
		headless: true,
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
			'--single-process',
			'--disable-dev-shm-usage',
			'--disable-gpu',
			'--disable-gpu-sandbox'
		]
	},
	debug: true,
	debugWindow: false,
	delay: 100
};
