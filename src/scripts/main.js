document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        //Prevenir que o formulario atualize a pagina
        evento.preventDefault();
        const checkedRadio = document.querySelector('input[type="radio"]:checked');
        let valorConverter = parseInt(document.getElementById('valor-a-converter').value);
        let resultado = '';
        if (checkedRadio) {
            const value = parseInt(checkedRadio.value);
            if(value === 1) {
                resultado = (valorConverter * 1000) + ' Mililitros';
            } 
            if(value === 2) {
                resultado = (valorConverter / 1000) + ' Litros';
            } 
        }
        document.getElementById('resultado-valor').innerText = resultado;
        document.querySelector('.resultado').style.display = 'block';
        
    })
})