$(document).ready(function() {
    // Quando o botão de cadastro for clicado
    $('#botao-cadastrar').click(function() {
        // Alterna a visibilidade: esconde o login e mostra o cadastro
        $('#selection-login').hide(); // Esconde o formulário de login
        $('#form-cadastrar').slideDown('slow'); // Exibe o formulário de cadastro

        // Esconde o botão de cadastro após o clique
        $('#botao-cadastrar').hide();
    });

});