
var isActive = false;

function ScrollExecute() {

    if (!isActive && $(document).height() - 800 < ($(document).scrollTop() + $(window).height())) {

        isActive = true;

        var scrollNode = $('#more').last();

        var scrollURL = $('#more p a').last().attr("href");

        var footer = $("#product-list-foot");

        if (scrollNode.length > 0 && scrollNode.css('display') != 'none') {

            $.ajax({

                type: 'GET',

                url: scrollURL,

                dataType: "html",

                beforeSend: function() {
                    scrollNode.clone().empty().insertAfter(scrollNode).append('<img src="\"{{" "loading.gif"="" |="" asset_url="" }}\"=""/>');

                    // scrollNode.hide();

                },

                success: function(data) {

                    scrollNode.next().remove();

                    var filteredData = $(data).find('.product');

                    console.log(filteredData);

                    filteredData.insertBefore(footer);

                    isActive = false;

                }
            });
        }
    }
};

$(document).ready(function() {

    $(window).scroll(function() {

        ScrollExecute();

    });

});
