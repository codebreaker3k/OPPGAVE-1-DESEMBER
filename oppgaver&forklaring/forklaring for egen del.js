/*
Koden bruker for-løkken
    
    let i = 0;: Dette initialiserer en variabel i og setter den til 0. Variabelen i blir brukt som indeks for å få tilgang til elementene i arrayen.
    Dette er startverdien for indeksen, vanligvis 0 på arrayer i JavaScript.

    i < arr.length;: Dette er betingelsen som sjekkes før hver iterasjon av løkken. 
    Så lenge i er mindre enn lengden av arrayen (arr.length), vil løkken fortsette å kjøre. Dette sikrer at vi ikke går utover grensene til arrayen, 
    og at vi stopper løkken når vi har behandlet alle elementene.

    i++: Dette er inkrementoperatoren og øker verdien til i med 1 etter hver iterasjon/gjennomgang av løkken.
    Dette beveger løkkeindeksen til neste element i arrayen.

Samlet sett utfører for-løkken tre viktige trinn:

    Initialisering: Setter startverdien til indeksen (i) til 0.
    Betingelse: Sjekker om indeksen (i) er mindre enn lengden av arrayen.
    Inkrement: Øker indeksen (i) med 1 etter hver iterasjon.
    */


    /* oppgave 5 Bruker map-metoden, som en array-metode i JavaScript. 
    Den går gjennom hvert element i arrayet 
    (tallArray) og bruker callback-funksjonen på hvert element.
    */

    
    /* off topic for egen del
    arr.push(...items) – adds items to the end,
    arr.pop() – extracts an item from the end,
    arr.shift() – extracts an item from the beginning,
    arr.unshift(...items) – adds items to the beginning.
    Forstå Oppgaven:

    Les problemet nøye og forsikre deg om at du forstår hva som kreves.
     Identifiser hva inndataene er, hva resultatet skal være, og hvilke steg du 
     trenger for å komme dit.

Bryt Ned Problemet:

    Del oppgaven inn i mindre delproblemer. Hver del skal være enklere å løse, 
    og når alle delproblemene er løst, skal du ha løst det opprinnelige problemet.

Planlegg Bruk av Variabler:

    Bestem hvilke variabler du trenger for å løse oppgaven. 
    Hvilken type data vil du lagre, og hvordan vil du bruke dem?

Velg Riktig Kontrollstruktur:

    Velg riktig kontrollstrukturer som if, else, else if, for, forEach osv. basert på 
    hva oppgaven krever. 
    For eksempel, bruk en for-løkke når du vet  hvor mange ganger du må gjenta, 
    og bruk forEach hvis du vil gjenta gjennom alle elementene i et array.
    */


    /* oppgave 6 

    Bruker filter-metoden, som er en array-metode 
     for å filtrere elementene i `arr` basert på en betingelse.
I dette tilfellet er betingelsen at tallet (`num`) ikke er et partall, 
   - og det gjøres ved å bruke modulus-operatoren (`%`).
filter-metoden som en callback-funksjon. 
Den sjekker om hvert tall (num) i arrayet er et oddetall
 ved å bruke % 2 !== 0.

 num % 2:  beregner resten når num deles med 2.  
(% er modulus-operatoren som "sjekker alt", deler
 tallet med 2og returnerer resten.)
Hvis resten er 0, betyr det at num er et partall, 
fordi partall har ingen rest når de deles med 2.

/* !== 0: Sammenligner resultatet av num % 2 med 0 
ved hjelp av ulikhetssjekken (!==).  --- betyr "ikke lik"
Hvis resultatet ikke er lik 0, betyr det at det er en oddetall
-og det vil det alltid være med denne koden, 
den brukes ofte for å filtrere oddetall i et array.
Oddetall har en rest når de deles med 2.
*/
