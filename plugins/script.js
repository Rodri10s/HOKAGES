$(document).ready(function () {

    
    const $btnTopo = $('#btn-topo');
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $btnTopo.addClass('show');
        } else {
            $btnTopo.removeClass('show');
        }
    });
    $btnTopo.on('click', function() {
        $('html, body').animate({scrollTop: 0}, 700);
    });

    let lastScrollTop = 0;
    let ticking = false;
    const $header = $('#cabecalho');

    function onScroll() {
        const st = $(window).scrollTop();
        if (st < 10) {
            $header.removeClass('header-visible header-hidden');
            return;
        }
        if (st < lastScrollTop) {
            
            $header.addClass('header-visible').removeClass('header-hidden');
        } else if (st > lastScrollTop) {
            
            $header.addClass('header-hidden').removeClass('header-visible');
        }
        lastScrollTop = st;
    }

    $(window).on('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                onScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    $('#icone_inicio').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.inicio').offset().top
        }, 700);
    });
    $('#icone_definicao').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#conceito').offset().top
        }, 700);
    });
    $('#icone_selecao').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.selecao').offset().top
        }, 700);
    });

    $('#icone_inicio').hover(
        function() {
            $(this).attr('src', 'images/icones/inicio_laranja.png');
        },
        function() {
            $(this).attr('src', 'images/icones/inicio.png');
        }
    );
    $('#icone_definicao').hover(
        function() {
            $(this).attr('src', 'images/icones/definicao_laranja.png');
        },
        function() {
            $(this).attr('src', 'images/icones/definicao.png');
        }
    );
    $('#icone_selecao').hover(
        function() {
            $(this).attr('src', 'images/icones/selecao_laranja.png');
        },
        function() {
            $(this).attr('src', 'images/icones/selecao.png');
        }
    );
    $('#icone_oficial').hover(
        function() {
            $(this).attr('src', 'images/icones/site oficial_laranja.png');
        },
        function() {
            $(this).attr('src', 'images/icones/site oficial.png');
        }
    );

    $('#icone_historia').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#historia').offset().top
        }, 700);
    });
    $('#icone_jutsus').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.jutsus').offset().top
        }, 700);
    });

    $('#icone_voltar').hover(
        function() {
            $(this).attr('src', '../images/icones/voltar_laranja.png');
        },
        function() {
            $(this).attr('src', '../images/icones/voltar.png');
        }
    );
    $('#icone_historia').hover(
        function() {
            $(this).attr('src', '../images/icones/historia_laranja.png');
        },
        function() {
            $(this).attr('src', '../images/icones/historia.png');
        }
    );
    $('#icone_jutsus').hover(
        function() {
            $(this).attr('src', '../images/icones/jutsus_laranja.png');
        },
        function() {
            $(this).attr('src', '../images/icones/jutsus.png');
        }
    );

     $(".inicio .background-section #banners ul").bxSlider({
         auto: true, 
         speed: 2000, 
         pause: 5000, 
         mode: 'fade', 
         infiniteLoop: true 
     });
});