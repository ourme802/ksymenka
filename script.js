document.addEventListener('DOMContentLoaded', function() {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.querySelector('.container').appendChild(heart);
        heart.style.animationName = 'fall';
        setTimeout(() => heart.remove(), parseFloat(heart.style.animationDuration) * 1000);
    }

    setInterval(createHeart, 50);

    document.getElementById('btnTak').addEventListener('click', function() {
        document.getElementById('pytanieWalentynka').classList.add('ukryj');
        document.getElementById('pytaniegodzina').classList.remove('ukryj');
        document.getElementById('pytaniegodzina').classList.add('aktywne'); 
    });

    document.getElementById('btnNie').addEventListener('click', function() {
        alert("Hmm... Jesteś pewna Aniu?");
    });

    document.getElementById('btnOdpowiedz').addEventListener('click', function() {
        const odpowiedzUzytkownika = document.getElementById('odpowiedzUzytkownika').value.trim();
        const dataSpotkania = document.getElementById('dataSpotkania').value;
        if(odpowiedzUzytkownika && dataSpotkania) {
            document.getElementById('tekstOdpowiedzi1').textContent = dataSpotkania;
            document.getElementById('tekstOdpowiedzi').textContent = odpowiedzUzytkownika;
            document.getElementById('wynik').classList.remove('ukryj');
            document.getElementById('pytaniegodzina').classList.add('ukryj');
            document.getElementById('wynik').classList.add('aktywne');
        } else {
            alert('Proszę wpisz odpowiedź i wybierz datę spotkania.');
        }
    });
});
