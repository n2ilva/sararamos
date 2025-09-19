function enviarWhatsApp() {
    var nome = document.getElementById('nome').value;
    var mensagem = document.getElementById('mensagem').value;
    var numero = '5562985553124';
    var texto = encodeURIComponent('Olá, Meu nome é ' + nome + ', ' + mensagem);
    var url = 'https://wa.me/' + numero + '?text=' + texto;
    window.open(url, '_blank');
}
