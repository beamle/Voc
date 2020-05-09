window.onload = function(){
    //function expression to select elements
    const selectElement = (s) => document.querySelector(s);

    //open the menu on click
    selectElement('.open').addEventListener('click', () => {
        selectElement('.nav-list').classList.add('active');
    });

    //close the menu on click
    selectElement('.close').addEventListener('click', () => {
        selectElement('.nav-list').classList.remove('active');
    });

    //testimonial introduction
    /*
    var prevId;
    $("#Persona").children().click(function(){
        $(prevId).css({height: "0", overflow: "hidden"});
        var curId = $(this).attr("id");
        $(".tutvustus > .inimene#" + curId).css({height: "100%", overflow: "visible"});
        prevId = ".tutvustus > .inimene#" + curId;
    });

    /*$('html').click(function(e) {                    
        console.log(e.target);
        if(e.target !== $("img"))
        {
            $(prevId).css({height: "0", overflow: "hidden"});                
        }
     }); */

    $("a").click(function() {
        var pageId = $(this).attr("data-page");
        $("html, body").animate({ scrollTop: $("#"+pageId).offset() }, 1000);
    });
}



