$(function(){

    const token = "IGQVJVTXdTSXZAfeXEtNEpHWXJPTnpuNVdTbmlYV2xzUWdvY3dFdmN1TVI0eGxranpES2RYMFZACVDNEdVZAmSVRNWGd2UmR4eWpZAb0FockZAmOUZAxaWtzZAndmdDluQkxoQkl6Q1B1N3RiZAHViV3h1S2xmdQZDZD";
    const url = "https://graph.instagram.com/me/media?access_token=" + token +"&fields=media_url,media_type,caption,permalink";

    $.get(url).then(function(response){

        let dadosJson = response.data
        let conteudo = '<div class="row" style="padding-left:5px">';

        for (let p=0; p < dadosJson.length; p++){
            let feed = dadosJson[p];
            let titulo = feed.caption !== null ? feed.caption: '';
            let tipo = feed.media_type;
            if(tipo === 'VIDEO'){
                conteudo += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><videos style="width:100%;height:90%" control><source src="'+feed.media_url+'" type="video/mp4"></videos></div>';
            }
            else if(tipo === 'IMAGE') {
                conteudo += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><img style="width:100%;height:90%" tittle="' + titulo + '"alt="' + titulo + '" src="' + feed.media_url + '" onclick="window.open(\'' + feed.permalink+ '\');"></div>';
            }
        }
        conteudo += '</div>';
        $('#instagram').html(conteudo);    
    })


})