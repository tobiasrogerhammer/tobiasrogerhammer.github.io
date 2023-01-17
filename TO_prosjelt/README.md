
# Matte applikasjon

## Behovsanalyse

#### Hva sliter brukeren med?

Brukeren sliter med å pugge. 
Brukeren har ikke lyst til å skrive. 
Brukeren har ikke utfordringer med å lese, men foretrekker lyd
Brukeren sliter med å lære matte.

#### Hva liker brukeren å gjøre og hvordan vil brukeren lære?
Noen av brukerens interesser er musikk, sport og spill.
Brukeren liker svar alternativer.
Brukeren liker å se progresjon.
Brukeren er interessert i fagene engelsk og gym.

## Applikasjon

#### Hva er applikasjonen?

Applikasjonen er et Matte-Spill. Det skal være et true/false spill og ligne en kahoot/quiz.
Jeg ser for meg det vil være en main page fler matte-kategorier og kanskje vanskelighetsgrader.
Når du velger en kategori får du et matte-spørsmål og 4 svar alternativer.
Det vil også være en poeng score og/eller en progresjonsbar.
Brukeren har lyst på en knapp som kan lese opp spørsmålet.
Brukeren vil ha muligheten til å få et hint.

# Ideer:
Mulighet til å velge tekst-oppgaver eller ikke tekst-oppgaver.
Se scoren sin etter spørsmålene
Scoren lagres så man kan se forbedringer


#### Database

Jeg vil ha en database som kan holde spilleren oppdatert på progresjonen sin. Så spilleren må logge inn hver gang brukeren skal spille quizen. Jeg ville i så fall brukt SQL, Mamp og PhP MyAdmin for å lage databasen for dette er jeg kjent med.

 Da ville jeg hatt to tabeller, den ene med brukerinformasjon:

  | BrukerID       | Brukernavn    | Passord  |
  | -------------- |:-------------:| -------: |
  | 1              | tobster       |steinbro14|

 Tabell 2 ville vært brukt til å ha oversikt over progresjonen til brukeren, å se hvor mye man har forbedret seg og hvor mye man har spilt:

  | spillID        | Dato          | Poeng | Person |
  | -------------- |:-------------:| -----:| -----: |
  | 1              | 20.08.1991    | 3     | 1      |

  Person-kolonnen i Spill - tabellen er en fremmednøkkel som skal fylles
  på med primærnøkkelen fra Person-tabellen for hvert spill.
  Person-tabellen skal brukes til innlogging.

#### HTML, CSS og Javascript

- Spillet kan ha en login, som kobler opp informasjon fra databasen
med informasjonen i login.
- Spillet skal ha en velkommen side (start spillet-side) og start spillet-knapp.
- Spillet kan ha en hint knapp
- Spillet kan ha en hopp overspørsmål knapp, vis riktig svar før du hopper over spørsmål i så fall.
- Når man har svart, så kommer det opp at brukeren har tatt riktig eller feil og hva riktig svar er.
- Det kan være en progresjonsbar eller tall som viser hvor langt du har kommet i quizen.
For eksempel 1/10 på først slide, 2/10 på andre slide.
- Etter en runde kan man kanskje ha en liste over forrige scores på samme quizen.

### Node, backend service.

- Jeg må ha en database-tilkobling, og jeg må å få til å ta innformasjon fra databasen og å oppdatere den med ny innformasjon.
- Jeg vet ikke helt hvordan jeg skal bruke node, men enten:
1. Som backend service og API-calls.
2. Som webserver.

Dette har jeg ikke bestemt meg for enda.
