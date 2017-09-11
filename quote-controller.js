function QuoteController() {
    var quoteService = new QuoteService();
    $("#getButton").on("click", function newQuote() {
        quoteService.getQuote().then(function (data) {
            console.log(data);

            quoteService.colorChange();

            $(".box").css("visibility", "visible");

            var quoteTitle = quoteService.extract(data[0].title);
            var quoteContent = quoteService.extract(data[0].content);
            var wholeContent = quoteContent + " -" + quoteTitle;

            var template = "";
            var url =
                "https://twitter.com/intent/tweet?text=" +
                encodeURIComponent(quoteContent);
            var tUrl =
                "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=" +
                encodeURIComponent(quoteTitle) +
                "&content=" +
                encodeURIComponent(quoteContent) +
                "&canonicalUrl=https://www.tumblr.com";
            template += `
      
                <h2>${data[0].content}</h2>
                <h3> -${data[0].title}</h3>
                <button class="tweet btn"><i class="fa fa-twitter"></i></button>
                <button class="tumblr btn"><i class="fa fa-tumblr"></i></button>
          
                `;

            $("#quote").empty();
            $("#quote").append($(template));

            $(".tweet").click(function () {
                window.open(url);
            });
            $(".tumblr").click(function () {
                window.open(tUrl);
            });
        });
    });
}
QuoteController();
