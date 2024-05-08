$(document).ready(function(){
    var data = new Date(Date.now());
    $('#data-hoje').text(`${data.getUTCDate().toString().padStart(2, '0')}/${(data.getUTCMonth()+1).toString().padStart(2, '0')}/${data.getUTCFullYear()} - ${data.getHours()}:${data.getMinutes()}`);

    $('#btn-submit').click(function(){
        if($('#txtatv').val() == ""){
            alert('[ERRO] Digite uma tarefa no campo abaixo!')
        }else{
            const novaTarefa = $('#txtatv').val();
            const novoItem = $(`<div class="list"><li  style="">${novaTarefa}</li>
            <p class="confirma"><img id="btn-confirma" src="images/confirma-branco.png" alt=""></p>
            <img class="deleta" id="btn-deleta" src="images/lixeira-branca.png" alt=""></div>`);
            $(novoItem).appendTo('ul')
            $(novoItem).fadeIn(2000)
            $('#txtatv').val('')
            $('#txtatv').focus()

            
            $(".confirma").on( "click", function() {
                $('li').each(function(){
                    $(this).toggleClass( "checked" );
                })
            });

            $('.deleta').on("click", function(){
                $('.list').remove()
            })
        }
        
    })

})