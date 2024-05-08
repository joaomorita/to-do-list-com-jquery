$(document).ready(function(){
    var data = new Date(Date.now());
    $('#data-hoje').text(`${data.getUTCDate().toString().padStart(2, '0')}/${(data.getUTCMonth()+1).toString().padStart(2, '0')}/${data.getUTCFullYear()} - ${data.getHours()}:${data.getMinutes()}`);

    $('#input-tarefa').on('submit', function(e){
        e.preventDefault();
        if($('#txtatv').val() == ""){
            alert('[ERRO] Digite uma tarefa no campo abaixo!')
        }else{
            const novaTarefa = $('#txtatv').val();
            const novoItem = $('<li class="list"></li>');
            $(`<a href="#">${novaTarefa}</a>`).appendTo(novoItem)
            $(novoItem).appendTo('ul')
            $('#txtatv').val('')

            $('#lista-de-tarefas').on('click', 'li', function () {
                $(this).find('a').toggleClass('checked');
            })
        }
        
    })

})