$(function () {
  // smoth scroll..
    $( "a" ).click( function (event) {
       if  ( this .hash !==  "" ) {
       event.preventDefault();
       var  gato =  this .hash;
      $( 'html, body' ).animate({
        scrollTop: $(gato).offset().top
      },  900 ,  function (){
       window .location.hash = gato;
     });
      }  // Fin del if
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

});
