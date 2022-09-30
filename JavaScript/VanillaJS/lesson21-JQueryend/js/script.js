var newvariable = $.noConflict();

newvariable(function(){
    newvariable('button').click(function(){
        // alert("my text:"+newvariable("h1").text())
        // alert("my text:"+newvariable("h1").html())
        // alert("my text:"+newvariable("input").val())
        // alert("my text:"+newvariable("input").val())
        // alert(newvariable("input").attr("type"));
        // newvariable('h1').html("<b>new value</b>")
        // newvariable('h1').text("<b>new value</b>")
        // newvariable('input').val("<b>new value</b>")
        newvariable('h1').text(function(i,origText){
            return `index ${i} orginal text: ${origText}`
        })

    })
})