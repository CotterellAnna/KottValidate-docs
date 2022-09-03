$(function(){
    // $("#options-table").dataTable()
    $(".copy-btn").click(function(){
        navigator.clipboard.writeText($(this).next().text())
    })
    $("tr").find("i").each(function(){
        console.log($(this))
    })
    $(".tr").click(function(){
        $(this).find("i").each(function(){
            if( $(this).hasClass("ri-add-circle-line")){
                $(this).removeClass()
                $(this).attr("class", "ri-subtract-fill")
            }else{
                $(this).removeClass()
                $(this).attr("class", "ri-add-circle-line")
            }
        })
    })
    
    $("#form_").submit(function(e){
        e.preventDefault()
        $("#form_").validateForm()
    })
})