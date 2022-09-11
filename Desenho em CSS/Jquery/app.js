$('#cabeca').children('#antenaE').click(function(){
    $('body').css('background-color', 'blue') 
});

$('#corpo').children('#bracoD').click(function(){
    $('body').css('background-color', 'green') 
});

$('#cabeca').children('#olhoE'-'#olhoD').click(function(){
    $('#olhoE').css('background-color', 'red') 
    $('#olhoD').css('background-color', 'red')
    $('#corpo').css('background-color', 'black')
    $('#bracoE').css('background-color', 'black')
    $('#bracoD').css('background-color', 'black')
    $('#pernaE').css('background-color', 'black')
    $('#pernaD').css('background-color', 'black')
    $('#cabeca').css('background-color', 'black')
    $('#antenaD').css('color', 'black')
    $('#antenaE').css('color', 'black')
    $('#denteE').css('display','inline-block');
    $('#denteD').css('display','inline-block');
    $('#sombraE').css('display','block');
    $('#sombraD').css('display','block');
    $('body').css('background-color', 'red')
    
});

$('#corpo').click(function(){
    $('#cabeca').removeAttr("style")
    $('#olhoE').removeAttr("style") 
    $('#olhoD').removeAttr("style")
    $('#corpo').removeAttr("style")
    $('#bracoE').removeAttr("style")
    $('#bracoD').removeAttr("style")
    $('#pernaE').removeAttr("style")
    $('#pernaD').removeAttr("style")
    $('#cabeca').removeAttr("style")
    $('#antenaD').removeAttr("style")
    $('#antenaE').removeAttr("style")
    $('body').removeAttr("style")
    $('#denteE').css('display','none');
    $('#denteD').css('display','none');
    $('#sombraE').css('display','none');
    $('#sombraD').css('display','none');
});

