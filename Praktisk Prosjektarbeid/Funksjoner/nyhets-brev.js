
//kobler sammen variabel i js sammen med id popup i html
const popup = document.getElementById("popup");

//kobler sammen variabel i js sammen med knappen som sender mailadredssen til kunden
const abonner = document.getElementById("abonner");

//kobler sammen variabel i js sammen med "close" knappen i popupen i html
const lukkpopup = document.getElementById("closePopup");

//Funksjon som viser popup'en når popup-knappen blir klikket på
abonner.addEventListener('click', () => {
    popup.style.display = 'flex'; //Viser popupen med funksjonen flex
});

//Funksjonen som lukker popupen når X knappen har blitt trykket på
closePopup.addEventListener('click', () => {
    popup.style.display = 'none'; //Skjuler popupen ved hjelp av funksjonen none
});

//Funksjonen når kunden skriver inn mailadressen for å bli abonnent og trykker på abonner-knappen
document.getElementById('abonnerSkjema').addEventListener('submit', (e) => {
    
})

