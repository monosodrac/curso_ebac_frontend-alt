document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault();
        let nmrMax = document.getElementById('numero-maximo').value;
        nmrMax = parseInt(nmrMax);

        let nmrAl = Math.random(nmrMax) * nmrMax;
        nmrAl = Math.floor(nmrAl + 1);

        document.getElementById('resultado-valor').innerText = nmrAl;
        document.querySelector('.resultado').style.display = 'block';
    })
})