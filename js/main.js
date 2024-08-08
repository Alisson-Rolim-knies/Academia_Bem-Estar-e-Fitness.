$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(__) _____-____'
    });

    $('form').validate({
        rules: {   /* RULEs É A REGRA DE VALIDAÇÃO*/
            nome: {
                required: true   /* aqui fala que é obrigatorio e verdadeiro*/
            },
            email: {
                required: true,
                email: true /* aqui ele aplica uma validação especifica para email*/
            },
            telefone: {
                required: true   
            },
            mensagem: {
                required: true   
            }
        }, 
        messages: {   /* aqui ele mostra a mensagem se vc não preencheu o campo de input*/
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, isira seu email',
            telefone: 'Por favor, insira seu telefone',
            mensagem: 'Por favor, digite sua mensagem'
        },
        submitHandler: function(form) {
            alert(`Envaido`)
            form.submit();  /* aqui reseta o formulario apos enviar*/
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
});



