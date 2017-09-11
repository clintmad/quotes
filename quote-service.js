function QuoteService() {
	var url = "https://bcw-getter.herokuapp.com/?url=";
	var url2 ="https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
	var apiUrl = url + encodeURIComponent(url2);

	this.getQuote = function () {
		return new Promise(function (resolve, reject) {
			$.get(apiUrl).then(
				function (data) {
					var result = JSON.parse(data);
					resolve(result);
				},
				function (error) {
					reject(error);
				}
			);
		});
	};

	this.extract = function (string) {
		var span = $("<span/>");
		string = span
			.html(string)
			.text()
			.replace(/[\u2018\u2019]/g, "'")
			.replace(/[\u201C\u201D]/g, '"');
		return string;
	};

	this.colorChange = function () {
		$(".background").css("background-color", function changeColor() {
			var hex = Math.floor(Math.random() * 0xffffff);
			return "#" + ("000000" + hex.toString(16)).substr(-6);
		});
	}
}