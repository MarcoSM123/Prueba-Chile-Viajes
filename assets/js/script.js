$(document).ready(function(){

    $("a").click(function(){
        var animacion1 = this.hash
        
        $("html, body").animate(
            {
                scrollTop: $(animacion1).offset().top
            },
            1000 
        )
    })
})