$(document).ready(function () {
     $(".inicio .background-section #banners ul").bxSlider({
         auto: true, // inicia o slider automaticamente
         speed: 2000, // velocidade da transição
         pause: 5000, // tempo de pausa entre as transições
         mode: 'fade', // modo de transição
         infiniteLoop: true // para o slide ao chegar na última imagem
     });
});