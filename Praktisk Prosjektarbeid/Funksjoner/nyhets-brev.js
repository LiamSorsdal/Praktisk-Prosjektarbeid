
//kobler sammen variabel i js sammen med id popup i html
const popup = document.getElementById("popup");

//kobler sammen variabel i js sammen med knappen som sender mailadredssen til kunden
const abonner = document.getElementById("abonner");

//kobler sammen variabel i js sammen med "close" knappen i popupen i html
const lukkpopup = document.getElementById("lukkPopup");

//Funksjon som viser popup'en når popup-knappen blir klikket på
abonner.addEventListener('click', () => {
    popup.style.display = 'flex';
});

//Funksjonen som lukker popupen når X knappen har blitt trykket på
