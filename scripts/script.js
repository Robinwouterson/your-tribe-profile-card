const expandButton = document.querySelector('header button') //Deze regel zoekt in het huidige HTML document naar de eerste knop die zich binnen een header element bevindt en slaat een verwijzing naar deze knop op in de constante variabele expandButton.
expandButton.addEventListener('click', expand) //Deze regel voegt een event listener toe aan de expandButton. Wanneer de knop wordt aangeklikt, wordt de functie expand uitgevoerd. Oftewel, de visitekaartje word uitvergroot.

function expand () {
  document.body.classList.toggle('expand')
} //Deze functie voegt of verwijdert de CSS klasse 'expand' toe aan het <body> element. Deze klasse wordt waarschijnlijk gebruikt om de stijl van het visitekaartje aan te passen wanneer de uitbreidingsknop (expand knop) wordt aangeklikt.
