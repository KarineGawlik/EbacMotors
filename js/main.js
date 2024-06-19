/* 
O slick é um plugin para a realização de carrosel
Site: http://kenwheeler.github.io/slick/
Para instalar ir até getting started, copia os links e cola no html.
Ir em  go get it now e copiar os links do css e JS
*/



$(document).ready(function() {  /*inicializador do JQeury*/
    $('#carousel-imagens').slick({ /*funsção slick para iniciar o carrosel*/
        autoplay: true, /*fazer as imagens mudarem sozinhas no carrosel*/
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle(); /*se o nav não está sendo exibido ele vai executar um slideDown para exibir ele e depois na segunda vez clicado ele vai verificar se o slidedown já foi executado e executar o slideUp*/
    })

    /*let mascara = if (celular) ? '(00) 00000-0000' : '(00) 0000-0000'*/

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() { /*seleciona o button e coloca o evento click nele*/
        const destino = $('#contato'); /*efeito de rolar a página */
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({ /*seleciona tag html*/
            scrollTop: destino.offset().top /*retornar a posição do elemento*/
        }, 1000)
    })
})

