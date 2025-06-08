$(document).ready(function () {
    if ($('#jutsu-modal').length === 0) {
        var modal = document.createElement('div');
        modal.id = 'jutsu-modal';
        modal.style.display = 'none';
        modal.style.position = 'fixed';
        modal.style.zIndex = '99999';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.background = 'rgba(0,0,0,0.55)';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';

        var closeBtn = document.createElement('span');
        closeBtn.id = 'jutsu-modal-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '32px';
        closeBtn.style.right = '48px';
        closeBtn.style.fontSize = '3.2rem';
        closeBtn.style.fontWeight = 'bold';
        closeBtn.style.color = '#fff';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.zIndex = '100001';
        closeBtn.style.userSelect = 'none';
        closeBtn.style.transition = 'color 0.2s';
        closeBtn.style.display = 'none';

        var img = document.createElement('img');
        img.id = 'jutsu-modal-img';
        img.alt = 'Jutsu';
        img.style.display = 'none';
        img.style.maxWidth = '90vw';
        img.style.maxHeight = '80vh';
        img.style.borderRadius = '20px';
        img.style.boxShadow = '0 8px 32px 0 rgba(0,0,0,0.28)';
        img.style.border = '4px solid #fff';

        modal.appendChild(closeBtn);
        modal.appendChild(img);
        document.body.appendChild(modal);
    }

    $(document).on('click', '.jutsus #jutsus-conteudo img', function() {
        var src = $(this).attr('src');
        var $modal = $('#jutsu-modal');
        var $img = $('#jutsu-modal-img');
        var $close = $('#jutsu-modal-close');
        $img.attr('src', src);
        $img.css('display', 'block');
        $close.css('display', 'block');
        $modal.css({ display: 'flex', opacity: 0 });
        $modal.animate({ opacity: 1 }, 150);
    });

    $(document).on('click', '#jutsu-modal', function(e) {
        if (e.target === this) {
            $('#jutsu-modal').animate({ opacity: 0 }, 150, function() {
                $('#jutsu-modal-img').css('display', 'none');
                $('#jutsu-modal-close').css('display', 'none');
                $('#jutsu-modal').css('display', 'none');
            });
        }
    });

    $(document).on('click', '#jutsu-modal-close', function() {
        $('#jutsu-modal').animate({ opacity: 0 }, 150, function() {
            $('#jutsu-modal-img').css('display', 'none');
            $('#jutsu-modal-close').css('display', 'none');
            $('#jutsu-modal').css('display', 'none');
        });
    });

    $(document).on('mouseenter', '#jutsu-modal-close', function() {
        $(this).css('color', '#FE601B');
    });
    $(document).on('mouseleave', '#jutsu-modal-close', function() {
        $(this).css('color', '#fff');
    });

    
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